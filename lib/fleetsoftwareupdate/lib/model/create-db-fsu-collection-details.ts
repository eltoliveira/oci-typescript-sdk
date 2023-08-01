/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Details to create a 'DB' type Exadata Fleet Update Collection.
 *
 */
export interface CreateDbFsuCollectionDetails extends model.CreateFsuCollectionDetails {
  /**
   * Database Major Version of targets to be included in the Exadata Fleet Update Collection.
   * https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbVersionSummary/ListDbVersions
   * Only Database targets that match the version specified in this value would be added to the Exadata Fleet Update Collection.
   *
   */
  "sourceMajorVersion": model.DbSourceMajorVersions;
  "fleetDiscovery"?:
    | model.DbDiscoveryResults
    | model.DbSearchQueryDiscovery
    | model.DbTargetListDiscovery
    | model.DbFiltersDiscovery;

  "type": string;
}

export namespace CreateDbFsuCollectionDetails {
  export function getJsonObj(obj: CreateDbFsuCollectionDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateFsuCollectionDetails.getJsonObj(obj) as CreateDbFsuCollectionDetails)),
      ...{
        "fleetDiscovery": obj.fleetDiscovery
          ? model.DbFleetDiscoveryDetails.getJsonObj(obj.fleetDiscovery)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "DB";
  export function getDeserializedJsonObj(
    obj: CreateDbFsuCollectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateFsuCollectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateDbFsuCollectionDetails)),
      ...{
        "fleetDiscovery": obj.fleetDiscovery
          ? model.DbFleetDiscoveryDetails.getDeserializedJsonObj(obj.fleetDiscovery)
          : undefined
      }
    };

    return jsonObj;
  }
}
