import {
  GET_JSON_CONFIG,
  GET_JSONCONFIG_RESPONSE,
  PATCH_JSON_CONFIG,
  PATCH_JSONCONFIG_RESPONSE,
} from '../actions/types'

const INIT_STATE = {
  configuration: {},
  loading: false,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_JSON_CONFIG:
      return {
        ...state,
        loading: true,
      }
    case GET_JSONCONFIG_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          configuration: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }

    case PATCH_JSON_CONFIG:
      return {
        ...state,
        loading: true,
      }
    case PATCH_JSONCONFIG_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          configuration: action.payload.data,
          loading: false,
        }
      } else {
        return {
          ...state,
          loading: false,
        }
      }
    default:
      return {
        ...state,
      }
  }
}