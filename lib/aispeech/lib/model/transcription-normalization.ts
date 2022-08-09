/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
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
 * Information to Normalize generated transcript.
 */
export interface TranscriptionNormalization {
  /**
   * Whether to add punctuation in the generated transcription. Enabled by default.
   */
  "isPunctuationEnabled"?: boolean;
  /**
   * List of filters.
   */
  "filters"?: Array<model.TranscriptionFilter>;
}

export namespace TranscriptionNormalization {
  export function getJsonObj(obj: TranscriptionNormalization): object {
    const jsonObj = {
      ...obj,
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.TranscriptionFilter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TranscriptionNormalization): object {
    const jsonObj = {
      ...obj,
      ...{
        "filters": obj.filters
          ? obj.filters.map(item => {
              return model.TranscriptionFilter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
