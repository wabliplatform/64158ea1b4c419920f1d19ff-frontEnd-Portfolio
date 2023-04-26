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

import ApiClient from '../ApiClient';

/**
 * The Posts model module.
 * @module model/Posts
 * @version 1.0.0
 */
class Posts {
    /**
     * Constructs a new <code>Posts</code>.
     * @alias module:model/Posts
     */
    constructor() { 
        
        Posts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Posts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Posts} obj Optional instance to populate.
     * @return {module:model/Posts} The populated <code>Posts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Posts();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Posts.prototype['_id'] = undefined;






export default Posts;

