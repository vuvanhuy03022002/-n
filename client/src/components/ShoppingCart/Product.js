import React, { useState } from 'react';
import { formatPrice } from '../../untils/index'
import { useDispatch,useSelector } from 'react-redux'
import { AddToCart, DeleteQtyProduct, DeleteToCart } from '../../actions/CartAction'
import './ShoppingCart.css';
import { Modal } from 'antd';
Product.propTypes = {

};

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (product) => {
    const action = DeleteQtyProduct(product);
    dispatch(action);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function handleDeleteProduct(product) {
    showModal();
  }

  function handleAddProduct(product) {
    const action = AddToCart(product);
    dispatch(action);
  }
  function handleDeleteCartProduct(product) {
    const action = DeleteToCart(product);
    dispatch(action);
  }

  function handleProductOut(product) {
    const action = DeleteQtyProduct(product);
    dispatch(action);
  }

  return (
    <div className="shopping-cart-list-product">
      <div className="shopping-cart-list-product-block">
        <div className="shopping-cart-list-product-block-left">
          <img src={product.image}></img>
        </div>
        <div className="shopping-cart-list-product-block-right">
          <p className="product-name">
            {product.name}
          </p>
          <p className="product-price">
            {formatPrice(product.salePrice)}
          </p>
          <div className="selected-sizes">
             {product.size}
            </div>
        </div>

        <div className="shopping-cart-list-product-bottom">
          <ul className="button-event">
            <li onClick={() => handleDeleteCartProduct(product)}>-</li>
            <li>{product.qty}</li>
            <li onClick={() => handleAddProduct(product)}>+</li>
          </ul>
          <button className="delete-product" onClick={() => handleDeleteProduct(product)}> Xóa </button>
          <Modal
            title="Xác nhận xóa sản phẩm"
            visible={isModalVisible}
            onOk={() => handleOk(product)}
            onCancel={handleCancel}
          >
            <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Product;