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
 * The Descs model module.
 * @module model/Descs
 * @version 1.0.0
 */
class Descs {
    /**
     * Constructs a new <code>Descs</code>.
     * @alias module:model/Descs
     * @param desc {String} 
     */
    constructor(desc) { 
        
        Descs.initialize(this, desc);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, desc) { 
        obj['desc'] = desc;
    }

    /**
     * Constructs a <code>Descs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Descs} obj Optional instance to populate.
     * @return {module:model/Descs} The populated <code>Descs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Descs();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Descs.prototype['_id'] = undefined;

/**
 * @member {String} desc
 */
Descs.prototype['desc'] = undefined;






export default Descs;
