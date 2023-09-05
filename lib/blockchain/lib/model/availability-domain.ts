/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Availability Domains
 */
export interface AvailabilityDomain {
  /**
   * Availability Domain Identifiers
   */
  "ads"?: AvailabilityDomain.Ads;
}

export namespace AvailabilityDomain {
  export enum Ads {
    Ad1 = "AD1",
    Ad2 = "AD2",
    Ad3 = "AD3"
  }

  export function getJsonObj(obj: AvailabilityDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AvailabilityDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
