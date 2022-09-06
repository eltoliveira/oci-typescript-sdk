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
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The summary of preferred credentials.
 */
export interface PreferredCredentialSummary {
  /**
   * The name of the preferred credential.
   */
  "credentialName": string;
  /**
   * The status of the preferred credential.
   */
  "status": model.PreferredCredentialStatus;
  /**
   * Indicates whether the preferred credential is accessible.
   */
  "isAccessible": boolean;
  /**
   * The user name used to connect to the database.
   */
  "userName"?: string;
  /**
   * The role of the database user.
   */
  "role"?: model.Role;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Vault service secret that contains the database user password.
   */
  "passwordSecretId"?: string;
}

export namespace PreferredCredentialSummary {
  export function getJsonObj(obj: PreferredCredentialSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PreferredCredentialSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
