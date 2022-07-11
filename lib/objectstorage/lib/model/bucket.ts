/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
* A bucket is a container for storing objects in a compartment within a namespace. A bucket is associated with a single compartment.
* The compartment has policies that indicate what actions a user can perform on a bucket and all the objects in the bucket. For more
* information, see [Managing Buckets](https://docs.cloud.oracle.com/Content/Object/Tasks/managingbuckets.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
* talk to an administrator. If you are an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Bucket {
  /**
   * The Object Storage namespace in which the bucket resides.
   */
  "namespace": string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   * Example: my-new-bucket1
   *
   */
  "name": string;
  /**
   * The compartment ID in which the bucket is authorized.
   */
  "compartmentId": string;
  /**
   * Arbitrary string keys and values for user-defined metadata.
   */
  "metadata": { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the user who created the bucket.
   */
  "createdBy": string;
  /**
   * The date and time the bucket was created, as described in [RFC 2616](https://tools.ietf.org/html/rfc2616#section-14.29).
   */
  "timeCreated": Date;
  /**
   * The entity tag (ETag) for the bucket.
   */
  "etag": string;
  /**
   * The type of public access enabled on this bucket.
   * A bucket is set to `NoPublicAccess` by default, which only allows an authenticated caller to access the
   * bucket and its contents. When `ObjectRead` is enabled on the bucket, public access is allowed for the
   * `GetObject`, `HeadObject`, and `ListObjects` operations. When `ObjectReadWithoutList` is enabled on the
   * bucket, public access is allowed for the `GetObject` and `HeadObject` operations.
   *
   */
  "publicAccessType"?: Bucket.PublicAccessType;
  /**
   * The storage tier type assigned to the bucket. A bucket is set to `Standard` tier by default, which means
   * objects uploaded or copied to the bucket will be in the standard storage tier. When the `Archive` tier type
   * is set explicitly for a bucket, objects uploaded or copied to the bucket will be stored in archive storage.
   * The `storageTier` property is immutable after bucket is created.
   *
   */
  "storageTier"?: Bucket.StorageTier;
  /**
   * Whether or not events are emitted for object state changes in this bucket. By default, `objectEventsEnabled` is
   * set to `false`. Set `objectEventsEnabled` to `true` to emit events for object state changes. For more information
   * about events, see [Overview of Events](https://docs.cloud.oracle.com/Content/Events/Concepts/eventsoverview.htm).
   *
   */
  "objectEventsEnabled"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
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
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key Management
   * service to generate a data encryption key or to encrypt or decrypt a data encryption key.
   *
   */
  "kmsKeyId"?: string;
  /**
   * The entity tag (ETag) for the live object lifecycle policy on the bucket.
   */
  "objectLifecyclePolicyEtag"?: string;
  /**
   * The approximate number of objects in the bucket. Count statistics are reported periodically. You will see a
   * lag between what is displayed and the actual object count.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateCount"?: number;
  /**
   * The approximate total size in bytes of all objects in the bucket. Size statistics are reported periodically. You will
   * see a lag between what is displayed and the actual size of the bucket.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateSize"?: number;
  /**
   * Whether or not this bucket is a replication source. By default, `replicationEnabled` is set to `false`. This will
   * be set to 'true' when you create a replication policy for the bucket.
   *
   */
  "replicationEnabled"?: boolean;
  /**
   * Whether or not this bucket is read only. By default, `isReadOnly` is set to `false`. This will
   * be set to 'true' when this bucket is configured as a destination in a replication policy.
   *
   */
  "isReadOnly"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the bucket.
   *
   */
  "id"?: string;
  /**
   * The versioning status on the bucket. A bucket is created with versioning `Disabled` by default.
   * For versioning `Enabled`, objects are protected from overwrites and deletes, by maintaining their version history. When versioning is `Suspended`, the previous versions will still remain but new versions will no longer be created when overwitten or deleted.
   *
   */
  "versioning"?: Bucket.Versioning;
  /**
   * The auto tiering status on the bucket. A bucket is created with auto tiering `Disabled` by default.
   * For auto tiering `InfrequentAccess`, objects are transitioned automatically between the 'Standard'
   * and 'InfrequentAccess' tiers based on the access pattern of the objects.
   *
   */
  "autoTiering"?: Bucket.AutoTiering;
}

export namespace Bucket {
  export enum PublicAccessType {
    NoPublicAccess = "NoPublicAccess",
    ObjectRead = "ObjectRead",
    ObjectReadWithoutList = "ObjectReadWithoutList",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum StorageTier {
    Standard = "Standard",
    Archive = "Archive",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Versioning {
    Enabled = "Enabled",
    Suspended = "Suspended",
    Disabled = "Disabled",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AutoTiering {
    Disabled = "Disabled",
    InfrequentAccess = "InfrequentAccess",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Bucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Bucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
