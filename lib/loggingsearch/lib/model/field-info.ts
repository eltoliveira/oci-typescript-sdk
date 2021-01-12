/**
 * Logging Search API
 * Search for logs in your compartments, log groups, and log objects.
 * OpenAPI spec version: 20190909
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
 * Contains field schema information.
 */
export interface FieldInfo {
  /**
   * Field name
   */
  "fieldName": string;
  /**
   * Field type -
   * * `STRING`: A sequence of characters.
   * * `NUMBER`: Numeric type which can be an integer or floating point.
   * * `BOOLEAN`: Either true or false.
   * * `ARRAY`: An ordered collection of values.
   *
   */
  "fieldType": FieldInfo.FieldType;
}

export namespace FieldInfo {
  export enum FieldType {
    String = "STRING",
    Number = "NUMBER",
    Boolean = "BOOLEAN",
    Array = "ARRAY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FieldInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
