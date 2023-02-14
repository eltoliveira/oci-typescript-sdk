/**
 *
 *
 * OpenAPI spec version: 20210216
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/recovery/ListRecoveryServiceSubnets.ts.html |here} to see how to use ListRecoveryServiceSubnetsRequest.
 */
export interface ListRecoveryServiceSubnetsRequest extends common.BaseRequest {
  /**
   * The compartment OCID.
   */
  "compartmentId": string;
  /**
   * A filter to return only the resources that match the specified lifecycle state.
   * Allowed values are:
   *   - CREATING
   *   - UPDATING
   *   - ACTIVE
   *   - DELETING
   *   - DELETED
   *   - FAILED
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A filter to return only resources that match the entire 'displayname' given.
   */
  "displayName"?: string;
  /**
   * The recovery service subnet OCID.
   */
  "id"?: string;
  /**
   * The OCID of the virtual cloud network (VCN) associated with the recovery service subnet.
   */
  "vcnId"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   * Allowed values are:
   *   - ASC
   *   - DESC
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If you do not specify a value, then TIMECREATED is used as the default sort order.
   * Allowed values are:
   *   - TIMECREATED
   *   - DISPLAYNAME
   *
   */
  "sortBy"?: ListRecoveryServiceSubnetsRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListRecoveryServiceSubnetsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
