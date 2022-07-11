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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Metadata of a column in a data object query result set.
 */
export interface QueryDataObjectResultSetColumnMetadata {
  /**
   * Name of the column in a data object query result set.
   */
  "name": string;
  /**
   * Type of the column in a data object query result set.
   */
  "dataTypeName"?: QueryDataObjectResultSetColumnMetadata.DataTypeName;
}

export namespace QueryDataObjectResultSetColumnMetadata {
  export enum DataTypeName {
    Number = "NUMBER",
    Timestamp = "TIMESTAMP",
    Varchar2 = "VARCHAR2",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: QueryDataObjectResultSetColumnMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: QueryDataObjectResultSetColumnMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
