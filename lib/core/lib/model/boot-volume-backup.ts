/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * A point-in-time copy of a boot volume that can then be used to create
 * a new boot volume or recover a boot volume. For more information, see [Overview
 * of Boot Volume Backups](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/bootvolumebackups.htm)
 * To use any of the API operations, you must be authorized in an IAM policy.
 * If you're not authorized, talk to an administrator. If you're an administrator
 * who needs to write policies to give users access, see [Getting Started with
 * Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you
 * supply string values using the API.
 *
 */
export interface BootVolumeBackup {
  /**
   * The OCID of the boot volume.
   */
  "bootVolumeId"?: string;
  /**
   * The OCID of the compartment that contains the boot volume backup.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The date and time the volume backup will expire and be automatically deleted.
   * Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339). This parameter will always be present for backups that
   * were created automatically by a scheduled-backup policy. For manually created backups,
   * it will be absent, signifying that there is no expiration time and the backup will
   * last forever until manually deleted.
   *
   */
  "expirationTime"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the boot volume backup.
   */
  "id": string;
  /**
   * The image OCID used to create the boot volume the backup is taken from.
   *
   */
  "imageId"?: string;
  /**
   * The OCID of the Key Management master encryption assigned to the boot volume backup.
   * For more information about the Key Management service and encryption keys, see
   * [Overview of Key Management](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and
   * [Using Keys](https://docs.cloud.oracle.com/iaas/Content/KeyManagement/Tasks/usingkeys.htm).
   *
   */
  "kmsKeyId"?: string;
  /**
   * The current state of a boot volume backup.
   */
  "lifecycleState": BootVolumeBackup.LifecycleState;
  /**
   * The size of the boot volume, in GBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs"?: number;
  /**
   * The OCID of the source boot volume backup.
   */
  "sourceBootVolumeBackupId"?: string;
  /**
   * Specifies whether the backup was created manually, or via scheduled backup policy.
   *
   */
  "sourceType"?: BootVolumeBackup.SourceType;
  /**
   * The date and time the boot volume backup was created. This is the time the actual point-in-time image
   * of the volume data was taken. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the request to create the boot volume backup was received. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeRequestReceived"?: Date;
  /**
   * The type of a volume backup.
   */
  "type"?: BootVolumeBackup.Type;
  /**
   * The size used by the backup, in GBs. It is typically smaller than sizeInGBs, depending on the space
   * consumed on the boot volume and whether the backup is full or incremental.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uniqueSizeInGBs"?: number;
}

export namespace BootVolumeBackup {
  export enum LifecycleState {
    Creating = "CREATING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    RequestReceived = "REQUEST_RECEIVED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SourceType {
    Manual = "MANUAL",
    Scheduled = "SCHEDULED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Full = "FULL",
    Incremental = "INCREMENTAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BootVolumeBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BootVolumeBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
