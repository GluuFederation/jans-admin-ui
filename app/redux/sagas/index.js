/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// sagas
import authSagas from "./AuthSaga";
import scopesSagas from "./OAuthScopeSaga";
import openidClientsSagas from "./OpenidClientsSaga";

export default function* rootSaga() {
  yield all([authSagas(), scopesSagas(), openidClientsSagas() ]);
}
