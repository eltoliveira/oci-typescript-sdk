/**
 * Data Connectivity Management API
 * Use the DCMS APIs to perform Metadata/Data operations.
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
 * Represents reference details of a dcms artifact.
 */
export interface ReferenceInfo {
  /**
   * The type of the ReferenceInfo.
   */
  "modelType"?: string;
  /**
   * Generated key that can be used in API calls to identify referenceinfo.
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
   * User-defined description of the referenceInfo.
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
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * unique id of dcms artifact that is getting registered.
   */
  "dcmsArtifactId": string;
  /**
   * unique id of service which is referencing data asset.
   */
  "serviceArtifactId": string;
  /**
   * count of how many times a data asset has been registered by a service. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "referenceCount"?: number;
  "registryMetadata"?: model.RegistryMetadata;
  "metadata"?: model.ObjectMetadata;
}

export namespace ReferenceInfo {
  export function getJsonObj(obj: ReferenceInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getJsonObj(obj.registryMetadata)
          : undefined,
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReferenceInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "registryMetadata": obj.registryMetadata
          ? model.RegistryMetadata.getDeserializedJsonObj(obj.registryMetadata)
          : undefined,
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
