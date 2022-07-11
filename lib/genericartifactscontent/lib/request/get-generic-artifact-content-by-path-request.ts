/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/genericartifactscontent/GetGenericArtifactContentByPath.ts.html |here} to see how to use GetGenericArtifactContentByPathRequest.
 */
export interface GetGenericArtifactContentByPathRequest extends common.BaseRequest {
  /**
 * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the repository.
* <p>
Example: `ocid1.repository.oc1..exampleuniqueID`
* 
 */
  "repositoryId": string;
  /**
 * A user-defined path to describe the location of an artifact. You can use slashes to organize the repository, but slashes do not create a directory structure. An artifact path does not include an artifact version.
* <p>
Example: `project01/my-web-app/artifact-abc`
* 
 */
  "artifactPath": string;
  /**
 * A user-defined string to describe the artifact version.
* <p>
Example: `1.1.2` or `1.2-beta-2`
* 
 */
  "version": string;
  /**
 * Unique Oracle-assigned [request ID](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm)
* <p>
Example: `bxxxxxxx-fxxx-4xxx-9xxx-bxxxxxxxxxxx`
* If you contact Oracle about a request, provide this request ID.
* 
 */
  "opcRequestId"?: string;
}
