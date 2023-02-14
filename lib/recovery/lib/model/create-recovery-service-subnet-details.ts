/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
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
 * Describes the parameters required to create a recovery service subnet.
 */
export interface CreateRecoveryServiceSubnetDetails {
  /**
   * A user-provided name for the recovery service subnet. The 'displayName' does not have to be unique, and it can be modified. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the subnet associated with the recovery service subnet. You can create a single backup network per virtual cloud network (VCN).
   */
  "subnetId": string;
  /**
   * The OCID of the virtual cloud network (VCN) that contains the recovery service subnet. You can create a single recovery service subnet per VCN.
   */
  "vcnId": string;
  /**
   * The compartment OCID.
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. For more information, see [Resource Tags](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcetags.htm)
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateRecoveryServiceSubnetDetails {
  export function getJsonObj(obj: CreateRecoveryServiceSubnetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateRecoveryServiceSubnetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
