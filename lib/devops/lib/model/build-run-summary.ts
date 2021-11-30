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
 * Summary of the build run.
 */
export interface BuildRunSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The OCID of the compartment where the build is running.
   */
  "compartmentId": string;
  /**
   * Build run display name, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of the DevOps project.
   */
  "projectId": string;
  /**
   * The OCID of the build pipeline.
   */
  "buildPipelineId": string;
  "buildRunSource":
    | model.GithubBuildRunSource
    | model.DevopsCodeRepositoryBuildRunSource
    | model.ManualBuildRunSource
    | model.GitlabBuildRunSource;
  "buildRunArguments"?: model.BuildRunArgumentCollection;
  "buildRunProgressSummary"?: model.BuildRunProgressSummary;
  /**
   * The time the build run was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The time the build run was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the build run.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  "commitInfo"?: model.CommitInfo;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace BuildRunSummary {
  export function getJsonObj(obj: BuildRunSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "buildRunSource": obj.buildRunSource
          ? model.BuildRunSource.getJsonObj(obj.buildRunSource)
          : undefined,
        "buildRunArguments": obj.buildRunArguments
          ? model.BuildRunArgumentCollection.getJsonObj(obj.buildRunArguments)
          : undefined,
        "buildRunProgressSummary": obj.buildRunProgressSummary
          ? model.BuildRunProgressSummary.getJsonObj(obj.buildRunProgressSummary)
          : undefined,

        "commitInfo": obj.commitInfo ? model.CommitInfo.getJsonObj(obj.commitInfo) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BuildRunSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "buildRunSource": obj.buildRunSource
          ? model.BuildRunSource.getDeserializedJsonObj(obj.buildRunSource)
          : undefined,
        "buildRunArguments": obj.buildRunArguments
          ? model.BuildRunArgumentCollection.getDeserializedJsonObj(obj.buildRunArguments)
          : undefined,
        "buildRunProgressSummary": obj.buildRunProgressSummary
          ? model.BuildRunProgressSummary.getDeserializedJsonObj(obj.buildRunProgressSummary)
          : undefined,

        "commitInfo": obj.commitInfo
          ? model.CommitInfo.getDeserializedJsonObj(obj.commitInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
