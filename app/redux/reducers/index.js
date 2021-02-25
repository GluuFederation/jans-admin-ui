/**
 * App Reducers
 */
import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import scopeReducer from "./ScopeReducer";
import attributeReducer from "./AttributeReducer";
import openidClientReducer from "./OpenidClientReducer";
import customScriptReducer from "./CustomScriptReducer";
import pluginReducer from "../plugins/pluginReducer";

const reducers = combineReducers({
  authReducer,
  scopeReducer,
  attributeReducer,
  openidClientReducer,
  customScriptReducer,
  pluginReducer
});

export default reducers;
