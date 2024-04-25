import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
import Product from './Product';
import { Pagination } from 'antd';

function ListProduct(props) {
    const dispatch = useDispatch()
    const {listProducts} = props;
    const currentPage = useSelector(state => state.allProduct.currentPage)
    const {pages} = useSelector(state => state.allProduct.product)

    const HandleChangePage = async (number) => {
        await dispatch(paginationProduct(number))
        dispatch(editCurrentPage(number))
    }

    return (
       <div className="admin-product-list">
           <table>
                <tr>
                    <th></th>
                    <th>Hình Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Danh Mục</th>
                    <th>Xóa</th>
                    <th>Sửa</th>
                    <th>Thêm</th>
                </tr>
                {
                    listProducts ? listProducts.map((item, index) => (<Product product={item} key={item._id} update={item._id} number={index}></Product>)) : ''
                }
            </table>
            
            <div className="pagination">
                <Pagination defaultCurrent={1} current={currentPage} total={pages*10} onChange={HandleChangePage}/>
            </div>

       </div>
    );
}

export default ListProduct;