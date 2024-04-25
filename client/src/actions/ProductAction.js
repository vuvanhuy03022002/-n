import axios from "axios";
import actions from './product.action'
import {BASE_URL} from '../constants/UserConstant'
import { axiosClient } from "../services/config.services";

export const filterProductByType = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${name}`);
    dispatch({ type: "FILTER_PRODUCT_BY_TYPE", payload: data });
  } catch (error) {
  }
};


export const filterProductByRandomField = (infoProduct) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/products/filter/random`, infoProduct);
    dispatch({ type: "FILTER_PRODUCT_BY_RANDOM_FIELD", payload: data });
  } catch (error) {
  }

  // dispatch({ type: "FILTER_PRODUCT_BY_RANDOM_FIELD", payload: infoProduct });
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/products/`);
    dispatch({ type: "GET_ALL_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ALL_PRODUCT_FAIL", payload: error.message });
  }
};

export const ascendingProduct = (products) => async (dispatch, getState) => {
  dispatch({ type: "ASCENDING_PRODUCT"});
};

export const descendingProduct = (products) => async (dispatch, getState) => {
  dispatch({ type: "DESCENDING_PRODUCT"});
};

export const filterProduct = (name) => async (dispatch, getState) => {
  dispatch({ type: "FILTER_PRODUCT", payload: name });
};

export const filterProductByPrice =
  (startPrice, endPrice) => async (dispatch, getState) => {
    dispatch({
      type: actions.FILTER_PRODUCT_BY_PRICE,
      payload: { startPrice, endPrice },
    });
  };

export const editCurrentPage = (page) => async (dispatch) => {
  dispatch({ type: "EDIT_CURRENT_PAGE", payload: page });
}

export const paginationProduct = (page) => async (dispatch) => {
  try {
    const data = await axiosClient.get(
      `/products/pagination/${page}`
    );
    dispatch({ type: "PAGINATION_PRODUCT", payload: data });
  } catch (error) {
  }
};


export const getproductById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:4000/products/detail/${id}`
    );
    dispatch({ type: "GET_PRODUCT_BY_ID", payload: data });
  } catch (error) {
    dispatch({ type: "GET_PRODUCT_BY_ID_FAIL", payload: error.message });
  }
};

export const removeProductById = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT_BY_ID"});
};

export const saveProduct = (product) => async (dispatch, getState) => {
  
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    if (!product.get('_id')) {
      const { data } = await axios.post(
        "http://localhost:4000/products/create",
        product,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "SAVE_PRODUCT", payload: data });
      // document.location.href = '/admin/product';
    } else {
      const { data } = await axios.put(
        `http://localhost:4000/products/update`,
        product,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "SAVE_PRODUCT", payload: data });
      // document.location.href = '/admin/product';
    }
  } catch (error) {
    dispatch({ type: "SAVE_PRODUCT_FAIL", payload: error.message });
  }
};

export const DeleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.delete(
      `http://localhost:4000/products/delete/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "DELETE_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "DELETE_PRODUCT_FAIL", payload: error.message });
  }
};



export const reviewProduct = (id, review) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `http://localhost:4000/products/rate/${id}`,
      review
    );
    dispatch({ type: "REVIEW_PRODUCT", payload: data });
  } catch (error) {
    dispatch({ type: "REVIEW_PRODUCT_FAIL", payload: error });
  }
};


export const BlogProduct = (id, blog, callback) => async (dispatch, getState) => {
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post(
      `http://localhost:4000/products/blog/${id}`,
      blog,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: "BLOG_PRODUCT", payload: data });
    callback();
  } catch (error) {
    dispatch({ type: "BLOG_PRODUCT_FAIL", payload: error });
  }
};


export const getAllReviewProducts = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:4000/products/filter/review'); // Điều chỉnh đường dẫn API endpoint của bạn tại đây
    const allReviews = response.data;

    dispatch({ type: 'GET_ALL_REVIEWS_SUCCESS', payload: allReviews });
  } catch (error) {
    dispatch({ type: 'GET_ALL_REVIEWS_FAIL', payload: error.response.data.message || 'Đã xảy ra lỗi khi lấy đánh giá sản phẩm.' });
  }
};


export const deleteReview = (productId, reviewId) => async (dispatch, getState) => {
  try {
    const { userSignin: { userInfo } } = getState();

    // Kiểm tra nếu người dùng đã đăng nhập
    if (userInfo) {
      // Gửi yêu cầu xóa đánh giá đến server
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`http://localhost:4000/products/delete/review/${productId}/${reviewId}`, config);

      // Nếu xóa thành công, dispatch action để cập nhật trạng thái Redux
      dispatch({ type: 'DELETE_REVIEW_SUCCESS', payload: reviewId });
    }
  } catch (error) {
    dispatch({ type: 'DELETE_REVIEW_FAIL', payload: error.response.data.message || 'Đã xảy ra lỗi khi xóa đánh giá.' });
  }
};