/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
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
 * A Data Safe configuration for a tenancy and region.
 */
export interface DataSafeConfiguration {
  /**
   * Indicates if Data Safe is enabled.
   */
  "isEnabled": boolean;
  /**
   * The URL of the Data Safe service.
   */
  "url"?: string;
  /**
   * The OCID of the tenancy used to enable Data Safe.
   */
  "compartmentId"?: string;
  /**
   * The date and time Data Safe was enabled, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeEnabled"?: Date;
  /**
   * The current state of Data Safe.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DataSafeConfiguration {
  export function getJsonObj(obj: DataSafeConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
