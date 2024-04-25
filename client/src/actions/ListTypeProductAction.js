import axios from 'axios'

export const getAllTypeProduct = () => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:4000/typeList')
        dispatch({type: 'GET_ALL_TYPE_PRODUCT', payload: data})
    } catch (error) {
    }
}

export const CreateNewTypeProduct = (type) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:4000/typeList/create`, type)
        dispatch({type: 'CREATE_NEW_TYPE_PRODUCT', payload: data})
    } catch (error) {
    }
}

export const deleteTypeProduct = (type) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`http://localhost:4000/typeList/delete/${type._id}`)
        dispatch({type: 'DELETE_TYPE_PRODUCT', payload: data})
    } catch (error) {
    }
}


export const updateListTypeProduct = (id, formData) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:4000/typeList/update/${id}`, formData); // Gửi request PUT tới API của bạn
      dispatch({
        type: 'UPDATE_LIST_TYPE_PRODUCT',
        payload: response.data // Cập nhật lại dữ liệu trong Redux store nếu cần
      });
      return response.data; // Trả về dữ liệu sau khi cập nhật (nếu cần)
    } catch (error) {
      console.error(error);
      throw error; // Xử lý lỗi nếu cần
    }
  };

  // Action creator để lấy thông tin loại sản phẩm dựa trên ID
  export const getTypeProductById = (id) => async (dispatch) => {
    try {
    
      dispatch({ type: "GET_TYPE_PRODUCT_BY_ID_REQUEST" });
  
      const { data } = await axios.get(`http://localhost:4000/typeList/${id}`); // Thay đổi endpoint nếu khác
  
      dispatch({
        type: "GET_TYPE_PRODUCT_BY_ID_SUCCESS",
        payload: data,
      });
    } catch (error) {
     
      dispatch({
        type: "GET_TYPE_PRODUCT_BY_ID_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  //
  export const updateTypeProduct = (id,type) => async (dispatch) => {
    try {
        const {data} = await axios.put(`http://localhost:4000/typeList/update/${id}`,type)
        dispatch({type: 'UPDATE_TYPE_PRODUCT', payload: data})
    } catch (error) {
        console.error(error);
        dispatch({ type: 'UPDATE_TYPE_PRODUCT_FAIL', payload: error.message });
    }
}