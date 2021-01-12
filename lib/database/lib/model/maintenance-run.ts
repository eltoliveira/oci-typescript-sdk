/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of a maintenance run.
 *
 */
export interface MaintenanceRun {
  /**
   * The OCID of the maintenance run.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the maintenance run.
   */
  "displayName": string;
  /**
   * Description of the maintenance run.
   */
  "description"?: string;
  /**
   * The current state of the maintenance run.
   */
  "lifecycleState": MaintenanceRun.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the maintenance run is scheduled to occur.
   */
  "timeScheduled": Date;
  /**
   * The date and time the maintenance run starts.
   */
  "timeStarted"?: Date;
  /**
   * The date and time the maintenance run was completed.
   */
  "timeEnded"?: Date;
  /**
   * The type of the target resource on which the maintenance run occurs.
   */
  "targetResourceType"?: MaintenanceRun.TargetResourceType;
  /**
   * The ID of the target resource on which the maintenance run occurs.
   */
  "targetResourceId"?: string;
  /**
   * Maintenance type.
   */
  "maintenanceType"?: MaintenanceRun.MaintenanceType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the patch to be applied in the maintenance run.
   */
  "patchId"?: string;
  /**
   * Maintenance sub-type.
   */
  "maintenanceSubtype"?: MaintenanceRun.MaintenanceSubtype;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the maintenance run for the Autonomous Data Guard association's peer container database.
   */
  "peerMaintenanceRunId"?: string;
}

export namespace MaintenanceRun {
  export enum LifecycleState {
    Scheduled = "SCHEDULED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Skipped = "SKIPPED",
    Failed = "FAILED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TargetResourceType {
    AutonomousExadataInfrastructure = "AUTONOMOUS_EXADATA_INFRASTRUCTURE",
    AutonomousContainerDatabase = "AUTONOMOUS_CONTAINER_DATABASE",
    ExadataDbSystem = "EXADATA_DB_SYSTEM",
    CloudExadataInfrastructure = "CLOUD_EXADATA_INFRASTRUCTURE",
    ExaccInfrastructure = "EXACC_INFRASTRUCTURE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceType {
    Planned = "PLANNED",
    Unplanned = "UNPLANNED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MaintenanceSubtype {
    Quarterly = "QUARTERLY",
    Hardware = "HARDWARE",
    Critical = "CRITICAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MaintenanceRun): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
