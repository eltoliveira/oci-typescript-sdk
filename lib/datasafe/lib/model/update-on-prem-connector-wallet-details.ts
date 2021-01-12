/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details used to update an on-premises connector's wallet.
 */
export interface UpdateOnPremConnectorWalletDetails {
  /**
   * Indicates whether to update or not. If false, the wallet will not be updated. Default is false.
   */
  "isUpdate"?: boolean;
}

export namespace UpdateOnPremConnectorWalletDetails {
  export function getJsonObj(obj: UpdateOnPremConnectorWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
