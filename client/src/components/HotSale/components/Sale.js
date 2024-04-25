import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListProduct from '../ListProduct';
import { fetchSaleProducts } from '../../../actions/saleActions';
import { handlePercentDiscount } from '../../../untils/index';

function SALE(props) {
    const dispatch = useDispatch();
    const hotSALE = useSelector(state => state.sale.hotSaleProducts);
    const loading = useSelector(state => state.sale.loading);

    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        dispatch(fetchSaleProducts());
    }, [dispatch]);

    useEffect(() => {
        if (hotSALE && hotSALE.length > 0) {
            // Hiển thị tối đa 5 sản phẩm ban đầu
            const initialProducts = hotSALE.slice(0, 5);
            setDisplayedProducts(initialProducts);
            setShowAll(hotSALE.length <= 5);
        }
    }, [hotSALE]);

    const handleShowMore = () => {
        setDisplayedProducts(hotSALE);
        setShowAll(true);
    };

    const handleShowLess = () => {
        const initialProducts = hotSALE.slice(0, 5);
        setDisplayedProducts(initialProducts);
        setShowAll(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section id="hotsale">
            <div className="hotsale">
                <h2>SẢN PHẨM SALE</h2>
                <ListProduct HotSaleProducts={handlePercentDiscount(displayedProducts)}></ListProduct>
                {!showAll ? (
                    <button className='hosnew' onClick={handleShowMore}>XEM TẤT CẢ. SALE</button>
                ) : (
                    <button className='hosnew' onClick={handleShowLess}>Thu gọn</button>
                )}
            </div>
        </section>
    );
}

export default SALE;
