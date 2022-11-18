import Axios from "axios";
import {
  BLOG_CREATE_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_FAIL,
  BLOG_DELETE_SUCCESS,
} from "../constants/blogConstants";

const baseUrl = "https://spekhazarwebsitebackend.vercel.app/";

export const listBlogs = () => async (dispatch) => {
  dispatch({
    type: BLOG_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(baseUrl + "api/blogs");
    dispatch({ type: BLOG_LIST_SUCCESS, payload: data.blogs });
  } catch (error) {
    dispatch({ type: BLOG_LIST_FAIL, payload: error.message });
  }
};

export const detailsBlog = (blogId) => async (dispatch) => {
  dispatch({ type: BLOG_DETAILS_REQUEST, payload: blogId });
  try {
    const { data } = await Axios.get(baseUrl + "api/blogs/" + blogId);
    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBlog = () => async (dispatch, getState) => {
  dispatch({ type: BLOG_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      baseUrl + "api/blogs",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: BLOG_CREATE_SUCCESS,
      payload: data.blog,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BLOG_CREATE_FAIL, payload: message });
  }
};
export const updateBlog = (blog) => async (dispatch, getState) => {
  dispatch({ type: BLOG_UPDATE_REQUEST, payload: blog });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(baseUrl + "api/blogs/" + blog._id, blog, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BLOG_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BLOG_UPDATE_FAIL, error: message });
  }
};
export const deleteBlog = (blogId) => async (dispatch, getState) => {
  dispatch({ type: BLOG_DELETE_REQUEST, payload: blogId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(baseUrl + "api/blogs/" + blogId, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });

    dispatch({ type: BLOG_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BLOG_DELETE_FAIL, payload: message });
  }
};
