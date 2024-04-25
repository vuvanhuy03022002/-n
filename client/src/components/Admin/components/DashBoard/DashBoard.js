import React, { useEffect } from "react";
import {
  BellOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "./DashBoard.css";
import ChartDashBoard from "./ChartDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPaid, GetAllOrderPendding } from "../../../../actions/OrderAction";
import { getAllProduct } from "../../../../actions/ProductAction";
import { formatPrice } from "../../../../untils";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";


export default function DashBoard() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.allOrder);
  const { product } = useSelector((state) => state.allProduct);
  const { List } = useSelector((state) => state.allTypeProduct);
  const { totalOrderAmount } = useSelector(state => state.orderReducer);


  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(GetAllOrderPaid());
    dispatch(getAllTypeProduct());
    dispatch(GetAllOrderPendding());
  }, [dispatch]);

  const totalProduct = product ? product.length : 0;
  const totalNewOrder = order ? order.length : 0;
  const totalTypeProduct = List ? List.length: 0

 

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-top-search">
          </div>
          <div className="dashboard-top-content">
            <li className="dashboard-top-content-avatar">
              <img src="https://us.123rf.com/450wm/osherro/osherro2010/osherro201000011/157957743-user-avatar-profile-icon-black-vector-illustration-website-or-app-member-ui-button.jpg?ver\u003d6"></img>
              <span>Admin</span>
            </li>
            <li className="dashboard-top-content-bell">
              <BellOutlined></BellOutlined>
            </li>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingOutlined></ShoppingOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                <span className="total">{totalProduct}</span>
                  <span className="title">Tổng Sản Phẩm</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined></ShoppingCartOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{totalNewOrder}</span>
                  <span className="title">Tổng Đơn Hàng</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <DollarCircleOutlined></DollarCircleOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{formatPrice(totalOrderAmount)} Đ</span>
                  <span className="title">Tổng Doanh Thu</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li>
                <div className="dashboard-middle-statistic-icon">
                  <FileTextOutlined></FileTextOutlined>
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{totalTypeProduct}</span>
                  <span className="title">Danh Mục</span>
                </div>
              </li>
            </div>
          </div>
          <ChartDashBoard></ChartDashBoard>
        </div>

        <div className="dashboard-new">
          <div className="dashboard"></div>
          <div className="dashboard"></div>
        </div>
      </div>
    </section>
  );
}
