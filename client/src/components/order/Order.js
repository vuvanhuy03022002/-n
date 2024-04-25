import React, { useEffect, useState } from 'react';
import './Order.css'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {
  GetAllDistrict,
  GetAllProvince,
  GetAllWard,
  OrderInfo,
} from "../../actions/OrderAction";

import { createOrder } from "../../actions/OrderAction";
import { useHistory } from "react-router-dom";
// import {
//   AddToCart
// } from "../../actions/CartAction";


function Order(props) {

  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();

  // const cartItem = useSelector((state) => state.cart.cartItems); // Lấy sản phẩm trong giỏ hàng từ Redux Store
  // const sizes = useSelector((state) => state.sizes); 

  const allProvince = useSelector((state) => state.address.province);
  const allDistrict = useSelector((state) => state.address.district);
  const allWard = useSelector((state) => state.address.ward);

  const [listProvince, setListProvince] = useState(false);
  const [listDistrict, setListDistrict] = useState(false);
  const [listWard, setListWard] = useState(false);

  const [isInformationComplete, setIsInformationComplete] = useState(false);

  const [chooseProvince, setChooseProvince] = useState({name: "Hồ Chí Minh"});
  const [chooseDistrict, setChooseDistrict] = useState({name: "Quận / Huyện"});
  const [chooseWard, setChooseWard] = useState({name: "Phường / Xã"});
  const [orderCode, setOrderCode] = useState('');

  useEffect(() => {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000); // Số ngẫu nhiên từ 0 đến 999
    const generatedOrderCode = `ORD-${timestamp}-${randomNum}`;
    setOrderCode(generatedOrderCode);
  }, []);
  
  // const handleAddToCart = (product, selectedSize) => {
  //   const sizeInfo = sizes.find(
  //     (size) => size.productId === product.id && size.size === selectedSize
  //   );

  //   if (sizeInfo) {
  //     const productWithSize = {
  //       ...product,
  //       size: sizeInfo.size,
  //       sizeId: sizeInfo.id,
  //       qty: 1,
  //     };
  //     dispatch(AddToCart(productWithSize));
  //   } else {
  //     console.log('Không tìm thấy thông tin kích cỡ cho sản phẩm này.');
  //   }
  // };

  const handleListProvince = (e) => {
    e.preventDefault();
    setListProvince(!listProvince);
  };
  const handleListDistrict = (e) => {
    e.preventDefault();
    setListDistrict(!listDistrict);
  };
  const handleListWard = (e) => {
    e.preventDefault();
    setListWard(!listWard);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.salePrice,
    0
  );
  const userInfo = useSelector((state) => state.userSignin.userInfo);

  const onSubmit = async (data) => {
    if (!data) {
      alert("Bạn hãy nhập đầy đủ thông tin");
      return;
    }
    const Order = {
      order_code: orderCode,
      orderItems: cartItems.map(item => ({
        ...item,
        
      })),
      shippingAddress: {
        ...data,
        province: chooseProvince.name,
        district: chooseDistrict.name,
        ward: chooseWard.name,
      },
      totalPrice: totalPrice,
      name: userInfo.name,
      user: userInfo,
    };

    await dispatch(OrderInfo(Order));
  };

  useEffect(() => {
    dispatch(GetAllProvince());
  }, []);

  useEffect(() => {
    dispatch(GetAllDistrict(202));
  }, []);

  const handleSelectProvince = (name, id) => {
    setChooseProvince({name, id});
    setListProvince(!listProvince);
    dispatch(GetAllDistrict(id));
  };

  const handleSelectDistrict = (name, id) => {
    setChooseDistrict({name, id});
    setListDistrict(!listDistrict);
    dispatch(GetAllWard(id));
  };

  const handleSelectWard = (name, id) => {
    setChooseWard({name, id});
    setListWard(!listWard);
  };

  const history = useHistory();
  const [choosePay, setChoosePay] = useState({
    payLater: false,
    payOnline: false,
  });

  const { order } = useSelector((state) => state.orderInfo);

  const payLater = () => {
    setChoosePay({ payOnline: false, payLater: true });
  };

  const payOnline = () => {
    setChoosePay({ payLater: false, payOnline: true });
    
  };

  const SendOrderPayLater = async () => {
    const OrderPaid = {
      ...order,
      status: "pendding",
      paymentMethod: choosePay.payOnline ? "payOnline" : "payLater"
    };
  
    if (choosePay.payOnline) {
      await dispatch(createOrder(OrderPaid));
      history.push({
        pathname: '/pay',
        state: {
          name: watch('name'),
          phone: watch('phone'),
          more: watch('more'),
          orderItems: cartItems,
          shippingAddress: {
            ...order,
            province: chooseProvince.name,
            district: chooseDistrict.name,
            ward: chooseWard.name,
          },
          totalPrice: totalPrice,
          userInfo: userInfo,
          order_code: orderCode,
        }
      });
    } else {
      // Xử lý chuyển hướng khi thanh toán sau khi nhận hàng (payLater)
      await dispatch(createOrder(OrderPaid));
      history.push("/orderSuccess");
    }
  };
  
  
  useEffect(() => {
    if (
      chooseProvince.name !== "Hồ Chí Minh" &&
      chooseDistrict.name !== "Quận / Huyện" &&
      chooseWard.name !== "Phường / Xã" &&
      watch("name") &&
      watch("phone") &&
      watch('more')
    ) {
      setIsInformationComplete(true);
    } else {
      setIsInformationComplete(false);
    }    
  }, [chooseProvince, chooseDistrict, chooseWard, watch]);
  
  return (
    <section id="order">
      <div className="order-content">
        <form className="order-page" onSubmit={handleSubmit(onSubmit)}>
          <div className="customer">
            <h4>THÔNG TIN KHÁCH HÀNG </h4>
            <div className="form-customer">
              <input
                placeholder="Họ và tên"
                {...register("name")}
                required
              ></input>
              <input
                placeholder="Số điện thoại"
                {...register("phone")}
                required
              ></input>
            </div>
          </div>

          <div className="address">
            <h4>CHỌN ĐỊA CHỈ</h4>
            <div className="address-form">
              <div className="province">
                {allProvince ? (
                  <button className="" onClick={(e) => handleListProvince(e)}>
                    {chooseProvince.name}
                  </button>
                ) : (
                  <button className="" onClick={(e) => handleListProvince(e)}>
                    {chooseProvince.name}
                  </button>
                )}
                {listProvince ? (
                  <div className="select">
                    <div className="select-list">
                      <aside>
                        {allProvince
                          ? allProvince.data.map((item) => (
                              <span
                                onClick={() =>
                                  handleSelectProvince(
                                    item. ProvinceName,
                                    item.ProvinceID
                                  )
                                }
                              >
                                {item. ProvinceName}
                              </span>
                            ))
                          : ""}
                      </aside>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="province">
                {chooseProvince ? (
                  <button className="" onClick={(e) => handleListDistrict(e)}>
                    {chooseDistrict.name}
                  </button>
                ) : (
                  <button
                    className=""
                    onClick={(e) => handleListProvince(e)}
                    disabled="disabled"
                  >
                    {chooseDistrict.name}
                  </button>
                )}
                {listDistrict ? (
                  <div className="select">
                    <div className="select-list">
                      <aside>
                        {allDistrict
                          ? allDistrict.data.map((item) => (
                              <span
                                onClick={() =>
                                  handleSelectDistrict(
                                    item.DistrictName,
                                    item.DistrictID
                                  )
                                }
                              >
                                {item.DistrictName}
                              </span>
                            ))
                          : ""}
                      </aside>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="province">
                {chooseWard ? (
                  <button className="" onClick={(e) => handleListWard(e)}>
                    {chooseWard.name}
                  </button>
                ) : (
                  <button
                    className=""
                    onClick={(e) => handleListWard(e)}
                    disabled
                  >
                    {chooseWard.name}
                  </button>
                )}
                {listWard ? (
                  <div className="select">
                    <div className="select-list">
                      <aside>
                        {allWard && allWard.data !== null
                          ? allWard.data.map((item) => (
                              <span
                                onClick={() =>
                                  handleSelectWard(item. WardName, item.WardCode)
                                }
                              >
                                {item. WardName}
                              </span>
                            ))
                          : ""}
                      </aside>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="province">
                <input
                  placeholder="Số nhà, đường ..."
                  {...register("more")}
                  required
                ></input>
              </div>
            </div>
          </div>
          
          <div className="choose-pay">
      <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
      <div className="choose">
        <button
          type="submit"
          className={choosePay.payLater ? "active" : ""}
          onClick={() => payLater()}
        >
          Thanh toán khi nhận hàng
        </button>
        <button
          type="submit"
          className={choosePay.payOnline ? "active" : ""}
          onClick={() => payOnline()}
        >
          Thanh toán Chuyển Khoản
        </button>
      </div>
      {isInformationComplete && (choosePay.payLater || choosePay.payOnline) && (
        <div className="customer-order">
          <button onClick={SendOrderPayLater}>Đặt Hàng</button>
        </div>
       )}
    </div>
    </form>
    </div>
    </section>
  );
}

export default Order;