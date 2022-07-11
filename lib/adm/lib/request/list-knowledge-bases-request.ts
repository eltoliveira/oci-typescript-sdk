/**
 *
 *
 * OpenAPI spec version: 20220421
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/adm/ListKnowledgeBases.ts.html |here} to see how to use ListKnowledgeBasesRequest.
 */
export interface ListKnowledgeBasesRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified identifier.
   */
  "id"?: string;
  /**
   * The field used to sort Knowledge Bases. Only one sort order is allowed.
   * Default order for _displayName_ is **ascending alphabetical order**.
   * Default order for _lifecyleState_ is the following sequence: **CREATING, ACTIVE, UPDATING, FAILED, DELETING, and DELETED**.Default order for _timeCreated_ is **descending**.
   * Default order for _timeUpdated_ is **descending**.
   *
   */
  "sortBy"?: ListKnowledgeBasesRequest.SortBy;
  /**
   * A filter to return only Knowledge Bases that match the specified lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * A filter to return only resources that belong to the specified compartment identifier.
   */
  "compartmentId"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListKnowledgeBasesRequest {
  export enum SortBy {
    DisplayName = "DISPLAY_NAME",
    LifecycleState = "LIFECYCLE_STATE",
    TimeCreated = "TIME_CREATED",
    TimeUpdated = "TIME_UPDATED"
  }
}
