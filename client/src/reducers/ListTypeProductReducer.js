export const ListTypeProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_TYPE_PRODUCT": {
      return { ...state, List: action.payload };
    }
    
    default:
      return state;
  }
};

export const TypeProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NEW_TYPE_PRODUCT": {
      return { ...state, typeProduct: action.payload };
    }

    case "CREATE_NEW_TYPE_PRODUCT": {
      return { ...state, typeProduct: action.payload };
    }
    default:
      return state;
  }
};


const initialState = {
  loading: false,
  error: null,
  typeProduct: null,
};

const typeProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TYPE_PRODUCT_BY_ID_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
        typeProduct: null,
      };
    case 'GET_TYPE_PRODUCT_BY_ID_SUCCESS':
      return {
        ...state,
        loading: false,
        typeProduct: action.payload,
      };
    case 'GET_TYPE_PRODUCT_BY_ID_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default typeProductDetailsReducer;
