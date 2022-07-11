/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * LogAnalyticsSourceDataFilter
 */
export interface LogAnalyticsSourceDataFilter {
  /**
   * The filter description.
   */
  "description"?: string;
  /**
   * The filter display name.
   */
  "displayName"?: string;
  /**
   * The filter edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "editVersion"?: number;
  /**
   * A flag inidcating whether or not the filter is enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * The field internal name.
   */
  "fieldName"?: string;
  /**
   * The hash type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hashType"?: number;
  /**
   * The filter unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataFilterId"?: number;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The regular expression for matching.
   */
  "matchRegularExpression"?: string;
  /**
   * The filter order. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "order"?: number;
  /**
   * The filter path.
   */
  "path"?: string;
  /**
   * The replacement string.
   */
  "replacementString"?: string;
  /**
   * The source unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sourceId"?: number;
  /**
   * The filter type.
   */
  "filterType"?: LogAnalyticsSourceDataFilter.FilterType;
}

export namespace LogAnalyticsSourceDataFilter {
  export enum FilterType {
    Mask = "MASK",
    HashMask = "HASH_MASK",
    DropLogEntry = "DROP_LOG_ENTRY",
    DropString = "DROP_STRING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsSourceDataFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSourceDataFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
