/**
 * Data Connectivity Management API
 * Use the DCMS APIs to perform Metadata/Data operations.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * Statistical data in profiling results
 */
export interface DataTypeStat {
  /**
   * Value of the confidence of the profile result
   */
  "value"?: string;
  /**
   * Placeholder for now, in future we will return the confidence of the profile result (because we are using sampled data and not whole data) Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence"?: number;
  /**
   * How many times that value occurred. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "freq"?: number;
  /**
   * Frequency percentage across the sampled row counts (excluding nulls). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "freqPercentage"?: number;
}

export namespace DataTypeStat {
  export function getJsonObj(obj: DataTypeStat): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataTypeStat): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
