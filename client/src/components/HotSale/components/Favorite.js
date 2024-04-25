import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProduct from '../ListProduct';
import { handlePercentDiscount } from '../../../untils/index';
import { useDispatch } from 'react-redux';

function FAVORITE(props) {
    const dispatch = useDispatch();
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        async function fetchApi() {
            try {
                const { data } = await axios.get('http://localhost:4000/products');
                setAllProducts(data);
                const favoriteProducts = data.filter(product => product.favorite === true);
                setVisibleProducts(favoriteProducts.slice(0, 5));
                setShowMore(favoriteProducts.length > 5);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchApi();
    }, []);

    const handleShowMore = () => {
        setVisibleProducts(allProducts.filter(product => product.favorite === true));
        setShowMore(false);
        setExpanded(true);
    };

    const handleShowLess = () => {
        setVisibleProducts(allProducts.filter(product => product.favorite === true).slice(0, 5));
        setShowMore(true);
        setExpanded(false);
    };

    return (
        <section id="hotsale FAVORITE">
            <div className="hotsale">
                <h2>SẢN PHẨM YÊU THÍCH</h2>
                <ListProduct HotSaleProducts={handlePercentDiscount(visibleProducts)} />
                {showMore && !expanded && (
                    <button className='hosnew' onClick={handleShowMore}>XEM TẤT CẢ. FAVORITE</button>
                )}
                {expanded && (
                    <button className='hosnew' onClick={handleShowLess}>Thu gọn</button>
                )}
            </div>
        </section>
    );
}

export default FAVORITE;
