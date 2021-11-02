import { call, takeEvery, put } from "redux-saga/effects";
// import { api } from '../services'
import * as types from "../reducers/test";

export function* testFlow(payload) {
  console.log("@@@@ enter tempFlow");
  console.log(payload);
  const { data } = payload;
  let res = null;
  try {
    yield put({
      type: types.TEST_SUCCESS,
      data,
    });
    // res = yield call(
    //   api.temp.test,
    //   {
    //     id: payload.id,
    //     token: payload.token
    //   }
    // )
    // res = yield call(
    //   api.temp.excel,
    //   {
    //     roomKey: payload.roomKey,
    //     token: payload.token
    //   }
    // )
  } catch (e) {
    console.error(e);
  }
}

export default function* watch() {
  yield takeEvery(types.TEST, testFlow);
}
