/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Information about shape compatibility with the client's current resource configuration.
 */
export interface CompatibilityMessage {
  /**
   * Severity level of the compatibility issue.
   */
  "severity"?: CompatibilityMessage.Severity;
  /**
   * Name of the compatibility issue.
   */
  "name"?: CompatibilityMessage.Name;
  /**
   * Detailed description of the compatibility issue.
   */
  "message"?: string;
}

export namespace CompatibilityMessage {
  export enum Severity {
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Name {
    NotEnoughData = "NOT_ENOUGH_DATA",
    InvalidData = "INVALID_DATA",
    CpuCompatibilityWarning = "CPU_COMPATIBILITY_WARNING",
    CpuMetricInfo = "CPU_METRIC_INFO",
    MemoryCompatibilityWarning = "MEMORY_COMPATIBILITY_WARNING",
    MemoryMetricInfo = "MEMORY_METRIC_INFO",
    VnicsCompatibilityWarning = "VNICS_COMPATIBILITY_WARNING",
    BandwidthCompatibilityWarning = "BANDWIDTH_COMPATIBILITY_WARNING",
    GpuCompatibilityWarning = "GPU_COMPATIBILITY_WARNING",
    OsWarning = "OS_WARNING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CompatibilityMessage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CompatibilityMessage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
