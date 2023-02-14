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
 * An image and shape that are compatible.
 */
export interface ImageShapeCompatibilityEntry {
  /**
   * The image OCID.
   */
  "imageId": string;
  /**
   * The shape name.
   */
  "shape": string;
  "memoryConstraints"?: model.ImageMemoryConstraints;
  "ocpuConstraints"?: model.ImageOcpuConstraints;
}

export namespace ImageShapeCompatibilityEntry {
  export function getJsonObj(obj: ImageShapeCompatibilityEntry): object {
    const jsonObj = {
      ...obj,
      ...{
        "memoryConstraints": obj.memoryConstraints
          ? model.ImageMemoryConstraints.getJsonObj(obj.memoryConstraints)
          : undefined,
        "ocpuConstraints": obj.ocpuConstraints
          ? model.ImageOcpuConstraints.getJsonObj(obj.ocpuConstraints)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImageShapeCompatibilityEntry): object {
    const jsonObj = {
      ...obj,
      ...{
        "memoryConstraints": obj.memoryConstraints
          ? model.ImageMemoryConstraints.getDeserializedJsonObj(obj.memoryConstraints)
          : undefined,
        "ocpuConstraints": obj.ocpuConstraints
          ? model.ImageOcpuConstraints.getDeserializedJsonObj(obj.ocpuConstraints)
          : undefined
      }
    };

    return jsonObj;
  }
}
