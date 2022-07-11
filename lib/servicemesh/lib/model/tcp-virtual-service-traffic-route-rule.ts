/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20210930
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
 * Rule for routing incoming Virtual Service traffic with TCP protocol
 */
export interface TcpVirtualServiceTrafficRouteRule extends model.VirtualServiceTrafficRouteRule {
  "type": string;
}

export namespace TcpVirtualServiceTrafficRouteRule {
  export function getJsonObj(
    obj: TcpVirtualServiceTrafficRouteRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VirtualServiceTrafficRouteRule.getJsonObj(
            obj
          ) as TcpVirtualServiceTrafficRouteRule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TCP";
  export function getDeserializedJsonObj(
    obj: TcpVirtualServiceTrafficRouteRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VirtualServiceTrafficRouteRule.getDeserializedJsonObj(
            obj
          ) as TcpVirtualServiceTrafficRouteRule)),
      ...{}
    };

    return jsonObj;
  }
}
