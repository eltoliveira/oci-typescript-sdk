/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * A Data Flow private endpoint object used in bulk listings.
 *
 */
export interface PrivateEndpointSummary {
  /**
   * The OCID of a compartment.
   *
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. It does not have to be unique. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * An array of DNS zone names.
   * Example: `[ \"app.examplecorp.com\", \"app.examplecorp2.com\" ]`
   *
   */
  "dnsZones": Array<string>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags": { [key: string]: string };
  /**
   * The OCID of a private endpoint.
   *
   */
  "id": string;
  /**
   * The current state of this private endpoint.
   *
   */
  "lifecycleState": model.PrivateEndpointLifecycleState;
  /**
   * The maximum number of hosts to be accessed through the private endpoint. This value is used
   * to calculate the relevant CIDR block and should be a multiple of 256.  If the value is not a
   * multiple of 256, it is rounded up to the next multiple of 256. For example, 300 is rounded up
   * to 512.
   *
   */
  "maxHostCount"?: number;
  /**
   * An array of network security group OCIDs.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The OCID of the user who created the resource.
   *
   */
  "ownerPrincipalId": string;
  /**
   * The username of the user who created the resource.  If the username of the owner does not exist,
   * `null` will be returned and the caller should refer to the ownerPrincipalId value instead.
   *
   */
  "ownerUserName"?: string;
  /**
   * The OCID of a subnet.
   *
   */
  "subnetId": string;
  /**
   * The date and time a application was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2018-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The date and time a application was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2018-04-03T21:10:29.600Z`
   *
   */
  "timeUpdated": Date;
}

export namespace PrivateEndpointSummary {
  export function getJsonObj(obj: PrivateEndpointSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
