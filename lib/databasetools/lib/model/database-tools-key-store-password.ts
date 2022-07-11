/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The key store password.
 */
export interface DatabaseToolsKeyStorePassword {
  "valueType": string;
}

export namespace DatabaseToolsKeyStorePassword {
  export function getJsonObj(obj: DatabaseToolsKeyStorePassword): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "SECRETID":
          return model.DatabaseToolsKeyStorePasswordSecretId.getJsonObj(
            <model.DatabaseToolsKeyStorePasswordSecretId>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStorePassword): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "valueType" in obj && obj.valueType) {
      switch (obj.valueType) {
        case "SECRETID":
          return model.DatabaseToolsKeyStorePasswordSecretId.getDeserializedJsonObj(
            <model.DatabaseToolsKeyStorePasswordSecretId>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.valueType);
      }
    }
    return jsonObj;
  }
}
