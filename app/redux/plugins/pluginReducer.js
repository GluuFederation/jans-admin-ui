/**
 * Plugin Reducers
 */
import {
	GET_ALL_PLUGIN,
	GET_ALL_PLUGIN_RESPONSE,
} from './types'

/**
 * initial plugin state
 */
const INIT_STATE = {
  hasPlugins: false, 
  title: null,
  key: null,
  path: null,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PLUGIN:
      return {
        ...state,
      }
    case GET_ALL_PLUGIN_RESPONSE:
      return {
        ...state,
        title: action.payload.title,
        key: action.payload.key,
        path: action.payload.path,
        hasPlugins: true,
      }
    default:
      return {
        ...state,
      }
  }
}
