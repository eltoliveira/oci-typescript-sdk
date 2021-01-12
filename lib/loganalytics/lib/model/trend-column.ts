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
 * Result column, that contains time series data points in each row. The column includes the time stamps as additional field in column header.
 *
 */
export interface TrendColumn extends model.AbstractColumn {
  /**
   * Time gap between each data pont in the series.
   *
   */
  "intervalGap"?: string;
  /**
   * Timestamps for each series data point
   *
   */
  "intervals"?: Array<number>;
  /**
   * Sum across all column values for a given timestamp.
   *
   */
  "totalIntervalCounts"?: Array<number>;
  "totalIntervalCountsAfterFilter"?: Array<number>;
  "intervalGroupCounts"?: Array<number>;
  "intervalGroupCountsAfterFilter"?: Array<number>;

  "type": string;
}

export namespace TrendColumn {
  export function getJsonObj(obj: TrendColumn, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AbstractColumn.getJsonObj(obj) as TrendColumn)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TREND_COLUMN";
}
