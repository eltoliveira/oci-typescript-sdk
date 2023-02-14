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
 * Options for tuning the compatibility and performance of VM shapes. The values that you specify override any
 * default values.
 *
 */
export interface InstanceConfigurationLaunchOptions {
  /**
   * Emulation type for the boot volume.
   * * `ISCSI` - ISCSI attached block storage device.
   * * `SCSI` - Emulated SCSI disk.
   * * `IDE` - Emulated IDE disk.
   * * `VFIO` - Direct attached Virtual Function storage. This is the default option for local data
   * volumes on platform images.
   * * `PARAVIRTUALIZED` - Paravirtualized disk. This is the default for boot volumes and remote block
   * storage volumes on platform images.
   *
   */
  "bootVolumeType"?: InstanceConfigurationLaunchOptions.BootVolumeType;
  /**
   * Firmware used to boot VM. Select the option that matches your operating system.
   * * `BIOS` - Boot VM using BIOS style firmware. This is compatible with both 32 bit and 64 bit operating
   * systems that boot using MBR style bootloaders.
   * * `UEFI_64` - Boot VM using UEFI style firmware compatible with 64 bit operating systems. This is the
   * default for platform images.
   *
   */
  "firmware"?: InstanceConfigurationLaunchOptions.Firmware;
  /**
   * Emulation type for the physical network interface card (NIC).
   * * `E1000` - Emulated Gigabit ethernet controller. Compatible with Linux e1000 network driver.
   * * `VFIO` - Direct attached Virtual Function network controller. This is the networking type
   * when you launch an instance using hardware-assisted (SR-IOV) networking.
   * * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers.
   *
   */
  "networkType"?: InstanceConfigurationLaunchOptions.NetworkType;
  /**
   * Emulation type for volume.
   * * `ISCSI` - ISCSI attached block storage device.
   * * `SCSI` - Emulated SCSI disk.
   * * `IDE` - Emulated IDE disk.
   * * `VFIO` - Direct attached Virtual Function storage. This is the default option for local data
   * volumes on platform images.
   * * `PARAVIRTUALIZED` - Paravirtualized disk. This is the default for boot volumes and remote block
   * storage volumes on platform images.
   *
   */
  "remoteDataVolumeType"?: InstanceConfigurationLaunchOptions.RemoteDataVolumeType;
  /**
   * Deprecated. Instead use `isPvEncryptionInTransitEnabled` in
   * {@link #instanceConfigurationLaunchInstanceDetails(InstanceConfigurationLaunchInstanceDetailsRequest) instanceConfigurationLaunchInstanceDetails}.
   *
   */
  "isPvEncryptionInTransitEnabled"?: boolean;
  /**
   * Whether to enable consistent volume naming feature. Defaults to false.
   */
  "isConsistentVolumeNamingEnabled"?: boolean;
}

export namespace InstanceConfigurationLaunchOptions {
  export enum BootVolumeType {
    Iscsi = "ISCSI",
    Scsi = "SCSI",
    Ide = "IDE",
    Vfio = "VFIO",
    Paravirtualized = "PARAVIRTUALIZED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Firmware {
    Bios = "BIOS",
    Uefi64 = "UEFI_64",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum NetworkType {
    E1000 = "E1000",
    Vfio = "VFIO",
    Paravirtualized = "PARAVIRTUALIZED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RemoteDataVolumeType {
    Iscsi = "ISCSI",
    Scsi = "SCSI",
    Ide = "IDE",
    Vfio = "VFIO",
    Paravirtualized = "PARAVIRTUALIZED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceConfigurationLaunchOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfigurationLaunchOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
