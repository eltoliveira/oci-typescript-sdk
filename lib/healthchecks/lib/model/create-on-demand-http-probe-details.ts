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
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The request body used to create an on-demand HTTP probe.
 */
export interface CreateOnDemandHttpProbeDetails {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * A list of targets (hostnames or IP addresses) of the probe.
   */
  "targets": Array<string>;
  /**
   * A list of names of vantage points from which to execute the probe.
   */
  "vantagePointNames"?: Array<string>;
  /**
   * The port on which to probe endpoints. If unspecified, probes will use the
   * default port of their protocol.
   *
   */
  "port"?: number;
  /**
   * The probe timeout in seconds. Valid values: 10, 20, 30, and 60.
   * The probe timeout must be less than or equal to `intervalInSeconds` for monitors.
   *
   */
  "timeoutInSeconds"?: number;
  "protocol": model.HttpProbeProtocol;
  "method"?: model.HttpProbeMethod;
  /**
   * The optional URL path to probe, including query parameters.
   */
  "path"?: string;
  /**
   * A dictionary of HTTP request headers.
   * <p>
   *Note:* Monitors and probes do not support the use of the `Authorization` HTTP header.
   *
   */
  "headers"?: { [key: string]: string };
}

export namespace CreateOnDemandHttpProbeDetails {
  export function getJsonObj(obj: CreateOnDemandHttpProbeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
