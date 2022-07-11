/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * The type of image analysis.
 */
export interface ImageFeature {
  "featureType": string;
}

export namespace ImageFeature {
  export function getJsonObj(obj: ImageFeature): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "featureType" in obj && obj.featureType) {
      switch (obj.featureType) {
        case "TEXT_DETECTION":
          return model.ImageTextDetectionFeature.getJsonObj(
            <model.ImageTextDetectionFeature>(<object>jsonObj),
            true
          );
        case "OBJECT_DETECTION":
          return model.ImageObjectDetectionFeature.getJsonObj(
            <model.ImageObjectDetectionFeature>(<object>jsonObj),
            true
          );
        case "IMAGE_CLASSIFICATION":
          return model.ImageClassificationFeature.getJsonObj(
            <model.ImageClassificationFeature>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.featureType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImageFeature): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "featureType" in obj && obj.featureType) {
      switch (obj.featureType) {
        case "TEXT_DETECTION":
          return model.ImageTextDetectionFeature.getDeserializedJsonObj(
            <model.ImageTextDetectionFeature>(<object>jsonObj),
            true
          );
        case "OBJECT_DETECTION":
          return model.ImageObjectDetectionFeature.getDeserializedJsonObj(
            <model.ImageObjectDetectionFeature>(<object>jsonObj),
            true
          );
        case "IMAGE_CLASSIFICATION":
          return model.ImageClassificationFeature.getDeserializedJsonObj(
            <model.ImageClassificationFeature>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.featureType);
      }
    }
    return jsonObj;
  }
}
