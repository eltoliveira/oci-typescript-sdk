/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Trigger create response specific to GitLab.
 */
export interface GitlabTriggerCreateResult extends model.TriggerCreateResult {
  /**
   * The secret used to validate the incoming trigger call. This is visible only after the resource is created.
   */
  "secret": string;
  /**
   * The endpoint that listens to trigger events.
   */
  "triggerUrl": string;

  "triggerSource": string;
}

export namespace GitlabTriggerCreateResult {
  export function getJsonObj(obj: GitlabTriggerCreateResult, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TriggerCreateResult.getJsonObj(obj) as GitlabTriggerCreateResult)),
      ...{}
    };

    return jsonObj;
  }
  export const triggerSource = "GITLAB";
  export function getDeserializedJsonObj(
    obj: GitlabTriggerCreateResult,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TriggerCreateResult.getDeserializedJsonObj(obj) as GitlabTriggerCreateResult)),
      ...{}
    };

    return jsonObj;
  }
}
