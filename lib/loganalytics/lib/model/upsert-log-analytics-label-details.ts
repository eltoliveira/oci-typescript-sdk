/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Upsert LogAnalytics Label Details
 */
export interface UpsertLogAnalyticsLabelDetails {
  /**
   * alias list
   */
  "aliases"?: Array<model.LogAnalyticsLabelAlias>;
  /**
   * suggest type
   */
  "suggestType"?: number;
  /**
   * description
   */
  "description"?: string;
  /**
   * display name
   */
  "displayName"?: string;
  /**
   * edit version
   */
  "editVersion"?: number;
  /**
   * impact
   */
  "impact"?: string;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * label identifier
   */
  "name"?: string;
  /**
   * Valid values are (NONE, LOW, HIGH). NONE is default.
   */
  "priority"?: UpsertLogAnalyticsLabelDetails.Priority;
  /**
   * tag recommendation
   */
  "recommendation"?: string;
  /**
   * Valid values are (INFO, PROBLEM). INFO is default.
   */
  "type"?: UpsertLogAnalyticsLabelDetails.Type;
}

export namespace UpsertLogAnalyticsLabelDetails {
  export enum Priority {
    None = "NONE",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
  }

  export enum Type {
    Info = "INFO",
    Problem = "PROBLEM"
  }

  export function getJsonObj(obj: UpsertLogAnalyticsLabelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "aliases": obj.aliases
          ? obj.aliases.map(item => {
              return model.LogAnalyticsLabelAlias.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
