/**
 * Plugin Reducers
 */
import {
	GET_ALL_PLUGIN,
	GET_ALL_PLUGIN_RESPONSE,
	  RESET,
	  SET_API_ERROR
} from './types'

/**
 * initial plugin state
 */
const INIT_STATE = {
		plugin: []
}

export default (state = INIT_STATE, action) => {
	  switch (action.type) {
	    case GET_ALL_PLUGIN:
	      return {
	        ...state,
	        loading: true
	      };
	    case GET_ALL_PLUGIN_RESPONSE:
	      return {
	        ...state,
	        items: action.payload.data,
	        loading: false,
	        hasApiError: false
	      };
	    case SET_API_ERROR:
	      return { ...state, loading: false, hasApiError: true };
	    case RESET:
	      return {
	        ...state,
	        items: INIT_STATE.items,
	        loading: INIT_STATE.loading,
	        hasApiError: INIT_STATE.hasApiError
	      };
	    default:
	      return {
	        ...state
	      };
	  }
	};
