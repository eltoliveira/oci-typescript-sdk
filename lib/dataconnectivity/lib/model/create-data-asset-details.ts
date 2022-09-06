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
 * Properties used in the create data asset operations.
 */
export interface CreateDataAssetDetails {
  /**
   * Generated key that can be used in API calls to identify the data asset.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  /**
   * Free form text without any restriction on the permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name": string;
  /**
   * User-defined description of the data asset.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with an upper case letter or underscore. The value can be modified.
   */
  "identifier": string;
  /**
   * The external key of the object.
   */
  "externalKey"?: string;
  /**
   * Additional properties for the data asset.
   */
  "assetProperties"?: { [key: string]: string };
  /**
   * All the properties for the data asset in a key-value map format.
   */
  "properties": { [key: string]: any };
  /**
   * Specific DataAsset Type
   */
  "type": string;
  "nativeTypeSystem"?: model.TypeSystem;
  "registryMetadata"?: model.RegistryMetadata;
  "metadata"?: model.ObjectMetadata;
  "defaultConnection"?: model.Connection;
  /**
   * The list of endpoints with which this data asset is associated.
   */
  "endPoints"?: Array<model.DpEndpoint>;
}

export namespace CreateDataAssetDetails {
  export function getJsonObj(obj: CreateDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getJsonObj(obj.nativeTypeSystem)
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined,
        "defaultConnection": obj.defaultConnection
          ? model.Connection.getJsonObj(obj.defaultConnection)
          : undefined,
        "endPoints": obj.endPoints
          ? obj.endPoints.map(item => {
              return model.DpEndpoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getDeserializedJsonObj(obj.nativeTypeSystem)
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined,
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined,
        "defaultConnection": obj.defaultConnection
          ? model.Connection.getDeserializedJsonObj(obj.defaultConnection)
          : undefined,
        "endPoints": obj.endPoints
          ? obj.endPoints.map(item => {
              return model.DpEndpoint.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
