/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Base condition object
 */
export interface Condition {
  "kind": string;
}

export namespace Condition {
  export function getJsonObj(obj: Condition): object {
    const jsonObj = { ...obj, ...{} };

    if ("kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "SIMPLE":
          return model.SimpleCondition.getJsonObj(<model.SimpleCondition>(<object>jsonObj), true);
        case "COMPOSITE":
          return model.CompositeCondition.getJsonObj(
            <model.CompositeCondition>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
}
