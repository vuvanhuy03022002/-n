import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../../assets/images/logobeefooter.png'
import "./Sidebar.css";
import { SignoutUser } from "../../../../actions/UserAction";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  ToolOutlined,
  LogoutOutlined
} from "@ant-design/icons";

function Sidebar(props) {
  const dispatch = useDispatch();
  const location = useLocation()
  const { orderPendding } = useSelector((state) => state.allOrder);
  let totalNewOrder
  
  const handleSignout = () => {
    dispatch(SignoutUser());
  };

  if(orderPendding){
    totalNewOrder = orderPendding.length
  }

  useEffect(() => {
    const getNewOrder = () => {
      dispatch(GetAllOrderPendding());
    }
    getNewOrder()
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Link to="/" ><img src={logo} alt="logo"/></Link>
      </div>
      <div className="sidebar-list">
        <Link to="/admin" className={'sidebar-list-item'}>
          <span>
            <AppstoreOutlined></AppstoreOutlined>
          </span>
          <p>Bảng Điều Khiển</p>
        </Link>
        
        
        <Link to="/admin/product/update/info" className={'sidebar-list-item'}>
          <span>
          <ToolOutlined></ToolOutlined>
          </span>
          <p>Danh Mục</p>
        </Link> 
        <Link to="/admin/product" className={'sidebar-list-item'}>
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Sản Phẩm</p>
        </Link>
      
        <Link to="/admin/order" className={'sidebar-list-item'}>
          <span>
            <OrderedListOutlined></OrderedListOutlined>
          </span>
          <p>
            Đơn Hàng
            <div className="admin-order-new">
                {totalNewOrder}
              </div>
          </p>
        </Link>
        <Link to="/admin/customer" className={'sidebar-list-item'}>
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Người Dùng</p>
        </Link>
        
        <Link to="/admin/contact" className={'sidebar-list-item'}>
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Liên Hệ</p>
        </Link>
        <Link to="/admin/review" className={'sidebar-list-item'}>
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Quản Lý Bình Luận</p>
        </Link>
       <Link className={'sidebar-list-item'} onClick={() => handleSignout()}>
        <span><LogoutOutlined /></span>
        <p>Đăng xuất</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
