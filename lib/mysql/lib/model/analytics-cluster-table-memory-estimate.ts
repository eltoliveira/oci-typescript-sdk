/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Estimated memory footprint for a MySQL user table
 * when loaded to the Analytics Cluster memory.
 *
 */
export interface AnalyticsClusterTableMemoryEstimate {
  /**
   * The table name.
   */
  "tableName": string;
  /**
   * The number of columns to be loaded to Analytics Cluster memory.
   * These columns contribute to the analytical memory footprint.
   *
   */
  "toLoadColumnCount": number;
  /**
   * The number of variable-length columns to be loaded to Analytics Cluster memory.
   * These columns contribute to the analytical memory footprint.
   *
   */
  "varlenColumnCount": number;
  /**
   * The estimated number of rows in the table. This number was used to
   * derive the analytical memory footprint.
   *
   */
  "estimatedRowCount": number;
  /**
   * The estimated memory footprint of the table in MBs when loaded to
   * Analytics Cluster memory (null if the table cannot be loaded to the
   * Analytics Cluster).
   *
   */
  "analyticalFootprintInMbs": number;
  /**
   * Error comment (empty string if no errors occured).
   *
   */
  "errorComment": string;
}

export namespace AnalyticsClusterTableMemoryEstimate {
  export function getJsonObj(obj: AnalyticsClusterTableMemoryEstimate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
