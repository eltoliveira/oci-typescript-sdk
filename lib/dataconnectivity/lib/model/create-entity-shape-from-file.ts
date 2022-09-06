/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The file data entity details.
 */
export interface CreateEntityShapeFromFile extends model.CreateEntityShapeDetails {
  "dataFormat"?: model.DataFormat;

  "modelType": string;
}

export namespace CreateEntityShapeFromFile {
  export function getJsonObj(obj: CreateEntityShapeFromFile, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateEntityShapeDetails.getJsonObj(obj) as CreateEntityShapeFromFile)),
      ...{
        "dataFormat": obj.dataFormat ? model.DataFormat.getJsonObj(obj.dataFormat) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "FILE_ENTITY";
  export function getDeserializedJsonObj(
    obj: CreateEntityShapeFromFile,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateEntityShapeDetails.getDeserializedJsonObj(
            obj
          ) as CreateEntityShapeFromFile)),
      ...{
        "dataFormat": obj.dataFormat
          ? model.DataFormat.getDeserializedJsonObj(obj.dataFormat)
          : undefined
      }
    };

    return jsonObj;
  }
}
