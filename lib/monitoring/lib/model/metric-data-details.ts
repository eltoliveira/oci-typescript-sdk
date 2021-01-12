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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A metric object containing raw metric data points to be posted to the Monitoring service.
 *
 */
export interface MetricDataDetails {
  /**
    * The source service or application emitting the metric.
* <p>
A valid namespace value starts with an alphabetical character and includes only alphanumeric characters and underscores. The \"oci_\" prefix is reserved. 
* Avoid entering confidential information.
* <p>
Example: `my_namespace`
* 
    */
  "namespace": string;
  /**
    * Resource group to assign to the metric. A resource group is a custom string that can be used as a filter. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* Avoid entering confidential information.
* <p>
Example: `frontend-fleet`
* 
    */
  "resourceGroup"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to use for metrics.
   *
   */
  "compartmentId": string;
  /**
    * The name of the metric.
* <p>
A valid name value starts with an alphabetical character and includes only alphanumeric characters, dots, underscores, hyphens, and dollar signs. The `oci_` prefix is reserved. 
* Avoid entering confidential information.
* <p>
Example: `my_app.success_rate`
* 
    */
  "name": string;
  /**
    * Qualifiers provided in a metric definition. Available dimensions vary by metric namespace.
* Each dimension takes the form of a key-value pair. 
* A valid dimension key includes only printable ASCII, excluding periods (.) and spaces. The character limit for a dimension key is 256.
* A valid dimension value includes only Unicode characters. The character limit for a dimension value is 256.
* Empty strings are not allowed for keys or values. Avoid entering confidential information.
* <p>
Example: `\"resourceId\": \"ocid1.instance.region1.phx.exampleuniqueID\"`
* 
    */
  "dimensions": { [key: string]: string };
  /**
    * Properties describing metrics. These are not part of the unique fields identifying the metric.
* Each metadata item takes the form of a key-value pair. The character limit for a metadata key is 256. The character limit for a metadata value is 256.
* <p>
Example: `\"unit\": \"bytes\"`
* 
    */
  "metadata"?: { [key: string]: string };
  /**
   * A list of metric values with timestamps. At least one data point is required per call.
   *
   */
  "datapoints": Array<model.Datapoint>;
}

export namespace MetricDataDetails {
  export function getJsonObj(obj: MetricDataDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "datapoints": obj.datapoints
          ? obj.datapoints.map(item => {
              return model.Datapoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
