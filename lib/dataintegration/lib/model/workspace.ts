/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A workspace is an organizational construct to keep multiple data integration solutions and their resources (data assets, data flows, tasks, and so on) separate from each other, helping you to stay organized. For example, you could have separate workspaces for development, testing, and production.
 */
export interface Workspace {
  /**
   * The OCID of the VCN the subnet is in.
   */
  "vcnId"?: string;
  /**
   * The OCID of the subnet for customer connected databases.
   */
  "subnetId"?: string;
  /**
   * The IP of the custom DNS.
   */
  "dnsServerIp"?: string;
  /**
   * The DNS zone of the custom DNS to use to resolve names.
   */
  "dnsServerZone"?: string;
  /**
   * Specifies whether the private network connection is enabled or disabled.
   */
  "isPrivateNetworkEnabled"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A detailed description for the workspace.
   */
  "description"?: string;
  /**
   * A user-friendly display name for the workspace. Does not have to be unique, and can be modified. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment containing the workspace.
   */
  "compartmentId"?: string;
  /**
   * The date and time the workspace was created, in the timestamp format defined by RFC3339.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the workspace was updated, in the timestamp format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * Lifecycle states for workspaces in Data Integration Service
   * CREATING - The resource is being created and may not be usable until the entire metadata is defined
   * UPDATING - The resource is being updated and may not be usable until all changes are commited
   * DELETING - The resource is being deleted and might require deep cleanup of children.
   * ACTIVE   - The resource is valid and available for access
   * INACTIVE - The resource might be incomplete in its definition or might have been made unavailable for
   *          administrative reasons
   * DELETED  - The resource has been deleted and isn't available
   * FAILED   - The resource is in a failed state due to validation or other errors
   * STARTING - The resource is being started and may not be usable until becomes ACTIVE again
   * STOPPING - The resource is in the process of Stopping and may not be usable until it Stops or fails
   * STOPPED  - The resource is in Stopped state due to stop operation.
   *
   */
  "lifecycleState"?: Workspace.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in failed state.
   */
  "stateMessage"?: string;
  /**
   * A system-generated and immutable identifier assigned to the workspace upon creation.
   */
  "id": string;
}

export namespace Workspace {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Workspace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Workspace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
