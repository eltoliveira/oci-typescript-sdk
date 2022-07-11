/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Optional additional properties for dump transfer in source or target host. Default kind is CURL
 *
 */
export interface HostDumpTransferDetails {
  "kind": string;
}

export namespace HostDumpTransferDetails {
  export function getJsonObj(obj: HostDumpTransferDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "OCI_CLI":
          return model.OciCliDumpTransferDetails.getJsonObj(
            <model.OciCliDumpTransferDetails>(<object>jsonObj),
            true
          );
        case "CURL":
          return model.CurlTransferDetails.getJsonObj(
            <model.CurlTransferDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HostDumpTransferDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "OCI_CLI":
          return model.OciCliDumpTransferDetails.getDeserializedJsonObj(
            <model.OciCliDumpTransferDetails>(<object>jsonObj),
            true
          );
        case "CURL":
          return model.CurlTransferDetails.getDeserializedJsonObj(
            <model.CurlTransferDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.kind);
      }
    }
    return jsonObj;
  }
}
