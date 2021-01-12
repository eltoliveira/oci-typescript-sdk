/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
* A full or incremental copy of a DB System which can be used to create a
* new DB System or recover a DB System.
* <p>
To use any of the API operations, you must be authorized in an IAM
* policy. If you're not authorized, talk to an administrator. If you're an
* administrator who needs to write policies to give users access, see
* [Getting Started with
* Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Backup {
  /**
   * OCID of the backup itself
   */
  "id": string;
  /**
   * A user-supplied display name for the backup.
   */
  "displayName"?: string;
  /**
   * A user-supplied description for the backup.
   */
  "description"?: string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The time the backup record was created.
   */
  "timeCreated": Date;
  /**
   * The time at which the backup was updated.
   */
  "timeUpdated": Date;
  /**
   * The state of the backup.
   */
  "lifecycleState": Backup.LifecycleState;
  /**
   * Additional information about the current lifecycleState.
   */
  "lifecycleDetails": string;
  /**
   * The type of backup.
   */
  "backupType": Backup.BackupType;
  /**
   * If the backup was created automatically, or by a manual request.
   */
  "creationType": Backup.CreationType;
  /**
   * The OCID of the DB System the backup is associated with.
   */
  "dbSystemId": string;
  "dbSystemSnapshot"?: model.DbSystemSnapshot;
  /**
   * The size of the backup in base-2 (IEC) gibibytes. (GiB).
   */
  "backupSizeInGBs"?: number;
  /**
   * Number of days to retain this backup.
   */
  "retentionInDays"?: number;
  /**
   * Initial size of the data volume in GiBs.
   *
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The MySQL server version of the DB System used for backup.
   */
  "mysqlVersion"?: string;
  /**
   * The shape of the DB System used for backup.
   */
  "shapeName"?: string;
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
}

export namespace Backup {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum BackupType {
    Full = "FULL",
    Incremental = "INCREMENTAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum CreationType {
    Manual = "MANUAL",
    Automatic = "AUTOMATIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Backup): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbSystemSnapshot": obj.dbSystemSnapshot
          ? model.DbSystemSnapshot.getJsonObj(obj.dbSystemSnapshot)
          : undefined
      }
    };

    return jsonObj;
  }
}
