/**
 * Streaming Service API
 * The API for the Streaming Service.
 * OpenAPI spec version: 20180418
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
 * Optional parameters if a private stream pool is requested.
 */
export interface PrivateEndpointDetails {
  /**
   * If specified, the stream pool will be private and only accessible from inside that subnet.
   * Producing-to and consuming-from a stream inside a private stream pool can also only be done from inside the subnet.
   * That value cannot be changed.
   *
   */
  "subnetId"?: string;
  /**
   * The optional private IP you want to be associated with your private stream pool.
   * That parameter can only be specified when the subnetId parameter is set. It cannot be changed.
   * The private IP needs to be part of the CIDR range of the specified subnetId or the creation will fail.
   * If not specified a random IP inside the subnet will be chosen.
   * After the stream pool is created, a custom FQDN, pointing to this private IP, is created.
   * The FQDN is then used to access the service instead of the private IP.
   *
   */
  "privateEndpointIp"?: string;
  /**
   * The optional list of network security groups to be used with the private endpoint of the stream pool.
   * That value cannot be changed.
   *
   */
  "nsgIds"?: Array<string>;
}

export namespace PrivateEndpointDetails {
  export function getJsonObj(obj: PrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
