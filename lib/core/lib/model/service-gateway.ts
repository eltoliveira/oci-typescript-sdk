/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
* Represents a router that lets your VCN privately access specific Oracle services such as Object
* Storage without exposing the VCN to the public internet. Traffic leaving the VCN and destined
* for a supported Oracle service (see {@link #listServices(ListServicesRequest) listServices}) is
* routed through the service gateway and does not traverse the internet. The instances in the VCN
* do not need to have public IP addresses nor be in a public subnet. The VCN does not need an internet gateway
* for this traffic. For more information, see
* [Access to Oracle Services: Service Gateway](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/servicegateway.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface ServiceGateway {
  /**
    * Whether the service gateway blocks all traffic through it. The default is `false`. When
* this is `true`, traffic is not routed to any services, regardless of route rules.
* <p>
Example: `true`
* 
    */
  "blockTraffic": boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the
   * service gateway.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the service gateway.
   *
   */
  "id": string;
  /**
   * The service gateway's current state.
   */
  "lifecycleState": ServiceGateway.LifecycleState;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table the service gateway is using.
   * For information about why you would associate a route table with a service gateway, see
   * [Transit Routing: Private Access to Oracle Services](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm).
   *
   */
  "routeTableId"?: string;
  /**
   * List of the {@link Service} objects enabled for this service gateway.
   * The list can be empty. You can enable a particular `Service` by using
   * {@link #attachServiceId(AttachServiceIdRequest) attachServiceId} or
   * {@link #updateServiceGateway(UpdateServiceGatewayRequest) updateServiceGateway}.
   *
   */
  "services": Array<model.ServiceIdResponseDetails>;
  /**
    * The date and time the service gateway was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN the service gateway
   * belongs to.
   *
   */
  "vcnId": string;
}

export namespace ServiceGateway {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ServiceGateway): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdResponseDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceGateway): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdResponseDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
