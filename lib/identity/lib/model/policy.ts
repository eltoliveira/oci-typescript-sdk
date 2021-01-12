/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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
* A document that specifies the type of access a group has to the resources in a compartment. For information about
* policies and other IAM Service components, see
* [Overview of the IAM Service](https://docs.cloud.oracle.com/Content/Identity/Concepts/overview.htm). If you're new to policies, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* <p>
The word \"policy\" is used by people in different ways:
* <p>
  * An individual statement written in the policy language
*   * A collection of statements in a single, named \"policy\" document (which has an Oracle Cloud ID (OCID) assigned to it)
*   * The overall body of policies your organization uses to control access to resources
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator.
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values
* using the API.
* 
*/
export interface Policy {
  /**
   * The OCID of the policy.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the policy (either the tenancy or another compartment).
   *
   */
  "compartmentId": string;
  /**
   * The name you assign to the policy during creation. The name must be unique across all policies
   * in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * An array of one or more policy statements written in the policy language.
   */
  "statements": Array<string>;
  /**
   * The description you assign to the policy. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
    * Date and time the policy was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The policy's current state. After creating a policy, make sure its `lifecycleState` changes from CREATING to
   * ACTIVE before using it.
   *
   */
  "lifecycleState": Policy.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState.
   */
  "inactiveStatus"?: number;
  /**
   * The version of the policy. If null or set to an empty string, when a request comes in for authorization, the
   * policy will be evaluated according to the current behavior of the services at that moment. If set to a particular
   * date (YYYY-MM-DD), the policy will be evaluated according to the behavior of the services on that date.
   *
   */
  "versionDate"?: Date;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Policy {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Policy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
