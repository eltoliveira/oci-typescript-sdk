/**
 *
 *
 * OpenAPI spec version: 20200601
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface PurgeStorageDataResponse {
  /**
   * Unique Oracle-assigned identifier for the request. When you contact Oracle about a specific request, provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the asynchronous request. You can use this to query status of the asynchronous operation.
   *
   */
  "opcWorkRequestId": string;
  /**
   * URI to entity or work request created.
   *
   */
  "location": string;
}
