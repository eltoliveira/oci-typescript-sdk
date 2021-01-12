/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
 *
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
 * An object that represents the `sticky-cookie` load balancing method and its properties.
 *
 */
export interface StickyCookieLoadBalancingMethod extends model.LoadBalancingMethod {
  /**
   * The name of the cookie used to track the persistence.
   * Can contain any US-ASCII character except separator or control character.
   *
   */
  "name"?: string;
  /**
   * The domain for which the cookie is set, defaults to WAAS policy domain.
   *
   */
  "domain"?: string;
  /**
   * The time for which a browser should keep the cookie in seconds.
   * Empty value will cause the cookie to expire at the end of a browser session.
   *
   */
  "expirationTimeInSeconds"?: number;

  "method": string;
}

export namespace StickyCookieLoadBalancingMethod {
  export function getJsonObj(
    obj: StickyCookieLoadBalancingMethod,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LoadBalancingMethod.getJsonObj(obj) as StickyCookieLoadBalancingMethod)),
      ...{}
    };

    return jsonObj;
  }
  export const method = "STICKY_COOKIE";
}
