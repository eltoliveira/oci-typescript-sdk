/**
 * Audit API
 * API for the Audit Service. Use this API for compliance monitoring in your tenancy.
For more information, see [Overview of Audit](/iaas/Content/Audit/Concepts/auditoverview.htm).

**Tip**: This API is good for queries, but not bulk-export operations.

 * OpenAPI spec version: 20190901
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
 * A container object for identity attributes.
 *
 */
export interface Identity {
  /**
    * The name of the user or service. This value is the friendly name associated with `principalId`.
* <p>
Example: `ExampleName`
* 
    */
  "principalName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the principal.
   *
   */
  "principalId"?: string;
  /**
    * The type of authentication used.
* <p>
Example: `natv`
* 
    */
  "authType"?: string;
  /**
   * The name of the user or service. This value is the friendly name associated with `callerId`.
   *
   */
  "callerName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the caller. The caller that made a
   * request on behalf of the prinicpal.
   *
   */
  "callerId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the tenant.
   *
   */
  "tenantId"?: string;
  /**
    * The IP address of the source of the request.
* <p>
Example: `172.24.80.88`
* 
    */
  "ipAddress"?: string;
  /**
   * The credential ID of the user. This value is extracted from the HTTP 'Authorization' request
   * header. It consists of the tenantId, userId, and user fingerprint, all delimited by a slash (/).
   *
   */
  "credentials"?: string;
  /**
    * The user agent of the client that made the request.
* <p>
Example: `Jersey/2.23 (HttpUrlConnection 1.8.0_212)`
* 
    */
  "userAgent"?: string;
  /**
   * This value identifies any Console session associated with this request.
   *
   */
  "consoleSessionId"?: string;
}

export namespace Identity {
  export function getJsonObj(obj: Identity): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
