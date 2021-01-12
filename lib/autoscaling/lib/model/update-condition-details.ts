/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
 * Update details for a condition in a threshold-based autoscaling policy.
 *
 */
export interface UpdateConditionDetails {
  "action": model.Action;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  "metric": model.Metric;
}

export namespace UpdateConditionDetails {
  export function getJsonObj(obj: UpdateConditionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "action": obj.action ? model.Action.getJsonObj(obj.action) : undefined,

        "metric": obj.metric ? model.Metric.getJsonObj(obj.metric) : undefined
      }
    };

    return jsonObj;
  }
}
