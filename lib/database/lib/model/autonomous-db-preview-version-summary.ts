/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The Autonomous Database preview version. Note that preview version software is only available for databases on [shared Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adboverview.htm#AEI).
 *
 */
export interface AutonomousDbPreviewVersionSummary {
  /**
   * A valid Autonomous Database preview version.
   */
  "version": string;
  /**
   * The date and time when the preview version availability begins.
   */
  "timePreviewBegin"?: Date;
  /**
   * The date and time when the preview version availability ends.
   */
  "timePreviewEnd"?: Date;
  /**
    * The Autonomous Database workload type. The following values are valid:
* <p>
- OLTP - indicates an Autonomous Transaction Processing database
* - DW - indicates an Autonomous Data Warehouse database
* - AJD - indicates an Autonomous JSON Database
* - APEX - indicates an Autonomous Database with the Oracle Application Express (APEX) workload type.
* 
    */
  "dbWorkload"?: AutonomousDbPreviewVersionSummary.DbWorkload;
  /**
   * A URL that points to a detailed description of the preview version.
   */
  "details"?: string;
}

export namespace AutonomousDbPreviewVersionSummary {
  export enum DbWorkload {
    Oltp = "OLTP",
    Dw = "DW",
    Ajd = "AJD",
    Apex = "APEX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDbPreviewVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
