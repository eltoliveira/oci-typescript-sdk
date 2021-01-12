/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
 * A tag definition that belongs to a specific tag namespace.
 *
 */
export interface TagSummary {
  /**
   * The OCID of the compartment that contains the tag definition.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the tag definition.
   */
  "id"?: string;
  /**
   * The name assigned to the tag during creation. This is the tag key definition.
   * The name must be unique within the tag namespace and cannot be changed.
   *
   */
  "name"?: string;
  /**
   * The description you assign to the tag.
   */
  "description"?: string;
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
   * Whether the tag is retired.
   * See [Retiring Key Definitions and Namespace Definitions](https://docs.cloud.oracle.com/Content/Identity/Concepts/taggingoverview.htm#Retiring).
   *
   */
  "isRetired"?: boolean;
  /**
   * The tag's current state. After creating a tag, make sure its `lifecycleState` is ACTIVE before using it. After retiring a tag, make sure its `lifecycleState` is INACTIVE before using it. If you delete a tag, you cannot delete another tag until the deleted tag's `lifecycleState` changes from DELETING to DELETED.
   */
  "lifecycleState"?: string;
  /**
   * Date and time the tag was created, in the format defined by RFC3339.
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * Indicates whether the tag is enabled for cost tracking.
   *
   */
  "isCostTracking"?: boolean;
}

export namespace TagSummary {
  export function getJsonObj(obj: TagSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
