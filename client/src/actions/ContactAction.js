import axios from 'axios';

export const createContact = (contactData) => async (dispatch) => {
    try {
      dispatch({ type: 'CONTACT_CREATE_REQUEST' });
  
      const { data } = await axios.post('http://localhost:4000/contact/create', contactData);
  
      dispatch({
        type: 'CONTACT_CREATE_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_CREATE_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };

  export const getAllContact = () => async (dispatch) => {
    try {
      dispatch({ type: 'CONTACT_LIST_REQUEST' });
  
      const { data } = await axios.get('http://localhost:4000/contact/allContact'); // Đây là endpoint để lấy tất cả thông tin liên hệ từ API
  
      dispatch({
        type: 'CONTACT_LIST_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_LIST_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  