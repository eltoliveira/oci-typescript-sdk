/**
 * File Storage API
 * API for the File Storage service. Use this API to manage file systems, mount targets, and snapshots. For more information, see [Overview of File Storage](/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Details for updating the file system.
 */
export interface UpdateFileSystemDetails {
  /**
    * A user-friendly name. It does not have to be unique, and it is changeable.
* Avoid entering confidential information.
* <p>
Example: `My file system`
* 
    */
  "displayName"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair
   *  with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Key Management master encryption key to associate with the specified file system. If this value is empty, the Update operation will remove the associated key, if there is one, from the file system. (The file system will continue to be encrypted, but with an encryption key managed by Oracle.)
* <p>
If updating to a new Key Management key, the old key must remain enabled so that files previously encrypted continue
* to be accessible. For more information, see [Overview of Key Management](https://docs.cloud.oracle.com/Content/KeyManagement/Concepts/keyoverview.htm).
* 
    */
  "kmsKeyId"?: string;
}

export namespace UpdateFileSystemDetails {
  export function getJsonObj(obj: UpdateFileSystemDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
