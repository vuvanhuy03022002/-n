import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProduct from '../ListProduct';
import { useDispatch } from 'react-redux';
import {handlePercentDiscount} from '../../../untils/index'

function NEW(props) {
    const dispatch = useDispatch();
    const [hotNEW, setHotNEW] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        async function fetchNewestProducts() {
            try {
                const { data } = await axios.get('http://localhost:4000/products?sortBy=createdAt:desc&limit=10');
                
                const newestProducts = data.sort((a, b) => {
                    const dateA = new Date(a.createdAt);
                    const dateB = new Date(b.createdAt);
                    return dateB - dateA;
                });
                const limitedProducts = newestProducts.slice(0, 5);

                // Lưu danh sách sản phẩm gốc
                setOriginalProducts(newestProducts);
                setHotNEW(limitedProducts);
            } catch (error) {
                
            }
        }
        fetchNewestProducts();
    }, []);

    const toggleShowAllProducts = () => {
        setShowAllProducts(!showAllProducts);
        if (!showAllProducts) {
            setHotNEW(originalProducts); // Hiển thị tất cả sản phẩm khi nhấp Xem thêm
        } else {
            const limitedProducts = originalProducts.slice(0, 5); // Giới hạn hiển thị lại khi Thu Gọn
            setHotNEW(limitedProducts);
        }
    };

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>SẢN PHẨM MỚI</h2>
                <ListProduct HotSaleProducts={handlePercentDiscount(hotNEW)}></ListProduct>
                {!showAllProducts ? (
                    <button className='hosnew' onClick={toggleShowAllProducts}>XEM TẤT CẢ. NEW ARRIVALS</button>
                ) : (
                    <button className='hosnew' onClick={toggleShowAllProducts}>THU GỌN</button>
                )}
            </div>
        </section>
    );
}

export default NEW;
