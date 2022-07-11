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
 * A rule condition that checks client source IP against specified IP address or address range.
 *
 */
export interface SourceIpAddressCondition extends model.RuleCondition {
  /**
    * An IPv4 or IPv6 address range that the source IP address of an incoming packet must match.
* <p>
The service accepts only classless inter-domain routing (CIDR) format (x.x.x.x/y or x:x::x/y) strings.
* <p>
Specify 0.0.0.0/0 or ::/0 to match all incoming traffic.
* 
    */
  "attributeValue": string;

  "attributeName": string;
}

export namespace SourceIpAddressCondition {
  export function getJsonObj(obj: SourceIpAddressCondition, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RuleCondition.getJsonObj(obj) as SourceIpAddressCondition)),
      ...{}
    };

    return jsonObj;
  }
  export const attributeName = "SOURCE_IP_ADDRESS";
  export function getDeserializedJsonObj(
    obj: SourceIpAddressCondition,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RuleCondition.getDeserializedJsonObj(obj) as SourceIpAddressCondition)),
      ...{}
    };

    return jsonObj;
  }
}
