/**
 * OAuth Scopes Sagas
 */
import {
  call,
  all,
  put,
  fork,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { 
	getScope,
	getAllScopes,
	addNewScope,
	editAScope
	} from "../api/scope-api";
import {
  deleteScopeResponse,
  getScopesResponse,
  addScopeResponse,
  editScopeResponse,
  setApiError
} from "../actions/ScopeActions";
import { 
	GET_SCOPES, 
	GET_SCOPE_BY_INUM,
	ADD_SCOPE,
	EDIT_SCOPE
	} from "../actions/types";

export function* getScopeByInum() {
  try {
    const data = yield call(getScope);
    yield put(deleteScopeResponse(data));
  } catch (e) {
    yield put(setApiError(e));
  }
}

export function* getScopes() {
  try {
    const data = yield call(getAllScopes);
    yield put(getScopesResponse(data));
  } catch (e) {
    yield put(setApiError(e));
  }
}

export function* addAScope() {
	  try {
	    const data = yield call(addNewScope);
	    yield put(addScopeResponse(data));
	  } catch (e) {
	    yield put(setApiError(e));
	  }
	}

export function* editScope() {
	  try {
	    const data = yield call(editAScope);
	    yield put(editScopeResponse(data));
	  } catch (e) {
	    yield put(setApiError(e));
	  }
	}

export function* watchGetScopeByInum() {
  yield takeEvery(GET_SCOPE_BY_INUM, getScopeByInum);
}
export function* watchGetScopes() {
  yield takeLatest(GET_SCOPES, getScopes);
}
export function* watchAddAScope() {
	yield takeLatest(ADD_SCOPE, addAScope);
}
export function* watchEditAScope() {
	yield takeLatest(EDIT_SCOPE, editScope);
}

export default function* rootSaga() {
  yield all([
	  fork(watchGetScopeByInum), 
	  fork(watchGetScopes),
	  fork(watchAddAScope),
	  fork(watchEditAScope)
	  ]);
}
