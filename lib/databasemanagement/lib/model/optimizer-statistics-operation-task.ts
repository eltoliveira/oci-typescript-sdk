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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details of the Optimizer Statistics Collection task.
 */
export interface OptimizerStatisticsOperationTask {
  /**
   * The name of the target object for which statistics are gathered.
   */
  "target": string;
  /**
   * The type of target object.
   */
  "targetType": OptimizerStatisticsOperationTask.TargetType;
  /**
   * The start time of the Optimizer Statistics Collection task.
   */
  "timeStart": Date;
  /**
   * The end time of the Optimizer Statistics Collection task.
   */
  "timeEnd": Date;
  /**
   * The status of the Optimizer Statistics Collection task.
   */
  "status": OptimizerStatisticsOperationTask.Status;
}

export namespace OptimizerStatisticsOperationTask {
  export enum TargetType {
    Table = "TABLE",
    GlobalTable = "GLOBAL_TABLE",
    CoordinatorTable = "COORDINATOR_TABLE",
    TablePartition = "TABLE_PARTITION",
    TableSubpartition = "TABLE_SUBPARTITION",
    Index = "INDEX",
    IndexPartition = "INDEX_PARTITION",
    IndexSubpartition = "INDEX_SUBPARTITION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Skipped = "SKIPPED",
    TimedOut = "TIMED_OUT",
    Completed = "COMPLETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OptimizerStatisticsOperationTask): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OptimizerStatisticsOperationTask): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
