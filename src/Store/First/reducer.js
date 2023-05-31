import {
  GET_HOME_DATA_REQUEST,
  GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAILED,
} from "./actiontypes";

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

    default:
      break;
  }
  return state;
};
