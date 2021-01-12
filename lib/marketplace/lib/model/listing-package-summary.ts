/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The model for a summary of a package.
 */
export interface ListingPackageSummary {
  /**
   * The ID of the listing that the specified package belongs to.
   */
  "listingId"?: string;
  /**
   * The version of the specified package.
   */
  "packageVersion"?: string;
  /**
   * The specified package's type.
   */
  "packageType"?: model.PackageTypeEnum;
  /**
   * The regions where you can deploy the listing package. (Some packages have restrictions that limit their deployment to United States regions only.)
   *
   */
  "regions"?: Array<model.Region>;
  /**
   * The unique identifier for the package resource.
   */
  "resourceId"?: string;
  /**
    * The date and time this listing package was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) 
* timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace ListingPackageSummary {
  export function getJsonObj(obj: ListingPackageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
