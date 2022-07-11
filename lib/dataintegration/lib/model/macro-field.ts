/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The type representing the macro field concept. Macro fields have an expression to define a macro.
 */
export interface MacroField extends model.TypedObject {
  "expr"?: model.Expression;
  "type"?:
    | model.ConfiguredType
    | model.JavaType
    | model.DynamicType
    | model.DerivedType
    | model.DataType
    | model.CompositeType;
  /**
   * Specifies whether the type of macro fields is inferred from an expression or useType (false) or the source field (true).
   */
  "isUseSourceType"?: boolean;
  "useType"?: model.ConfiguredType;
  /**
   * Labels are keywords or labels that you can add to data assets, dataflows, and so on. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;

  "modelType": string;
}

export namespace MacroField {
  export function getJsonObj(obj: MacroField, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as MacroField)),
      ...{
        "expr": obj.expr ? model.Expression.getJsonObj(obj.expr) : undefined,
        "type": obj.type ? model.BaseType.getJsonObj(obj.type) : undefined,

        "useType": obj.useType ? model.ConfiguredType.getJsonObj(obj.useType) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "MACRO_FIELD";
  export function getDeserializedJsonObj(obj: MacroField, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getDeserializedJsonObj(obj) as MacroField)),
      ...{
        "expr": obj.expr ? model.Expression.getDeserializedJsonObj(obj.expr) : undefined,
        "type": obj.type ? model.BaseType.getDeserializedJsonObj(obj.type) : undefined,

        "useType": obj.useType
          ? model.ConfiguredType.getDeserializedJsonObj(obj.useType)
          : undefined
      }
    };

    return jsonObj;
  }
}
