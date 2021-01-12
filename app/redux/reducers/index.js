/**
 * App Reducers
 */
import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import scopeReducer from "./ScopeReducer";
import openidClientsReducer from "./OpenidClientsReducer";

const reducers = combineReducers({
  authReducer,
  scopeReducer,
  openidClientsReducer
});

export default reducers;
