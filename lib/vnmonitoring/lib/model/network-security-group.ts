/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
* A *network security group* (NSG) provides virtual firewall rules for a specific set of
* {@link Vnic} in a VCN. Compare NSGs with {@link SecurityList},
* which provide virtual firewall rules to all the VNICs in a *subnet*.
* <p>
A network security group consists of two items:
* <p>
  * The set of {@link Vnic} that all have the same security rule needs (for
*     example, a group of Compute instances all running the same application)
*   * A set of NSG {@link SecurityRule} that apply to the VNICs in the group
* <p>
After creating an NSG, you can add VNICs and security rules to it. For example, when you create
* an instance, you can specify one or more NSGs to add the instance to (see
* {@link #createVnicDetails(CreateVnicDetailsRequest) createVnicDetails}). Or you can add an existing
* instance to an NSG with {@link #updateVnic(UpdateVnicRequest) updateVnic}.
* <p>
To add security rules to an NSG, see
* {@link #addNetworkSecurityGroupSecurityRules(AddNetworkSecurityGroupSecurityRulesRequest) addNetworkSecurityGroupSecurityRules}.
* <p>
To list the VNICs in an NSG, see
* {@link #listNetworkSecurityGroupVnics(ListNetworkSecurityGroupVnicsRequest) listNetworkSecurityGroupVnics}.
* <p>
To list the security rules in an NSG, see
* {@link #listNetworkSecurityGroupSecurityRules(ListNetworkSecurityGroupSecurityRulesRequest) listNetworkSecurityGroupSecurityRules}.
* <p>
For more information about network security groups, see
* [Network Security Groups](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/networksecuritygroups.htm).
* <p>
**Important:** Oracle Cloud Infrastructure Compute service images automatically include firewall rules (for example,
* Linux iptables, Windows firewall). If there are issues with some type of access to an instance,
* make sure all of the following are set correctly:
* <p>
  * Any security rules in any NSGs the instance's VNIC belongs to
*   * Any {@link SecurityList} associated with the instance's subnet
*   * The instance's OS firewall rules
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface NetworkSecurityGroup {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment the network security group is in.
   *
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the network security group.
   */
  "id": string;
  /**
   * The network security group's current state.
   */
  "lifecycleState": NetworkSecurityGroup.LifecycleState;
  /**
    * The date and time the network security group was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the network security group's VCN.
   */
  "vcnId": string;
}

export namespace NetworkSecurityGroup {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: NetworkSecurityGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkSecurityGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
