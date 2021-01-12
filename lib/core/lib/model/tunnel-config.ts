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
 * Deprecated. For tunnel information, instead see:
 * <p>
 * {@link IPSecConnectionTunnel}
 *   * {@link IPSecConnectionTunnelSharedSecret}
 *
 */
export interface TunnelConfig {
  /**
    * The IP address of Oracle's VPN headend.
* <p>
Example: `203.0.113.50 `
* 
    */
  "ipAddress": string;
  /**
   * The shared secret of the IPSec tunnel.
   *
   */
  "sharedSecret": string;
  /**
    * The date and time the IPSec connection was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace TunnelConfig {
  export function getJsonObj(obj: TunnelConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
