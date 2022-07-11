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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * If authentication has been performed, validate whether the request scope (if any) applies to this route.
 *
 */
export interface AnyOfRouteAuthorizationPolicy extends model.RouteAuthorizationPolicy {
  /**
   * A user whose scope includes any of these access ranges is allowed on
   * this route. Access ranges are case-sensitive.
   *
   */
  "allowedScope": Array<string>;

  "type": string;
}

export namespace AnyOfRouteAuthorizationPolicy {
  export function getJsonObj(
    obj: AnyOfRouteAuthorizationPolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RouteAuthorizationPolicy.getJsonObj(obj) as AnyOfRouteAuthorizationPolicy)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ANY_OF";
  export function getDeserializedJsonObj(
    obj: AnyOfRouteAuthorizationPolicy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RouteAuthorizationPolicy.getDeserializedJsonObj(
            obj
          ) as AnyOfRouteAuthorizationPolicy)),
      ...{}
    };

    return jsonObj;
  }
}
