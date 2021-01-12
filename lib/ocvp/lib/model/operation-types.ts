/**
 * Oracle Cloud VMware Solution API
 * Use this API to manage the Oracle Cloud VMware Solution.

 * OpenAPI spec version: 20200501
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
 * Possible asynchronous operation types.
 **/
export enum OperationTypes {
  CreateSddc = "CREATE_SDDC",
  DeleteSddc = "DELETE_SDDC",
  CreateEsxiHost = "CREATE_ESXI_HOST",
  DeleteEsxiHost = "DELETE_ESXI_HOST",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationTypes {
  export function getJsonObj(obj: OperationTypes): object {
    return { obj };
  }
}
