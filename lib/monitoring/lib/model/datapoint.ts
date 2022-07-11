/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetric, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For information about monitoring, see [Monitoring Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm).

 * OpenAPI spec version: 20180401
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
 * Metric value for a specific timestamp.
 *
 */
export interface Datapoint {
  /**
    * Timestamp for this metric value. Format defined by RFC3339.
* <p>
Example: `2019-02-01T01:02:29.600Z`
* 
    */
  "timestamp": Date;
  /**
    * Numeric value of the metric.
* <p>
Example: `10.23`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "value": number;
  /**
    * The number of occurrences of the associated value in the set of data.
* <p>
Default is 1. Value must be greater than zero.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "count"?: number;
}

export namespace Datapoint {
  export function getJsonObj(obj: Datapoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Datapoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
