/**
 * Oracle Integration API
 * Oracle Integration API.
 * OpenAPI spec version: 20190131
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { IntegrationInstanceClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class IntegrationInstanceWaiter {
  public constructor(
    private client: IntegrationInstanceClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forIntegrationInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIntegrationInstanceResponse | null (null in case of 404 response)
   */
  public async forIntegrationInstance(
    request: serviceRequests.GetIntegrationInstanceRequest,
    ...targetStates: models.IntegrationInstance.LifecycleState[]
  ): Promise<serviceResponses.GetIntegrationInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIntegrationInstance(request),
      response => targetStates.includes(response.integrationInstance.lifecycleState!),
      targetStates.includes(models.IntegrationInstance.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
