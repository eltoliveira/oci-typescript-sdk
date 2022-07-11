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
 * The information to be updated.
 */
export interface UpdateEndpointDetails {
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Data Connectivity Management Registry description
   */
  "description"?: string;
  /**
   * Data Connectivity Management Registry display name, registries can be renamed
   */
  "displayName"?: string;
  /**
   * Update Endpoint size for reverse connection capacity. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endpointSize"?: number;
  /**
   * List of NSGs to which the Private Endpoint VNIC must be added.
   */
  "nsgIds"?: Array<string>;
}

export namespace UpdateEndpointDetails {
  export function getJsonObj(obj: UpdateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
