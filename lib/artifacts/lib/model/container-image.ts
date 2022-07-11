/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

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
 * Container image metadata.
 */
export interface ContainerImage {
  /**
   * The compartment OCID to which the container image belongs. Inferred from the container repository.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the user or principal that created the resource.
   */
  "createdBy": string;
  /**
   * The container image digest.
   */
  "digest": string;
  /**
    * The repository name and the most recent version associated with the image.
* If there are no versions associated with the image, then last known version and digest are used instead.
* If the last known version is unavailable, then 'unknown' is used instead of the version.
* <p>
Example: `ubuntu:latest` or `ubuntu:latest@sha256:45b23dee08af5e43a7fea6c4cf9c25ccf269ee113168c19722f87876677c5cb2`
* 
    */
  "displayName": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the container image.
* <p>
Example: `ocid1.containerimage.oc1..exampleuniqueID`
* 
    */
  "id": string;
  /**
   * Layers of which the image is composed, ordered by the layer digest.
   */
  "layers": Array<model.ContainerImageLayer>;
  /**
   * The total size of the container image layers in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "layersSizeInBytes": number;
  /**
   * The current state of the container image.
   */
  "lifecycleState": ContainerImage.LifecycleState;
  /**
   * The size of the container image manifest in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "manifestSizeInBytes": number;
  /**
   * Total number of pulls. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pullCount": number;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the container repository.
   */
  "repositoryId": string;
  /**
   * The container repository name.
   */
  "repositoryName": string;
  /**
   * An RFC 3339 timestamp indicating when the image was created.
   */
  "timeCreated": Date;
  /**
   * An RFC 3339 timestamp indicating when the image was last pulled.
   */
  "timeLastPulled"?: Date;
  /**
   * The most recent version associated with this image.
   */
  "version"?: string;
  /**
   * The versions associated with this image.
   */
  "versions": Array<model.ContainerVersion>;
}

export namespace ContainerImage {
  export enum LifecycleState {
    Available = "AVAILABLE",
    Deleted = "DELETED",
    Deleting = "DELETING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ContainerImage): object {
    const jsonObj = {
      ...obj,
      ...{
        "layers": obj.layers
          ? obj.layers.map(item => {
              return model.ContainerImageLayer.getJsonObj(item);
            })
          : undefined,

        "versions": obj.versions
          ? obj.versions.map(item => {
              return model.ContainerVersion.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerImage): object {
    const jsonObj = {
      ...obj,
      ...{
        "layers": obj.layers
          ? obj.layers.map(item => {
              return model.ContainerImageLayer.getDeserializedJsonObj(item);
            })
          : undefined,

        "versions": obj.versions
          ? obj.versions.map(item => {
              return model.ContainerVersion.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
