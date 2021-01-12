import {
    GET_ALL_OPENID_CLIENTS,
    GET_ALL_OPENID_CLIENTS_RESPONSE
  } from "../actions/types";
  
  const INIT_STATE = {
    openidClients: [],
    loading: true
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_ALL_OPENID_CLIENTS:
        console.log("********* GET_ALL_OPENID_CLIENTS reducer**********");
        return {
          ...state,
          loading: true
        };
      case GET_ALL_OPENID_CLIENTS_RESPONSE:
        console.log("********* GET_ALL_OPENID_CLIENTS_RESPONSE reducer**********");
        return { ...state, openidClients: action.payload.openidClients, loading: false };
      default:
        return {
          ...state
        };
    }
  };
  