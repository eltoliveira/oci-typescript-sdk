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

export interface VaultSummary {
  /**
   * The OCID of the compartment that contains a particular vault.
   */
  "compartmentId": string;
  /**
   * The service endpoint to perform cryptographic operations against. Cryptographic operations include
   * [Encrypt](https://docs.cloud.oracle.com/api/#/en/key/latest/EncryptedData/Encrypt), [Decrypt](https://docs.cloud.oracle.com/api/#/en/key/latest/DecryptedData/Decrypt),
   * and [GenerateDataEncryptionKey](https://docs.cloud.oracle.com/api/#/en/key/latest/GeneratedKey/GenerateDataEncryptionKey) operations.
   *
   */
  "cryptoEndpoint": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for a vault. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of a vault.
   */
  "id": string;
  /**
    * A vault's current lifecycle state.
* <p>
Example: `ACTIVE`
* 
    */
  "lifecycleState": VaultSummary.LifecycleState;
  /**
   * The service endpoint to perform management operations against. Management operations include \"Create,\" \"Update,\" \"List,\" \"Get,\" and \"Delete\" operations.
   *
   */
  "managementEndpoint": string;
  /**
    * The date and time a vault was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: `2018-04-03T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The type of vault. Each type of vault stores keys with different
   * degrees of isolation and has different options and pricing.
   *
   */
  "vaultType": VaultSummary.VaultType;
}

export namespace VaultSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    PendingDeletion = "PENDING_DELETION",
    SchedulingDeletion = "SCHEDULING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    Updating = "UPDATING",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Restoring = "RESTORING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum VaultType {
    VirtualPrivate = "VIRTUAL_PRIVATE",
    Default = "DEFAULT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VaultSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
