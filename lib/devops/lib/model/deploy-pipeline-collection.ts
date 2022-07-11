/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Results of an pipeline search.
 */
export interface DeployPipelineCollection {
  /**
   * Array of deployment pipeline summary items.
   */
  "items": Array<model.DeployPipelineSummary>;
}

export namespace DeployPipelineCollection {
  export function getJsonObj(obj: DeployPipelineCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DeployPipelineSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployPipelineCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DeployPipelineSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
