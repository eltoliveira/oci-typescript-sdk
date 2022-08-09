/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * The information about a monitor.
 */
export interface Monitor {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the monitor.
   */
  "id": string;
  /**
   * Unique name that can be edited. The name should not contain any confidential information.
   */
  "displayName": string;
  /**
   * Type of the monitor.
   */
  "monitorType": model.MonitorTypes;
  /**
   * List of public and dedicated vantage points where the monitor is running.
   */
  "vantagePoints": Array<model.VantagePointInfo>;
  /**
   * Number of vantage points where monitor is running. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vantagePointCount": number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the script.
   * scriptId is mandatory for creation of SCRIPTED_BROWSER and SCRIPTED_REST monitor types. For other monitor types, it should be set to null.
   *
   */
  "scriptId": string;
  /**
   * Name of the script.
   */
  "scriptName": string;
  /**
   * Enables or disables the monitor.
   */
  "status": model.MonitorStatus;
  /**
   * Interval in seconds after the start time when the job should be repeated.
   * Minimum repeatIntervalInSeconds should be 300 seconds for Scripted REST, Scripted Browser and Browser monitors, and 60 seconds for REST monitor.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "repeatIntervalInSeconds": number;
  /**
   * If runOnce is enabled, then the monitor will run once.
   */
  "isRunOnce": boolean;
  /**
   * Timeout in seconds. Timeout cannot be more than 30% of repeatIntervalInSeconds time for monitors.
   * Also, timeoutInSeconds should be a multiple of 60 for Scripted REST, Scripted Browser and Browser monitors.
   * Monitor will be allowed to run only for timeoutInSeconds time. It would be terminated after that.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds": number;
  /**
   * Specify the endpoint on which to run the monitor.
   * For BROWSER and REST monitor types, target is mandatory.
   * If target is specified in the SCRIPTED_BROWSER monitor type, then the monitor will run the selected script (specified by scriptId in monitor) against the specified target endpoint.
   * If target is not specified in the SCRIPTED_BROWSER monitor type, then the monitor will run the selected script as it is.
   *
   */
  "target"?: string;
  /**
   * List of script parameters. Example: `[{\"monitorScriptParameter\": {\"paramName\": \"userid\", \"paramValue\":\"testuser\"}, \"isSecret\": false, \"isOverwritten\": false}]`
   *
   */
  "scriptParameters"?: Array<model.MonitorScriptParameterInfo>;
  "configuration"?:
    | model.ScriptedRestMonitorConfiguration
    | model.ScriptedBrowserMonitorConfiguration
    | model.RestMonitorConfiguration
    | model.BrowserMonitorConfiguration;
  /**
   * The time the resource was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2020-02-12T22:47:12.613Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: `2020-02-13T22:47:12.613Z`
   *
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * If isRunNow is enabled, then the monitor will run now.
   */
  "isRunNow": boolean;
  /**
   * Scheduling policy on Vantage points.
   */
  "schedulingPolicy": model.SchedulingPolicy;
  /**
   * Time interval between 2 runs in round robin batch mode (*SchedulingPolicy - BATCHED_ROUND_ROBIN). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchIntervalInSeconds": number;
}

export namespace Monitor {
  export function getJsonObj(obj: Monitor): object {
    const jsonObj = {
      ...obj,
      ...{
        "vantagePoints": obj.vantagePoints
          ? obj.vantagePoints.map(item => {
              return model.VantagePointInfo.getJsonObj(item);
            })
          : undefined,

        "scriptParameters": obj.scriptParameters
          ? obj.scriptParameters.map(item => {
              return model.MonitorScriptParameterInfo.getJsonObj(item);
            })
          : undefined,
        "configuration": obj.configuration
          ? model.MonitorConfiguration.getJsonObj(obj.configuration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Monitor): object {
    const jsonObj = {
      ...obj,
      ...{
        "vantagePoints": obj.vantagePoints
          ? obj.vantagePoints.map(item => {
              return model.VantagePointInfo.getDeserializedJsonObj(item);
            })
          : undefined,

        "scriptParameters": obj.scriptParameters
          ? obj.scriptParameters.map(item => {
              return model.MonitorScriptParameterInfo.getDeserializedJsonObj(item);
            })
          : undefined,
        "configuration": obj.configuration
          ? model.MonitorConfiguration.getDeserializedJsonObj(obj.configuration)
          : undefined
      }
    };

    return jsonObj;
  }
}
