/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The details to update an Autonomous Data Warehouse data asset connection.
 */
export interface UpdateConnectionFromAdwc extends model.UpdateConnectionDetails {
  /**
   * The user name for the connection.
   */
  "username"?: string;
  /**
   * The password for the connection.
   */
  "password"?: string;

  "modelType": string;
}

export namespace UpdateConnectionFromAdwc {
  export function getJsonObj(obj: UpdateConnectionFromAdwc, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateConnectionFromAdwc)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ADWC_CONNECTION";
}
