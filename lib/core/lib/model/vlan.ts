/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

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
* A resource to be used only with the Oracle Cloud VMware Solution.
* <p>
Conceptually, a virtual LAN (VLAN) is a broadcast domain that is created
* by partitioning and isolating a network at the data link layer (a *layer 2 network*).
* VLANs work by using IEEE 802.1Q VLAN tags. Layer 2 traffic is forwarded within the
* VLAN based on MAC learning.
* <p>
In the Networking service, a VLAN is an object within a VCN. You use VLANs to
* partition the VCN at the data link layer (layer 2). A VLAN is analagous to a subnet,
* which is an object for partitioning the VCN at the IP layer (layer 3).
* 
*/
export interface Vlan {
  /**
    * The availability domain of the VLAN.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
    * The range of IPv4 addresses that will be used for layer 3 communication with
* hosts outside the VLAN.
* <p>
Example: `192.168.1.0/24`
* 
    */
  "cidrBlock": string;
  /**
   * The OCID of the compartment containing the VLAN.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
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
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The VLAN's Oracle ID (OCID).
   */
  "id": string;
  /**
   * The VLAN's current state.
   */
  "lifecycleState": Vlan.LifecycleState;
  /**
   * A list of the OCIDs of the network security groups (NSGs) to use with this VLAN.
   * All VNICs in the VLAN belong to these NSGs. For more
   * information about NSGs, see
   * {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
    * The IEEE 802.1Q VLAN tag of this VLAN.
* <p>
Example: `100`
* 
    */
  "vlanTag"?: number;
  /**
   * The OCID of the route table that the VLAN uses.
   */
  "routeTableId"?: string;
  /**
    * The date and time the VLAN was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The OCID of the VCN the VLAN is in.
   */
  "vcnId": string;
}

export namespace Vlan {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Vlan): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
