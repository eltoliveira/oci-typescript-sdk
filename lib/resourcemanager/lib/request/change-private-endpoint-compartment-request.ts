/**
 *
 *
 * OpenAPI spec version: 20180917
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcemanager/ChangePrivateEndpointCompartment.ts.html |here} to see how to use ChangePrivateEndpointCompartmentRequest.
 */
export interface ChangePrivateEndpointCompartmentRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the private endpoint.
   */
  "privateEndpointId": string;
  /**
   * Defines the properties of changePrivateEndpointCompartment operation.
   */
  "changePrivateEndpointCompartmentDetails": model.ChangePrivateEndpointCompartmentDetails;
  /**
   * For optimistic concurrency control. In the `PUT` or `DELETE` call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous `GET` or `POST` response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of retrying the same action. Retry tokens expire after
   * 24 hours, but can be invalidated before then due to conflicting operations. For example,
   * if a resource has been deleted and purged from the system, then a retry of the original
   * creation request may be rejected.
   *
   */
  "opcRetryToken"?: string;
}
