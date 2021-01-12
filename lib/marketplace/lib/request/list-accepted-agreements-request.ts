/**
 *
 *
 * OpenAPI spec version: 20181001
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/marketplace/ListAcceptedAgreements.ts.html |here} to see how to use ListAcceptedAgreementsRequest.
 */
export interface ListAcceptedAgreementsRequest extends common.BaseRequest {
  /**
   * The unique identifier for the compartment.
   */
  "compartmentId": string;
  /**
   * The display name of the resource.
   */
  "displayName"?: string;
  /**
   * The unique identifier for the listing.
   */
  "listingId"?: string;
  /**
   * The version of the package. Package versions are unique within a listing.
   */
  "packageVersion"?: string;
  /**
   * The unique identifier for the accepted terms of use agreement.
   */
  "acceptedAgreementId"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The field to use to sort listed results. You can only specify one field to sort by.
   * `TIMEACCEPTED` displays results in descending order by default. You can change your
   * preference by specifying a different sort order.
   *
   */
  "sortBy"?: ListAcceptedAgreementsRequest.SortBy;
  /**
   * The sort order to use, either `ASC` or `DESC`.
   */
  "sortOrder"?: ListAcceptedAgreementsRequest.SortOrder;
  /**
   * How many records to return. Specify a value greater than zero and less than or equal to 1000. The default is 30.
   *
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   */
  "page"?: string;
}

export namespace ListAcceptedAgreementsRequest {
  export enum SortBy {
    Timeaccepted = "TIMEACCEPTED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
