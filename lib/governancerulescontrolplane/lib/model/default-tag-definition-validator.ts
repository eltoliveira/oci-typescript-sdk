/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * Use this validator to clear any existing validator on the tag key definition with the UpdateTag
 * operation. Using this `validatorType` is the same as not setting any value on the validator field.
 * The resultant value for `validatorType` returned in the response body is `null`.
 *
 */
export interface DefaultTagDefinitionValidator extends model.BaseTagDefinitionValidator {
  "validatorType": string;
}

export namespace DefaultTagDefinitionValidator {
  export function getJsonObj(
    obj: DefaultTagDefinitionValidator,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseTagDefinitionValidator.getJsonObj(obj) as DefaultTagDefinitionValidator)),
      ...{}
    };

    return jsonObj;
  }
  export const validatorType = "DEFAULT";
  export function getDeserializedJsonObj(
    obj: DefaultTagDefinitionValidator,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseTagDefinitionValidator.getDeserializedJsonObj(
            obj
          ) as DefaultTagDefinitionValidator)),
      ...{}
    };

    return jsonObj;
  }
}
