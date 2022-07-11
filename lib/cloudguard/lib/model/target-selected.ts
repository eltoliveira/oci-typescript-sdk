/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations in Cloud Guard from any region.

 * OpenAPI spec version: 20200131
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
 * Target Selection eg select ALL or select on basis of TargetResourceTypes or TargetIds.
 */
export interface TargetSelected {
  "kind": string;
}

export namespace TargetSelected {
  export function getJsonObj(obj: TargetSelected): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "ALL":
          return model.AllTargetsSelected.getJsonObj(
            <model.AllTargetsSelected>(<object>jsonObj),
            true
          );
        case "TARGETTYPES":
          return model.TargetResourceTypesSelected.getJsonObj(
            <model.TargetResourceTypesSelected>(<object>jsonObj),
            true
          );
        case "TARGETIDS":
          return model.TargetIdsSelected.getJsonObj(
            <model.TargetIdsSelected>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TargetSelected): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "ALL":
          return model.AllTargetsSelected.getDeserializedJsonObj(
            <model.AllTargetsSelected>(<object>jsonObj),
            true
          );
        case "TARGETTYPES":
          return model.TargetResourceTypesSelected.getDeserializedJsonObj(
            <model.TargetResourceTypesSelected>(<object>jsonObj),
            true
          );
        case "TARGETIDS":
          return model.TargetIdsSelected.getDeserializedJsonObj(
            <model.TargetIdsSelected>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
}
