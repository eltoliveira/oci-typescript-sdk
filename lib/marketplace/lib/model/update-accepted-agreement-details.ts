/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for the parameters needed to update an accepted terms of use agreement.
 */
export interface UpdateAcceptedAgreementDetails {
  /**
   * A display name for the accepted agreement.
   */
  "displayName"?: string;
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace UpdateAcceptedAgreementDetails {
  export function getJsonObj(obj: UpdateAcceptedAgreementDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateAcceptedAgreementDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
