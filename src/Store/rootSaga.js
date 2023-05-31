import { all, fork } from "redux-saga/effects";
import firstSaga from "./First/saga";

export default function* rootSaga() {
  yield all([fork(firstSaga)]);
}