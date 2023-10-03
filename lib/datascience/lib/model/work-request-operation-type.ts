/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The types of work request operations.
 **/
export enum WorkRequestOperationType {
  NotebookSessionCreate = "NOTEBOOK_SESSION_CREATE",
  NotebookSessionDelete = "NOTEBOOK_SESSION_DELETE",
  NotebookSessionActivate = "NOTEBOOK_SESSION_ACTIVATE",
  NotebookSessionDeactivate = "NOTEBOOK_SESSION_DEACTIVATE",
  ModelversionsetDelete = "MODELVERSIONSET_DELETE",
  ExportModelArtifact = "EXPORT_MODEL_ARTIFACT",
  ImportModelArtifact = "IMPORT_MODEL_ARTIFACT",
  ModelDeploymentCreate = "MODEL_DEPLOYMENT_CREATE",
  ModelDeploymentDelete = "MODEL_DEPLOYMENT_DELETE",
  ModelDeploymentActivate = "MODEL_DEPLOYMENT_ACTIVATE",
  ModelDeploymentDeactivate = "MODEL_DEPLOYMENT_DEACTIVATE",
  ModelDeploymentUpdate = "MODEL_DEPLOYMENT_UPDATE",
  ProjectDelete = "PROJECT_DELETE",
  WorkrequestCancel = "WORKREQUEST_CANCEL",
  JobDelete = "JOB_DELETE",
  PipelineCreate = "PIPELINE_CREATE",
  PipelineDelete = "PIPELINE_DELETE",
  PipelineRunCreate = "PIPELINE_RUN_CREATE",
  PipelineRunCancel = "PIPELINE_RUN_CANCEL",
  PipelineRunDelete = "PIPELINE_RUN_DELETE",
  PrivateEndpointCreate = "PRIVATE_ENDPOINT_CREATE",
  PrivateEndpointDelete = "PRIVATE_ENDPOINT_DELETE",
  PrivateEndpointMove = "PRIVATE_ENDPOINT_MOVE",
  PrivateEndpointUpdate = "PRIVATE_ENDPOINT_UPDATE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace WorkRequestOperationType {
  export function getJsonObj(obj: WorkRequestOperationType): WorkRequestOperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestOperationType): WorkRequestOperationType {
    return obj;
  }
}
