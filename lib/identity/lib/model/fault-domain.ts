/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
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
 * A Fault Domain is a logical grouping of hardware and infrastructure within an Availability Domain that can become
 * unavailable in its entirety either due to hardware failure such as Top-of-rack (TOR) switch failure or due to
 * planned software maintenance such as security updates that reboot your instances.
 *
 */
export interface FaultDomain {
  /**
   * The name of the Fault Domain.
   */
  "name"?: string;
  /**
   * The OCID of the Fault Domain.
   */
  "id"?: string;
  /**
   * The OCID of the compartment. Currently only tenancy (root) compartment can be provided.
   */
  "compartmentId"?: string;
  /**
   * The name of the availabilityDomain where the Fault Domain belongs.
   */
  "availabilityDomain"?: string;
}

export namespace FaultDomain {
  export function getJsonObj(obj: FaultDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FaultDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
