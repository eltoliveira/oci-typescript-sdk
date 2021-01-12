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
 * Parameters detailing how to provision the source for the given Channel.
 */
export interface ChannelSource {
  "sourceType": string;
}

export namespace ChannelSource {
  export function getJsonObj(obj: ChannelSource): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "MYSQL":
          return model.ChannelSourceMysql.getJsonObj(
            <model.ChannelSourceMysql>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
}
