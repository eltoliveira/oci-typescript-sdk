/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database 
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
 * 
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
 * Database summary object resulting from a sql search operation.
 */
export interface SqlSearchSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The database name. The database name is unique within the tenancy.
   */
  "databaseName": string;
  /**
   * The user-friendly name for the database. The name does not have to be unique.
   */
  "databaseDisplayName": string;
  /**
   * Operations Insights internal representation of the database type.
   */
  "databaseType": string;
  /**
   * The version of the database.
   */
  "databaseVersion": string;
}

export namespace SqlSearchSummary {
  export function getJsonObj(obj: SqlSearchSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
