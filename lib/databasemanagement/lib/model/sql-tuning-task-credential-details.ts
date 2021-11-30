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
 * The credential to be used to connect to the database.
 */
export interface SqlTuningTaskCredentialDetails {
  /**
   * The user to connect to the database.
   */
  "username": string;
  /**
   * The role of the database user.
   */
  "role": SqlTuningTaskCredentialDetails.Role;

  "sqlTuningTaskCredentialType": string;
}

export namespace SqlTuningTaskCredentialDetails {
  export enum Role {
    Normal = "NORMAL",
    Sysdba = "SYSDBA"
  }

  export function getJsonObj(obj: SqlTuningTaskCredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sqlTuningTaskCredentialType" in obj && obj.sqlTuningTaskCredentialType) {
      switch (obj.sqlTuningTaskCredentialType) {
        case "SECRET":
          return model.SqlTuningTaskSecretCredentialDetails.getJsonObj(
            <model.SqlTuningTaskSecretCredentialDetails>(<object>jsonObj),
            true
          );
        case "PASSWORD":
          return model.SqlTuningTaskPasswordCredentialDetails.getJsonObj(
            <model.SqlTuningTaskPasswordCredentialDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sqlTuningTaskCredentialType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningTaskCredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sqlTuningTaskCredentialType" in obj && obj.sqlTuningTaskCredentialType) {
      switch (obj.sqlTuningTaskCredentialType) {
        case "SECRET":
          return model.SqlTuningTaskSecretCredentialDetails.getDeserializedJsonObj(
            <model.SqlTuningTaskSecretCredentialDetails>(<object>jsonObj),
            true
          );
        case "PASSWORD":
          return model.SqlTuningTaskPasswordCredentialDetails.getDeserializedJsonObj(
            <model.SqlTuningTaskPasswordCredentialDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sqlTuningTaskCredentialType);
      }
    }
    return jsonObj;
  }
}
