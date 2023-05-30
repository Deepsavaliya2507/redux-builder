import {
    GET_HOME_DATA_REQUEST,
    GET_HOME_DATA_SUCCESS,
    GET_HOME_DATA_FAILED,
    STORE_USER_INFO,   
    REMOVE_USER_INFO
  } from "./actiontypes";
  
  /**
   * Get All Post Api
   */
  export const getHomeDataRequest = (payload) => ({
    type: GET_HOME_DATA_REQUEST,
    payload,
  });
  
  export const getHomeDataSuccess = (data) => ({
    type: GET_HOME_DATA_SUCCESS,
    payload: data,
  });
  
  export const getHomeDataFailed = (error) => ({
    type: GET_HOME_DATA_FAILED,
    payload: error, 
  });
  
  export const storeUserDetails = (payload) => ({
    type:STORE_USER_INFO,
    payload
  })
  
  export const removeUserDetails = (payload) => ({
    type:REMOVE_USER_INFO,
    payload
  })
  