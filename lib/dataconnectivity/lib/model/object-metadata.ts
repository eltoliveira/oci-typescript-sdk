/**
 * Data Connectivity Management API
 * Use the DCMS APIs to perform Metadata/Data operations.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * A summary type containing information about the object including its key, name and when/who created/updated it.
 */
export interface ObjectMetadata {
  /**
   * The user that created the object.
   */
  "createdBy"?: string;
  /**
   * The user that created the object.
   */
  "createdByName"?: string;
  /**
   * The user that updated the object.
   */
  "updatedBy"?: string;
  /**
   * The user that updated the object.
   */
  "updatedByName"?: string;
  /**
   * The date and time that the object was created.
   */
  "timeCreated"?: Date;
  /**
   * The date and time that the object was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The owning object key for this object.
   */
  "aggregatorKey"?: string;
  "aggregator"?: model.AggregatorSummary;
  /**
   * The full path to identify this object.
   */
  "identifierPath"?: string;
  /**
   * Information property fields.
   */
  "infoFields"?: { [key: string]: string };
  /**
   * The registry version of the object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "registryVersion"?: number;
  /**
   * Labels are keywords or tags that you can add to data assets, dataflows and so on. You can define your own labels and use them to categorize content.
   */
  "labels"?: Array<string>;
  /**
   * Specifies whether this object is a favorite or not.
   */
  "isFavorite"?: boolean;
}

export namespace ObjectMetadata {
  export function getJsonObj(obj: ObjectMetadata): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregator": obj.aggregator
          ? model.AggregatorSummary.getJsonObj(obj.aggregator)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectMetadata): object {
    const jsonObj = {
      ...obj,
      ...{
        "aggregator": obj.aggregator
          ? model.AggregatorSummary.getDeserializedJsonObj(obj.aggregator)
          : undefined
      }
    };

    return jsonObj;
  }
}
