/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * The configuration details of the flow defined by the service connector.
 * For more information about flows defined by service connectors, see
 * [Service Connector Hub Overview](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/overview.htm).
 *
 */
export interface ServiceConnector {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the service connector.
   *
   */
  "id": string;
  /**
   * A user-friendly name. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The description of the resource. Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the service connector.
   *
   */
  "compartmentId": string;
  /**
   * The date and time when the service connector was created.
   * Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The date and time when the service connector was updated.
   * Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the service connector.
   *
   */
  "lifecycleState": model.LifecycleState;
  /**
   * A message describing the current state in more detail.
   * For example, the message might provide actionable
   * information for a resource in a `FAILED` state.
   *
   */
  "lifecyleDetails"?: string;
  "source"?: model.LoggingSourceDetails;
  /**
   * The list of tasks.
   *
   */
  "tasks"?: Array<model.TaskDetails>;
  "target"?:
    | model.NotificationsTargetDetails
    | model.ObjectStorageTargetDetails
    | model.MonitoringTargetDetails
    | model.FunctionsTargetDetails
    | model.StreamingTargetDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle Cloud Infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ServiceConnector {
  export function getJsonObj(obj: ServiceConnector): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.SourceDetails.getJsonObj(obj.source) : undefined,
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.TaskDetails.getJsonObj(item);
            })
          : undefined,
        "target": obj.target ? model.TargetDetails.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
}
