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
 * The configuration details for the retention period setting, specified in days. For more
 * information, see [Setting Audit Log Retention Period](https://docs.cloud.oracle.com/iaas/Content/Audit/Tasks/settingretentionperiod.htm).
 *
 */
export interface UpdateConfigurationDetails {
  /**
    * The retention period setting, specified in days. The minimum is 90, the maximum 365.
* <p>
Example: `90`
* 
    */
  "retentionPeriodDays": number;
}

export namespace UpdateConfigurationDetails {
  export function getJsonObj(obj: UpdateConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
