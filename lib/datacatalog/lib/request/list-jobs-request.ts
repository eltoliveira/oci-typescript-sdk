/**
 *
 *
 * OpenAPI spec version: 20190325
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datacatalog/ListJobs.ts.html |here} to see how to use ListJobsRequest.
 */
export interface ListJobsRequest extends common.BaseRequest {
  /**
   * Unique catalog identifier.
   */
  "catalogId": string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match display name pattern given. The match is not case sensitive.
   * For Example : /folders?displayNameContains=Cu.*
   * The above would match all folders with display name that starts with \"Cu\" or has the pattern \"Cu\" anywhere in between.
   *
   */
  "displayNameContains"?: string;
  /**
   * Job lifecycle state.
   */
  "lifecycleState"?: model.JobLifecycleState;
  /**
   * Time that the resource was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time that the resource was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the resource.
   */
  "createdById"?: string;
  /**
   * OCID of the user who updated the resource.
   */
  "updatedById"?: string;
  /**
   * Job type.
   */
  "jobType"?: model.JobType;
  /**
   * Unique job definition key.
   */
  "jobDefinitionKey"?: string;
  /**
   * Unique data asset key.
   */
  "dataAssetKey"?: string;
  /**
   * Unique glossary key.
   */
  "glossaryKey"?: string;
  /**
   * Interval on which the job will be run. Value is specified as a cron-supported time specification \"nickname\".
   * The following subset of those is supported: @monthly, @weekly, @daily, @hourly.
   * For metastore sync, an additional option @default is supported, which will schedule jobs at a more granular frequency.
   *
   */
  "scheduleCronExpression"?: string;
  /**
   * Date that the schedule should be operational. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeScheduleBegin"?: Date;
  /**
   * Date that the schedule should end from being operational. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeScheduleEnd"?: Date;
  /**
   * Type of the job schedule.
   */
  "scheduleType"?: model.JobScheduleType;
  /**
   * Unique connection key.
   */
  "connectionKey"?: string;
  /**
   * Specifies the fields to return in a job summary response.
   *
   */
  "fields"?: Array<ListJobsRequest.Fields>;
  /**
   * The total number of executions for this job schedule.
   *
   */
  "executionCount"?: number;
  /**
   * The date and time the most recent execution for this job ,in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeOfLatestExecution"?: Date;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListJobsRequest.SortBy;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListJobsRequest.SortOrder;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListJobsRequest {
  export enum Fields {
    Key = "key",
    DisplayName = "displayName",
    Description = "description",
    CatalogId = "catalogId",
    JobDefinitionKey = "jobDefinitionKey",
    LifecycleState = "lifecycleState",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    CreatedById = "createdById",
    UpdatedById = "updatedById",
    JobType = "jobType",
    ScheduleCronExpression = "scheduleCronExpression",
    TimeScheduleBegin = "timeScheduleBegin",
    ScheduleType = "scheduleType",
    ExecutionCount = "executionCount",
    TimeOfLatestExecution = "timeOfLatestExecution",
    Executions = "executions",
    Uri = "uri",
    JobDefinitionName = "jobDefinitionName",
    ErrorCode = "errorCode",
    ErrorMessage = "errorMessage"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
