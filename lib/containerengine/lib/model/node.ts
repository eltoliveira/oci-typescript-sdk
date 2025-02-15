/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The properties that define a node.
 */
export interface Node {
  /**
   * The OCID of the compute instance backing this node.
   */
  "id"?: string;
  /**
   * The name of the node.
   */
  "name"?: string;
  /**
   * The version of Kubernetes this node is running.
   */
  "kubernetesVersion"?: string;
  /**
   * The name of the availability domain in which this node is placed.
   */
  "availabilityDomain"?: string;
  /**
   * The OCID of the subnet in which this node is placed.
   */
  "subnetId"?: string;
  /**
   * The OCID of the node pool to which this node belongs.
   */
  "nodePoolId"?: string;
  /**
   * The fault domain of this node.
   */
  "faultDomain"?: string;
  /**
   * The private IP address of this node.
   */
  "privateIp"?: string;
  /**
   * The public IP address of this node.
   */
  "publicIp"?: string;
  /**
   * An error that may be associated with the node.
   */
  "nodeError"?: model.NodeError;
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The state of the node.
   */
  "lifecycleState"?: Node.LifecycleState;
  /**
   * Details about the state of the node.
   */
  "lifecycleDetails"?: string;
}

export namespace Node {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failing = "FAILING",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Node): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeError": obj.nodeError ? model.NodeError.getJsonObj(obj.nodeError) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Node): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeError": obj.nodeError
          ? model.NodeError.getDeserializedJsonObj(obj.nodeError)
          : undefined
      }
    };

    return jsonObj;
  }
}
