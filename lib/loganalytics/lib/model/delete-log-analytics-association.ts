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
 * DeleteLogAnalyticsAssociation
 */
export interface DeleteLogAnalyticsAssociation {
  /**
   * Lama Idf
   */
  "agentId"?: string;
  /**
   * source name
   */
  "sourceName"?: string;
  /**
   * source type internal name
   */
  "sourceTypeName"?: string;
  /**
   * entity GUID
   */
  "entityId"?: string;
  /**
   * entity type internal name
   */
  "entityTypeName"?: string;
  /**
   * host name
   */
  "host"?: string;
  /**
   * log group ocid
   */
  "logGroupId"?: string;
}

export namespace DeleteLogAnalyticsAssociation {
  export function getJsonObj(obj: DeleteLogAnalyticsAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
