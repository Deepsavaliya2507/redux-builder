// import { HYDRATE } from "next-redux-wrapper";
import {
    GET_HOME_DATA_REQUEST,
    GET_HOME_DATA_SUCCESS,
    GET_HOME_DATA_FAILED,   
    STORE_USER_INFO,
    REMOVE_USER_INFO
  } from "./actionType";
  
  const initState = {
    loading: false,
    error: null,
    Firs: null,
    userInfomation: null,
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      case GET_HOME_DATA_REQUEST:
        state = { ...state, loading: true };
        break;
      case GET_HOME_DATA_SUCCESS:
        state = {
          ...state,
          loading: false,
          Firs: action.payload,
        };
        break;
      case STORE_USER_INFO:
        state = {
          ...state,
          loading: false,
          userInfomation: action.payload,
        };
        break;
      case REMOVE_USER_INFO:
        state = {
          ...state,
          loading: false,
          userInfomation: null,
        };
        break;
      case GET_HOME_DATA_FAILED:
        state = { ...state, loading: false, error: action.payload };
        break;
  
      default:
        break;
    }
    return state;
  };
  