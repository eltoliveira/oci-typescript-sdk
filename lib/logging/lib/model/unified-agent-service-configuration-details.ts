/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
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
 * Top level Unified Agent service configuration object.
 */
export interface UnifiedAgentServiceConfigurationDetails {
  "configurationType": string;
}

export namespace UnifiedAgentServiceConfigurationDetails {
  export function getJsonObj(obj: UnifiedAgentServiceConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("configurationType" in obj && obj.configurationType) {
      switch (obj.configurationType) {
        case "LOGGING":
          return model.UnifiedAgentLoggingConfiguration.getJsonObj(
            <model.UnifiedAgentLoggingConfiguration>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.configurationType);
      }
    }
    return jsonObj;
  }
}
