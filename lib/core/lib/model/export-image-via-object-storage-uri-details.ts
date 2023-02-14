/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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

export interface ExportImageViaObjectStorageUriDetails extends model.ExportImageDetails {
  /**
   * The Object Storage URL to export the image to. See [Object
   * Storage URLs](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/imageimportexport.htm#URLs)
   * and [Using Pre-Authenticated Requests](https://docs.cloud.oracle.com/iaas/Content/Object/Tasks/usingpreauthenticatedrequests.htm)
   * for constructing URLs for image import/export.
   *
   */
  "destinationUri": string;

  "destinationType": string;
}

export namespace ExportImageViaObjectStorageUriDetails {
  export function getJsonObj(
    obj: ExportImageViaObjectStorageUriDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExportImageDetails.getJsonObj(obj) as ExportImageViaObjectStorageUriDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const destinationType = "objectStorageUri";
  export function getDeserializedJsonObj(
    obj: ExportImageViaObjectStorageUriDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExportImageDetails.getDeserializedJsonObj(
            obj
          ) as ExportImageViaObjectStorageUriDetails)),
      ...{}
    };

    return jsonObj;
  }
}
