import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../actions/CartAction';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../untils/index';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { getproductById } from '../../actions/ProductAction';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

function DetailInfo(props) {
  const dispatch = useDispatch();
  const { product } = props;
  const { id } = useParams();
  const detailProduct = useSelector(state => state.getProductById.product);
  const [selectedSize, setSelectedSize] = useState('');
  const history = useHistory(); 
  useEffect(() => {
    dispatch(getproductById(id));
  }, [dispatch, id]);

  const handleAddProduct = () => {
    const action = AddToCart(product, selectedSize);
    dispatch(action);
  };

  const success = () => {
    message.success({
      content: 'Thêm vào giỏ hàng thành công',
      duration: 1,
      className: 'custom-class',
      style: {
        position: 'absolute',
        right: '2rem',
        top: '2rem',
        margin: '1rem 0'
      }
    });
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const AddProductToCart = async () => {
    if (selectedSize === '') {
      message.warning({
        content: 'Vui lòng chọn kích cỡ trước khi thêm vào giỏ hàng',
        duration: 1,
        className: 'custom-class',
        style: {
          position: 'absolute',
          right: '2rem',
          top: '2rem',
          margin: '1rem 0'
        }
      });
    } else {
      const productWithSize = { ...product, size: selectedSize, qty: 1 };
      const action = AddToCart(productWithSize);
      await dispatch(action);
      success();
      history.push('/cart'); // Nếu đã chọn size, chuyển người dùng đến trang giỏ hàng
    }
  };
  
  return (
    <div className="detail-info-right">
      <div className="detail-info-right-price">
        <div className="detail-title-infor">
          <h2>{detailProduct.name}</h2>
        </div>
        <p className="price-box">
          <span className="saleprice">{formatPrice(product.salePrice)}đ</span>
        </p>
        <div className="detail-info-right-size">
          <span>Chọn kích cỡ:</span>
          <div className="sizes">
            <button className={selectedSize === '29' ? 'selected' : ''} onClick={() => handleSelectSize('29')}>29</button>
            <button className={selectedSize === '30' ? 'selected' : ''} onClick={() => handleSelectSize('30')}>30</button>
            <button className={selectedSize === '31' ? 'selected' : ''} onClick={() => handleSelectSize('31')}>31</button>
            <button className={selectedSize === '32' ? 'selected' : ''} onClick={() => handleSelectSize('32')}>32</button>
            <button className={selectedSize === '33' ? 'selected' : ''} onClick={() => handleSelectSize('33')}>33</button>
            <button className={selectedSize === '34' ? 'selected' : ''} onClick={() => handleSelectSize('34')}>34</button>
          </div>
        </div>
        <p className="price-box">
          <span className="old-price">Giá niêm yết: <strong className="price">{formatPrice(product.price)}đ</strong> </span>
        </p>
        <p className="detail-info-sale">
          Sản phẩm thuộc chương trình HOT SALE CUỐI TUẦN - Nhanh tay thanh toán!
        </p>
      </div>

      <div className="detail-info-right-buy">
        <div className="detail-info-right-buy-installment">
        <Link to="#" onClick={AddProductToCart}>
            <strong>MUA NGAY</strong>
            <br />
            <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
          </Link>
        </div>
        <div className="detail-info-right-buy-installment1">
        <Link to="" onClick={(e) => { e.preventDefault(); AddProductToCart(); }}>
            <strong>THÊM VÀO GIỎ HÀNG</strong>
            <br />
            <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;