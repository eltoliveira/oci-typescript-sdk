/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Configures the logging policies for the access logs of an API Deployment.
 *
 */
export interface AccessLogPolicy {
  /**
    * Enables pushing of access logs to the legacy OCI Object Storage log archival bucket.
* <p>
Oracle recommends using the OCI Logging service to enable, retrieve, and query access logs
* for an API Deployment. If there is an active log object for the API Deployment and its
* category is set to 'access' in OCI Logging service, the logs will not be uploaded to the
* legacy OCI Object Storage log archival bucket.
* <p>
Please note that the functionality to push to the legacy OCI Object Storage log
* archival bucket has been deprecated and will be removed in the future.
* 
    */
  "isEnabled"?: boolean;
}

export namespace AccessLogPolicy {
  export function getJsonObj(obj: AccessLogPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
