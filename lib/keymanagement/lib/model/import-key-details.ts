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

export interface ImportKeyDetails {
  /**
   * The OCID of the compartment that contains this key.
   */
  "compartmentId": string;
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"foo-value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the key. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  "keyShape": model.KeyShape;
  "wrappedImportKey": model.WrappedImportKey;
  /**
   * The key's protection mode indicates how the key persists and where cryptographic operations that use the key are performed.
   * A protection mode of `HSM` means that the key persists on a hardware security module (HSM) and all cryptographic operations are performed inside
   * the HSM. A protection mode of `SOFTWARE` means that the key persists on the server, protected by the vault's RSA wrapping key which persists
   * on the HSM. All cryptographic operations that use a key with a protection mode of `SOFTWARE` are performed on the server. By default,
   * a key's protection mode is set to `HSM`. You can't change a key's protection mode after the key is created or imported.
   *
   */
  "protectionMode"?: ImportKeyDetails.ProtectionMode;
}

export namespace ImportKeyDetails {
  export enum ProtectionMode {
    Hsm = "HSM",
    Software = "SOFTWARE"
  }

  export function getJsonObj(obj: ImportKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyShape": obj.keyShape ? model.KeyShape.getJsonObj(obj.keyShape) : undefined,
        "wrappedImportKey": obj.wrappedImportKey
          ? model.WrappedImportKey.getJsonObj(obj.wrappedImportKey)
          : undefined
      }
    };

    return jsonObj;
  }
}
