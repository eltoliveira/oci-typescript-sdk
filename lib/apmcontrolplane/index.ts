/**
 * Application Performance Monitoring Control Plane API
 * Use the Application Performance Monitoring Control Plane API to perform operations such as creating, updating,
deleting and listing APM domains and monitoring the progress of these operations using the work request APIs.

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as apmdomain_waiter from "./lib/apmdomain-waiter";

export { models };
export { requests };
export { responses };
export import ApmDomainClient = client.ApmDomainClient;
export import ApmDomainWaiter = apmdomain_waiter.ApmDomainWaiter;
