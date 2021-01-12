/**
 * Events API
 * API for the Events Service. Use this API to manage rules and actions that create automation 
in your tenancy. For more information, see [Overview of Events](/iaas/Content/Events/Concepts/eventsoverview.htm).

 * OpenAPI spec version: 20181201
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
 * The summary details of rules for Events. For more information, see
 * [Managing Rules for Events](https://docs.cloud.oracle.com/iaas/Content/Events/Task/managingrules.htm).
 *
 */
export interface RuleSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of this rule.
   *
   */
  "id": string;
  /**
    * A string that describes the rule. It does not have to be unique, and you can change it. Avoid entering
* confidential information.
* <p>
Example: `\"This rule sends a notification upon completion of DbaaS backup.\"`
* 
    */
  "displayName": string;
  /**
   * A string that describes the details of the rule. It does not have to be unique, and you can change it. Avoid entering
   * confidential information.
   *
   */
  "description"?: string;
  "lifecycleState": string;
  /**
    * A filter that specifies the event that will trigger actions associated with this rule. A few 
* important things to remember about filters:
* <p>
* Fields not mentioned in the condition are ignored. You can create a valid filter that matches
* all events with two curly brackets: `{}` 
* <p>
  For more examples, see 
* [Matching Events with Filters](https://docs.cloud.oracle.com/iaas/Content/Events/Concepts/filterevents.htm).       
* * For a condition with fields to match an event, the event must contain all the field names 
* listed in the condition. Field names must appear in the condition with the same nesting 
* structure used in the event. 
* <p>
  For a list of reference events, see 
* [Services that Produce Events](https://docs.cloud.oracle.com/iaas/Content/Events/Reference/eventsproducers.htm).       
* * Rules apply to events in the compartment in which you create them and any child compartments. 
* This means that a condition specified by a rule only matches events emitted from resources in 
* the compartment or any of its child compartments. 
* * Wildcard matching is supported with the asterisk (*) character. 
* <p>
  For examples of wildcard matching, see 
* [Matching Events with Filters](https://docs.cloud.oracle.com/iaas/Content/Events/Concepts/filterevents.htm)
* <p>
Example: `\\\"eventType\\\": \\\"com.oraclecloud.databaseservice.autonomous.database.backup.end\\\"`
* 
    */
  "condition": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to which this rule belongs.
   *
   */
  "compartmentId": string;
  /**
    * Whether or not this rule is currently enabled.
* <p>
Example: `true`
* 
    */
  "isEnabled": boolean;
  /**
    * The time this rule was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2018-09-12T22:47:12.613Z`
* 
    */
  "timeCreated": Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. Exists for cross-compatibility only.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RuleSummary {
  export function getJsonObj(obj: RuleSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
