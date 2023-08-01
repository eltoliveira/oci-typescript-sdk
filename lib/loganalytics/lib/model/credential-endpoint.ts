/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The endpoint from where to fetch a credential, for example, the OAuth 2.0 token.
 */
export interface CredentialEndpoint {
  /**
   * The credential endpoint name.
   */
  "name": string;
  /**
   * The credential endpoint description.
   */
  "description"?: string;
  /**
   * The credential endpoint model.
   */
  "model"?: string;
  /**
   * The endpoint unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endpointId"?: number;
  "request": model.EndpointRequest;
  "response"?: model.EndpointResponse;
  "proxy"?: model.EndpointProxy;
}

export namespace CredentialEndpoint {
  export function getJsonObj(obj: CredentialEndpoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "request": obj.request ? model.EndpointRequest.getJsonObj(obj.request) : undefined,
        "response": obj.response ? model.EndpointResponse.getJsonObj(obj.response) : undefined,
        "proxy": obj.proxy ? model.EndpointProxy.getJsonObj(obj.proxy) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CredentialEndpoint): object {
    const jsonObj = {
      ...obj,
      ...{
        "request": obj.request
          ? model.EndpointRequest.getDeserializedJsonObj(obj.request)
          : undefined,
        "response": obj.response
          ? model.EndpointResponse.getDeserializedJsonObj(obj.response)
          : undefined,
        "proxy": obj.proxy ? model.EndpointProxy.getDeserializedJsonObj(obj.proxy) : undefined
      }
    };

    return jsonObj;
  }
}
