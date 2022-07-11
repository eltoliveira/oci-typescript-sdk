/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * Details of a vertical scaling schedule.
 */
export interface VerticalScalingScheduleDetails {
  "scheduleType": string;
}

export namespace VerticalScalingScheduleDetails {
  export function getJsonObj(obj: VerticalScalingScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "scheduleType" in obj && obj.scheduleType) {
      switch (obj.scheduleType) {
        case "DAY_BASED":
          return model.DayBasedVerticalScalingScheduleDetails.getJsonObj(
            <model.DayBasedVerticalScalingScheduleDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.scheduleType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VerticalScalingScheduleDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "scheduleType" in obj && obj.scheduleType) {
      switch (obj.scheduleType) {
        case "DAY_BASED":
          return model.DayBasedVerticalScalingScheduleDetails.getDeserializedJsonObj(
            <model.DayBasedVerticalScalingScheduleDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.scheduleType);
      }
    }
    return jsonObj;
  }
}
