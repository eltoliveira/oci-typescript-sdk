/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
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
 * A list of work request errors that match filter criteria, if any. Results contain `WorkRequestError` objects.
 *
 */
export interface WorkRequestErrorCollection {
  /**
   * A collection of work request errors.
   */
  "items": Array<model.WorkRequestError>;
}

export namespace WorkRequestErrorCollection {
  export function getJsonObj(obj: WorkRequestErrorCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
