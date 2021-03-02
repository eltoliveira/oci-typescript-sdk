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
 * The information about a pipeline validation.
 */
export interface PipelineValidationSummary {
  /**
   * The total number of validation messages. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalMessageCount"?: number;
  /**
   * The total number of validation error messages. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "errorMessageCount"?: number;
  /**
   * The total number of validation warning messages. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "warnMessageCount"?: number;
  /**
   * The total number of validation information messages. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "infoMessageCount"?: number;
  /**
   * The detailed information of the pipeline object validation.
   */
  "validationMessages"?: { [key: string]: Array<model.ValidationMessage> };
  /**
   * Objects will use a 36 character key as unique ID. It is system generated and cannot be modified.
   */
  "key"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  /**
   * This is a version number that is used by the service to upgrade objects if needed through releases of the service.
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
   * This is used by the service for optimistic locking of the object, to prevent multiple users from simultaneously updating the object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "metadata"?: model.ObjectMetadata;
}

export namespace PipelineValidationSummary {
  export function getJsonObj(obj: PipelineValidationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
}
