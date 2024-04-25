import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { getAllUserReducer, getUserByIdReducer, userCreateReducer, UserSigninReducer, UserSignupReducer, userUpdateReducer} from './reducers/UserReducer'
import { deleteReviewReducer, getAllProductReducer, getProductByIdReducer, reviewReducer } from './reducers/ProductReducer'

import { CartReducer} from './reducers/CartReducer'
import { addressReducer, getAllOrderReducer, getOrderByUserReducer, orderDetailsReducer, OrderInfoReducer, orderPayReducer, orderReducer } from './reducers/OrderReducer'
import typeProductDetailsReducer, { ListTypeProductReducer, TypeProductReducer } from './reducers/ListTypeProductReducer'
import saleReducer from './reducers/saleReducer'
import { contactCreateReducer, contactReducer } from './reducers/ContactReduce'


const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : undefined,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },

};

const reducer = combineReducers({
  users: getAllUserReducer,
  userSignin: UserSigninReducer,
  userSignup: UserSignupReducer,
  userCreate: userCreateReducer,
  userUpdate: userUpdateReducer,
  UserById: getUserByIdReducer,
  allProduct: getAllProductReducer,
  getProductById: getProductByIdReducer,
  getreviewproduct: reviewReducer,
  sale: saleReducer,
  cart: CartReducer,
  
  orderDetails: orderDetailsReducer,
  orderReducer: orderReducer,
  allOrder: getAllOrderReducer,
  address: addressReducer,
  orderByUser: getOrderByUserReducer,
  orderInfo: OrderInfoReducer,
  payOrder: orderPayReducer,
  reviewDelete: deleteReviewReducer,
  
  allContacts: contactReducer,
  contactCreate: contactCreateReducer,

  typeProductDetails: typeProductDetailsReducer,
  allTypeProduct: ListTypeProductReducer,
  updateTypeProduct: ListTypeProductReducer,
  detailType: TypeProductReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;