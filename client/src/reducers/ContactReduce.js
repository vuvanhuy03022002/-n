const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

// Reducer xử lý các action và trả về trạng thái mới
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACT_LIST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CONTACT_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        contacts: action.payload, // Cập nhật danh sách liên hệ từ action.payload
        error: null,
      };
    case 'CONTACT_LIST_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload, // Lưu thông báo lỗi từ action.payload
      };
    default:
      return state; // Trả về trạng thái hiện tại nếu không có action nào khớp
  }
};

export const contactCreateReducer = (state = { contact: {} }, action) => {
    switch (action.type) {
      case 'CONTACT_CREATE_REQUEST':
        return { loading: true };
      case 'CONTACT_CREATE_SUCCESS':
        return { loading: false, success: true, contact: action.payload };
      case 'CONTACT_CREATE_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  