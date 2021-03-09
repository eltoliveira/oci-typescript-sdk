/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors.
 * OpenAPI spec version: 20200630
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
 * The results of a public vantage point search, which contains PublicVantagePointSummary items and other data in an APM domain.
 */
export interface PublicVantagePointCollection {
  /**
   * List of PublicVantagePointSummary items.
   */
  "items": Array<model.PublicVantagePointSummary>;
}

export namespace PublicVantagePointCollection {
  export function getJsonObj(obj: PublicVantagePointCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.PublicVantagePointSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
