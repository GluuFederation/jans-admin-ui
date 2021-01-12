const JansConfigApi = require("jans_config_api");
const defaultClient = JansConfigApi.ApiClient.instance;
defaultClient.timeout = 50000;
const jansauth = defaultClient.authentications["jans-auth"];
defaultClient.basePath = "https://gluu.gasmyr.com".replace(/\/+$/, "");
defaultClient.defaultHeaders = "{'Access-Control-Allow-Origin', '*'}";

const callback = function(error, data, res) {
  if (error) {
    return error;
  } else {
    return data;
  }
};
const api = new JansConfigApi.OAuthOpenIDConnectClientsApi();

// Get All scopes
export const getOpenidClients = async () => {
  api.getOauthOpenidClients({}, callback);
};
