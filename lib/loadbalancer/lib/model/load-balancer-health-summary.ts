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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A health status summary for the specified load balancer.
 */
export interface LoadBalancerHealthSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the load balancer the health status is associated with.
   *
   */
  "loadBalancerId": string;
  /**
   * The overall health status of the load balancer.
   * <p>
   *  **OK:** All backend sets associated with the load balancer return a status of `OK`.
   * <p>
   *  **WARNING:** At least one of the backend sets associated with the load balancer returns a status of `WARNING`,
   * no backend sets return a status of `CRITICAL`, and the load balancer life cycle state is `ACTIVE`.
   * <p>
   *  **CRITICAL:** One or more of the backend sets associated with the load balancer return a status of `CRITICAL`.
   * <p>
   *  **UNKNOWN:** If any one of the following conditions is true:
   * <p>
   *  The load balancer life cycle state is not `ACTIVE`.
   * <p>
   *  No backend sets are defined for the load balancer.
   * <p>
   *  More than half of the backend sets associated with the load balancer return a status of `UNKNOWN`, none of the backend
   *        sets return a status of `WARNING` or `CRITICAL`, and the load balancer life cycle state is `ACTIVE`.
   * <p>
   *  The system could not retrieve metrics for any reason.
   *
   */
  "status": LoadBalancerHealthSummary.Status;
}

export namespace LoadBalancerHealthSummary {
  export enum Status {
    Ok = "OK",
    Warning = "WARNING",
    Critical = "CRITICAL",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LoadBalancerHealthSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LoadBalancerHealthSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
