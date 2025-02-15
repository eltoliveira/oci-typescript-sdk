/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details of an external Pluggable Database (PDB) discovered in an external DB system discovery run.
 */
export interface DiscoveredExternalPluggableDatabase
  extends model.DiscoveredExternalDbSystemComponent {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The unique identifier of the parent Container Database (CDB).
   */
  "containerDatabaseId": string;
  /**
   * The unique identifier of the PDB.
   */
  "guid"?: string;
  "connector"?: model.ExternalDbSystemDiscoveryMacsConnector;

  "componentType": string;
}

export namespace DiscoveredExternalPluggableDatabase {
  export function getJsonObj(
    obj: DiscoveredExternalPluggableDatabase,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredExternalDbSystemComponent.getJsonObj(
            obj
          ) as DiscoveredExternalPluggableDatabase)),
      ...{
        "connector": obj.connector
          ? model.ExternalDbSystemDiscoveryConnector.getJsonObj(obj.connector)
          : undefined
      }
    };

    return jsonObj;
  }
  export const componentType = "PLUGGABLE_DATABASE";
  export function getDeserializedJsonObj(
    obj: DiscoveredExternalPluggableDatabase,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DiscoveredExternalDbSystemComponent.getDeserializedJsonObj(
            obj
          ) as DiscoveredExternalPluggableDatabase)),
      ...{
        "connector": obj.connector
          ? model.ExternalDbSystemDiscoveryConnector.getDeserializedJsonObj(obj.connector)
          : undefined
      }
    };

    return jsonObj;
  }
}
