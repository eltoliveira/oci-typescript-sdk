/**
 *
 *
 * OpenAPI spec version: 1.0.015
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dts/ListTransferPackages.ts.html |here} to see how to use ListTransferPackagesRequest.
 */
export interface ListTransferPackagesRequest extends common.BaseRequest {
  /**
   * ID of the Transfer Job
   */
  "id": string;
  /**
   * filtering by lifecycleState
   */
  "lifecycleState"?: ListTransferPackagesRequest.LifecycleState;
  /**
   * filtering by displayName
   */
  "displayName"?: string;
}

export namespace ListTransferPackagesRequest {
  export enum LifecycleState {
    Preparing = "PREPARING",
    Shipping = "SHIPPING",
    Received = "RECEIVED",
    Processing = "PROCESSING",
    Processed = "PROCESSED",
    Returned = "RETURNED",
    Deleted = "DELETED",
    Cancelled = "CANCELLED",
    CancelledReturned = "CANCELLED_RETURNED"
  }
}
