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
 * The Maintenance Policy for the DB System.
 *
 */
export interface UpdateMaintenanceDetails {
  /**
    * The start of the 2 hour maintenance window.
* <p>
This string is of the format: \"{day-of-week} {time-of-day}\".
* <p>
\"{day-of-week}\" is a case-insensitive string like \"mon\", \"tue\", &c.
* <p>
\"{time-of-day}\" is the \"Time\" portion of an RFC3339-formatted timestamp. Any second or sub-second time data will be truncated to zero.
* 
    */
  "windowStartTime"?: string;
}

export namespace UpdateMaintenanceDetails {
  export function getJsonObj(obj: UpdateMaintenanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMaintenanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
