import React from 'react';
import { StarOutlined } from '@ant-design/icons';
import './Sale.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { formatPrice } from '../../untils/index';
function Product(props) {

    const product = props.product;
    // const countReview = product.reviews.length;
    // let averageRate = product.reviews.reduce((total, current) => total + current.star, 0) / countReview;
    // averageRate = isNaN(averageRate) ? 0 : parseFloat(averageRate.toFixed(2));

    // const starsArray = [];
    // for (let i = 0; i < 5; i++) {
    //     if (i < averageRate) {
    //         starsArray.push(<StarOutlined key={i} style={{ fontSize: '14px', color: 'orange', display:'flex', justifyContent: 'center' }} />);
    //     } else {
    //         starsArray.push(<StarOutlined key={i} style={{ fontSize: '14px', color: '#ccc', display:'flex' , justifyContent: 'center'}} />);
    //     }
    // }
    return (
        <div className="hotsale-listproduct-product">
            
            <div className="rate-infor">      
                    {/* <p className="star-average-numm" >
                        {starsArray.map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}
                    </p> */}
                    <img src={product.image} alt={product.name} />
                    
                </div>
                <div className='product-namez'>  {product.name}</div>
               <div style={{color: "#d70018"}}>{formatPrice(product.price)} VND</div>
                
            <div className="discount">
                <p>{product.percentDiscount}%</p>
            </div>
            <div className="buy">
                <Link to={`/detail/${product._id}`}> Xem Thêm</Link>
            </div>
        </div>
    );
}

export default Product;