/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface VaultUsage {
  /**
   * The number of keys in this vault that persist on a hardware security module (HSM), across all compartments, excluding keys in a `DELETED` state.
   */
  "keyCount": number;
  /**
   * The number of key versions in this vault that persist on a hardware security module (HSM), across all compartments, excluding key versions in a `DELETED` state.
   */
  "keyVersionCount": number;
  /**
   * The number of keys in this vault that persist on the server, across all compartments, excluding keys in a `DELETED` state.
   */
  "softwareKeyCount"?: number;
  /**
   * The number of key versions in this vault that persist on the server, across all compartments, excluding key versions in a `DELETED` state.
   */
  "softwareKeyVersionCount"?: number;
}

export namespace VaultUsage {
  export function getJsonObj(obj: VaultUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
