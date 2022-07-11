/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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

export interface InstanceConfigurationParavirtualizedAttachVolumeDetails
  extends model.InstanceConfigurationAttachVolumeDetails {
  /**
   * Whether to enable in-transit encryption for the data volume's paravirtualized attachment. The default value is false.
   */
  "isPvEncryptionInTransitEnabled"?: boolean;

  "type": string;
}

export namespace InstanceConfigurationParavirtualizedAttachVolumeDetails {
  export function getJsonObj(
    obj: InstanceConfigurationParavirtualizedAttachVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationAttachVolumeDetails.getJsonObj(
            obj
          ) as InstanceConfigurationParavirtualizedAttachVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "paravirtualized";
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationParavirtualizedAttachVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationAttachVolumeDetails.getDeserializedJsonObj(
            obj
          ) as InstanceConfigurationParavirtualizedAttachVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
}
