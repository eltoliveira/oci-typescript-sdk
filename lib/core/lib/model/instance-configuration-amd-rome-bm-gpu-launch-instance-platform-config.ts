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
 * The platform configuration of a bare metal GPU instance that uses the BM.GPU4.8 shape
 * (the AMD Rome platform).
 *
 */
export interface InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig
  extends model.InstanceConfigurationLaunchInstancePlatformConfig {
  /**
   * The number of NUMA nodes per socket (NPS).
   *
   */
  "numaNodesPerSocket"?: InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig.NumaNodesPerSocket;
  /**
    * Whether symmetric multithreading is enabled on the instance. Symmetric multithreading is also
* called simultaneous multithreading (SMT) or Intel Hyper-Threading.
* <p>
Intel and AMD processors have two hardware execution threads per core (OCPU). SMT permits multiple
* independent threads of execution, to better use the resources and increase the efficiency
* of the CPU. When multithreading is disabled, only one thread is permitted to run on each core, which
* can provide higher or more predictable performance for some workloads.
* 
    */
  "isSymmetricMultiThreadingEnabled"?: boolean;
  /**
   * Whether the Access Control Service is enabled on the instance. When enabled,
   * the platform can enforce PCIe device isolation, required for VFIO device pass-through.
   *
   */
  "isAccessControlServiceEnabled"?: boolean;
  /**
   * Whether virtualization instructions are available. For example, Secure Virtual Machine for AMD shapes
   * or VT-x for Intel shapes.
   *
   */
  "areVirtualInstructionsEnabled"?: boolean;
  /**
   * Whether the input-output memory management unit is enabled.
   *
   */
  "isInputOutputMemoryManagementUnitEnabled"?: boolean;

  "type": string;
}

export namespace InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig {
  export enum NumaNodesPerSocket {
    Nps0 = "NPS0",
    Nps1 = "NPS1",
    Nps2 = "NPS2",
    Nps4 = "NPS4",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationLaunchInstancePlatformConfig.getJsonObj(
            obj
          ) as InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "AMD_ROME_BM_GPU";
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationLaunchInstancePlatformConfig.getDeserializedJsonObj(
            obj
          ) as InstanceConfigurationAmdRomeBmGpuLaunchInstancePlatformConfig)),
      ...{}
    };

    return jsonObj;
  }
}
