/**
 * Queue API
 * Use the Queue API to produce and consume messages, create queues, and manage related items. For more information, see [Queue](/iaas/Content/queue/overview.htm).
 * OpenAPI spec version: 20210201
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
 * Object that represents a message to update in a queue.
 */
export interface UpdateMessagesDetailsEntry {
  /**
   * The receipt of the message to update.
   */
  "receipt": string;
  /**
   * The new visibility of the message relative to the current time (as-per the clock of the server receiving the request). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "visibilityInSeconds": number;
}

export namespace UpdateMessagesDetailsEntry {
  export function getJsonObj(obj: UpdateMessagesDetailsEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMessagesDetailsEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
