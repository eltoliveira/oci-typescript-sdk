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
 * The Single Client Access Name (SCAN) details.
 *
 */
export interface ScanDetails {
  /**
   * The SCAN hostname.
   */
  "hostname": string;
  /**
   * The SCAN TCPIP port. Default is 1521. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  /**
   * The SCAN TCPIP port. Default is 1521. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortTcp"?: number;
  /**
   * The SCAN TCPIP SSL port. Default is 2484. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortTcpSsl"?: number;
  /**
   * The list of SCAN IP addresses. Three addresses should be provided.
   */
  "ips": Array<string>;
}

export namespace ScanDetails {
  export function getJsonObj(obj: ScanDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScanDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
