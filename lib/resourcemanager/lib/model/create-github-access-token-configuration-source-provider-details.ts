/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * The details for creating a configuration source provider of the type `GITHUB_ACCESS_TOKEN`.
 * This type corresponds to a configuration source provider in GitHub that is authenticated with a personal access token.
 *
 */
export interface CreateGithubAccessTokenConfigurationSourceProviderDetails
  extends model.CreateConfigurationSourceProviderDetails {
  /**
   * The GitHub service endpoint.
   * Example: `https://github.com/`
   *
   */
  "apiEndpoint": string;
  /**
   * The personal access token to be configured on the GitHub repository. Avoid entering confidential information.
   */
  "accessToken": string;

  "configSourceProviderType": string;
}

export namespace CreateGithubAccessTokenConfigurationSourceProviderDetails {
  export function getJsonObj(
    obj: CreateGithubAccessTokenConfigurationSourceProviderDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigurationSourceProviderDetails.getJsonObj(
            obj
          ) as CreateGithubAccessTokenConfigurationSourceProviderDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceProviderType = "GITHUB_ACCESS_TOKEN";
  export function getDeserializedJsonObj(
    obj: CreateGithubAccessTokenConfigurationSourceProviderDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigurationSourceProviderDetails.getDeserializedJsonObj(
            obj
          ) as CreateGithubAccessTokenConfigurationSourceProviderDetails)),
      ...{}
    };

    return jsonObj;
  }
}
