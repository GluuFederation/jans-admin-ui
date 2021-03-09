/**
 * OAuth Scopes Sagas
 */
import { call, all, put, fork, takeLatest, select } from 'redux-saga/effects'
import { isFourZeroOneError, hasApiToken } from '../../utils/TokenController'
import {
	getScopesResponse,
	getScopeResponse,
	addScopeResponse,
	editScopeResponse,
	deleteScopeResponse,
    setApiError,
} from '../actions/ScopeActions'
import {
	  GET_SCOPES,
	  GET_SCOPE_BY_INUM,
	  ADD_SCOPE,
	  EDIT_SCOPE,
	  DELETE_SCOPE,
	} from "../actions/types";

import ScopeApi from '../api/ScopeApi'
import { getClient } from '../api/base'
const JansConfigApi = require('jans_config_api')

export function* getScopeByInum() {
  try {
    const scopeApi = yield* newFunction()
    const data = yield call(scopeApi.getScope)
    yield put(deleteScopeResponse(data))
  } catch (e) {
    yield put(setApiError(e))
  }
}

export function* getScopes() {
  try {
    const scopeApi = yield* newFunction()
    const data = yield call(scopeApi.getAllScopes)
    yield put(getScopesResponse(data))
  } catch (e) {
    console.log('============================' + e)
    yield put(setApiError(e))
  }
}

export function* addScope({ payload }) {
	  try {
	    const scopeApi = yield* newFunction()
	    console.log('Scope Saga - addScope - data = '+payload.data)
	    const data = yield call(scopeApi.addNewScope, payload.data)
	    yield put(addScopeResponse(data))
	  } catch (error) {
	    yield put(setApiError(error))
	  }
	}

	export function* editScope({ payload }) {
	  try {
	    const scopeApi = yield* newFunction()
	    const data = yield call(scopeApi.editAScope, payload.data)
	    yield put(editScopeResponse(data))
	  } catch (error) {
	    yield put(setApiError(error))
	  }
	}

	export function* deleteScope({ payload }) {
	  try {
	    const scopeApi = yield* newFunction()
	    const data = yield call(scopeApi.deleteScope, payload.data)
	    yield put(deleteScopeResponse(data))
	  } catch (error) {
	    yield put(setApiError(error))
	  }
	}
	
function* newFunction() {
  const token = yield select((state) => state.authReducer.token.access_token)
  const issuer = yield select((state) => state.authReducer.issuer)
  const api = new JansConfigApi.OAuthScopesApi(
    getClient(JansConfigApi, token, issuer),
  )
  return new ScopeApi(api)
}

export function* watchGetScopeByInum() {
  yield takeLatest(GET_SCOPE_BY_INUM, getScopeByInum)
}
export function* watchGetScopes() {
  yield takeLatest(GET_SCOPES, getScopes)
}
export function* watchAddScope() {
	  yield takeLatest(ADD_SCOPE, addScope)
}
export function* watchEditScope() {
	  yield takeLatest(EDIT_SCOPE, editScope)
}
export function* watchDeleteScope() {
	  yield takeLatest(DELETE_SCOPE, deleteScope)
}

export default function* rootSaga() {
  yield all([fork(watchGetScopeByInum), 
	  fork(watchGetScopes),
	  fork(watchAddScope),
	  fork(watchEditScope),
	  fork(watchDeleteScope)
	  ])
}
