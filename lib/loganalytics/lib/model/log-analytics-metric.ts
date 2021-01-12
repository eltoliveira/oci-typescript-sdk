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
 * LogAnalyticsMetric
 */
export interface LogAnalyticsMetric {
  /**
   * aggregation field
   */
  "aggregationField"?: string;
  /**
   * bucket metadata
   */
  "bucketMetadata"?: string;
  /**
   * clock period
   */
  "clockPeriod"?: string;
  /**
   * description
   */
  "description"?: string;
  /**
   * edit version
   */
  "editVersion"?: number;
  /**
   * field name
   */
  "fieldName"?: string;
  /**
   * field value array
   */
  "fieldValues"?: Array<string>;
  /**
   * grouping fields
   */
  "groupingField"?: string;
  /**
   * is enabled flag
   */
  "isEnabled"?: boolean;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * metric display name
   */
  "displayName"?: string;
  /**
   * metric Id
   */
  "metricReference"?: number;
  /**
   * name
   */
  "name"?: string;
  /**
   * metric type
   */
  "metricType"?: LogAnalyticsMetric.MetricType;
  /**
   * is metric source map enabled flag
   */
  "isMetricSourceEnabled"?: boolean;
  /**
   * operator
   */
  "operator"?: LogAnalyticsMetric.Operator;
  /**
   * sources
   */
  "sources"?: Array<model.LogAnalyticsSource>;
  /**
   * entity type
   */
  "entityType"?: string;
  /**
   * last updated date
   */
  "timeUpdated"?: Date;
  /**
   * unit type
   */
  "unitType"?: string;
  /**
   * user customized
   */
  "isUserCustomized"?: boolean;
}

export namespace LogAnalyticsMetric {
  export enum MetricType {
    Count = "COUNT",
    Sum = "SUM",
    Average = "AVERAGE",
    CountDistribution = "COUNT_DISTRIBUTION",
    SumDistribution = "SUM_DISTRIBUTION",
    AverageDistribution = "AVERAGE_DISTRIBUTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Operator {
    ContainsIgnoreCase = "CONTAINS_IGNORE_CASE",
    InIgnoreCase = "IN_IGNORE_CASE",
    EqualIgnoreCase = "EQUAL_IGNORE_CASE",
    NotNull = "NOT_NULL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsMetric): object {
    const jsonObj = {
      ...obj,
      ...{
        "sources": obj.sources
          ? obj.sources.map(item => {
              return model.LogAnalyticsSource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
