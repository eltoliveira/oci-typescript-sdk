/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Represents the metadata of a MySQL Connection.
 *
 */
export interface MysqlConnection extends model.Connection {
  /**
   * The MySQL technology type.
   */
  "technologyType": MysqlConnection.TechnologyType;
  /**
   * The username Oracle GoldenGate uses to connect the associated system of the given technology.
   * This username must already exist and be available by the system/application to be connected to
   * and must conform to the case sensitivty requirments defined in it.
   *
   */
  "username": string;
  /**
   * The name or address of a host.
   *
   */
  "host"?: string;
  /**
   * The port of an endpoint usually specified for a connection.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The name of the database.
   *
   */
  "databaseName"?: string;
  /**
   * Security Protocol for MySQL.
   */
  "securityProtocol": MysqlConnection.SecurityProtocol;
  /**
   * SSL modes for MySQL.
   */
  "sslMode"?: MysqlConnection.SslMode;
  /**
   * The private IP address of the connection's endpoint in the customer's VCN, typically a
   * database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
   * In case the privateIp is provided, the subnetId must also be provided.
   * In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
   * In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
   *
   */
  "privateIp"?: string;
  /**
   * An array of name-value pair attribute entries.
   * Used as additional parameters in connection string.
   *
   */
  "additionalAttributes"?: Array<model.NameValuePair>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database system being referenced.
   *
   */
  "dbSystemId"?: string;

  "connectionType": string;
}

export namespace MysqlConnection {
  export enum TechnologyType {
    AmazonAuroraMysql = "AMAZON_AURORA_MYSQL",
    AmazonRdsMariadb = "AMAZON_RDS_MARIADB",
    AmazonRdsMysql = "AMAZON_RDS_MYSQL",
    AzureMysql = "AZURE_MYSQL",
    GoogleCloudSqlMysql = "GOOGLE_CLOUD_SQL_MYSQL",
    Mariadb = "MARIADB",
    MysqlServer = "MYSQL_SERVER",
    OciMysql = "OCI_MYSQL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SecurityProtocol {
    Plain = "PLAIN",
    Tls = "TLS",
    Mtls = "MTLS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SslMode {
    Disabled = "DISABLED",
    Preferred = "PREFERRED",
    Required = "REQUIRED",
    VerifyCa = "VERIFY_CA",
    VerifyIdentity = "VERIFY_IDENTITY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: MysqlConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as MysqlConnection)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "MYSQL";
  export function getDeserializedJsonObj(obj: MysqlConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as MysqlConnection)),
      ...{
        "additionalAttributes": obj.additionalAttributes
          ? obj.additionalAttributes.map(item => {
              return model.NameValuePair.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
