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
 * Peer summary information for returning in a list.
 */
export interface PeerSummary {
  /**
   * Peer identifier
   */
  "peerKey"?: string;
  /**
   * The current state of the peer.
   */
  "lifecycleState"?: string;
}

export namespace PeerSummary {
  export function getJsonObj(obj: PeerSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
