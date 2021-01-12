/**
 *
 *
 * OpenAPI spec version: 20190415
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/mysql/ListDbSystems.ts.html |here} to see how to use ListDbSystemsRequest.
 */
export interface ListDbSystemsRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Customer-defined unique identifier for the request. If you need to
   * contact Oracle about a specific request, please provide the request
   * ID that you supplied in this header with the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * If true, return only DB Systems with an Analytics Cluster attached, if false
   * return only DB Systems with no Analytics Cluster attached. If not
   * present, return all DB Systems.
   *
   */
  "isAnalyticsClusterAttached"?: boolean;
  /**
   * The DB System [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "dbSystemId"?: string;
  /**
   * A filter to return only the resource matching the given display name exactly.
   */
  "displayName"?: string;
  /**
   * DbSystem Lifecycle State
   */
  "lifecycleState"?: string;
  /**
   * The requested Configuration instance.
   */
  "configurationId"?: string;
  /**
   * Filter instances if they are using the latest revision of the
   * Configuration they are associated with.
   *
   */
  "isUpToDate"?: boolean;
  /**
   * The field to sort by. Only one sort order may be provided. Time fields are default ordered as descending. Display name is default ordered as ascending.
   *
   */
  "sortBy"?: ListDbSystemsRequest.SortBy;
  /**
   * The sort order to use (ASC or DESC).
   */
  "sortOrder"?: ListDbSystemsRequest.SortOrder;
  /**
   * The maximum number of items to return in a paginated list call. For information about pagination, see
   * [List Pagination](https://docs.cloud.oracle.com/#API/Concepts/usingapi.htm#List_Pagination).
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` or `opc-prev-page` response header from
   * the previous list call. For information about pagination, see [List
   * Pagination](https://docs.cloud.oracle.com/#API/Concepts/usingapi.htm#List_Pagination).
   *
   */
  "page"?: string;
}

export namespace ListDbSystemsRequest {
  export enum SortBy {
    DisplayName = "displayName",
    TimeCreated = "timeCreated"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
