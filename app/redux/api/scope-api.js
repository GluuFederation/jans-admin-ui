import { getDefaultClient } from "./base";
const JansConfigApi = require("jans_config_api");
const api = new JansConfigApi.OAuthScopesApi(getDefaultClient(JansConfigApi));

// Get All scopes
export const getAllScopes = () => {
  return new Promise((resolve, reject) => {
    api.getOauthScopes({}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

// Get scope by inum
export const getScope = async inum => {
  return new Promise((resolve, reject) => {
    api.getOauthScopesByInum(inum, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

// Delete existing scope
export const deleteScope = async inum => {
  return new Promise((resolve, reject) => {
    api.deleteOauthScopesById(inum, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

export const addNewScope = (data) => {
	  return new Promise((resolve, reject) => {
	    api.postOauthScopes(data, (error, data) => {
	      if (error) {
	        reject(error)
	      } else {
	        resolve(data)
	      }
	    })
	  })
	};

	export const editAScope = (data) => {
	  return new Promise((resolve, reject) => {
	    api.putOauthScopes(data, (error, data) => {
	      if (error) {
	        reject(error)
	      } else {
	        resolve(data)
	      }
	    })
	  })
	};

