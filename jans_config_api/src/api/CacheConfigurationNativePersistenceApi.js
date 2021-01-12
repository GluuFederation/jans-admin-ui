/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import NativePersistenceConfiguration from '../model/NativePersistenceConfiguration';
import PatchRequest from '../model/PatchRequest';

/**
* CacheConfigurationNativePersistence service.
* @module api/CacheConfigurationNativePersistenceApi
* @version 1.0.0
*/
export default class CacheConfigurationNativePersistenceApi {

    /**
    * Constructs a new CacheConfigurationNativePersistenceApi. 
    * @alias module:api/CacheConfigurationNativePersistenceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getConfigCacheNativePersistence operation.
     * @callback module:api/CacheConfigurationNativePersistenceApi~getConfigCacheNativePersistenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NativePersistenceConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns native persistence cache configuration.
     * Returns native persistence cache configuration.
     * @param {module:api/CacheConfigurationNativePersistenceApi~getConfigCacheNativePersistenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NativePersistenceConfiguration}
     */
    getConfigCacheNativePersistence(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NativePersistenceConfiguration;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/config/cache/native-persistence', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchConfigCacheNativePersistence operation.
     * @callback module:api/CacheConfigurationNativePersistenceApi~patchConfigCacheNativePersistenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NativePersistenceConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partially modifies Native Persistence cache configuration.
     * Partially modifies Native Persistence cache configuration.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/PatchRequest>} opts.patchRequest 
     * @param {module:api/CacheConfigurationNativePersistenceApi~patchConfigCacheNativePersistenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NativePersistenceConfiguration}
     */
    patchConfigCacheNativePersistence(opts, callback) {
      opts = opts || {};
      let postBody = opts['patchRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json-patch+json'];
      let accepts = ['application/json'];
      let returnType = NativePersistenceConfiguration;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/config/cache/native-persistence', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putConfigCacheNativePersistence operation.
     * @callback module:api/CacheConfigurationNativePersistenceApi~putConfigCacheNativePersistenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NativePersistenceConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates native persistence cache configuration.
     * Updates native persistence cache configuration.
     * @param {Object} opts Optional parameters
     * @param {module:model/NativePersistenceConfiguration} opts.nativePersistenceConfiguration 
     * @param {module:api/CacheConfigurationNativePersistenceApi~putConfigCacheNativePersistenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NativePersistenceConfiguration}
     */
    putConfigCacheNativePersistence(opts, callback) {
      opts = opts || {};
      let postBody = opts['nativePersistenceConfiguration'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['jans-auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NativePersistenceConfiguration;
      return this.apiClient.callApi(
        '/jans-config-api/api/v1/config/cache/native-persistence', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
