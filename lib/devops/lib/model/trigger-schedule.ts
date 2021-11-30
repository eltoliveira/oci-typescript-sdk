/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies a trigger schedule. Timing information for when to initiate automated syncs.
 */
export interface TriggerSchedule {
  /**
   * Different types of trigger schedule:
   * None - No automated synchronization schedule.
   * Default - Trigger schedule is every 30 minutes.
   * Custom - Custom triggering schedule.
   *
   */
  "scheduleType": TriggerSchedule.ScheduleType;
  /**
   * Valid if type is CUSTOM. Following RFC 5545 recurrence rules, we can specify starting time, occurrence frequency, and interval size.
   * Example for frequency could be DAILY/WEEKLY/HOURLY or any RFC 5545 supported frequency, which is followed by start time of this window.
   * You can control the start time with BYHOUR, BYMINUTE and BYSECONDS. It is followed by the interval size.
   *
   */
  "customSchedule"?: string;
}

export namespace TriggerSchedule {
  export enum ScheduleType {
    None = "NONE",
    Default = "DEFAULT",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TriggerSchedule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TriggerSchedule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
