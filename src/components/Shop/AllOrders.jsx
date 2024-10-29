import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { AiOutlineArrowRight } from "react-icons/ai";
import currency from "currency-formatter";

const AllOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch, seller._id]);

  // Hàm để chuyển đổi trạng thái từ tiếng Anh sang tiếng Việt
  const convertStatusToVietnamese = (status) => {
    switch (status) {
      case "Delivered":
        return "Đã giao";
      case "Pending":
        return "Đang chờ xử lý";
      case "Processing":
        return "Đang xử lý";
      case "Cancelled":
        return "Đã hủy";
      case "Cancel": // Thêm trường hợp cho trạng thái Cancel
        return "Đã hủy";
      default:
        return status;
    }
  };

  const columns = [
    { field: "index", headerName: "Thứ tự", minWidth: 100, flex: 0.5 },
    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã giao"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Tổng cộng",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item, index) => {
      row.push({
        index: index + 1, // Thêm số thứ tự
        itemsQty: item.cart.length,
        total: `${currency.format(item.totalPrice, { code: "VND" })}`,
        status: convertStatusToVietnamese(item.status), // Chuyển đổi trạng thái sang tiếng Việt
        id: item._id, // Giữ lại ID để sử dụng cho việc điều hướng
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllOrders;
