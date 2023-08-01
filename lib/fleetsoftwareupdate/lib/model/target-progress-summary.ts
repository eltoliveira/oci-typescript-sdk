/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Progress details of the executing job for a Database target.
 *
 */
export interface TargetProgressSummary {
  /**
   * Type of operations being executed.
   *
   */
  "operationType"?: TargetProgressSummary.OperationType;
  /**
   * Percentage of progress of the operation in execution.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "progressOfOperation"?: number;
}

export namespace TargetProgressSummary {
  export enum OperationType {
    Stage = "STAGE",
    Precheck = "PRECHECK",
    Apply = "APPLY",
    Rollback = "ROLLBACK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TargetProgressSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetProgressSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
