/**
 *
 *
 * OpenAPI spec version: 20181116
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/waas/ListHttpRedirects.ts.html |here} to see how to use ListHttpRedirectsRequest.
 */
export interface ListHttpRedirectsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment. This number is generated when the compartment is created.
   */
  "compartmentId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated call. If unspecified, defaults to `10`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to `DESC`.
   */
  "sortOrder"?: ListHttpRedirectsRequest.SortOrder;
  /**
   * The field to sort the results of the List query.
   */
  "sortBy"?: ListHttpRedirectsRequest.SortBy;
  /**
   * Filter redirects using a list of redirect OCIDs.
   */
  "id"?: Array<string>;
  /**
   * Filter redirects using a display name.
   */
  "displayName"?: Array<string>;
  /**
   * Filter redirects using a list of lifecycle states.
   */
  "lifecycleState"?: Array<model.LifecycleStates>;
  /**
   * A filter that matches redirects created on or after the specified date and time.
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * A filter that matches redirects created before the specified date-time. Default to 1 day before now.
   */
  "timeCreatedLessThan"?: Date;
}

export namespace ListHttpRedirectsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Id = "id",
    Domain = "domain",
    Target = "target",
    DisplayName = "displayName"
  }
}
