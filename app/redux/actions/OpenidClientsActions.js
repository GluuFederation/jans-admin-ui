/**
 * OPENID Clients  Actions
 */
import {
    GET_ALL_OPENID_CLIENTS,
    GET_ALL_OPENID_CLIENTS_RESPONSE
  } from "./types";
  
  export const getAllOpenidClients = () => ({
    type: GET_ALL_OPENID_CLIENTS
  });
  
  export const getAllOpenidClientsResponse = openidClients => ({
    type: GET_ALL_OPENID_CLIENTS_RESPONSE,
    payload: { openidClients }
  });

  