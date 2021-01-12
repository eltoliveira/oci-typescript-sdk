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
 * Summary of Operator
 */
export interface OperatorSummary {
  /**
   * name of the operand
   */
  "name": string;
  /**
   * display name of the operand
   */
  "displayName": string;
  /**
   * data type of operand
   */
  "datatype": string;
  /**
   * operand list type
   */
  "managedListtype": string;
  /**
   * Filter type can be config filter or condition filter
   */
  "filterType": model.ConditionFilterType;
  /**
   * List of parameters
   */
  "operators": Array<model.ConditionOperator>;
  /**
   * configuration value type list for multilist data type
   */
  "multiListTypes"?: Array<string>;
}

export namespace OperatorSummary {
  export function getJsonObj(obj: OperatorSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "operators": obj.operators
          ? obj.operators.map(item => {
              return model.ConditionOperator.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
