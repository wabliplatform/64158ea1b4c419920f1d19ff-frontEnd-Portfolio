/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Posts from '../model/Posts';

/**
* Posts service.
* @module api/PostsApi
* @version 1.0.0
*/
export default class PostsApi {

    /**
    * Constructs a new PostsApi. 
    * @alias module:api/PostsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createposts operation.
     * @callback module:api/PostsApi~createpostsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Posts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Posts} posts data to be created
     * @param {module:api/PostsApi~createpostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Posts}
     */
    createposts(posts, callback) {
      let postBody = posts;
      // verify the required parameter 'posts' is set
      if (posts === undefined || posts === null) {
        throw new Error("Missing the required parameter 'posts' when calling createposts");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Posts;
      return this.apiClient.callApi(
        '/posts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteposts operation.
     * @callback module:api/PostsApi~deletepostsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} postsId the Id parameter
     * @param {module:api/PostsApi~deletepostsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteposts(postsId, callback) {
      let postBody = null;
      // verify the required parameter 'postsId' is set
      if (postsId === undefined || postsId === null) {
        throw new Error("Missing the required parameter 'postsId' when calling deleteposts");
      }

      let pathParams = {
        'postsId': postsId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/posts/{postsId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllposts operation.
     * @callback module:api/PostsApi~getAllpostsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Posts>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/PostsApi~getAllpostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Posts>}
     */
    getAllposts(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Posts];
      return this.apiClient.callApi(
        '/posts/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getposts operation.
     * @callback module:api/PostsApi~getpostsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Posts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} postsId the Id parameter
     * @param {module:api/PostsApi~getpostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Posts}
     */
    getposts(postsId, callback) {
      let postBody = null;
      // verify the required parameter 'postsId' is set
      if (postsId === undefined || postsId === null) {
        throw new Error("Missing the required parameter 'postsId' when calling getposts");
      }

      let pathParams = {
        'postsId': postsId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Posts;
      return this.apiClient.callApi(
        '/posts/{postsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateposts operation.
     * @callback module:api/PostsApi~updatepostsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Posts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} postsId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Posts} opts.posts data to be updated
     * @param {module:api/PostsApi~updatepostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Posts}
     */
    updateposts(postsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['posts'];
      // verify the required parameter 'postsId' is set
      if (postsId === undefined || postsId === null) {
        throw new Error("Missing the required parameter 'postsId' when calling updateposts");
      }

      let pathParams = {
        'postsId': postsId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Posts;
      return this.apiClient.callApi(
        '/posts/{postsId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
