import React, { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xóa thông tin giỏ hàng và đơn hàng khỏi localStorage
    localStorage.setItem("cartItems", JSON.stringify([]));
    localStorage.setItem("latestOrder", JSON.stringify([]));
  }, []);

  const handleContinueShopping = () => {
    navigate("/"); // Điều hướng đến trang chủ hoặc trang mua hàng
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex-grow flex items-center justify-center my-[100px]">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg text-center">
        <Lottie options={defaultOptions} width={150} height={150} />
        <h1 className="text-2xl font-bold text-center mb-6">Đặt hàng thành công 😍🥳</h1>
        <div className="text-center mt-6">
          <p className="text-green-600 font-semibold">
            Cảm ơn bạn đã đặt hàng! Đơn hàng sẽ được thanh toán khi nhận hàng.
          </p>
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
  );
};

export default OrderSuccessPage;
