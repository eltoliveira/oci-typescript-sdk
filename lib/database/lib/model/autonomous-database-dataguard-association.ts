/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The properties that define dataguard association between two different Autonomous Databases.
 * Note that Autonomous Databases inherit DataGuard association from parent Autonomous Container Database.
 * No actions can be taken on AutonomousDatabaseDataguardAssociation, usage is strictly informational.
 *
 */
export interface AutonomousDatabaseDataguardAssociation {
  /**
   * The OCID of the Autonomous Dataguard created for Autonomous Container Database where given Autonomous Database resides in.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous Database that has a relationship with the peer Autonomous Database.
   *
   */
  "autonomousDatabaseId": string;
  /**
   * The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled.
   *
   */
  "role": AutonomousDatabaseDataguardAssociation.Role;
  /**
   * The current state of Autonomous Data Guard.
   */
  "lifecycleState": AutonomousDatabaseDataguardAssociation.LifecycleState;
  /**
   * Additional information about the current lifecycleState, if available.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The Data Guard role of the Autonomous Container Database or Autonomous Database, if Autonomous Data Guard is enabled.
   *
   */
  "peerRole": AutonomousDatabaseDataguardAssociation.PeerRole;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the peer Autonomous Database.
   *
   */
  "peerAutonomousDatabaseId"?: string;
  /**
   * The current state of Autonomous Data Guard.
   */
  "peerAutonomousDatabaseLifeCycleState"?: AutonomousDatabaseDataguardAssociation.PeerAutonomousDatabaseLifeCycleState;
  /**
   * The protection mode of this Data Guard association. For more information, see
   * [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
   * in the Oracle Data Guard documentation.
   *
   */
  "protectionMode"?: AutonomousDatabaseDataguardAssociation.ProtectionMode;
  /**
    * The lag time between updates to the primary database and application of the redo data on the standby database,
* as computed by the reporting database.
* <p>
Example: `9 seconds`
* 
    */
  "applyLag"?: string;
  /**
    * The rate at which redo logs are synced between the associated databases.
* <p>
Example: `180 Mb per second`
* 
    */
  "applyRate"?: string;
  /**
   * Indicates whether Automatic Failover is enabled for Autonomous Container Database Dataguard Association
   *
   */
  "isAutomaticFailoverEnabled"?: boolean;
  /**
    * The approximate number of seconds of redo data not yet available on the standby Autonomous Container Database,
* as computed by the reporting database.
* <p>
Example: `7 seconds`
* 
    */
  "transportLag"?: string;
  /**
   * The date and time of the last update to the apply lag, apply rate, and transport lag values.
   */
  "timeLastSynced"?: Date;
  /**
   * The date and time the Data Guard association was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time when the last role change action happened.
   */
  "timeLastRoleChanged"?: Date;
}

export namespace AutonomousDatabaseDataguardAssociation {
  export enum Role {
    Primary = "PRIMARY",
    Standby = "STANDBY",
    DisabledStandby = "DISABLED_STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    RoleChangeInProgress = "ROLE_CHANGE_IN_PROGRESS",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    Unavailable = "UNAVAILABLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PeerRole {
    Primary = "PRIMARY",
    Standby = "STANDBY",
    DisabledStandby = "DISABLED_STANDBY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PeerAutonomousDatabaseLifeCycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    RoleChangeInProgress = "ROLE_CHANGE_IN_PROGRESS",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    Unavailable = "UNAVAILABLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ProtectionMode {
    MaximumAvailability = "MAXIMUM_AVAILABILITY",
    MaximumPerformance = "MAXIMUM_PERFORMANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDatabaseDataguardAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousDatabaseDataguardAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
