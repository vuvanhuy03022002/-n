import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Pay.css'

function Pay() {
  const location = useLocation();
  const { name, phone, more, order_code,  orderItems, shippingAddress } = location.state || {};

  return (
    <div className="pay-container">
      <div className='header'>
        <h3 style={{ fontFamily: "sans-serif", marginTop: "15px" }}>Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</h3>
      </div>
      <div className="order-info">
        <div className="horizontal-info">
        {order_code && <p>Mã đơn hàng: {order_code}</p>}
          <p>Tên khách hàng: {name}</p>
          <p>Số điện thoại: {phone}</p>
          <p>Địa chỉ: {more}, {shippingAddress.province}, {shippingAddress.district}, {shippingAddress.ward}</p>
        </div>

        {orderItems && (
          <div className="horizontal-info">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Số Lượng</th>
                  <th>Tổng đơn hàng</th>
                  
                  {/* Các cột thông tin khác nếu cần */}
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    
                    {/* Các cột thông tin khác nếu cần */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {shippingAddress && (
          <div className="horizontal-info">
            <p><h2>Thông tin chuyển khoản ngân hàng:</h2></p>
            <p>Ngân hàng:     <b style={{marginLeft:'20px'}}>BIDV</b></p>
            <p>Người nhận:    <b style={{marginLeft:'15px'}}>VU VAN HUY</b></p>    
            <p>Số tài khoản:     <b style={{marginLeft:'11px'}}>4505054677</b></p>
            <p>Chi nhánh:     <b style={{marginLeft:'25px'}}>HÀ ĐÔNG</b></p>


            {/* Các thông tin khác nếu cần */}
          </div>
        )}
        
      </div>
      <div>
        <p><h2>Cách Thức Chuyển Khoản</h2></p>
        <p>Hành động giao dịch thanh toán chuyển khoản của quý khách cần tuân thủ các yêu cầu sau: </p>
        <p>Khách hàng sau khi thực hiện xong đặt hàng thành công sẽ được cung cấp một Mã đơn Hàng</p>
        <p>Thực hiện thanh toán theo thông tin chuyển khoản chúng tôi cung cấp</p>
        <p>Đơn hàng của bạn sẽ được xác nhận khi tài khoản chúng tôi nhận được tiền</p>
        <p>Nội dung chuyển khoản vui lòng ghi rõ: Mã đơn Hàng + Số điện thoại</p>
      </div>

      <div className="continue-shopping">
        <Link to="/">Tiếp tục mua sắm</Link>
      </div>
    </div>
  );
}

export default Pay;