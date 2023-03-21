/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Represents a data source in the Data Integration service.
 */
export interface DataAsset {
  /**
   * Generated key that can be used in API calls to identify data asset.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * User-defined description of the data asset.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * The external key for the object.
   */
  "externalKey"?: string;
  /**
   * Additional properties for the data asset.
   */
  "assetProperties"?: { [key: string]: string };
  "nativeTypeSystem"?: model.TypeSystem;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  "parentRef"?: model.ParentReference;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };

  "modelType": string;
}

export namespace DataAsset {
  export function getJsonObj(obj: DataAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getJsonObj(obj.nativeTypeSystem)
          : undefined,

        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_DATA_ASSET":
          return model.DataAssetFromJdbc.getJsonObj(
            <model.DataAssetFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.DataAssetFromOracleDetails.getJsonObj(
            <model.DataAssetFromOracleDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.DataAssetFromAdwcDetails.getJsonObj(
            <model.DataAssetFromAdwcDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_DATA_ASSET":
          return model.DataAssetFromAmazonS3.getJsonObj(
            <model.DataAssetFromAmazonS3>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.DataAssetFromObjectStorageDetails.getJsonObj(
            <model.DataAssetFromObjectStorageDetails>(<object>jsonObj),
            true
          );
        case "FUSION_APP_DATA_ASSET":
          return model.DataAssetFromFusionApp.getJsonObj(
            <model.DataAssetFromFusionApp>(<object>jsonObj),
            true
          );
        case "LAKE_DATA_ASSET":
          return model.DataAssetFromLakeDetails.getJsonObj(
            <model.DataAssetFromLakeDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.DataAssetFromAtpDetails.getJsonObj(
            <model.DataAssetFromAtpDetails>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.DataAssetFromMySQL.getJsonObj(
            <model.DataAssetFromMySQL>(<object>jsonObj),
            true
          );
        case "REST_DATA_ASSET":
          return model.DataAssetFromRestDetails.getJsonObj(
            <model.DataAssetFromRestDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "nativeTypeSystem": obj.nativeTypeSystem
          ? model.TypeSystem.getDeserializedJsonObj(obj.nativeTypeSystem)
          : undefined,

        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_DATA_ASSET":
          return model.DataAssetFromJdbc.getDeserializedJsonObj(
            <model.DataAssetFromJdbc>(<object>jsonObj),
            true
          );
        case "ORACLE_DATA_ASSET":
          return model.DataAssetFromOracleDetails.getDeserializedJsonObj(
            <model.DataAssetFromOracleDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_DATA_ASSET":
          return model.DataAssetFromAdwcDetails.getDeserializedJsonObj(
            <model.DataAssetFromAdwcDetails>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_DATA_ASSET":
          return model.DataAssetFromAmazonS3.getDeserializedJsonObj(
            <model.DataAssetFromAmazonS3>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_DATA_ASSET":
          return model.DataAssetFromObjectStorageDetails.getDeserializedJsonObj(
            <model.DataAssetFromObjectStorageDetails>(<object>jsonObj),
            true
          );
        case "FUSION_APP_DATA_ASSET":
          return model.DataAssetFromFusionApp.getDeserializedJsonObj(
            <model.DataAssetFromFusionApp>(<object>jsonObj),
            true
          );
        case "LAKE_DATA_ASSET":
          return model.DataAssetFromLakeDetails.getDeserializedJsonObj(
            <model.DataAssetFromLakeDetails>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_DATA_ASSET":
          return model.DataAssetFromAtpDetails.getDeserializedJsonObj(
            <model.DataAssetFromAtpDetails>(<object>jsonObj),
            true
          );
        case "MYSQL_DATA_ASSET":
          return model.DataAssetFromMySQL.getDeserializedJsonObj(
            <model.DataAssetFromMySQL>(<object>jsonObj),
            true
          );
        case "REST_DATA_ASSET":
          return model.DataAssetFromRestDetails.getDeserializedJsonObj(
            <model.DataAssetFromRestDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
