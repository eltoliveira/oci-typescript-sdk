/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The shape of the DB system. The shape determines resources to allocate to the DB system - CPU cores and memory for VM shapes; CPU cores, memory and storage for non-VM (or bare metal) shapes.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator.
* If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface DbSystemShapeSummary {
  /**
   * The name of the shape used for the DB system.
   */
  "name": string;
  /**
   * The family of the shape used for the DB system.
   */
  "shapeFamily"?: string;
  /**
   * Deprecated. Use `name` instead of `shape`.
   */
  "shape"?: string;
  /**
   * The maximum number of CPU cores that can be enabled on the DB system for this shape.
   */
  "availableCoreCount": number;
  /**
   * The minimum number of CPU cores that can be enabled on the DB system for this shape.
   */
  "minimumCoreCount"?: number;
  /**
   * The discrete number by which the CPU core count for this shape can be increased or decreased.
   */
  "coreCountIncrement"?: number;
  /**
   * The minimum number of CPU cores that can be enabled per node for this shape.
   */
  "minCoreCountPerNode"?: number;
  /**
   * The maximum memory that can be enabled for this shape.
   */
  "availableMemoryInGBs"?: number;
  /**
   * The minimum memory that need be allocated per node for this shape.
   */
  "minMemoryPerNodeInGBs"?: number;
  /**
   * The maximum Db Node storage that can be enabled for this shape.
   */
  "availableDbNodeStorageInGBs"?: number;
  /**
   * The minimum Db Node storage that need be allocated per node for this shape.
   */
  "minDbNodeStoragePerNodeInGBs"?: number;
  /**
   * The maximum DATA storage that can be enabled for this shape.
   */
  "availableDataStorageInTBs"?: number;
  /**
   * The minimum data storage that need be allocated for this shape.
   */
  "minDataStorageInTBs"?: number;
  /**
   * The minimum number of database nodes available for this shape.
   */
  "minimumNodeCount"?: number;
  /**
   * The maximum number of database nodes available for this shape.
   */
  "maximumNodeCount"?: number;
  /**
   * The maximum number of CPU cores per database node that can be enabled for this shape. Only applicable to the flex Exadata shape. Does not apply to X6, X7, and X8 fixed-shape systems.
   */
  "availableCoreCountPerNode"?: number;
}

export namespace DbSystemShapeSummary {
  export function getJsonObj(obj: DbSystemShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
