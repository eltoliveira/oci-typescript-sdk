/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Represents collection of SQL Plan Insights.
 */
export interface SqlPlanInsights {
  /**
   * SQL Plan Insight text.
   * For example `Number of Plans Used`, `Most Executed Plan`,
   *   `Best Performing Plan`, `Worst Performing Plan`,
   *   `Plan With Most IO`,
   *   `Plan with Most CPU`
   *
   */
  "text": string;
  /**
   * SQL execution plan hash value for a given insight. For example `Most Executed Plan` insight will have value as \"3975467901\"
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "value": number;
  /**
   * SQL Insight category. For example PLANS_USED, MOST_EXECUTED, BEST_PERFORMER, WORST_PERFORMER, MOST_CPU or MOST_IO.
   *
   */
  "category": string;
}

export namespace SqlPlanInsights {
  export function getJsonObj(obj: SqlPlanInsights): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlPlanInsights): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
