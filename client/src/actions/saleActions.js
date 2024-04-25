// saleActions.js

import axios from 'axios';

export const fetchSaleProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:4000/products/filter/productsale');
    dispatch({ type: 'FETCH_SALE_PRODUCTS_SUCCESS', payload: data });
    console.log('data',data)
  } catch (error) {
    dispatch({ type: 'FETCH_SALE_PRODUCTS_FAILURE', payload: error.message });
    console.log('err',error)
  }
};
