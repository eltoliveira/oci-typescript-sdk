/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about monitored resource.
 */
export interface MonitoredResource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of monitored resource.
   */
  "id": string;
  /**
   * Monitored resource name.
   */
  "name": string;
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Monitored resource type
   */
  "type": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * Tenancy Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "tenantId": string;
  /**
   * Monitored resource host name.
   */
  "hostName"?: string;
  /**
   * External resource is any OCI resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   * which is not a Stack Monitoring service resource.
   * Currently supports only following resource type identifiers - externalcontainerdatabase,
   * externalnoncontainerdatabase, externalpluggabledatabase and OCI compute instance.
   *
   */
  "externalId"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * Time zone in the form of tz database canonical zone ID.
   */
  "resourceTimeZone"?: string;
  /**
   * The time the the resource was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the the resource was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * Lifecycle state of the monitored resource.
   */
  "lifecycleState"?: model.ResourceLifecycleState;
  /**
   * List of monitored resource properties
   */
  "properties"?: Array<model.MonitoredResourceProperty>;
  "databaseConnectionDetails"?: model.ConnectionDetails;
  "credentials"?:
    | model.PreExistingCredentials
    | model.EncryptedCredentials
    | model.PlainTextCredentials;
  "aliases"?: model.MonitoredResourceAliasCredential;
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MonitoredResource {
  export function getJsonObj(obj: MonitoredResource): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getJsonObj(item);
            })
          : undefined,
        "databaseConnectionDetails": obj.databaseConnectionDetails
          ? model.ConnectionDetails.getJsonObj(obj.databaseConnectionDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.MonitoredResourceCredential.getJsonObj(obj.credentials)
          : undefined,
        "aliases": obj.aliases
          ? model.MonitoredResourceAliasCredential.getJsonObj(obj.aliases)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResource): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.MonitoredResourceProperty.getDeserializedJsonObj(item);
            })
          : undefined,
        "databaseConnectionDetails": obj.databaseConnectionDetails
          ? model.ConnectionDetails.getDeserializedJsonObj(obj.databaseConnectionDetails)
          : undefined,
        "credentials": obj.credentials
          ? model.MonitoredResourceCredential.getDeserializedJsonObj(obj.credentials)
          : undefined,
        "aliases": obj.aliases
          ? model.MonitoredResourceAliasCredential.getDeserializedJsonObj(obj.aliases)
          : undefined
      }
    };

    return jsonObj;
  }
}
