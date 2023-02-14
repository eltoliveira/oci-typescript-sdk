/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * Represents a load balancer that is attached to an instance pool.
 */
export interface InstancePoolLoadBalancerAttachment {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the load balancer attachment.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the instance pool of the load balancer attachment.
   *
   */
  "instancePoolId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the load balancer attached to the instance pool.
   *
   */
  "loadBalancerId": string;
  /**
   * The name of the backend set on the load balancer.
   */
  "backendSetName": string;
  /**
   * The port value used for the backends. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * Indicates which VNIC on each instance in the instance pool should be used to associate with the load balancer.
   * Possible values are \"PrimaryVnic\" or the displayName of one of the secondary VNICs on the instance configuration
   * that is associated with the instance pool.
   *
   */
  "vnicSelection": string;
  /**
   * The status of the interaction between the instance pool and the load balancer.
   */
  "lifecycleState": InstancePoolLoadBalancerAttachment.LifecycleState;
}

export namespace InstancePoolLoadBalancerAttachment {
  export enum LifecycleState {
    Attaching = "ATTACHING",
    Attached = "ATTACHED",
    Detaching = "DETACHING",
    Detached = "DETACHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstancePoolLoadBalancerAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstancePoolLoadBalancerAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
