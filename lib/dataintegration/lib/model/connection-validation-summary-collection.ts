/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * A list of connection validation summaries.
 */
export interface ConnectionValidationSummaryCollection {
  /**
   * An array of connection validation summaries.
   */
  "items": Array<model.ConnectionValidationSummary>;
}

export namespace ConnectionValidationSummaryCollection {
  export function getJsonObj(obj: ConnectionValidationSummaryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ConnectionValidationSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
