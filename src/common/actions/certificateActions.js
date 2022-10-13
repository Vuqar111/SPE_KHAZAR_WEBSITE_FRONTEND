import Axios from "axios";
import {
  CERTIFICATE_CREATE_FAIL,
  CERTIFICATE_CREATE_REQUEST,
  CERTIFICATE_CREATE_SUCCESS,
  CERTIFICATE_DETAILS_FAIL,
  CERTIFICATE_DETAILS_REQUEST,
  CERTIFICATE_DETAILS_SUCCESS,
  CERTIFICATE_LIST_FAIL,
  CERTIFICATE_LIST_REQUEST,
  CERTIFICATE_LIST_SUCCESS,
  CERTIFICATE_UPDATE_REQUEST,
  CERTIFICATE_UPDATE_SUCCESS,
  CERTIFICATE_UPDATE_FAIL,
  CERTIFICATE_DELETE_REQUEST,
  CERTIFICATE_DELETE_FAIL,
  CERTIFICATE_DELETE_SUCCESS,
} from "../constants/certificateConstants";

export const listCertificates = () => async (dispatch) => {
  dispatch({
    type: CERTIFICATE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `https://spekhazarwebsitebackend.vercel.app/api/certificates`
    );
    dispatch({ type: CERTIFICATE_LIST_SUCCESS, payload: data.certificates });
  } catch (error) {
    dispatch({ type: CERTIFICATE_LIST_FAIL, payload: error.message });
  }
};

export const detailsCertificate = (certificateId) => async (dispatch) => {
  dispatch({ type: CERTIFICATE_DETAILS_REQUEST, payload: certificateId });
  try {
    const { data } = await Axios.get(
      `https://spekhazarwebsitebackend.vercel.app/api/certificates/${certificateId}`
    );
    dispatch({ type: CERTIFICATE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CERTIFICATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createCertificate = () => async (dispatch, getState) => {
  dispatch({ type: CERTIFICATE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "https://spekhazarwebsitebackend.vercel.app/api/certificates",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: CERTIFICATE_CREATE_SUCCESS,
      payload: data.certificate,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CERTIFICATE_CREATE_FAIL, payload: message });
  }
};
export const updateCertificate =
  (certificate) => async (dispatch, getState) => {
    dispatch({ type: CERTIFICATE_UPDATE_REQUEST, payload: certificate });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `https://spekhazarwebsitebackend.vercel.app/api/certificates/${certificate._id}`,
        certificate,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CERTIFICATE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CERTIFICATE_UPDATE_FAIL, error: message });
    }
  };
export const deleteCertificate =
  (certificateId) => async (dispatch, getState) => {
    dispatch({ type: CERTIFICATE_DELETE_REQUEST, payload: certificateId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = Axios.delete(
        `https://spekhazarwebsitebackend.vercel.app/api/certificates/${certificateId}`,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: CERTIFICATE_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CERTIFICATE_DELETE_FAIL, payload: message });
    }
  };
