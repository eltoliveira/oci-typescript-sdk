/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
 * 
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
 * A generic key value pair object, which contains information such as the thread ID, thread name, and thread state.
 *
 */
export interface SnapshotDetail {
  /**
   * Name of the property.
   *
   */
  "key"?: string;
  /**
   * Value of the property.
   *
   */
  "value"?: any;
}

export namespace SnapshotDetail {
  export function getJsonObj(obj: SnapshotDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SnapshotDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
