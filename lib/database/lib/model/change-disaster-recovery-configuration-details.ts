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
 * Details to update the cross-region Disaster Recovery (DR) details of the Standby Autonomous Database on shared Exadata infrastructure.
 */
export interface ChangeDisasterRecoveryConfigurationDetails {
  /**
   * Indicates the disaster recovery (DR) type of the Shared Autonomous Database.
   * Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover.
   * Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover.
   *
   */
  "disasterRecoveryType"?: ChangeDisasterRecoveryConfigurationDetails.DisasterRecoveryType;
}

export namespace ChangeDisasterRecoveryConfigurationDetails {
  export enum DisasterRecoveryType {
    Adg = "ADG",
    BackupBased = "BACKUP_BASED"
  }

  export function getJsonObj(obj: ChangeDisasterRecoveryConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeDisasterRecoveryConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
