/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * A summary for all the index findings in a SQL Tuning Advisor task. Includes the index's hash value, table name, schema, index name, reference count and index columns
 */
export interface SqlTuningAdvisorTaskSummaryReportIndexFindingSummary {
  /**
   * Numerical representation of the index. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "indexHashValue": number;
  /**
   * Name of the index.
   */
  "indexName": string;
  /**
   * Table's name related to the index.
   */
  "tableName": string;
  /**
   * Schema related to the index.
   */
  "schema": string;
  /**
   * The number of times the index is referenced within the SQL Tuning advisor task findings. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "referenceCount": number;
  /**
   * Columns of the index.
   */
  "indexColumns": Array<string>;
}

export namespace SqlTuningAdvisorTaskSummaryReportIndexFindingSummary {
  export function getJsonObj(obj: SqlTuningAdvisorTaskSummaryReportIndexFindingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: SqlTuningAdvisorTaskSummaryReportIndexFindingSummary
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
