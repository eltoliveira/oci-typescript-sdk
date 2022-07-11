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
* A set of DHCP options. Used by the VCN to automatically provide configuration
* information to the instances when they boot up. There are two options you can set:
* <p>
- {@link DhcpDnsOption}: Lets you specify how DNS (hostname resolution) is
* handled in the subnets in your VCN.
* <p>
- {@link DhcpSearchDomainOption}: Lets you specify
* a search domain name to use for DNS queries.
* <p>
For more information, see  [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm)
* and [DHCP Options](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingDHCP.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface DhcpOptions {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the set of DHCP options.
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
   * Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) for the set of DHCP options.
   */
  "id": string;
  /**
   * The current state of the set of DHCP options.
   */
  "lifecycleState": DhcpOptions.LifecycleState;
  /**
   * The collection of individual DHCP options.
   */
  "options": Array<model.DhcpOption>;
  /**
    * Date and time the set of DHCP options was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN the set of DHCP options belongs to.
   */
  "vcnId": string;
}

export namespace DhcpOptions {
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

  export function getJsonObj(obj: DhcpOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "options": obj.options
          ? obj.options.map(item => {
              return model.DhcpOption.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DhcpOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "options": obj.options
          ? obj.options.map(item => {
              return model.DhcpOption.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
