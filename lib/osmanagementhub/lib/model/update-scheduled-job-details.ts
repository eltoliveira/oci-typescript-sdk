/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Information for updating a scheduled job.
 */
export interface UpdateScheduledJobDetails {
  /**
   * Scheduled job name.
   */
  "displayName"?: string;
  /**
   * Details describing the scheduled job.
   */
  "description"?: string;
  /**
   * The type of scheduling this scheduled job follows.
   */
  "scheduleType"?: model.ScheduleTypes;
  /**
   * The desired time for the next execution of this scheduled job.
   */
  "timeNextExecution"?: Date;
  /**
   * The recurring rule for a recurring scheduled job.
   */
  "recurringRule"?: string;
  /**
   * The list of operations this scheduled job needs to perform (can only support one operation if the operationType is not UPDATE_PACKAGES/UPDATE_ALL/UPDATE_SECURITY/UPDATE_BUGFIX/UPDATE_ENHANCEMENT/UPDATE_OTHER/UPDATE_KSPLICE_USERSPACE/UPDATE_KSPLICE_KERNEL).
   */
  "operations"?: Array<model.ScheduledJobOperation>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateScheduledJobDetails {
  export function getJsonObj(obj: UpdateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.ScheduledJobOperation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.ScheduledJobOperation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
