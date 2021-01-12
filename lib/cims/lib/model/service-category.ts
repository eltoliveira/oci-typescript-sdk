/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Information about the incident classifier.
 */
export interface ServiceCategory {
  /**
   * The unique ID that identifies a classifier.
   */
  "key"?: string;
  /**
   * The name of the classifier.
   */
  "name"?: string;
  /**
   * The label for the classifier.
   */
  "label"?: string;
  /**
   * The text describing the classifier.
   */
  "description"?: string;
  /**
   * The list of issues.
   */
  "issueTypeList"?: Array<model.IssueType>;
  /**
   * The scope of the incident.
   */
  "scope"?: model.Scope;
  /**
   * The unit to use to measure the service category or resource.
   */
  "unit"?: model.Unit;
  /**
   * The unique ID for the limit.
   */
  "limitId"?: string;
}

export namespace ServiceCategory {
  export function getJsonObj(obj: ServiceCategory): object {
    const jsonObj = {
      ...obj,
      ...{
        "issueTypeList": obj.issueTypeList
          ? obj.issueTypeList.map(item => {
              return model.IssueType.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
