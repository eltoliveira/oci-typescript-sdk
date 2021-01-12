/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
* DNS record data with metadata for processing in a steering policy.
* <p>

* **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
* 
*/
export interface SteeringPolicyAnswer {
  /**
    * A user-friendly name for the answer, unique within the steering policy.
* An answer's `name` property can be referenced in `answerCondition` properties
* of rules using `answer.name`.
* <p>
**Example:**
* <p>
  \"rules\": [
*     {
*       \"ruleType\": \"FILTER\",
*       \"defaultAnswerData\":  [
*         {
*           \"answerCondition\": \"answer.name == 'server 1'\",
*           \"shouldKeep\": true
*         }
*       ]
*     }
*   ]
* 
    */
  "name": string;
  /**
   * The type of DNS record, such as A or CNAME. Only A, AAAA, and CNAME are supported. For more
   * information, see [Supported DNS Resource Record Types](https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm).
   *
   */
  "rtype": string;
  /**
   * The record's data, as whitespace-delimited tokens in
   * type-specific presentation format. All RDATA is normalized and the
   * returned presentation of your RDATA may differ from its initial input.
   * For more information about RDATA, see [Supported DNS Resource Record Types](https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm).
   *
   */
  "rdata": string;
  /**
    * The freeform name of a group of one or more records in which this record is included,
* such as \"LAX data center\". An answer's `pool` property can be referenced in `answerCondition`
* properties of rules using `answer.pool`.
* <p>
**Example:**
* <p>
  \"rules\": [
*     {
*       \"ruleType\": \"FILTER\",
*       \"defaultAnswerData\":  [
*         {
*           \"answerCondition\": \"answer.pool == 'US East Servers'\",
*           \"shouldKeep\": true
*         }
*       ]
*     }
*   ]
* 
    */
  "pool"?: string;
  /**
   * Set this property to `true` to indicate that the answer is administratively disabled,
   * such as when the corresponding server is down for maintenance. An answer's `isDisabled`
   * property can be referenced in `answerCondition` properties in rules using `answer.isDisabled`.
   * <p>
   **Example:**
   *   \"rules\": [
   *     {
   *       \"ruleType\": \"FILTER\",
   *       \"defaultAnswerData\": [
   *         {
   *           \"answerCondition\": \"answer.isDisabled != true\",
   *           \"shouldKeep\": true
   *         }
   *       ]
   *     },
   *
   */
  "isDisabled"?: boolean;
}

export namespace SteeringPolicyAnswer {
  export function getJsonObj(obj: SteeringPolicyAnswer): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
