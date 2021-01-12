/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * LogAnalyticsLogGroupSummaryCollection
 */
export interface LogAnalyticsLogGroupSummaryCollection {
  /**
   * list of log group summary objects
   */
  "items"?: Array<model.LogAnalyticsLogGroupSummary>;
}

export namespace LogAnalyticsLogGroupSummaryCollection {
  export function getJsonObj(obj: LogAnalyticsLogGroupSummaryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.LogAnalyticsLogGroupSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
