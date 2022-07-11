/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * A summary of a log associated with a particular run.
 *
 */
export interface RunLogSummary {
  /**
   * The name of the log.
   * Example: spark_driver_stderr_20190917T114000Z.log.gz
   *
   */
  "name": string;
  /**
   * The runId associated with the log.
   *
   */
  "runId": string;
  /**
   * The size of the object in bytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes"?: number;
  /**
   * The source of the log such as driver and executor.
   *
   */
  "source": RunLogSummary.Source;
  /**
   * The date and time the object was created, as described in [RFC 2616](https://tools.ietf.org/rfc/rfc2616), section 14.29.
   *
   */
  "timeCreated"?: Date;
  /**
   * The type of log such as stdout and stderr.
   *
   */
  "type": RunLogSummary.Type;
}

export namespace RunLogSummary {
  export enum Source {
    Application = "APPLICATION",
    Driver = "DRIVER",
    Executor = "EXECUTOR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Stderr = "STDERR",
    Stdout = "STDOUT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RunLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RunLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
