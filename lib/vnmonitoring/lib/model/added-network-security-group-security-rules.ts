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

export interface AddedNetworkSecurityGroupSecurityRules {
  /**
   * The NSG security rules that were added.
   */
  "securityRules"?: Array<model.SecurityRule>;
}

export namespace AddedNetworkSecurityGroupSecurityRules {
  export function getJsonObj(obj: AddedNetworkSecurityGroupSecurityRules): object {
    const jsonObj = {
      ...obj,
      ...{
        "securityRules": obj.securityRules
          ? obj.securityRules.map(item => {
              return model.SecurityRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddedNetworkSecurityGroupSecurityRules): object {
    const jsonObj = {
      ...obj,
      ...{
        "securityRules": obj.securityRules
          ? obj.securityRules.map(item => {
              return model.SecurityRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
