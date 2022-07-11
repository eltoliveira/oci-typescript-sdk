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
 * Note that a valid `dbSystemId` value must be supplied for the `CreateDbHomeWithDbSystemId` API operation to successfully complete.
 *
 */
export interface CreateDbHomeWithDbSystemIdDetails extends model.CreateDbHomeBase {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the DB system.
   */
  "dbSystemId": string;
  /**
   * A valid Oracle Database version. To get a list of supported versions, use the {@link #listDbVersions(ListDbVersionsRequest) listDbVersions} operation.
   */
  "dbVersion"?: string;
  "database"?: model.CreateDatabaseDetails;

  "source": string;
}

export namespace CreateDbHomeWithDbSystemIdDetails {
  export function getJsonObj(
    obj: CreateDbHomeWithDbSystemIdDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbHomeBase.getJsonObj(obj) as CreateDbHomeWithDbSystemIdDetails)),
      ...{
        "database": obj.database ? model.CreateDatabaseDetails.getJsonObj(obj.database) : undefined
      }
    };

    return jsonObj;
  }
  export const source = "NONE";
  export function getDeserializedJsonObj(
    obj: CreateDbHomeWithDbSystemIdDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbHomeBase.getDeserializedJsonObj(
            obj
          ) as CreateDbHomeWithDbSystemIdDetails)),
      ...{
        "database": obj.database
          ? model.CreateDatabaseDetails.getDeserializedJsonObj(obj.database)
          : undefined
      }
    };

    return jsonObj;
  }
}
