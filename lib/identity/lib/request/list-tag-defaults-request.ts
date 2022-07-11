/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/identity/ListTagDefaults.ts.html |here} to see how to use ListTagDefaultsRequest.
 */
export interface ListTagDefaultsRequest extends common.BaseRequest {
  /**
   * The value of the `opc-next-page` response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * A filter to only return resources that match the specified OCID exactly.
   *
   */
  "id"?: string;
  /**
   * The OCID of the compartment (remember that the tenancy is simply the root compartment).
   *
   */
  "compartmentId"?: string;
  /**
   * The OCID of the tag definition.
   *
   */
  "tagDefinitionId"?: string;
  /**
   * A filter to only return resources that match the given lifecycle state.  The state value is case-insensitive.
   *
   */
  "lifecycleState"?: string;
}
