/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Sorting the data at the column level.
 */
export interface ColumnSorting {
  /**
   * Name of the column that must be sorted.
   */
  "fieldName": string;
  /**
   * Indicates if the column must be sorted in ascending order. Values can either be 'true' or 'false'.
   */
  "isAscending": boolean;
  /**
   * Indicates the order at which column must be sorted. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sortingOrder": number;
}

export namespace ColumnSorting {
  export function getJsonObj(obj: ColumnSorting): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ColumnSorting): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
