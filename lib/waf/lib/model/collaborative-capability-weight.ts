/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

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
 * Defines how much a contributing capability contributes towards the action threshold of a collaborative protection capability.
 *
 */
export interface CollaborativeCapabilityWeight {
  /**
   * Unique key of contributing protection capability.
   */
  "key": string;
  /**
   * The display name of contributing protection capability.
   */
  "displayName": string;
  /**
   * The weight of contributing protection capability. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "weight": number;
}

export namespace CollaborativeCapabilityWeight {
  export function getJsonObj(obj: CollaborativeCapabilityWeight): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CollaborativeCapabilityWeight): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
