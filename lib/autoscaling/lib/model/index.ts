/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as Action from "./action";
export import Action = Action.Action;
import * as AutoScalingConfiguration from "./auto-scaling-configuration";
export import AutoScalingConfiguration = AutoScalingConfiguration.AutoScalingConfiguration;
import * as AutoScalingConfigurationSummary from "./auto-scaling-configuration-summary";
export import AutoScalingConfigurationSummary = AutoScalingConfigurationSummary.AutoScalingConfigurationSummary;
import * as AutoScalingPolicy from "./auto-scaling-policy";
export import AutoScalingPolicy = AutoScalingPolicy.AutoScalingPolicy;
import * as AutoScalingPolicySummary from "./auto-scaling-policy-summary";
export import AutoScalingPolicySummary = AutoScalingPolicySummary.AutoScalingPolicySummary;
import * as Capacity from "./capacity";
export import Capacity = Capacity.Capacity;
import * as ChangeAutoScalingCompartmentDetails from "./change-auto-scaling-compartment-details";
export import ChangeAutoScalingCompartmentDetails = ChangeAutoScalingCompartmentDetails.ChangeAutoScalingCompartmentDetails;
import * as Condition from "./condition";
export import Condition = Condition.Condition;
import * as CreateAutoScalingConfigurationDetails from "./create-auto-scaling-configuration-details";
export import CreateAutoScalingConfigurationDetails = CreateAutoScalingConfigurationDetails.CreateAutoScalingConfigurationDetails;
import * as CreateAutoScalingPolicyDetails from "./create-auto-scaling-policy-details";
export import CreateAutoScalingPolicyDetails = CreateAutoScalingPolicyDetails.CreateAutoScalingPolicyDetails;
import * as CreateConditionDetails from "./create-condition-details";
export import CreateConditionDetails = CreateConditionDetails.CreateConditionDetails;
import * as ExecutionSchedule from "./execution-schedule";
export import ExecutionSchedule = ExecutionSchedule.ExecutionSchedule;
import * as Metric from "./metric";
export import Metric = Metric.Metric;
import * as Resource from "./resource";
export import Resource = Resource.Resource;
import * as Threshold from "./threshold";
export import Threshold = Threshold.Threshold;
import * as UpdateAutoScalingConfigurationDetails from "./update-auto-scaling-configuration-details";
export import UpdateAutoScalingConfigurationDetails = UpdateAutoScalingConfigurationDetails.UpdateAutoScalingConfigurationDetails;
import * as UpdateAutoScalingPolicyDetails from "./update-auto-scaling-policy-details";
export import UpdateAutoScalingPolicyDetails = UpdateAutoScalingPolicyDetails.UpdateAutoScalingPolicyDetails;
import * as UpdateConditionDetails from "./update-condition-details";
export import UpdateConditionDetails = UpdateConditionDetails.UpdateConditionDetails;

import * as CreateScheduledPolicyDetails from "./create-scheduled-policy-details";
export import CreateScheduledPolicyDetails = CreateScheduledPolicyDetails.CreateScheduledPolicyDetails;
import * as CreateThresholdPolicyDetails from "./create-threshold-policy-details";
export import CreateThresholdPolicyDetails = CreateThresholdPolicyDetails.CreateThresholdPolicyDetails;
import * as CronExecutionSchedule from "./cron-execution-schedule";
export import CronExecutionSchedule = CronExecutionSchedule.CronExecutionSchedule;
import * as InstancePoolResource from "./instance-pool-resource";
export import InstancePoolResource = InstancePoolResource.InstancePoolResource;
import * as ScheduledPolicy from "./scheduled-policy";
export import ScheduledPolicy = ScheduledPolicy.ScheduledPolicy;
import * as ThresholdPolicy from "./threshold-policy";
export import ThresholdPolicy = ThresholdPolicy.ThresholdPolicy;
import * as UpdateScheduledPolicyDetails from "./update-scheduled-policy-details";
export import UpdateScheduledPolicyDetails = UpdateScheduledPolicyDetails.UpdateScheduledPolicyDetails;
import * as UpdateThresholdPolicyDetails from "./update-threshold-policy-details";
export import UpdateThresholdPolicyDetails = UpdateThresholdPolicyDetails.UpdateThresholdPolicyDetails;
