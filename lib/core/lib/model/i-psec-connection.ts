/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
* A connection between a DRG and CPE. This connection consists of multiple IPSec
* tunnels. Creating this connection is one of the steps required when setting up
* a Site-to-Site VPN.
* <p>
**Important:**  Each tunnel in an IPSec connection can use either static routing or BGP dynamic
* routing (see the {@link IPSecConnectionTunnel} object's
* `routing` attribute). Originally only static routing was supported and
* every IPSec connection was required to have at least one static route configured.
* To maintain backward compatibility in the API when support for BPG dynamic routing was introduced,
* the API accepts an empty list of static routes if you configure both of the IPSec tunnels to use
* BGP dynamic routing. If you switch a tunnel's routing from `BGP` to `STATIC`, you must first
* ensure that the IPSec connection is configured with at least one valid CIDR block static route.
* Oracle uses the IPSec connection's static routes when routing a tunnel's traffic *only*
* if that tunnel's `routing` attribute = `STATIC`. Otherwise the static routes are ignored.
* <p>
For more information about the workflow for setting up an IPSec connection, see
* [Site-to-Site VPN Overview](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/overviewIPsec.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface IPSecConnection {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the IPSec connection.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@link Cpe} object.
   */
  "cpeId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
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
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DRG.
   */
  "drgId": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The IPSec connection's Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   */
  "id": string;
  /**
   * The IPSec connection's current state.
   */
  "lifecycleState": IPSecConnection.LifecycleState;
  /**
    * Your identifier for your CPE device. Can be either an IP address or a hostname (specifically,
* the fully qualified domain name (FQDN)). The type of identifier here must correspond
* to the value for `cpeLocalIdentifierType`.
* <p>
If you don't provide a value when creating the IPSec connection, the `ipAddress` attribute
* for the {@link Cpe} object specified by `cpeId` is used as the `cpeLocalIdentifier`.
* <p>
For information about why you'd provide this value, see
* [If Your CPE Is Behind a NAT Device](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/overviewIPsec.htm#nat).
* <p>
Example IP address: `10.0.3.3`
* <p>
Example hostname: `cpe.example.com`
* 
    */
  "cpeLocalIdentifier"?: string;
  /**
   * The type of identifier for your CPE device. The value here must correspond to the value
   * for `cpeLocalIdentifier`.
   *
   */
  "cpeLocalIdentifierType"?: IPSecConnection.CpeLocalIdentifierType;
  /**
    * Static routes to the CPE. The CIDR must not be a
* multicast address or class E address.
* <p>
Used for routing a given IPSec tunnel's traffic only if the tunnel
* is using static routing. If you configure at least one tunnel to use static routing, then
* you must provide at least one valid static route. If you configure both
* tunnels to use BGP dynamic routing, you can provide an empty list for the static routes.
* <p>
The CIDR can be either IPv4 or IPv6. IPv6 addressing is supported for all commercial and government regions.
* See [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `10.0.1.0/24`
* <p>
Example: `2001:db8::/32`
* 
    */
  "staticRoutes": Array<string>;
  /**
    * The date and time the IPSec connection was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace IPSecConnection {
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

  export enum CpeLocalIdentifierType {
    IpAddress = "IP_ADDRESS",
    Hostname = "HOSTNAME",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IPSecConnection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IPSecConnection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
