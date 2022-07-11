/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * The blocklist record to prevent a target resource from certain operation with reason.
 */
export interface Blocklist {
  /**
   * The unique identifier of this blocklist record.
   */
  "key": string;
  "target": model.BlocklistTarget;
  /**
   * The operation type
   */
  "operation": model.OperationType;
  /**
   * The reason for why the operation is blocklisted
   */
  "reason"?: string;
}

export namespace Blocklist {
  export function getJsonObj(obj: Blocklist): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.BlocklistTarget.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Blocklist): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.BlocklistTarget.getDeserializedJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
}
