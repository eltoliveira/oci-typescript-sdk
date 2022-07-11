/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * An agent entity that can be imported into Operations Insights.
 */
export interface ImportableAgentEntitySummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Management Agent
   */
  "managementAgentId": string;
  /**
   * The [Display Name](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm#Display) of the Management Agent
   */
  "managementAgentDisplayName": string;

  "entitySource": string;
}

export namespace ImportableAgentEntitySummary {
  export function getJsonObj(obj: ImportableAgentEntitySummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.HostImportableAgentEntitySummary.getJsonObj(
            <model.HostImportableAgentEntitySummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportableAgentEntitySummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.HostImportableAgentEntitySummary.getDeserializedJsonObj(
            <model.HostImportableAgentEntitySummary>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
}
