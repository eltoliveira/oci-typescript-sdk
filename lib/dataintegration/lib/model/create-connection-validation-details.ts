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
 * The properties used in create connection validation operations.
 */
export interface CreateConnectionValidationDetails {
  "dataAsset"?:
    | model.CreateDataAssetFromJdbc
    | model.CreateDataAssetFromMySQL
    | model.CreateDataAssetFromLake
    | model.CreateDataAssetFromOracle
    | model.CreateDataAssetFromAdwc
    | model.CreateDataAssetFromAmazonS3
    | model.CreateDataAssetFromRest
    | model.CreateDataAssetFromFusionApp
    | model.CreateDataAssetFromAtp
    | model.CreateDataAssetFromObjectStorage;
  "connection"?:
    | model.CreateConnectionFromMySQL
    | model.CreateConnectionFromAmazonS3
    | model.CreateConnectionFromJdbc
    | model.CreateConnectionFromBICC
    | model.CreateConnectionFromAtp
    | model.CreateConnectionFromBIP
    | model.CreateConnectionFromRestBasicAuth
    | model.CreateConnectionFromAdwc
    | model.CreateConnectionFromRestNoAuth
    | model.CreateConnectionFromOracle
    | model.CreateConnectionFromObjectStorage
    | model.CreateConnectionFromLake;
  "registryMetadata"?: model.RegistryMetadata;
}

export namespace CreateConnectionValidationDetails {
  export function getJsonObj(obj: CreateConnectionValidationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAsset": obj.dataAsset
          ? model.CreateDataAssetDetails.getJsonObj(obj.dataAsset)
          : undefined,
        "connection": obj.connection
          ? model.CreateConnectionDetails.getJsonObj(obj.connection)
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateConnectionValidationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataAsset": obj.dataAsset
          ? model.CreateDataAssetDetails.getDeserializedJsonObj(obj.dataAsset)
          : undefined,
        "connection": obj.connection
          ? model.CreateConnectionDetails.getDeserializedJsonObj(obj.connection)
          : undefined,
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
