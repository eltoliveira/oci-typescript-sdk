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
 * The type representing the dynamic proxy field concept. Dynamic proxy fields have a reference to another field.
 */
export interface DynamicProxyField extends model.TypedObject {
  "type"?:
    | model.ConfiguredType
    | model.JavaType
    | model.DynamicType
    | model.DerivedType
    | model.DataType
    | model.CompositeType;
  /**
   * Labels are keywords or labels that you can add to data assets, dataflows and so on. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;

  "modelType": string;
}

export namespace DynamicProxyField {
  export function getJsonObj(obj: DynamicProxyField, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as DynamicProxyField)),
      ...{
        "type": obj.type ? model.BaseType.getJsonObj(obj.type) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DYNAMIC_PROXY_FIELD";
}
