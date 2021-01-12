/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The logical configuration of the API exposed by a deployment.
 */
export interface ApiSpecification {
  "requestPolicies"?: model.ApiSpecificationRequestPolicies;
  "loggingPolicies"?: model.ApiSpecificationLoggingPolicies;
  /**
   * A list of routes that this API exposes.
   */
  "routes"?: Array<model.ApiSpecificationRoute>;
}

export namespace ApiSpecification {
  export function getJsonObj(obj: ApiSpecification): object {
    const jsonObj = {
      ...obj,
      ...{
        "requestPolicies": obj.requestPolicies
          ? model.ApiSpecificationRequestPolicies.getJsonObj(obj.requestPolicies)
          : undefined,
        "loggingPolicies": obj.loggingPolicies
          ? model.ApiSpecificationLoggingPolicies.getJsonObj(obj.loggingPolicies)
          : undefined,
        "routes": obj.routes
          ? obj.routes.map(item => {
              return model.ApiSpecificationRoute.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
