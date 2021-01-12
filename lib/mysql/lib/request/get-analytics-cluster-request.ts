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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/mysql/GetAnalyticsCluster.ts.html |here} to see how to use GetAnalyticsClusterRequest.
 */
export interface GetAnalyticsClusterRequest extends common.BaseRequest {
  /**
   * The DB System [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "dbSystemId": string;
  /**
   * Customer-defined unique identifier for the request. If you need to
   * contact Oracle about a specific request, please provide the request
   * ID that you supplied in this header with the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * For conditional requests. In the GET call for a resource, set the
   * `If-None-Match` header to the value of the ETag from a previous GET (or
   * POST or PUT) response for that resource. The server will return with
   * either a 304 Not Modified response if the resource has not changed, or a
   * 200 OK response with the updated representation.
   *
   */
  "ifNoneMatch"?: string;
}
