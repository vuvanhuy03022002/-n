// saleReducer.js

const initialState = {
    hotSaleProducts: [],
    loading: true,
    error: null,
  };
  
  const saleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SALE_PRODUCTS_SUCCESS':
        return {
          ...state,
          hotSaleProducts: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_SALE_PRODUCTS_FAILURE':
        return {
          ...state,
          hotSaleProducts: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default saleReducer;
  