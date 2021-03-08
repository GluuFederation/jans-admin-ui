import { getDefaultClient } from "./base"
const JansConfigApi = require("jans_config_api")
const api = new JansConfigApi.OAuthScopesApi(getDefaultClient(JansConfigApi))
import Scope from "../../../jans_config_api/dist/model/Scope";

// Get All scopes
export const getAllScopes = () => {
  return new Promise((resolve, reject) => {
    api.getOauthScopes({}, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

// Get scope by inum
export const getScope = async (inum)  => {
  return new Promise((resolve, reject) => {
    api.getOauthScopesByInum(inum, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

// Delete existing scope
export const deleteScope = async (inum)  => {
  return new Promise((resolve, reject) => {
    api.deleteOauthScopesById(inum, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}


export const addNewScope = data => {
  console.log("scope-ap - addNewScope() - data = "+data);
  var aScope = createScopeObject(data);
  console.log("scope-ap - addNewScope() - aScope = "+aScope);
  return new Promise((resolve, reject) => {
    api.postOauthScopes(cScript, (error, data, response) => {
      console.log("scope-ap - addNewScope() - after postConfigScripts - data = "+data);
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

/*export const addNewScope = async (input) => {
	console.log('Scope Api - input - '+input)
	  return new Promise((resolve, reject) => {
	    api.postOauthScopes(input, (error, data) => {
	      if (error) {
	        reject(error)
	      } else {
	        resolve(data)
	      }
	    })
	  })
	}*/

	export const editAScope = async (data) => {
	  return new Promise((resolve, reject) => {
	    api.putOauthScopes(data, (error, data) => {
	      if (error) {
	        reject(error)
	      } else {
	        resolve(data)
	      }
	    })
	  })
	}

	function createScopeObject(data) {
		  console.log("scope-api.js - createScopeObject() - data = "+data);
		    scope = new JansConfigApi.Scope();
		    scope.id = data.id;
		    scope.scopeType = data.scopeType;		 
		  console.log("scope-api.js - createScopeObject() - scope = "+scope);
		  return scope;
		  
		}
