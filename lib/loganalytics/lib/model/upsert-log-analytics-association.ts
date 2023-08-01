/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * UpsertLogAnalyticsAssociation
 */
export interface UpsertLogAnalyticsAssociation {
  /**
   * The agent unique identifier.
   */
  "agentId"?: string;
  /**
   * The source name.
   */
  "sourceName"?: string;
  /**
   * The source type internal name.
   */
  "sourceTypeName"?: string;
  /**
   * The entity unique identifier.
   */
  "entityId"?: string;
  /**
   * The entity name.
   */
  "entityName"?: string;
  /**
   * The entity type internal name.
   */
  "entityTypeName"?: string;
  /**
   * The host name.
   */
  "host"?: string;
  /**
   * The log group unique identifier.
   */
  "logGroupId"?: string;
  /**
   * A list of association properties.
   */
  "associationProperties"?: Array<model.AssociationProperty>;
}

export namespace UpsertLogAnalyticsAssociation {
  export function getJsonObj(obj: UpsertLogAnalyticsAssociation): object {
    const jsonObj = {
      ...obj,
      ...{
        "associationProperties": obj.associationProperties
          ? obj.associationProperties.map(item => {
              return model.AssociationProperty.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpsertLogAnalyticsAssociation): object {
    const jsonObj = {
      ...obj,
      ...{
        "associationProperties": obj.associationProperties
          ? obj.associationProperties.map(item => {
              return model.AssociationProperty.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
