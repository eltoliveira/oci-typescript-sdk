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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface BackupKeyDetails {
  "backupLocation"?: model.BackupLocationBucket | model.BackupLocationURI;
}

export namespace BackupKeyDetails {
  export function getJsonObj(obj: BackupKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupLocation": obj.backupLocation
          ? model.BackupLocation.getJsonObj(obj.backupLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackupKeyDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupLocation": obj.backupLocation
          ? model.BackupLocation.getDeserializedJsonObj(obj.backupLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
