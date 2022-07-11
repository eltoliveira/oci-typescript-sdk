/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Policy for how the DB System and related resources should be handled at the time of its deletion.
 *
 */
export interface CreateDeletionPolicyDetails {
  /**
   * Specifies if any automatic backups created for a DB System should be retained or deleted when the DB System is deleted.
   *
   */
  "automaticBackupRetention"?: CreateDeletionPolicyDetails.AutomaticBackupRetention;
  /**
   * Specifies whether or not a backup is taken when the DB System is deleted.
   *   REQUIRE_FINAL_BACKUP: a backup is taken if the DB System is deleted.
   *   SKIP_FINAL_BACKUP: a backup is not taken if the DB System is deleted.
   *
   */
  "finalBackup"?: CreateDeletionPolicyDetails.FinalBackup;
  /**
   * Specifies whether the DB System can be deleted. Set to true to prevent deletion, false (default) to allow.
   *
   */
  "isDeleteProtected"?: boolean;
}

export namespace CreateDeletionPolicyDetails {
  export enum AutomaticBackupRetention {
    Delete = "DELETE",
    Retain = "RETAIN"
  }

  export enum FinalBackup {
    SkipFinalBackup = "SKIP_FINAL_BACKUP",
    RequireFinalBackup = "REQUIRE_FINAL_BACKUP"
  }

  export function getJsonObj(obj: CreateDeletionPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDeletionPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
