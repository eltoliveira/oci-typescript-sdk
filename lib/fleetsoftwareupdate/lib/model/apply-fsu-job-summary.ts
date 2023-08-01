/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Summary of Apply Exadata Fleet Update Job resource.
 *
 */
export interface ApplyFsuJobSummary extends model.FsuJobSummary {
  /**
   * OCID of the Exadata Fleet Update Collection that the job is executing on.
   *
   */
  "fsuCollectionId"?: string;
  /**
   * OCID of the Exadata Fleet Update Cycle that this job is part of.
   *
   */
  "fsuCycleId"?: string;
  /**
   * OCID of Target resource on which the job is executing the action.
   *
   */
  "targetId"?: string;
  "schedule"?: model.StartTimeScheduleDetails;

  "type": string;
}

export namespace ApplyFsuJobSummary {
  export function getJsonObj(obj: ApplyFsuJobSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FsuJobSummary.getJsonObj(obj) as ApplyFsuJobSummary)),
      ...{
        "schedule": obj.schedule ? model.ScheduleDetails.getJsonObj(obj.schedule) : undefined
      }
    };

    return jsonObj;
  }
  export const type = "APPLY";
  export function getDeserializedJsonObj(
    obj: ApplyFsuJobSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FsuJobSummary.getDeserializedJsonObj(obj) as ApplyFsuJobSummary)),
      ...{
        "schedule": obj.schedule
          ? model.ScheduleDetails.getDeserializedJsonObj(obj.schedule)
          : undefined
      }
    };

    return jsonObj;
  }
}
