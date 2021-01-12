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
* The `InstanceConsoleConnection` API provides you with console access to Compute instances,
* enabling you to troubleshoot malfunctioning instances remotely.
* <p>
For more information about console access, see
* [Accessing the Console](https://docs.cloud.oracle.com/Content/Compute/References/serialconsole.htm).
* 
*/
export interface InstanceConsoleConnection {
  /**
   * The OCID of the compartment to contain the console connection.
   */
  "compartmentId"?: string;
  /**
   * The SSH connection string for the console connection.
   */
  "connectionString"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The SSH public key fingerprint for the console connection.
   */
  "fingerprint"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the console connection.
   */
  "id"?: string;
  /**
   * The OCID of the instance the console connection connects to.
   */
  "instanceId"?: string;
  /**
   * The current state of the console connection.
   */
  "lifecycleState"?: InstanceConsoleConnection.LifecycleState;
  /**
   * The SSH connection string for the SSH tunnel used to
   * connect to the console connection over VNC.
   *
   */
  "vncConnectionString"?: string;
}

export namespace InstanceConsoleConnection {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceConsoleConnection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
