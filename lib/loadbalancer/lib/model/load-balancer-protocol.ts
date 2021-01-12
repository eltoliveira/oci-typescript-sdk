/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * A protocol that defines the type of traffic accepted by a listener.
 */
export interface LoadBalancerProtocol {
  /**
    * The name of a protocol.
* <p>
Example: 'HTTP'
* 
    */
  "name": string;
}

export namespace LoadBalancerProtocol {
  export function getJsonObj(obj: LoadBalancerProtocol): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
