import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, paginationProduct } from '../../../../actions/ProductAction';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../../untils/index';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import { Modal, message } from 'antd';

function Product(props) {
  const { product, number } = props;
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.allProduct.currentPage);

  const handleDeleteProduct = async (product) => {
    await dispatch(DeleteProduct(product._id));
    dispatch(paginationProduct(currentPage));
    // Hiển thị thông báo xóa thành công
    message.success('Sản phẩm đã được xóa thành công');
  };

  const showModal = () => {
    Modal.confirm({
      title: 'Xác nhận xóa sản phẩm',
      content: 'Bạn có chắc chắn muốn xóa sản phẩm này không?',
      onOk() {
        handleDeleteProduct(product);
      },
    });
  };

  return (
    <tr>
      {/* Các cột sản phẩm */}
      <td>{number + 1}</td>
      <td>
        <img src={product.image} alt={product.name} />
      </td>
      <td>{product.name}</td>
      <td>{formatPrice(product.salePrice)}</td>
      <td>{product.type}</td>
      <td className="delete-product" onClick={showModal}>
        <DeleteOutlined />
      </td>

      {/* Các nút update và review */}
      <td className="update-product">
        <Link to={`/admin/product/update/${product._id}`}>
          <EditOutlined />
        </Link>
      </td>
      <td className="review-product">
        <Link to={`/admin/product/reviewProduct/${product._id}`}>
          <FormOutlined />
        </Link>
      </td>
    </tr>
  );
}

export default Product;
