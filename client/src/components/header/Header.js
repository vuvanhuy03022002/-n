import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { SignoutUser } from "../../actions/UserAction";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logobee.png';
import {
  DownOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState('');
 
  const [showAccount, setShowAccount] = useState(false);
  const [showAccount2, setShowAccount2] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo} = userSignin;
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const amount = cartItems.reduce((a, b) => a + b.qty, 0);

  const [menu, setMenu] = useState(true);

  const handleSignout = () => {
    dispatch(SignoutUser());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      history.push(`/search?q=${search}`);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="header">
      <section id="menu">
        <div className="logo">
          <span>
            <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
          </span>
        </div>
        <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Tìm kiếm ..."
            value={search}
            onChange={handleSearch}
          />
          <SearchOutlined onClick={(e) => handleSubmit(e)}></SearchOutlined>
        </form>
        </div>
        <ul className="menu-list" id={menu ? "hidden" : ""}>
          <li className="active">
            <Link to="/"> Trang Chủ </Link>
          </li>
          <li>
            <Link to="/product"> Sản Phẩm </Link>
          </li>
          <li>
            <Link to="/contact"> Liên Hệ </Link>
          </li>        
          <li>
            <Link to="/aboutus">Giới Thiệu</Link>
          </li>
          {userInfo ? (
            <li onClick={() => setShowAccount2(!showAccount2)}>
              <Link>
                {userInfo.name}
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>
              {showAccount2 ? (
                <div className="menu-drop">
                  {userInfo.isAdmin ? <Link to="/admin">Admin</Link> : ""}
                  <Link to="/profile"> Thông tin cá nhân</Link>
                  <Link to="/myOrder"> Đơn hàng </Link>
                  <Link onClick={() => handleSignout()}>Đăng xuất</Link>
                </div>
              ) : (
                ""
              )}
            </li>
          ) : (
            <li onClick={() => setShowAccount(!showAccount)}>
              <Link>
                Tài khoản
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>

              {showAccount ? (
                <div className="menu-drop">
                  <Link to="register">Đăng kí</Link>
                  <Link to="login">Đăng nhập</Link>
                </div>
              ) : (
                ""
              )}
            </li>
          )}
          
        </ul>
        
        <div>
        <li className="shop-cart">
            <Link to="/cart" className="shop-cart">
              <ShoppingCartOutlined
                style={{ fontSize: "30px" }}
              ></ShoppingCartOutlined>
              <span className="count"> {amount} </span>
            </Link>
          </li>
        </div>
        <div className="bar" onClick={() => setMenu(!menu)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </section>
    </div>
  );
}

export default Header;
