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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Allowed IKE IPSec Parameters
 */
export interface AllowedIkeIPSecParameters {
  "allowedPhaseOneParameters": model.AllowedPhaseOneParameters;
  "allowedPhaseTwoParameters": model.AllowedPhaseTwoParameters;
  "defaultPhaseOneParameters": model.DefaultPhaseOneParameters;
  "defaultPhaseTwoParameters": model.DefaultPhaseTwoParameters;
}

export namespace AllowedIkeIPSecParameters {
  export function getJsonObj(obj: AllowedIkeIPSecParameters): object {
    const jsonObj = {
      ...obj,
      ...{
        "allowedPhaseOneParameters": obj.allowedPhaseOneParameters
          ? model.AllowedPhaseOneParameters.getJsonObj(obj.allowedPhaseOneParameters)
          : undefined,
        "allowedPhaseTwoParameters": obj.allowedPhaseTwoParameters
          ? model.AllowedPhaseTwoParameters.getJsonObj(obj.allowedPhaseTwoParameters)
          : undefined,
        "defaultPhaseOneParameters": obj.defaultPhaseOneParameters
          ? model.DefaultPhaseOneParameters.getJsonObj(obj.defaultPhaseOneParameters)
          : undefined,
        "defaultPhaseTwoParameters": obj.defaultPhaseTwoParameters
          ? model.DefaultPhaseTwoParameters.getJsonObj(obj.defaultPhaseTwoParameters)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AllowedIkeIPSecParameters): object {
    const jsonObj = {
      ...obj,
      ...{
        "allowedPhaseOneParameters": obj.allowedPhaseOneParameters
          ? model.AllowedPhaseOneParameters.getDeserializedJsonObj(obj.allowedPhaseOneParameters)
          : undefined,
        "allowedPhaseTwoParameters": obj.allowedPhaseTwoParameters
          ? model.AllowedPhaseTwoParameters.getDeserializedJsonObj(obj.allowedPhaseTwoParameters)
          : undefined,
        "defaultPhaseOneParameters": obj.defaultPhaseOneParameters
          ? model.DefaultPhaseOneParameters.getDeserializedJsonObj(obj.defaultPhaseOneParameters)
          : undefined,
        "defaultPhaseTwoParameters": obj.defaultPhaseTwoParameters
          ? model.DefaultPhaseTwoParameters.getDeserializedJsonObj(obj.defaultPhaseTwoParameters)
          : undefined
      }
    };

    return jsonObj;
  }
}
