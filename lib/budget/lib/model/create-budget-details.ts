/**
 * Budgets API
 * Use the Budgets API to manage budgets and budget alerts.
 * OpenAPI spec version: 20190111
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
* The create budget details.
* <p>
Client should use 'targetType' & 'targets' to specify the target type and list of targets on which the budget is applied.
* <p>
For backwards compatibility, 'targetCompartmentId' will still be supported for all existing clients.
* However, this is considered deprecreated and all clients be upgraded to use 'targetType' & 'targets'.
* <p>
Specifying both 'targetCompartmentId' and 'targets' will cause a Bad Request.
* 
*/
export interface CreateBudgetDetails {
  /**
   * The OCID of the compartment
   */
  "compartmentId": string;
  /**
   * This is DEPRECTAED. Set the target compartment id in targets instead.
   *
   */
  "targetCompartmentId"?: string;
  /**
   * The displayName of the budget.
   */
  "displayName"?: string;
  /**
   * The description of the budget.
   */
  "description"?: string;
  /**
   * The amount of the budget expressed as a whole number in the currency of the customer's rate card.
   *
   */
  "amount": number;
  /**
   * The reset period for the budget.
   *
   */
  "resetPeriod": model.ResetPeriod;
  /**
   * The type of target on which the budget is applied.
   *
   */
  "targetType"?: model.TargetType;
  /**
   * The list of targets on which the budget is applied.
   *   If targetType is \"COMPARTMENT\", targets contains list of compartment OCIDs.
   *   If targetType is \"TAG\", targets contains list of cost tracking tag identifiers in the form of \"{tagNamespace}.{tagKey}.{tagValue}\".
   * Curerntly, the array should contain EXACT ONE item.
   *
   */
  "targets"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateBudgetDetails {
  export function getJsonObj(obj: CreateBudgetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
