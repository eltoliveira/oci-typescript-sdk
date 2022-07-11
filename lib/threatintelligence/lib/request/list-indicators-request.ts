/**
 *
 *
 * OpenAPI spec version: 20210831
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/threatintelligence/ListIndicators.ts.html |here} to see how to use ListIndicatorsRequest.
 */
export interface ListIndicatorsRequest extends common.BaseRequest {
  /**
   * The ID of the tenancy to use to filter results.
   */
  "compartmentId": string;
  /**
   * The result set will include indicators that have any of the provided threat types. To filter for multiple threat types repeat the query parameter.
   */
  "threatTypeName"?: Array<string>;
  /**
   * The indicator type of entities to be returned.
   */
  "type"?: model.IndicatorType;
  /**
   * The indicator value of entities to be returned.
   */
  "value"?: string;
  /**
   * The minimum confidence score of entities to be returned.
   */
  "confidenceGreaterThanOrEqualTo"?: number;
  /**
   * The oldest update time of entities to be returned.
   */
  "timeUpdatedGreaterThanOrEqualTo"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the `opc-next-page` header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one field to sort by may be provided.
   *
   */
  "sortBy"?: ListIndicatorsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListIndicatorsRequest {
  export enum SortBy {
    Confidence = "confidence",
    TimeUpdated = "timeUpdated"
  }
}
