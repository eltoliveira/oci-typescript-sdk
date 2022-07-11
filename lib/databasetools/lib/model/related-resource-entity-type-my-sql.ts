/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The related MySQL Server type.
 **/
export enum RelatedResourceEntityTypeMySql {
  Mysqldbsystem = "MYSQLDBSYSTEM",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace RelatedResourceEntityTypeMySql {
  export function getJsonObj(obj: RelatedResourceEntityTypeMySql): RelatedResourceEntityTypeMySql {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: RelatedResourceEntityTypeMySql
  ): RelatedResourceEntityTypeMySql {
    return obj;
  }
}
