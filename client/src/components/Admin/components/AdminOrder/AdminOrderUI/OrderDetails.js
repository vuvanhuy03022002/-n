import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../../../actions/OrderAction';
import { formatPrice, formatDateOrderPaypal } from '../../../../../untils/index';
import { useParams } from 'react-router-dom';
import "../AdminOrder.css"
import { deleteOrder, getAllOrder, ShippingOrder, PaidOrder } from "../../../../../actions/OrderAction";
const OrderDetail = (props) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state.orderDetails.order);

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch, id]);

  const {
    paymentMethod,
    cancelOrder,
    shippingAddress,
    status,
    paymentResult, } = orderDetail || {}; // Sử dụng optional chaining để tránh lỗi nếu orderDetail không có giá trị

  const handleShippingOrder = async (order) => {
    await dispatch(ShippingOrder(order._id));
    await dispatch(getOrderById(id));
    dispatch(getAllOrder());
  };

  const handleDeliveredOrder = async (order) => {
    await dispatch(PaidOrder(order._id));
    await dispatch(getOrderById(id));
    dispatch(getAllOrder());
  };

  const handleDeleteOrder = async (order) => {
    await dispatch(deleteOrder(order._id));
    await dispatch(getOrderById(id));
    dispatch(getAllOrder());
  };

  return (
    <div className="order-details">
      {orderDetail ? (
        <div className="order-details-content">
          <h2>Đơn Hàng Chi Tiết</h2>
          {/* <p>ID: {orderDetail._id}</p> */}
          <div className='order-item'>
          <div className='order-left'>
              <div>
                <table>
                <table>
                  <tr>
                    <th style={{ width: "20%" }}>Ảnh</th>
                    <th style={{ width: "10%" }}>SL</th>
                    <th style={{ width: "40%" }}>Tên Sản Phẩm</th>
                    <th style={{ width: "10%" }}>Size</th>
                    <th style={{ width: "20%" }}>Giá</th>
                  </tr>
                </table>
                {orderDetail.orderItems?.map((item, index) => (
                  <div className='order-left-content' key={index}>
                    <table>
                      <tr>
                        <td style={{ width: "20%" }}><img src={item.image} alt={item.image} /></td>
                        <td style={{ width: "10%" }}>{item.qty}</td>
                        <td style={{ width: "40%" }}>{item.name}</td>
                        <td style={{ width: "10%" }}>{item.size}</td> 
                        <td style={{ width: "20%", color:'red' }}>{formatPrice(item.salePrice)} <sup>VNĐ</sup></td>
                      </tr>
                    </table>
                  </div>
                ))}                
                </table>
              </div>
            </div>
            <div className='order-right'>
              <div className='order-right-top'>
                <div><b>Xác nhận đơn hàng</b> </div>
                <div className="order-bottom">
                  {status === "shipping" ? (
                    <div className="order-status">
                    <span>
                        Đã xác nhận{" "}
                        {paymentMethod === "payOnline" ? (
                          <span>& Đã thanh toán</span>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="order-button">
                    {status === "pendding" && !cancelOrder && (
                      <button
                        className="shipping"
                        onClick={() => handleShippingOrder(orderDetail)}
                      >
                        Xác nhận đơn hàng
                      </button>
                    )}

                    {cancelOrder && (
                      <div>
                        <span> Khách yêu cầu hủy đơn </span>
                        <button
                          className="shipping"
                          onClick={() => handleDeleteOrder(orderDetail)}
                        >
                          Hủy đơn
                        </button>
                      </div>
                    )}

                    {status === "shipping" && (
                      <button
                        className="paid"
                        onClick={() => handleDeliveredOrder(orderDetail)}
                      >
                        Đã giao
                      </button>
                    )}

                    {status === "paid" && (
                      <div className="order-status">
                        <span>Đã giao</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='order-right-bottom'>
                <div className="order-info">
                  <div className="order-info-address">
                    <p>Mã Đơn Hàng: {orderDetail.order_code}</p>
                    <b className='title'>Thông tin người mua</b> {""} <br></br>
                    Tên khách hàng: <b>{shippingAddress?.name}{""}</b><br></br>
                    Số điện thoại: <b>{shippingAddress?.phone}</b><br></br>
                    Địa chỉ nhận hàng: <b>{shippingAddress?.province}, {shippingAddress?.district},{"  "}
                      {shippingAddress?.ward}, {shippingAddress?.detail}{" "}</b>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {paymentResult && (
            <div className="order-payment-check">
              Paid : {formatDateOrderPaypal(paymentResult.update_time)}
            </div>
          )}


        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default OrderDetail;