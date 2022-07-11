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
 * This is a collection of NetworkConnectivityStatus.
 */
export interface NetworkConnectivityStatusCollection {
  /**
   * The array of NetworkConnectivityStatus.
   */
  "networkConnectivityStatusList": Array<model.NetworkConnectivityStatus>;
}

export namespace NetworkConnectivityStatusCollection {
  export function getJsonObj(obj: NetworkConnectivityStatusCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConnectivityStatusList": obj.networkConnectivityStatusList
          ? obj.networkConnectivityStatusList.map(item => {
              return model.NetworkConnectivityStatus.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkConnectivityStatusCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "networkConnectivityStatusList": obj.networkConnectivityStatusList
          ? obj.networkConnectivityStatusList.map(item => {
              return model.NetworkConnectivityStatus.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
