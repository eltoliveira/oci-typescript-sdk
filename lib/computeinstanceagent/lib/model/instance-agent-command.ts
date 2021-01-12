/**
 * InstanceAgentService API
 * Instance Agent Service API
 * OpenAPI spec version: 20180530
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
 * The command payload.
 */
export interface InstanceAgentCommand {
  /**
   * The command OCID
   */
  "id": string;
  /**
   * The OCID of the compartment the command is created in.
   */
  "compartmentId": string;
  /**
   * The user friendly display name of the command.
   */
  "displayName"?: string;
  /**
   * the time command was created at.
   */
  "timeCreated"?: Date;
  /**
   * the time command was updated at.
   */
  "timeUpdated"?: Date;
  /**
   * Whether the command has been requested to be canceled.
   */
  "isCanceled"?: boolean;
  /**
   * Command execution time limit that the instance agent will honor when executing the command inside the instance. This timer starts when the instance agent starts the commond. Zero means no timeout.
   */
  "executionTimeOutInSeconds"?: number;
  "target": model.InstanceAgentCommandTarget;
  "content": model.InstanceAgentCommandContent;
}

export namespace InstanceAgentCommand {
  export function getJsonObj(obj: InstanceAgentCommand): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.InstanceAgentCommandTarget.getJsonObj(obj.target) : undefined,
        "content": obj.content
          ? model.InstanceAgentCommandContent.getJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
}
