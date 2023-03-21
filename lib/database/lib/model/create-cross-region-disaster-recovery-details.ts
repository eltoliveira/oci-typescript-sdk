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
 * The following are the details necessary to create a disaster recovery (DR) association for an existing Autonomous Database with a standby in a remote region.
 * *IMPORTANT*
 * For creating a standby databases in a cross-region DR association:
 *   - To create the standby database in a remote region, use the API endpoint in the region where the standby is located. For example, if the primary database is in the IAD region and the standby is in the PHX region, make the API call using the PHX endpoint (https://database.us-phoenix-1.oraclecloud.com). See API Endpoints for the list of Database Service API endpoints.
 *   - To create the request in the standby database, the sourceId value must be the OCID of the primary database.
 * The following parameters are required for the cross-region standby database and must contain the same values as the source Autonomous Database:
 *   - remoteDisasterRecoveryType
 * The following parameters are optional for the cross-region standby database. If included in the request, these parameters must contain the same values as the source Autonomous Database:
 *   - dbName
 *   - dbVersion
 *   - ecpuCount
 *   - dataStorageSizeInTB
 *   - customerContacts
 *   - scheduledOperations
 *   - isAutoScalingForStorageEnabled
 *   - definedTags
 *   - freeformTags
 *   - licenseModel
 *   - whitelistedIps
 *   - isMtlsConnectionRequired
 * Example I - Creating a cross-region standby with required parameters only:
 *     `{
 *       \"compartmentId\": \"ocid.compartment.oc1..<var>&lt;unique_ID&gt;</var>\",
 *       \"sourceId\": \"ocid1.autonomousdatabase.oc1.phx..<var>&lt;unique_ID&gt;</var>\",
 *       \"source\": \"CROSS_REGION_DISASTER_RECOVERY\",
 *       \"remoteDisasterRecoveryType\": \"BACKUP_BASED\"
 *     }`
 * Example II - Creating a cross-region standby that specifies optional parameters in addition to the required parameters:
 *     `{
 *       \"compartmentId\": \"ocid.compartment.oc1..<var>&lt;unique_ID&gt;</var>\",
 *       \"ecpuCount\": 2,
 *       \"dbName\": \"adatabasedb1\",
 *       \"sourceId\": \"ocid1.autonomousdatabase.oc1.phx..<var>&lt;unique_ID&gt;</var>\",
 *       \"dataStorageSizeInTBs\": 1,
 *       \"source\": \"CROSS_REGION_DISASTER_RECOVERY\",
 *       \"adminPassword\" : \"<var>&lt;password&gt;</var>\",
 *       \"dbVersion\": \"19c\",
 *       \"licenseModel\": \"LICENSE_INCLUDED\",
 *       \"isAutoScalingForStorageEnabled\": \"true\",
 *       \"remoteDisasterRecoveryType\": \"BACKUP_BASED\"
 *     }`
 *
 */
export interface CreateCrossRegionDisasterRecoveryDetails
  extends model.CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source Autonomous Database that will be used to create a new standby database for the DR association.
   */
  "sourceId": string;
  /**
   * Indicates the cross-region disaster recovery (DR) type of the standby Shared Autonomous Database.
   * Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover.
   * Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover.
   *
   */
  "remoteDisasterRecoveryType": string;

  "source": string;
}

export namespace CreateCrossRegionDisasterRecoveryDetails {
  export function getJsonObj(
    obj: CreateCrossRegionDisasterRecoveryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getJsonObj(
            obj
          ) as CreateCrossRegionDisasterRecoveryDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "CROSS_REGION_DISASTER_RECOVERY";
  export function getDeserializedJsonObj(
    obj: CreateCrossRegionDisasterRecoveryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getDeserializedJsonObj(
            obj
          ) as CreateCrossRegionDisasterRecoveryDetails)),
      ...{}
    };

    return jsonObj;
  }
}
