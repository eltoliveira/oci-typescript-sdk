/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Possible source environment types.
 **/
export enum SourceTypes {
  Ocic = "OCIC",
  InternalCompute = "INTERNAL_COMPUTE",
  Occ = "OCC",
  OcicIdcs = "OCIC_IDCS",
  Import = "IMPORT",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SourceTypes {
  export function getJsonObj(obj: SourceTypes): SourceTypes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SourceTypes): SourceTypes {
    return obj;
  }
}
