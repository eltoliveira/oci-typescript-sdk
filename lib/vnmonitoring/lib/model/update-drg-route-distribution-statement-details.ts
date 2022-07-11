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

/**
 * Route distribution statements to update in the route distribution.
 *
 */
export interface UpdateDrgRouteDistributionStatementDetails {
  /**
   * The Oracle-assigned ID of each route distribution statement to be updated.
   *
   */
  "id": string;
  /**
   * The action is applied only if all of the match criteria is met.
   *
   */
  "matchCriteria"?: Array<model.DrgRouteDistributionMatchCriteria>;
  /**
   * The priority of the statement you'd like to update.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority"?: number;
}

export namespace UpdateDrgRouteDistributionStatementDetails {
  export function getJsonObj(obj: UpdateDrgRouteDistributionStatementDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchCriteria": obj.matchCriteria
          ? obj.matchCriteria.map(item => {
              return model.DrgRouteDistributionMatchCriteria.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDrgRouteDistributionStatementDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchCriteria": obj.matchCriteria
          ? obj.matchCriteria.map(item => {
              return model.DrgRouteDistributionMatchCriteria.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
