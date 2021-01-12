/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Create ManagedList
 */
export interface CreateManagedListDetails {
  /**
   * ManagedList display name
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * OCID of the Source ManagedList
   */
  "sourceManagedListId"?: string;
  /**
   * ManagedList description
   */
  "description"?: string;
  /**
   * type of the list
   */
  "listType"?: model.ManagedListType;
  /**
   * List of ManagedListItem
   */
  "listItems"?: Array<string>;
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
}

export namespace CreateManagedListDetails {
  export function getJsonObj(obj: CreateManagedListDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
