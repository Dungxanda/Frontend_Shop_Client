import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import axios from "axios"; // Thêm axios để gửi yêu cầu đến backend
import { server } from "../server"; // Đảm bảo bạn đã import đúng biến server
import { toast } from "react-toastify";

const VNPayReturn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [transactionData, setTransactionData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    // Lấy các thông tin từ URL
    const responseCode = searchParams.get("vnp_ResponseCode");
    const amount = searchParams.get("vnp_Amount");
    const transactionNo = searchParams.get("vnp_TransactionNo");
    const orderInfo = searchParams.get("vnp_OrderInfo");
    const orderId = searchParams.get("vnp_TxnRef");
    const bankCode = searchParams.get("vnp_BankCode");

    // Chuyển đổi số tiền từ dạng số sang đơn vị tiền tệ
    const formattedAmount = (parseInt(amount, 10) / 100).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    // Lưu thông tin giao dịch vào state
    setTransactionData({
      amount: formattedAmount,
      transactionNo,
      orderInfo,
      orderId,
      bankCode,
    });

    // Kiểm tra mã phản hồi từ VNPay
    if (responseCode === "00") {
      setIsSuccess(true);
      // Gọi API backend để xác nhận giao dịch
      confirmTransaction(orderId, transactionNo, responseCode);
    } else {
      setIsSuccess(false);
    }
  }, [location]);

  // Hàm xác nhận giao dịch từ backend
  const confirmTransaction = async (orderId, transactionNo, responseCode) => {
    try {
      // Lấy thông tin đơn hàng từ localStorage
      const latestOrder = JSON.parse(localStorage.getItem("latestOrder"));

      // Kiểm tra nếu thông tin đơn hàng không tồn tại
      if (!latestOrder) {
        console.error("Không tìm thấy thông tin đơn hàng.");
        toast.error("Đã có lỗi xảy ra.");
        return;
      }

      // Tạo đối tượng order
      const order = {
        cart: latestOrder.cart,
        shippingAddress: latestOrder.shippingAddress,
        user: latestOrder.user, // Lấy trực tiếp từ latestOrder
        totalPrice: latestOrder.totalPrice,
        paymentInfo: {
          id: transactionNo,
          status: "succeeded",
          type: "VNPay",
        },
      };

      // Cấu hình header cho yêu cầu API
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Gọi API để lưu đơn hàng vào cơ sở dữ liệu
      const response = await axios.post(`${server}/order/create-order`, order, config);

      // Nếu lưu thành công
      if (response.data.success) {
        console.log("Đơn hàng đã được lưu thành công vào cơ sở dữ liệu.");
        toast.success("Order successful!");
        localStorage.setItem("cartItems", JSON.stringify([]));
        localStorage.setItem("latestOrder", JSON.stringify([]));
        // navigate("/order/success");
      } else {
        console.error("Lưu đơn hàng thất bại.");
        toast.error("Failed to save order.");
      }
    } catch (error) {
      console.error("Lỗi khi xác nhận giao dịch", error);
      toast.error("Failed to confirm transaction.");
    }
  };


  const handleContinueShopping = () => {
    navigate("/"); // Điều hướng đến trang chủ hoặc trang mua hàng
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header />
      <div className="flex-grow flex items-center justify-center my-[100px]">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            {isSuccess ? "Thanh toán thành công" : "Thanh toán thất bại"}
          </h1>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Mã đơn hàng:</span>
              <span>{transactionData.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Thông tin đơn hàng:</span>
              <span>{transactionData.orderInfo}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Số tiền:</span>
              <span>{transactionData.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Ngân hàng:</span>
              <span>{transactionData.bankCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Mã giao dịch:</span>
              <span>{transactionData.transactionNo}</span>
            </div>
          </div>
          <div className="text-center mt-6">
            {isSuccess ? (
              <p className="text-green-600 font-semibold">Cảm ơn bạn đã thanh toán thành công!</p>
            ) : (
              <p className="text-red-600 font-semibold">Thanh toán không thành công, vui lòng thử lại!</p>
            )}
          </div>
          <div className="text-center mt-6">
            {/* Nút Tiếp tục mua hàng */}
            <button
              onClick={handleContinueShopping}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Tiếp tục mua hàng
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VNPayReturn;
