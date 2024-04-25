import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';
import './Review.css';

import { getAllReviewProducts } from '../../../../actions/ProductAction';

const ProductReviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector(state => state.getreviewproduct);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5; // Number of reviews per page

  useEffect(() => {
    dispatch(getAllReviewProducts());
  }, [dispatch]);

  // Logic to slice reviews for the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className="review">
      <h2 className="headerz">Đánh giá sản phẩm</h2>
      <div className="contantview">
        <table>
          <thead>
            <tr>
              <th>Ảnh sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Tên người đánh giá</th>
              <th>Số sao</th>
              <th>Bình luận</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map(review => (
              <tr key={review.reviewId}>
                <td>
                  <img src={review.productImage} alt={review.productName} />
                </td>
                <td>{review.productName}</td>
                <td>{review.reviewName}</td>
                <td>{review.reviewStar}</td>
                <td>{review.reviewComment}</td>
                <td>{review.reviewCreatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          style={{ marginTop: '20px' }}
          defaultCurrent={1}
          current={currentPage}
          total={reviews.length} // Total number of reviews
          pageSize={reviewsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductReviews;
