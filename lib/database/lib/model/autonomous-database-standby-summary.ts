/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Autonomous Data Guard standby database details.
 *
 */
export interface AutonomousDatabaseStandbySummary {
  /**
   * The amount of time, in seconds, that the data of the standby database lags the data of the primary database. Can be used to determine the potential data loss in the event of a failover. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lagTimeInSeconds"?: number;
  /**
   * The current state of the Autonomous Database.
   */
  "lifecycleState"?: AutonomousDatabaseStandbySummary.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database.
   */
  "timeDataGuardRoleChanged"?: Date;
  /**
   * The date and time the Disaster Recovery role was switched for the standby Autonomous Database.
   */
  "timeDisasterRecoveryRoleChanged"?: Date;
}

export namespace AutonomousDatabaseStandbySummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Starting = "STARTING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Unavailable = "UNAVAILABLE",
    RestoreInProgress = "RESTORE_IN_PROGRESS",
    RestoreFailed = "RESTORE_FAILED",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    ScaleInProgress = "SCALE_IN_PROGRESS",
    AvailableNeedsAttention = "AVAILABLE_NEEDS_ATTENTION",
    Updating = "UPDATING",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    Restarting = "RESTARTING",
    Recreating = "RECREATING",
    RoleChangeInProgress = "ROLE_CHANGE_IN_PROGRESS",
    Upgrading = "UPGRADING",
    Inaccessible = "INACCESSIBLE",
    Standby = "STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDatabaseStandbySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousDatabaseStandbySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
