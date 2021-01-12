/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * A Peer details
 */
export interface Peer {
  /**
   * peer identifier
   */
  "peerKey": string;
  /**
   * Peer role
   */
  "role": string;
  /**
   * peer alias
   */
  "alias"?: string;
  "ocpuAllocationParam"?: model.OcpuAllocationNumberParam;
  /**
   * Host on which the Peer exists
   */
  "host": string;
  /**
   * Availability Domain of peer
   */
  "ad": string;
  /**
   * The current state of the peer.
   */
  "lifecycleState"?: Peer.LifecycleState;
}

export namespace Peer {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Peer): object {
    const jsonObj = {
      ...obj,
      ...{
        "ocpuAllocationParam": obj.ocpuAllocationParam
          ? model.OcpuAllocationNumberParam.getJsonObj(obj.ocpuAllocationParam)
          : undefined
      }
    };

    return jsonObj;
  }
}
