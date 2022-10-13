const {
    CERTIFICATE_CREATE_FAIL,
    CERTIFICATE_CREATE_REQUEST,
    CERTIFICATE_CREATE_SUCCESS,
    CERTIFICATE_CREATE_RESET,
    CERTIFICATE_DETAILS_FAIL,
    CERTIFICATE_DETAILS_REQUEST,
    CERTIFICATE_DETAILS_SUCCESS,
    CERTIFICATE_LIST_FAIL,
    CERTIFICATE_LIST_REQUEST,
    CERTIFICATE_LIST_SUCCESS,
    CERTIFICATE_UPDATE_REQUEST,
    CERTIFICATE_UPDATE_SUCCESS,
    CERTIFICATE_UPDATE_FAIL,
    CERTIFICATE_UPDATE_RESET,
    CERTIFICATE_DELETE_REQUEST,
    CERTIFICATE_DELETE_FAIL,
    CERTIFICATE_DELETE_SUCCESS,
    CERTIFICATE_DELETE_RESET,
  } = require("../constants/certificateConstants");
  
  export const certificateListReducer = (
    state = { loading: true, certificates: [] },
    action
  ) => {
    switch (action.type) {
      case CERTIFICATE_LIST_REQUEST:
        return { loading: true };
      case CERTIFICATE_LIST_SUCCESS:
        return { loading: false, certificates: action.payload };
      case CERTIFICATE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const certificateDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case CERTIFICATE_DETAILS_REQUEST:
        return { loading: true };
      case CERTIFICATE_DETAILS_SUCCESS:
        return { loading: false, certificate: action.payload };
      case CERTIFICATE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const certificateCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CERTIFICATE_CREATE_REQUEST:
        return { loading: true };
      case CERTIFICATE_CREATE_SUCCESS:
        return { loading: false, success: true, certificate: action.payload };
      case CERTIFICATE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CERTIFICATE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const certificateUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case CERTIFICATE_UPDATE_REQUEST:
        return { loading: true };
      case CERTIFICATE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case CERTIFICATE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case CERTIFICATE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const certificateDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case CERTIFICATE_DELETE_REQUEST:
        return { loading: true };
      case CERTIFICATE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case CERTIFICATE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case CERTIFICATE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  