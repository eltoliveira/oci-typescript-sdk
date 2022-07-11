/**
 * Notifications API
 * Use the Notifications API to broadcast messages to distributed components by topic, using a publish-subscribe pattern.
For information about managing topics, subscriptions, and messages, see [Notifications Overview](/iaas/Content/Notification/Concepts/notificationoverview.htm).

 * OpenAPI spec version: 20181201
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
 * The confirmation details for the specified subscription.
 * For information about confirming subscriptions, see
 * [To confirm a subscription](https://docs.cloud.oracle.com/iaas/Content/Notification/Tasks/managingtopicsandsubscriptions.htm#confirmSub).
 *
 */
export interface ConfirmationResult {
  /**
   * The name of the subscribed topic.
   *
   */
  "topicName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the topic associated with the specified subscription.
   *
   */
  "topicId": string;
  /**
   * A locator that corresponds to the subscription protocol.
   * For example, an email address for a subscription that uses the `EMAIL` protocol, or a URL for a subscription that uses an HTTP-based protocol.
   *
   */
  "endpoint": string;
  /**
   * The URL for unsubscribing from the topic.
   */
  "unsubscribeUrl": string;
  /**
   * A human-readable string indicating the status of the subscription confirmation.
   */
  "message": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subscription specified in the request.
   */
  "subscriptionId": string;
}

export namespace ConfirmationResult {
  export function getJsonObj(obj: ConfirmationResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfirmationResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
