/**
 * Health Checks API
 * API for the Health Checks service. Use this API to manage endpoint probes and monitors.
For more information, see
[Overview of the Health Checks Service](/iaas/Content/HealthChecks/Concepts/healthchecks.htm).

 * OpenAPI spec version: 20180501
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
 * Geographic information about a vantage point.
 */
export interface Geolocation {
  /**
   * An opaque identifier for the geographic location of the vantage point.
   */
  "geoKey"?: string;
  /**
   * The ISO 3166-2 code for this location's first-level administrative
   * division, either a US state or Canadian province. Only included for locations
   * in the US or Canada. For a list of codes, see
   * [Country Codes](https://www.iso.org/obp/ui/#search).
   *
   */
  "adminDivCode"?: string;
  /**
   * Common English-language name for the city.
   *
   */
  "cityName"?: string;
  /**
   * The ISO 3166-1 alpha-2 country code. For a list of codes,
   * see [Country Codes](https://www.iso.org/obp/ui/#search).
   *
   */
  "countryCode"?: string;
  /**
   * The common English-language name for the country.
   *
   */
  "countryName"?: string;
  /**
   * Degrees north of the Equator.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "latitude"?: number;
  /**
   * Degrees east of the prime meridian.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "longitude"?: number;
}

export namespace Geolocation {
  export function getJsonObj(obj: Geolocation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Geolocation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
