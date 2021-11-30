/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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

/**
 * The details used to create a new Database Management private endpoint.
 */
export interface CreateDbManagementPrivateEndpointDetails {
  /**
   * The display name of the Database Management private endpoint.
   */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Specifies whether the Database Management private endpoint will be used for Oracle Databases in a cluster.
   */
  "isCluster"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet.
   */
  "subnetId": string;
  /**
   * The description of the private endpoint.
   */
  "description"?: string;
  /**
   * The OCIDs of the Network Security Groups to which the Database Management private endpoint belongs.
   *
   */
  "nsgIds"?: Array<string>;
}

export namespace CreateDbManagementPrivateEndpointDetails {
  export function getJsonObj(obj: CreateDbManagementPrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDbManagementPrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
