/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Details of the Oracle Resource Manager stack, which is a subtype of the Dedicated Vantage Point stack.
 */
export interface OracleRMStack extends model.DvpStackDetails {
  /**
   * Stack [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Resource Manager stack for dedicated vantage point.
   */
  "dvpStackId": string;
  /**
   * Stream [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Resource Manager stack for dedicated vantage point.
   */
  "dvpStreamId": string;

  "dvpStackType": string;
}

export namespace OracleRMStack {
  export function getJsonObj(obj: OracleRMStack, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.DvpStackDetails.getJsonObj(obj) as OracleRMStack)),
      ...{}
    };

    return jsonObj;
  }
  export const dvpStackType = "ORACLE_RM_STACK";
  export function getDeserializedJsonObj(obj: OracleRMStack, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DvpStackDetails.getDeserializedJsonObj(obj) as OracleRMStack)),
      ...{}
    };

    return jsonObj;
  }
}
