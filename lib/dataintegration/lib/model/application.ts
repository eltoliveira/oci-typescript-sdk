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
 * The application type contains the audit summary information and the definition of the application.
 */
export interface Application {
  /**
   * Generated key that can be used in API calls to identify application.
   */
  "key"?: string;
  /**
   * The object type.
   */
  "modelType"?: string;
  /**
   * The object's model version.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The application's version.
   */
  "applicationVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * The version of the object that is used to track changes in the object instance.
   */
  "objectVersion"?: number;
  /**
   * A list of dependent objects in this patch.
   */
  "dependentObjectMetadata"?: Array<model.PatchObjectMetadata>;
  /**
   * A list of objects that are published or unpublished in this patch.
   */
  "publishedObjectMetadata"?: { [key: string]: model.PatchObjectMetadata };
  "sourceApplicationInfo"?: model.SourceApplicationInfo;
  /**
   * The date and time the application was patched, in the timestamp format defined by RFC3339.
   *
   */
  "timePatched"?: Date;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };
}

export namespace Application {
  export function getJsonObj(obj: Application): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "dependentObjectMetadata": obj.dependentObjectMetadata
          ? obj.dependentObjectMetadata.map(item => {
              return model.PatchObjectMetadata.getJsonObj(item);
            })
          : undefined,
        "publishedObjectMetadata": obj.publishedObjectMetadata
          ? common.mapContainer(obj.publishedObjectMetadata, model.PatchObjectMetadata.getJsonObj)
          : undefined,
        "sourceApplicationInfo": obj.sourceApplicationInfo
          ? model.SourceApplicationInfo.getJsonObj(obj.sourceApplicationInfo)
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
}
