/**
 * OAuth Scopes Sagas
 */
import { call, all, put, fork, takeEvery } from "redux-saga/effects";
import { getOpenidClients } from "../api/openidClients-api";
import {
    getAllOpenidClientsResponse
} from "../actions/OpenidClientsActions";
import { GET_ALL_OPENID_CLIENTS } from "../actions/types";

export function* getAllOpenidClients() {
  console.log("***********calling the get all openid clients**********");
  const data = yield call(getOpenidClients);
  yield put(getAllOpenidClientsResponse(data));
}

export function* watchGetAllOpenidClients() {
  yield takeEvery(GET_ALL_OPENID_CLIENTS, getAllOpenidClients);
}

export default function* rootSaga() {
  yield all([fork(watchGetAllOpenidClients)]);
}
