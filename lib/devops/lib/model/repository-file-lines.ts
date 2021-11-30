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
 * Object containing the lines of a file in a repository.
 */
export interface RepositoryFileLines {
  /**
   * The list of lines in the file.
   */
  "lines": Array<model.FileLineDetails>;
}

export namespace RepositoryFileLines {
  export function getJsonObj(obj: RepositoryFileLines): object {
    const jsonObj = {
      ...obj,
      ...{
        "lines": obj.lines
          ? obj.lines.map(item => {
              return model.FileLineDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RepositoryFileLines): object {
    const jsonObj = {
      ...obj,
      ...{
        "lines": obj.lines
          ? obj.lines.map(item => {
              return model.FileLineDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
