/**
 *
 *
 * OpenAPI spec version: 20211201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fusionapps/ListScheduledActivities.ts.html |here} to see how to use ListScheduledActivitiesRequest.
 */
export interface ListScheduledActivitiesRequest extends common.BaseRequest {
  /**
   * unique FusionEnvironment identifier
   */
  "fusionEnvironmentId": string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * A filter that returns all resources that are scheduled after this date
   */
  "timeScheduledStartGreaterThanOrEqualTo"?: Date;
  /**
   * A filter that returns all resources that end before this date
   */
  "timeExpectedFinishLessThanOrEqualTo"?: Date;
  /**
   * A filter that returns all resources that match the specified run cycle.
   */
  "runCycle"?: string;
  /**
   * A filter that returns all resources that match the specified status
   */
  "lifecycleState"?: string;
  /**
   * A filter that returns all resources that match the specified scheduledActivityAssociationId.
   */
  "scheduledActivityAssociationId"?: string;
  /**
   * A filter that returns all resources that match the specified scheduledActivityPhase.
   */
  "scheduledActivityPhase"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListScheduledActivitiesRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListScheduledActivitiesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListScheduledActivitiesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "TIME_CREATED",
    DisplayName = "DISPLAY_NAME"
  }
}
