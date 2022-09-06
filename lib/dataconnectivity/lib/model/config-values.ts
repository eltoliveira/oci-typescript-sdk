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
 * Configuration values can be a string, objects, or parameters.
 */
export interface ConfigValues {
  /**
   * The configuration parameter values.
   */
  "configParamValues"?: { [key: string]: model.ConfigParameterValue };
  "parentRef"?: model.ParentReference;
}

export namespace ConfigValues {
  export function getJsonObj(obj: ConfigValues): object {
    const jsonObj = {
      ...obj,
      ...{
        "configParamValues": obj.configParamValues
          ? common.mapContainer(obj.configParamValues, model.ConfigParameterValue.getJsonObj)
          : undefined,
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigValues): object {
    const jsonObj = {
      ...obj,
      ...{
        "configParamValues": obj.configParamValues
          ? common.mapContainer(
              obj.configParamValues,
              model.ConfigParameterValue.getDeserializedJsonObj
            )
          : undefined,
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined
      }
    };

    return jsonObj;
  }
}
