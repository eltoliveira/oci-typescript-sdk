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
 * Information about a new endpoint.
 */
export interface CreateEndpointDetails {
  /**
   * VCN identifier where the subnet resides.
   */
  "vcnId"?: string;
  /**
   * Subnet identifier for the customer-connected databases.
   */
  "subnetId"?: string;
  /**
   * The list of DNS zones to be used by the data assets to be harvested.
   * Example: custpvtsubnet.oraclevcn.com for data asset: db.custpvtsubnet.oraclevcn.com
   *
   */
  "dnsZones"?: Array<string>;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists only for cross-compatibility.
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
   * The Data Connectivity Management registry display name; registries can be renamed.
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId"?: string;
  /**
   * Endpoint size for reverse connection capacity. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endpointSize"?: number;
  /**
   * The list of NSGs to which the private endpoint VNIC must be added.
   */
  "nsgIds"?: Array<string>;
}

export namespace CreateEndpointDetails {
  export function getJsonObj(obj: CreateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
