import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../../untils/index";
import "../AdminOrder.css";
function Order(props) {
  const { order } = props;
  const {
    orderItems,
    totalPrice,

  } = order;

  return (
    <>
      <div className="order-list">
        <div className="order-list-items">
        <table>
                <tr>
                    <th>Ảnh sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng sản phẩm</th>
                    <th>Giá</th>
                  </tr>
                </table>
          <div className="order-list-items">
            {orderItems.map((item, index) => (
              <div className="order-items-item" key={index}>
                <table>
                  <tr>
                    <td><span className="img"><img src={item.image} alt={item.name} /></span></td>
                    <td><span className="name">{item.name}</span></td>
                    <td><span className="qty">{item.qty}</span></td>
                    <td><span className="price">{formatPrice(item.salePrice)} <sup>VNĐ</sup></span></td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
          <div className="bottom-order">
            <div className="totalPrice">
            <p>Mã Đơn Hàng: {order.order_code}</p>
              <span>Tổng tiền: {formatPrice(totalPrice)}</span>
            </div>
            <div>
              <Link to={`/admin/order/detail/${order._id}`} className="order-details-link">
                Xem chi tiết đơn hàng
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Order;