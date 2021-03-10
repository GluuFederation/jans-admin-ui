export default class ScriptApi {
  constructor(api) {
    this.api = api
  }

  // Get all custom scripts
  getAllCustomScript = () => {
    return new Promise((resolve, reject) => {
      this.api.getConfigScripts((error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  addCustomScript = (data) => {
    return new Promise((resolve, reject) => {
      this.api.postConfigScripts(data, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  editCustomScript = (data) => {
    return new Promise((resolve, reject) => {
      this.api.putConfigScripts(data, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  //Get script by inum
  getCustomScript = async (inum) => {
    return new Promise((resolve, reject) => {
      this.api.getConfigScriptsByInum(inum, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  //Get script by type
  getCustomScriptByType = async (type,opts) => {
	  console.log(' ScriptApi getCustomScriptByType - type = '+type+' , opts = '+opts);
    return new Promise((resolve, reject) => {
      this.api.getConfigScriptsByType('person_authentication', opts,  (error, data) => {
        if (error) {
          reject(error)
        } else {
        	  console.log(' ScriptApi getCustomScriptByType - data ='+data);
        	  console.log(' ScriptApi getCustomScriptByType - data ='+data.map);
          resolve(data)
        }
      })
    })
  }

  deleteCustomScript = async (inum) => {
    return new Promise((resolve, reject) => {
      this.api.deleteConfigScriptsByInum(inum, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}
