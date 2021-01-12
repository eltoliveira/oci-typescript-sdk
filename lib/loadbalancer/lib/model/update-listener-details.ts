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
 * The configuration details for updating a listener.
 */
export interface UpdateListenerDetails {
  /**
    * The name of the associated backend set.
* <p>
Example: `example_backend_set`
* 
    */
  "defaultBackendSetName": string;
  /**
    * The communication port for the listener.
* <p>
Example: `80`
* 
    */
  "port": number;
  /**
    * The protocol on which the listener accepts connection requests.
* To get a list of valid protocols, use the {@link #listProtocols(ListProtocolsRequest) listProtocols}
* operation.
* <p>
Example: `HTTP`
* 
    */
  "protocol": string;
  /**
   * An array of hostname resource names.
   */
  "hostnameNames"?: Array<string>;
  /**
    * The name of the set of path-based routing rules, {@link PathRouteSet},
* applied to this listener's traffic.
* <p>
Example: `example_path_route_set`
* 
    */
  "pathRouteSetName"?: string;
  "sslConfiguration"?: model.SSLConfigurationDetails;
  "connectionConfiguration"?: model.ConnectionConfiguration;
  /**
    * The names of the {@link RuleSet} to apply to the listener.
* <p>
Example: [\"example_rule_set\"]
* 
    */
  "ruleSetNames"?: Array<string>;
}

export namespace UpdateListenerDetails {
  export function getJsonObj(obj: UpdateListenerDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sslConfiguration": obj.sslConfiguration
          ? model.SSLConfigurationDetails.getJsonObj(obj.sslConfiguration)
          : undefined,
        "connectionConfiguration": obj.connectionConfiguration
          ? model.ConnectionConfiguration.getJsonObj(obj.connectionConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
