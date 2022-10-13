import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
  productCategoryListReducer,
  productReviewCreateReducer,
} from "./common/reducers/productReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./common/reducers/userReducers";
import {
  blogCreateReducer,
  blogDeleteReducer,
  blogDetailsReducer,
  blogListReducer,
  blogUpdateReducer,
} from "./common/reducers/blogReducers";

import {
  recordCreateReducer,
  recordDeleteReducer,
  recordDetailsReducer,
  recordListReducer,
  recordUpdateReducer,
} from "./common/reducers/recordReducers";

import {
  bookCreateReducer,
  bookDeleteReducer,
  bookDetailsReducer,
  bookListReducer,
  bookUpdateReducer,
} from "./common/reducers/bookReducers";

import {
  galleryCreateReducer,
  galleryDeleteReducer,
  galleryDetailsReducer,
  galleryListReducer,
  galleryUpdateReducer,
} from "./common/reducers/galleryReducers";
import {
  certificateCreateReducer,
  certificateDeleteReducer,
  certificateDetailsReducer,
  certificateListReducer,
  certificateUpdateReducer,
} from './common/reducers/certificateReducers';
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  productCategoryList: productCategoryListReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  prodoctReviewCreate: productReviewCreateReducer,
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDelete: blogDeleteReducer,
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  bookCreate: bookCreateReducer,
  bookUpdate: bookUpdateReducer,
  bookDelete: bookDeleteReducer,
  recordList: recordListReducer,
  recordDetails: recordDetailsReducer,
  recordCreate: recordCreateReducer,
  recordUpdate: recordUpdateReducer,
  recordDelete: recordDeleteReducer,
  galleryList: galleryListReducer,
  galleryDetails: galleryDetailsReducer,
  galleryCreate: galleryCreateReducer,
  galleryUpdate: galleryUpdateReducer,
  galleryDelete: galleryDeleteReducer,
  certificateList: certificateListReducer,
  certificateDetails: certificateDetailsReducer,
  certificateCreate: certificateCreateReducer,
  certificateUpdate: certificateUpdateReducer,
  certificateDelete: certificateDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
