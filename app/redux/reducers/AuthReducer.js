/**
 * Auth Reducers
 */
import {
  GET_OAUTH2_CONFIG,
  GET_OAUTH2_CONFIG_RESPONSE,
  USERINFO_REQUEST,
  USERINFO_RESPONSE,
  GET_API_ACCESS_TOKEN,
  GET_API_ACCESS_TOKEN_RESPONSE
} from "../actions/types";

/**
 * initial auth user
 */
const INIT_STATE = {
  isAuthenticated: false,
  userinfo: null,
  userinfo_jwt: null,
  token: null,
  userScopes: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_OAUTH2_CONFIG:
      return {
        ...state,
        isAuthenticated: false
      };
    case GET_OAUTH2_CONFIG_RESPONSE:
      return {
        ...state,
        isAuthenticated: false,
        config: action.payload.config
      };
    case USERINFO_REQUEST:
      return {
        ...state
      };
    case USERINFO_RESPONSE:
      return {
        ...state,
        userinfo: action.payload.uclaims,
        userinfo_jwt: action.payload.ujwt,
        isAuthenticated: true
      };
    case GET_API_ACCESS_TOKEN:
      console.log(" GET_API_ACCESS_TOKEN");
      return {
        ...state
      };

    case GET_API_ACCESS_TOKEN_RESPONSE:
      console.log(" AuthReducer.js::: GET_API_ACCESS_TOKEN_RESPONSE - action.payload.accessToken = "+action.payload.accessToken);
      if (action.payload.accessToken) {
        localStorage.setItem("gluu.api.token", action.payload.accessToken);
      }
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return {
        ...state
      };
  }
};
