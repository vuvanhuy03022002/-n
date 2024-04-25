import React from "react";

import { Link } from "react-router-dom";
import { CheckOutlined } from '@ant-design/icons';

export default function PaySuccess() {

  return (
    <section id="order-success">
      <div className="order-success">
        <span><CheckOutlined></CheckOutlined></span>
        <p>Đặt hàng thành công</p>
        {/* <Link to="">OK</Link> */}
        <div className="links">
          <Link to="/myOrder">Xem lại đơn hàng</Link>
          <Link to="/">Trang chủ</Link>
        </div>
      </div>
    </section>
  );
}
