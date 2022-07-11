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

/**
 * Defines the `contains` relationship between virtual network topology entities. A `Contains` relationship
 * is defined when an entity fully owns, contains or manages another entity.
 * For example, a subnet is contained and managed in the scope of a VCN, therefore a VCN has a
 * `contains` relationship to a subnet.
 *
 */
export interface TopologyContainsEntityRelationship extends model.TopologyEntityRelationship {
  "type": string;
}

export namespace TopologyContainsEntityRelationship {
  export function getJsonObj(
    obj: TopologyContainsEntityRelationship,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TopologyEntityRelationship.getJsonObj(obj) as TopologyContainsEntityRelationship)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "CONTAINS";
  export function getDeserializedJsonObj(
    obj: TopologyContainsEntityRelationship,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TopologyEntityRelationship.getDeserializedJsonObj(
            obj
          ) as TopologyContainsEntityRelationship)),
      ...{}
    };

    return jsonObj;
  }
}
