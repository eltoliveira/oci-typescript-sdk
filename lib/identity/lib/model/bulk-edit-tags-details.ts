/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
 * OpenAPI spec version: 20160918
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

export interface BulkEditTagsDetails {
  /**
   * The OCID of the compartment where the bulk tag edit request is submitted.
   *
   */
  "compartmentId": string;
  /**
   * The resources to be updated.
   *
   */
  "resources": Array<model.BulkEditResource>;
  /**
   * The operations associated with the request to bulk edit tags.
   *
   */
  "bulkEditOperations": Array<model.BulkEditOperationDetails>;
}

export namespace BulkEditTagsDetails {
  export function getJsonObj(obj: BulkEditTagsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.BulkEditResource.getJsonObj(item);
            })
          : undefined,
        "bulkEditOperations": obj.bulkEditOperations
          ? obj.bulkEditOperations.map(item => {
              return model.BulkEditOperationDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
