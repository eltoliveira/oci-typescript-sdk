/**
 * Service Limits APIs
 * APIs that interact with the resource limits of a specific resource type.
 * OpenAPI spec version: 20181025
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
 * Request payload to remove the resource lock.
 *
 */
export interface RemoveLockDetails {
  /**
   * Lock type.
   */
  "type": RemoveLockDetails.Type;
}

export namespace RemoveLockDetails {
  export enum Type {
    Full = "FULL",
    Delete = "DELETE"
  }

  export function getJsonObj(obj: RemoveLockDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemoveLockDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
