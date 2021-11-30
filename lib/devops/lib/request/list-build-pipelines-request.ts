/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/devops/ListBuildPipelines.ts.html |here} to see how to use ListBuildPipelinesRequest.
 */
export interface ListBuildPipelinesRequest extends common.BaseRequest {
  /**
   * Unique identifier or OCID for listing a single resource by ID.
   */
  "id"?: string;
  /**
   * unique project identifier
   */
  "projectId"?: string;
  /**
   * The OCID of the compartment in which to list resources.
   */
  "compartmentId"?: string;
  /**
   * A filter to return only build pipelines that matches the given lifecycle state.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use. Use either ascending or descending.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for time created is descending. Default order for display name is ascending. If no value is specified, then the default time created value is considered.
   */
  "sortBy"?: ListBuildPipelinesRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request.  If you need to contact Oracle about a particular request, provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace ListBuildPipelinesRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
