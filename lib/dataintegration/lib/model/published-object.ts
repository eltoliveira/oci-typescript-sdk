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
 * The information about the published object.
 */
export interface PublishedObject {
  /**
   * Generated key that can be used in API calls to identify task. On scenarios where reference to the task is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;

  "modelType": string;
}

export namespace PublishedObject {
  export function getJsonObj(obj: PublishedObject): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined
      }
    };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "DATA_LOADER_TASK":
          return model.PublishedObjectFromDataLoaderTask.getJsonObj(
            <model.PublishedObjectFromDataLoaderTask>(<object>jsonObj),
            true
          );
        case "INTEGRATION_TASK":
          return model.PublishedObjectFromIntegrationTask.getJsonObj(
            <model.PublishedObjectFromIntegrationTask>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}
