/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The Backup policy for the DB System.
 */
export interface BackupPolicy {
  /**
   * If automated backups are enabled or disabled.
   */
  "isEnabled": boolean;
  /**
    * The start of a 30-minute window of time in which daily, automated backups occur.
* <p>
This should be in the format of the \"Time\" portion of an RFC3339-formatted timestamp. Any second or sub-second time data will be truncated to zero.
* <p>
At some point in the window, the system may incur a brief service disruption as the backup is performed.
* <p>
If not defined, a window is selected from the following Region-based time-spans:
* - eu-frankfurt-1: 20:00 - 04:00 UTC
* - us-ashburn-1: 03:00 - 11:00 UTC
* - uk-london-1: 06:00 - 14:00 UTC
* - ap-tokyo-1: 13:00 - 21:00
* - us-phoenix-1: 06:00 - 14:00
* 
    */
  "windowStartTime": string;
  /**
   * The number of days automated backups are retained.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionInDays": number;
  /**
    * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
* <p>
Tags defined here will be copied verbatim as tags on the Backup resource created by this BackupPolicy.
* <p>
Example: `{\"bar-key\": \"value\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
* <p>
Tags defined here will be copied verbatim as tags on the Backup resource created by this BackupPolicy.
* <p>
Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "pitrPolicy"?: model.PitrPolicy;
}

export namespace BackupPolicy {
  export function getJsonObj(obj: BackupPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "pitrPolicy": obj.pitrPolicy ? model.PitrPolicy.getJsonObj(obj.pitrPolicy) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackupPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "pitrPolicy": obj.pitrPolicy
          ? model.PitrPolicy.getDeserializedJsonObj(obj.pitrPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
