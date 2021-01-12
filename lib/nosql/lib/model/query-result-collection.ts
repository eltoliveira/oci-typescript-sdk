/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * The result of a query.
 */
export interface QueryResultCollection {
  /**
   * Array of objects representing query results.
   */
  "items"?: Array<{ [key: string]: any }>;
  "usage"?: model.RequestUsage;
}

export namespace QueryResultCollection {
  export function getJsonObj(obj: QueryResultCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "usage": obj.usage ? model.RequestUsage.getJsonObj(obj.usage) : undefined
      }
    };

    return jsonObj;
  }
}
