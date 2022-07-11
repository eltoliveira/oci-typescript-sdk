/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
 *
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
 * Represents the archive retrieve request for the audit data. You can retrieve audit data for a target database from the archive and store it online.
 * For more information, see [Retrieve Audit Data for a Target Database from the Archive](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/security-assessment-overview.html).
 *
 */
export interface AuditArchiveRetrieval {
  /**
   * The OCID of the archive retrieval.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains archive retrieval.
   */
  "compartmentId": string;
  /**
   * The display name of the archive retrieval. The name does not have to be unique, and is changeable.
   */
  "displayName": string;
  /**
   * Description of the archive retrieval.
   */
  "description"?: string;
  /**
   * Start month of the archive retrieval, in the format defined by RFC3339.
   */
  "startDate": Date;
  /**
   * End month of the archive retrieval, in the format defined by RFC3339.
   */
  "endDate": Date;
  /**
   * The OCID of the target associated with the archive retrieval.
   */
  "targetId": string;
  /**
   * The date time when archive retrieval was requested, in the format defined by RFC3339.
   */
  "timeRequested"?: Date;
  /**
   * The date time when archive retrieval request was fulfilled, in the format defined by RFC3339.
   */
  "timeCompleted"?: Date;
  /**
   * The date time when retrieved archive data will be deleted from Data Safe and unloaded back into archival.
   */
  "timeOfExpiry"?: Date;
  /**
   * Total count of audit events to be retrieved from the archive for the specified date range. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "auditEventCount"?: number;
  /**
   * The Error details of a failed archive retrieval.
   */
  "errorInfo"?: string;
  /**
   * The current state of the archive retrieval.
   */
  "lifecycleState": model.AuditArchiveRetrievalLifecycleState;
  /**
   * Details about the current state of the archive retrieval.
   */
  "lifecycleDetails"?: string;
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
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AuditArchiveRetrieval {
  export function getJsonObj(obj: AuditArchiveRetrieval): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuditArchiveRetrieval): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
