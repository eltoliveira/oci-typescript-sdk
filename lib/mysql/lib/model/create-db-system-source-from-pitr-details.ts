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
* DB System OCID to perform a point in time recovery to the current point in time.
* <p>
DB System OCID and recovery point to perform a point in time recovery to the
* specified recovery point.
* 
*/
export interface CreateDbSystemSourceFromPitrDetails extends model.CreateDbSystemSourceDetails {
  /**
   * The OCID of the DB System from which a backup shall be selected to be
   * restored when creating the new DB System. Use this together with
   * recovery point to perform a point in time recovery operation.
   *
   */
  "dbSystemId": string;
  /**
   * The date and time, as per RFC 3339, of the change up to which the
   * new DB System shall be restored to, using a backup and logs from the
   * original DB System. In case no point in time is specified, then this
   * new DB System shall be restored up to the latest change recorded for
   * the original DB System.
   *
   */
  "recoveryPoint"?: Date;

  "sourceType": string;
}

export namespace CreateDbSystemSourceFromPitrDetails {
  export function getJsonObj(
    obj: CreateDbSystemSourceFromPitrDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbSystemSourceDetails.getJsonObj(
            obj
          ) as CreateDbSystemSourceFromPitrDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "PITR";
  export function getDeserializedJsonObj(
    obj: CreateDbSystemSourceFromPitrDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDbSystemSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateDbSystemSourceFromPitrDetails)),
      ...{}
    };

    return jsonObj;
  }
}
