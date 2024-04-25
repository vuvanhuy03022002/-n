import React from 'react';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../actions/CartAction';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../untils/index';
import { message } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import './Sale.css'
function Product(props) {
    const dispatch = useDispatch();
    const product = props.product;
    const countReview = product.reviews.length;
    let averageRate = product.reviews.reduce((total, current) => total + current.star, 0) / countReview;
    averageRate = isNaN(averageRate) ? 0 : parseFloat(averageRate.toFixed(2));

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
            },
        });
    };

    const AddProductToCart = async (product) => {
        const action = AddToCart(product);
        await dispatch(action);
        success();
    };

    // Tạo một mảng chứa các biểu tượng sao dựa trên averageRate
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
        if (i < averageRate) {
            starsArray.push(<StarOutlined key={i} style={{ fontSize: '14px', color: 'orange', display:'flex', justifyContent: 'center' }} />);
        } else {
            starsArray.push(<StarOutlined key={i} style={{ fontSize: '14px', color: '#ccc', display:'flex' , justifyContent: 'center'}} />);
        }
    }

    return (
        <div className="hotsale-listproduct-product">
            
                <div className="rate-infor">      
                    
                    <img src={product.image} alt={product.name} />
                </div>
                <Link to={`/detail/${product._id}`}>
                <p className="hotsale-listproduct-product-name">{product.name}</p>
                <p className="star-average-numm" style={{display:'flex'}} >
                        {starsArray.map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}
                    </p>
                <div className="price">
                    <span className="price2">{formatPrice(product.price)}đ</span>
                    <span className="price1">{formatPrice(product.salePrice)}đ</span>
                </div>
               </Link>
            {product.percentDiscount >= 5 ? (
                <div className="discount">
                    <p>{product.percentDiscount}%</p>
                </div>
            ) : null}
            
            <div className="buy">
                <Link to={`/detail/${product._id}`}> Xem Thêm</Link>
            </div>
            
        </div>
    );
}

export default Product;
