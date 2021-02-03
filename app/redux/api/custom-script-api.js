import { getDefaultClient } from "./base";
const JansConfigApi = require("jans_config_api");
const api = new JansConfigApi.CustomScriptsApi(getDefaultClient(JansConfigApi));

// Get all custom scripts
export const getAllCustomScript = () => {
  return new Promise((resolve, reject) => {
    api.getConfigScripts( (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

export const addCustomScript = data => {
  console.log("custom-script-api - addCustomScript() - data = "+data);
  var cScript = createCustomScript(data);
  console.log("custom-script-api - addCustomScript() - cScript = "+cScript);
  return new Promise((resolve, reject) => {
    api.postConfigScripts(cScript, (error, data, response) => {
      console.log("custom-script-api - addCustomScript() - after postConfigScripts - data = "+data);
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

export const editCustomScript = data => {
  return new Promise((resolve, reject) => {
    api.putConfigScripts(data, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

//Get script by inum
export const getCustomScript = async inum => {
  return new Promise((resolve, reject) => {
    api.getConfigScriptsByInum(inum, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

//Get script by type
export const getCustomScriptByType = async type => {
  return new Promise((resolve, reject) => {
    api.getConfigScriptsByType(type, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

export const deleteCustomScript = async inum => {
  return new Promise((resolve, reject) => {
    api.deleteConfigScriptsByInum(inum, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

function createCustomScript(data) {
  console.log("custom-script-api - getCustomScript() - data = "+data);
  var customScript = new JansConfigApi.CustomScript();
  customScript = data;
  console.log("custom-script-api - getCustomScript() - customScript = "+customScript);
  return customScript;
  
}

