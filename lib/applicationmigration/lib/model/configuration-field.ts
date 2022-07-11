/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Provide configuration information about the application in the target environment. Application Migration migrates the application to
 * the target environment only after you provide this information. The information that you must provide varies depending on the type of
 * application that you are migrating.
 *
 */
export interface ConfigurationField {
  /**
   * The name of the configuration field.
   */
  "name"?: string;
  /**
   * The name of the group to which this field belongs, if any.
   */
  "group"?: string;
  /**
   * The type of the configuration field.
   */
  "type"?: string;
  /**
   * The value of the field.
   */
  "value"?: string;
  /**
   * Help text to guide the user in setting the configuration value.
   */
  "description"?: string;
  /**
   * A list of resources associated with a specific configuration object.
   *
   */
  "resourceList"?: Array<model.ResourceField>;
  /**
   * Indicates whether or not the field is required (defaults to `true`).
   *
   */
  "isRequired"?: boolean;
  /**
   * Indicates whether or not the field may be modified (defaults to `true`).
   *
   */
  "isMutable"?: boolean;
}

export namespace ConfigurationField {
  export function getJsonObj(obj: ConfigurationField): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceList": obj.resourceList
          ? obj.resourceList.map(item => {
              return model.ResourceField.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigurationField): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceList": obj.resourceList
          ? obj.resourceList.map(item => {
              return model.ResourceField.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
