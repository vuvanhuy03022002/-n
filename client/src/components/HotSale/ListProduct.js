import React, { useEffect } from 'react';
import Product from './Product'
import './Sale.css'
function ListProduct(props) {
    const {HotSaleProducts} = props;

    return (
        <div className="hotsale-listproduct">
            {
                HotSaleProducts.map((product, index) => (
                    <Product product={product} key={index}></Product>
                ))
            }
        </div>
    );
}

export default ListProduct;