/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Object which describes the indivial object stats for every custom property
 */
export interface CustomPropertyTypeUsage {
  /**
   * Unique type key identifier
   */
  "typeId"?: string;
  /**
   * Name of the type associated with
   */
  "typeName"?: string;
  /**
   * Number of objects associated with this type Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count"?: number;
  /**
   * If an OCI Event will be emitted when the custom property is modified.
   */
  "isEventEnabled"?: boolean;
}

export namespace CustomPropertyTypeUsage {
  export function getJsonObj(obj: CustomPropertyTypeUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomPropertyTypeUsage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
