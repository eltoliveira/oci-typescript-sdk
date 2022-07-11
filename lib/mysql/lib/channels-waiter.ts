/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
import { ChannelsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ChannelsWaiter {
  public constructor(
    private client: ChannelsClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forChannel till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetChannelResponse | null (null in case of 404 response)
   */
  public async forChannel(
    request: serviceRequests.GetChannelRequest,
    ...targetStates: models.Channel.LifecycleState[]
  ): Promise<serviceResponses.GetChannelResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getChannel(request),
      response => targetStates.includes(response.channel.lifecycleState!),
      targetStates.includes(models.Channel.LifecycleState.Deleted)
    );
  }
}
