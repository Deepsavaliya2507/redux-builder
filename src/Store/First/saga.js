import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../utils/axios";
import {
  getHomeDataFailed,
  getHomeDataSuccess,
} from "./action";
import { GET_HOME_DATA_REQUEST } from "./actiontypes";

function* getHomePageContent() {
  try {
    const response = yield call(get, `/posts`);
    console.log(response,'response');
    yield put(getHomeDataSuccess(response));
  } catch (error) {
    yield put(getHomeDataFailed(error));
  }
}

function* contentSaga() {
  yield takeLatest(GET_HOME_DATA_REQUEST, getHomePageContent);
}

export default contentSaga;