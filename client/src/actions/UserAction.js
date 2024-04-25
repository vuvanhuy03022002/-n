import axios from 'axios'

export const login = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:4000/user/login', user)
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
    }
};


export const SignupUser = (user) => async (dispatch) => {
    try {
      const {data} = await axios.post('http://localhost:4000/user/register', user)
      localStorage.setItem('userInfo', JSON.stringify(data));
      dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data });
      document.location.href = '/';
    } catch (error) {
    }
};

export const SignoutUser = (user) => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type: 'USER_SIGNOUT_SUCCESS', payload: {} })
  document.location.href = '/';
};

export const getAllUser = () => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await  axios.get('http://localhost:4000/user')
    dispatch({type: 'GET_ALL_USER', payload: data})
  } catch (error) {
    dispatch({type: 'GET_ALL_USER_FAIL', payload: error.message})
  }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
  const {
    userSignin: {userInfo},
  } = getState()
  try {
    const {data} = await axios.delete(`http://localhost:4000/user/delete/${userId}`)
    dispatch({type: 'DELETE_USER', payload: data})
  } catch (error) {
    dispatch({type: 'DELETE_USER_FAIL', error: error.message})
  }
}



//create and update user 
export const createUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_CREATE_REQUEST' });

    const { data } = await axios.post('http://localhost:4000/user/create', userData);

    dispatch({
      type: 'USER_CREATE_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'USER_CREATE_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_UPDATE_REQUEST' });

    const { data } = await axios.post(`http://localhost:4000/user/update/${userId}`, userData);

    dispatch({
      type: 'USER_UPDATE_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USER_REQUEST' });

    const { data } = await axios.get(`http://localhost:4000/user/detail/${userId}`);

    dispatch({
      type: 'GET_USER_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_USER_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};


export const saveUser = (user) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    if (!user._id) {
      const { data } = await axios.post(
        "http://localhost:4000/user/create",
        user,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "SAVE_USER", payload: data });
      // Redirect to appropriate page after user creation
    } else {
      const { data } = await axios.put(
        `http://localhost:4000/user/update/${user._id}`,
        user,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: "SAVE_USER", payload: data });
      // Redirect to appropriate page after user update
    }
  } catch (error) {
    dispatch({ type: "SAVE_USER_FAIL", payload: error.message });
  }
};

