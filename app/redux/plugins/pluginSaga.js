/**
 * Plugin Sagas
 */

import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import {
  GET_ALL_PLUGIN,
  GET_ALL_PLUGIN_RESPONSE,
} from './types'

import {
	getAllPluginResponse,
} from './pluginAction'

import {
  fetchPluginList,
} from './pluginApi'

function* getPluginWorker() {
  try {
    const response = yield call(fetchPluginList)
    if (response) {
      yield put(getAllPluginResponse(response))
      return
    }
  } catch (error) {
    console.log('Problems getting Plugin details.', error)
  }
  yield put(getAllPluginsResponse())
}


//watcher sagas
export function* getPluginWatcher() {
  yield takeEvery(GET_ALL_PLUGIN, getPluginWorker)
}


/**
 * Plugin Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(getPluginWatcher),
  ])
}
