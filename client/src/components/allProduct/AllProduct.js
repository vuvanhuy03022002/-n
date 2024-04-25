import React, { useEffect, useState } from 'react';
import ListProduct from './ListProduct';
import './Sale.css';
import { handlePercentDiscount } from '../../untils/index';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../actions/ProductAction';
import FilterProduct from './FilterProduct';
import SortByPrice from './SortByPrice/SortByPrice';
import { Pagination } from 'antd';

function AllProduct(props) {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Số sản phẩm trên mỗi trang
    const product = useSelector((state) => state.allProduct.product);

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = handlePercentDiscount(product).slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section id="hotsale iphone">
            <div className="hotsale">
                <FilterProduct />
                <SortByPrice />
                {product && product.length > 0 ? (
                    <ListProduct HotSaleProducts={currentProducts} />
                ) : (
                    <span>Không có sản phẩm</span>
                )}
                <Pagination
                style={{marginTop:'50px'}}
                    defaultCurrent={1}
                    total={handlePercentDiscount(product).length}
                    onChange={paginate}
                    pageSize={productsPerPage}
                />
            </div>
        </section>
    );
}

export default AllProduct;
