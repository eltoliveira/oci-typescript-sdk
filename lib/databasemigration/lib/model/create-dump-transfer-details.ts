/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Optional additional properties for dump transfer.
 *
 */
export interface CreateDumpTransferDetails {
  "source"?: model.CreateOciCliDumpTransferDetails | model.CreateCurlTransferDetails;
  "target"?: model.CreateOciCliDumpTransferDetails | model.CreateCurlTransferDetails;
  /**
   * OCID of the shared storage mount target
   *
   */
  "sharedStorageMountTargetId"?: string;
}

export namespace CreateDumpTransferDetails {
  export function getJsonObj(obj: CreateDumpTransferDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.CreateHostDumpTransferDetails.getJsonObj(obj.source)
          : undefined,
        "target": obj.target
          ? model.CreateHostDumpTransferDetails.getJsonObj(obj.target)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDumpTransferDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.CreateHostDumpTransferDetails.getDeserializedJsonObj(obj.source)
          : undefined,
        "target": obj.target
          ? model.CreateHostDumpTransferDetails.getDeserializedJsonObj(obj.target)
          : undefined
      }
    };

    return jsonObj;
  }
}
