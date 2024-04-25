import React, { useEffect, useState } from 'react';
import ListProduct from '../ListProduct';
import { handlePercentDiscount } from '../../../untils/index';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../actions/ProductAction';
import { Pagination } from 'antd';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import FilterMenu from '../FilterMenu/FilterMenu';
import './search.css'
function SearchPage() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Số sản phẩm trên mỗi trang
    const [searchTerm, setSearchTerm] = useState(''); // Từ khóa tìm kiếm
    const product = useSelector((state) => state.allProduct.product);
    const location = useLocation();
    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
    const filteredProducts = handlePercentDiscount(product).filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('q');
        if (query) {
          setSearchTerm(query);
        }
      }, [location.search]);
    return (
        <section id="product-list-page">
            <div className="product-list-container">
            <h2>Kết quả tìm kiếm cho: {searchTerm}</h2>
                <FilterMenu></FilterMenu>
                
                {currentProducts && currentProducts.length > 0 ? (
                    <ListProduct HotSaleProducts={currentProducts} />
                ) : (
                    <span>Không có sản phẩm</span>
                )}
                <Pagination
                    style={{ marginTop: '50px' }}
                    defaultCurrent={1}
                    total={filteredProducts.length}
                    onChange={paginate}
                    pageSize={productsPerPage}
                />
            </div>
        </section>
    );
}

export default SearchPage;
