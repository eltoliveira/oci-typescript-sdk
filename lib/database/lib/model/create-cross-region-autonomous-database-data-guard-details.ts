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
 * Details to create an Autonomous Data Guard association for an existing Autonomous Database where the standby is in a different (remote) region from the source primary database.
 * *IMPORTANT*
 * Note the following for creating standby databases in cross-region Autonomous Data Guard associations:
 *   - To create your standby database in a region different from the region of the primary, use the API endpoint of the region in which the standby will be located. For example, if the primary database is in the IAD region, and you want to create the standby in the PHX region, make the API call using the PHX endpoint (https://database.us-phoenix-1.oraclecloud.com). See [API Endpoints](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#REST_APIs) for the list of Database Service API endpoints.
 *   - In the request to create the standby database, the `sourceId` value should be the OCID of the primary database.
 * The following parameters are required for the cross-region standby database and must contain the same values as the source Autonomous Database:
 *   - dbName
 *   - cpuCoreCount
 *   - dataStorageSizeInTB
 *   - dbVersion
 * The following parameters are optional for the cross-region standby database. If included in the request, these parameters contain the same values as the source Autonomous Database:
 *   - customerContacts
 *   - scheduledOperations
 *   - isAutoScalingForStorageEnabled
 *   - definedTags
 *   - freeformTags
 *   - licenseModel
 *   - whitelistedIps
 *   - isMtlsConnectionRequired
 * Example I - Creating a cross-region standby with required parameters only, with OCPU:
 *     `{
 *       \"compartmentId\": \"ocid.compartment.oc1..<var>&lt;unique_ID&gt;</var>\",
 *       \"cpuCoreCount\": 1,
 *       \"dbName\": \"adatabasedb1\",
 *       \"sourceId\": \"ocid1.autonomousdatabase.oc1.phx..<var>&lt;unique_ID&gt;</var>\",
 *       \"dataStorageSizeInTBs\": 1,
 *       \"source\": \"CROSS_REGION_DATAGUARD\",
 *       \"adminPassword\" : \"<var>&lt;password&gt;</var>\",
 *     }`
 * Example II - Creating a cross-region standby that specifies optional parameters in addition to the required parameters, with ECPU:
 *     `{
 *       \"compartmentId\": \"ocid.compartment.oc1..<var>&lt;unique_ID&gt;</var>\",
 *       \"computeModel\": \"ECPU\",
 *       \"computeCount\": 2,
 *       \"dbName\": \"adatabasedb1\",
 *       \"sourceId\": \"ocid1.autonomousdatabase.oc1.phx..<var>&lt;unique_ID&gt;</var>\",
 *       \"dataStorageSizeInTBs\": 1,
 *       \"source\": \"CROSS_REGION_DATAGUARD\",
 *       \"adminPassword\" : \"<var>&lt;password&gt;</var>\",
 *       \"dbVersion\": \"19c\",
 *       \"licenseModel\": \"LICENSE_INCLUDED\",
 *       \"isAutoScalingForStorageEnabled\": \"true\"
 *     }`
 *
 */
export interface CreateCrossRegionAutonomousDatabaseDataGuardDetails
  extends model.CreateAutonomousDatabaseBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the source Autonomous Database that will be used to create a new standby database for the Data Guard association.
   */
  "sourceId": string;

  "source": string;
}

export namespace CreateCrossRegionAutonomousDatabaseDataGuardDetails {
  export function getJsonObj(
    obj: CreateCrossRegionAutonomousDatabaseDataGuardDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getJsonObj(
            obj
          ) as CreateCrossRegionAutonomousDatabaseDataGuardDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const source = "CROSS_REGION_DATAGUARD";
  export function getDeserializedJsonObj(
    obj: CreateCrossRegionAutonomousDatabaseDataGuardDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAutonomousDatabaseBase.getDeserializedJsonObj(
            obj
          ) as CreateCrossRegionAutonomousDatabaseDataGuardDetails)),
      ...{}
    };

    return jsonObj;
  }
}
