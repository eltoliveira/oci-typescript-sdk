/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The Random List masking format randomly selects values from a list of values
 * to replace the original values. To learn more, check Random List in the
 * Data Safe documentation.
 *
 */
export interface RandomListFormatEntry extends model.FormatEntry {
  /**
   * A comma-separated list of values to be used to replace column values.
   * The list can be of strings, numbers, or dates. The data type of each
   * value in the list must be compatible with the data type of the column.
   * The number of entries in the list cannot be more than 999.
   *
   */
  "randomList": Array<string>;

  "type": string;
}

export namespace RandomListFormatEntry {
  export function getJsonObj(obj: RandomListFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as RandomListFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "RANDOM_LIST";
  export function getDeserializedJsonObj(
    obj: RandomListFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as RandomListFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
