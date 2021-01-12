/**
 *
 *
 * OpenAPI spec version: 20190801
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

export interface ListAvailableWindowsUpdatesForManagedInstanceResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId": string;
  /**
     * For pagination of a list of `AvailableWindowsUpdateSummary`s. If this header
* appears in the response, then this is a partial list of
* `AvailableWindowsUpdateSummary`s available to be installed on the managed instance. Include this value
* as the `page` parameter in a subsequent
* <p>
GET request to get the next batch of managed instances.
* 
     */
  "opcNextPage": string;
  /**
   * A list of AvailableWindowsUpdateSummary instances.
   */
  "items": model.AvailableWindowsUpdateSummary[];
}
