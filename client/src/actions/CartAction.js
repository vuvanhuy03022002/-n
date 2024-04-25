export const AddToCart = (productWithSize) => async (dispatch) => {
    dispatch({ type: 'ADD_TO_CART', payload: productWithSize });
};

export const DeleteToCart = (product) => async (dispatch) => {
    dispatch({type: 'DELETE_TO_CART', payload: product})
}

export const DeleteQtyProduct = (product) => async (dispatch) => {
    dispatch({type: 'DELETE_QTY_PRODUCT', payload: product})
}

