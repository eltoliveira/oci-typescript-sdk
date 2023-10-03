/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AdminCredentials from "./admin-credentials";
export import AdminCredentials = AdminCredentials.AdminCredentials;
import * as AdvisorReport from "./advisor-report";
export import AdvisorReport = AdvisorReport.AdvisorReport;
import * as AdvisorReportBucketDetails from "./advisor-report-bucket-details";
export import AdvisorReportBucketDetails = AdvisorReportBucketDetails.AdvisorReportBucketDetails;
import * as AdvisorReportLocationDetails from "./advisor-report-location-details";
export import AdvisorReportLocationDetails = AdvisorReportLocationDetails.AdvisorReportLocationDetails;
import * as AdvisorResults from "./advisor-results";
export import AdvisorResults = AdvisorResults.AdvisorResults;
import * as AdvisorSettings from "./advisor-settings";
export import AdvisorSettings = AdvisorSettings.AdvisorSettings;
import * as Agent from "./agent";
export import Agent = Agent.Agent;
import * as AgentCollection from "./agent-collection";
export import AgentCollection = AgentCollection.AgentCollection;
import * as AgentImageCollection from "./agent-image-collection";
export import AgentImageCollection = AgentImageCollection.AgentImageCollection;
import * as AgentImageSummary from "./agent-image-summary";
export import AgentImageSummary = AgentImageSummary.AgentImageSummary;
import * as AgentSummary from "./agent-summary";
export import AgentSummary = AgentSummary.AgentSummary;
import * as AwsS3Details from "./aws-s3-details";
export import AwsS3Details = AwsS3Details.AwsS3Details;
import * as ChangeAgentCompartmentDetails from "./change-agent-compartment-details";
export import ChangeAgentCompartmentDetails = ChangeAgentCompartmentDetails.ChangeAgentCompartmentDetails;
import * as ChangeConnectionCompartmentDetails from "./change-connection-compartment-details";
export import ChangeConnectionCompartmentDetails = ChangeConnectionCompartmentDetails.ChangeConnectionCompartmentDetails;
import * as ChangeMigrationCompartmentDetails from "./change-migration-compartment-details";
export import ChangeMigrationCompartmentDetails = ChangeMigrationCompartmentDetails.ChangeMigrationCompartmentDetails;
import * as CloneMigrationDetails from "./clone-migration-details";
export import CloneMigrationDetails = CloneMigrationDetails.CloneMigrationDetails;
import * as ConnectDescriptor from "./connect-descriptor";
export import ConnectDescriptor = ConnectDescriptor.ConnectDescriptor;
import * as Connection from "./connection";
export import Connection = Connection.Connection;
import * as ConnectionCollection from "./connection-collection";
export import ConnectionCollection = ConnectionCollection.ConnectionCollection;
import * as ConnectionSummary from "./connection-summary";
export import ConnectionSummary = ConnectionSummary.ConnectionSummary;
import * as CreateAdminCredentials from "./create-admin-credentials";
export import CreateAdminCredentials = CreateAdminCredentials.CreateAdminCredentials;
import * as CreateAdvisorSettings from "./create-advisor-settings";
export import CreateAdvisorSettings = CreateAdvisorSettings.CreateAdvisorSettings;
import * as CreateAwsS3Details from "./create-aws-s3-details";
export import CreateAwsS3Details = CreateAwsS3Details.CreateAwsS3Details;
import * as CreateConnectDescriptor from "./create-connect-descriptor";
export import CreateConnectDescriptor = CreateConnectDescriptor.CreateConnectDescriptor;
import * as CreateConnectionDetails from "./create-connection-details";
export import CreateConnectionDetails = CreateConnectionDetails.CreateConnectionDetails;
import * as CreateDataPumpParameters from "./create-data-pump-parameters";
export import CreateDataPumpParameters = CreateDataPumpParameters.CreateDataPumpParameters;
import * as CreateDataPumpSettings from "./create-data-pump-settings";
export import CreateDataPumpSettings = CreateDataPumpSettings.CreateDataPumpSettings;
import * as CreateDataTransferMediumDetails from "./create-data-transfer-medium-details";
export import CreateDataTransferMediumDetails = CreateDataTransferMediumDetails.CreateDataTransferMediumDetails;
import * as CreateDatabaseLinkDetails from "./create-database-link-details";
export import CreateDatabaseLinkDetails = CreateDatabaseLinkDetails.CreateDatabaseLinkDetails;
import * as CreateDirectoryObject from "./create-directory-object";
export import CreateDirectoryObject = CreateDirectoryObject.CreateDirectoryObject;
import * as CreateDumpTransferDetails from "./create-dump-transfer-details";
export import CreateDumpTransferDetails = CreateDumpTransferDetails.CreateDumpTransferDetails;
import * as CreateExtract from "./create-extract";
export import CreateExtract = CreateExtract.CreateExtract;
import * as CreateGoldenGateDetails from "./create-golden-gate-details";
export import CreateGoldenGateDetails = CreateGoldenGateDetails.CreateGoldenGateDetails;
import * as CreateGoldenGateHub from "./create-golden-gate-hub";
export import CreateGoldenGateHub = CreateGoldenGateHub.CreateGoldenGateHub;
import * as CreateGoldenGateServiceDetails from "./create-golden-gate-service-details";
export import CreateGoldenGateServiceDetails = CreateGoldenGateServiceDetails.CreateGoldenGateServiceDetails;
import * as CreateGoldenGateSettings from "./create-golden-gate-settings";
export import CreateGoldenGateSettings = CreateGoldenGateSettings.CreateGoldenGateSettings;
import * as CreateHostDumpTransferDetails from "./create-host-dump-transfer-details";
export import CreateHostDumpTransferDetails = CreateHostDumpTransferDetails.CreateHostDumpTransferDetails;
import * as CreateMigrationDetails from "./create-migration-details";
export import CreateMigrationDetails = CreateMigrationDetails.CreateMigrationDetails;
import * as CreateObjectStoreBucket from "./create-object-store-bucket";
export import CreateObjectStoreBucket = CreateObjectStoreBucket.CreateObjectStoreBucket;
import * as CreatePrivateEndpoint from "./create-private-endpoint";
export import CreatePrivateEndpoint = CreatePrivateEndpoint.CreatePrivateEndpoint;
import * as CreateReplicat from "./create-replicat";
export import CreateReplicat = CreateReplicat.CreateReplicat;
import * as CreateSshDetails from "./create-ssh-details";
export import CreateSshDetails = CreateSshDetails.CreateSshDetails;
import * as CreateTargetTypeTablespaceDetails from "./create-target-type-tablespace-details";
export import CreateTargetTypeTablespaceDetails = CreateTargetTypeTablespaceDetails.CreateTargetTypeTablespaceDetails;
import * as CreateVaultDetails from "./create-vault-details";
export import CreateVaultDetails = CreateVaultDetails.CreateVaultDetails;
import * as DataPumpEstimate from "./data-pump-estimate";
export import DataPumpEstimate = DataPumpEstimate.DataPumpEstimate;
import * as DataPumpExcludeParameters from "./data-pump-exclude-parameters";
export import DataPumpExcludeParameters = DataPumpExcludeParameters.DataPumpExcludeParameters;
import * as DataPumpJobMode from "./data-pump-job-mode";
export import DataPumpJobMode = DataPumpJobMode.DataPumpJobMode;
import * as DataPumpParameters from "./data-pump-parameters";
export import DataPumpParameters = DataPumpParameters.DataPumpParameters;
import * as DataPumpSettings from "./data-pump-settings";
export import DataPumpSettings = DataPumpSettings.DataPumpSettings;
import * as DataPumpTableExistsAction from "./data-pump-table-exists-action";
export import DataPumpTableExistsAction = DataPumpTableExistsAction.DataPumpTableExistsAction;
import * as DataPumpTablespaceBlockSizesInKb from "./data-pump-tablespace-block-sizes-in-kb";
export import DataPumpTablespaceBlockSizesInKb = DataPumpTablespaceBlockSizesInKb.DataPumpTablespaceBlockSizesInKb;
import * as DataTransferMediumDetails from "./data-transfer-medium-details";
export import DataTransferMediumDetails = DataTransferMediumDetails.DataTransferMediumDetails;
import * as DataTransferMediumDetailsV2 from "./data-transfer-medium-details-v2";
export import DataTransferMediumDetailsV2 = DataTransferMediumDetailsV2.DataTransferMediumDetailsV2;
import * as DatabaseConnectionTypes from "./database-connection-types";
export import DatabaseConnectionTypes = DatabaseConnectionTypes.DatabaseConnectionTypes;
import * as DatabaseCredentials from "./database-credentials";
export import DatabaseCredentials = DatabaseCredentials.DatabaseCredentials;
import * as DatabaseLinkDetails from "./database-link-details";
export import DatabaseLinkDetails = DatabaseLinkDetails.DatabaseLinkDetails;
import * as DatabaseManualConnectionSubTypes from "./database-manual-connection-sub-types";
export import DatabaseManualConnectionSubTypes = DatabaseManualConnectionSubTypes.DatabaseManualConnectionSubTypes;
import * as DatabaseObject from "./database-object";
export import DatabaseObject = DatabaseObject.DatabaseObject;
import * as DiagnosticsResult from "./diagnostics-result";
export import DiagnosticsResult = DiagnosticsResult.DiagnosticsResult;
import * as DirectoryObject from "./directory-object";
export import DirectoryObject = DirectoryObject.DirectoryObject;
import * as DumpTransferDetails from "./dump-transfer-details";
export import DumpTransferDetails = DumpTransferDetails.DumpTransferDetails;
import * as ExcludedObjectSummary from "./excluded-object-summary";
export import ExcludedObjectSummary = ExcludedObjectSummary.ExcludedObjectSummary;
import * as ExcludedObjectSummaryCollection from "./excluded-object-summary-collection";
export import ExcludedObjectSummaryCollection = ExcludedObjectSummaryCollection.ExcludedObjectSummaryCollection;
import * as Extract from "./extract";
export import Extract = Extract.Extract;
import * as ExtractPerformanceProfile from "./extract-performance-profile";
export import ExtractPerformanceProfile = ExtractPerformanceProfile.ExtractPerformanceProfile;
import * as GgsDeployment from "./ggs-deployment";
export import GgsDeployment = GgsDeployment.GgsDeployment;
import * as GoldenGateDetails from "./golden-gate-details";
export import GoldenGateDetails = GoldenGateDetails.GoldenGateDetails;
import * as GoldenGateHub from "./golden-gate-hub";
export import GoldenGateHub = GoldenGateHub.GoldenGateHub;
import * as GoldenGateServiceDetails from "./golden-gate-service-details";
export import GoldenGateServiceDetails = GoldenGateServiceDetails.GoldenGateServiceDetails;
import * as GoldenGateSettings from "./golden-gate-settings";
export import GoldenGateSettings = GoldenGateSettings.GoldenGateSettings;
import * as HostDumpTransferDetails from "./host-dump-transfer-details";
export import HostDumpTransferDetails = HostDumpTransferDetails.HostDumpTransferDetails;
import * as Job from "./job";
export import Job = Job.Job;
import * as JobCollection from "./job-collection";
export import JobCollection = JobCollection.JobCollection;
import * as JobLifecycleStates from "./job-lifecycle-states";
export import JobLifecycleStates = JobLifecycleStates.JobLifecycleStates;
import * as JobOutputSummary from "./job-output-summary";
export import JobOutputSummary = JobOutputSummary.JobOutputSummary;
import * as JobOutputSummaryCollection from "./job-output-summary-collection";
export import JobOutputSummaryCollection = JobOutputSummaryCollection.JobOutputSummaryCollection;
import * as JobPhaseStatus from "./job-phase-status";
export import JobPhaseStatus = JobPhaseStatus.JobPhaseStatus;
import * as JobSummary from "./job-summary";
export import JobSummary = JobSummary.JobSummary;
import * as JobTypes from "./job-types";
export import JobTypes = JobTypes.JobTypes;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as LogLocationBucketDetails from "./log-location-bucket-details";
export import LogLocationBucketDetails = LogLocationBucketDetails.LogLocationBucketDetails;
import * as MetadataRemap from "./metadata-remap";
export import MetadataRemap = MetadataRemap.MetadataRemap;
import * as Migration from "./migration";
export import Migration = Migration.Migration;
import * as MigrationCollection from "./migration-collection";
export import MigrationCollection = MigrationCollection.MigrationCollection;
import * as MigrationDatabaseTargetTypes from "./migration-database-target-types";
export import MigrationDatabaseTargetTypes = MigrationDatabaseTargetTypes.MigrationDatabaseTargetTypes;
import * as MigrationDatabaseTargetTypesUpdate from "./migration-database-target-types-update";
export import MigrationDatabaseTargetTypesUpdate = MigrationDatabaseTargetTypesUpdate.MigrationDatabaseTargetTypesUpdate;
import * as MigrationJobProgressResource from "./migration-job-progress-resource";
export import MigrationJobProgressResource = MigrationJobProgressResource.MigrationJobProgressResource;
import * as MigrationJobProgressSummary from "./migration-job-progress-summary";
export import MigrationJobProgressSummary = MigrationJobProgressSummary.MigrationJobProgressSummary;
import * as MigrationLifecycleStates from "./migration-lifecycle-states";
export import MigrationLifecycleStates = MigrationLifecycleStates.MigrationLifecycleStates;
import * as MigrationObjectCollection from "./migration-object-collection";
export import MigrationObjectCollection = MigrationObjectCollection.MigrationObjectCollection;
import * as MigrationObjectSummary from "./migration-object-summary";
export import MigrationObjectSummary = MigrationObjectSummary.MigrationObjectSummary;
import * as MigrationObjectTypeSummary from "./migration-object-type-summary";
export import MigrationObjectTypeSummary = MigrationObjectTypeSummary.MigrationObjectTypeSummary;
import * as MigrationObjectTypeSummaryCollection from "./migration-object-type-summary-collection";
export import MigrationObjectTypeSummaryCollection = MigrationObjectTypeSummaryCollection.MigrationObjectTypeSummaryCollection;
import * as MigrationPhaseCollection from "./migration-phase-collection";
export import MigrationPhaseCollection = MigrationPhaseCollection.MigrationPhaseCollection;
import * as MigrationPhaseSummary from "./migration-phase-summary";
export import MigrationPhaseSummary = MigrationPhaseSummary.MigrationPhaseSummary;
import * as MigrationStatus from "./migration-status";
export import MigrationStatus = MigrationStatus.MigrationStatus;
import * as MigrationSummary from "./migration-summary";
export import MigrationSummary = MigrationSummary.MigrationSummary;
import * as MigrationTypes from "./migration-types";
export import MigrationTypes = MigrationTypes.MigrationTypes;
import * as ObjectStatus from "./object-status";
export import ObjectStatus = ObjectStatus.ObjectStatus;
import * as ObjectStoreBucket from "./object-store-bucket";
export import ObjectStoreBucket = ObjectStoreBucket.ObjectStoreBucket;
import * as OdmsJobPhases from "./odms-job-phases";
export import OdmsJobPhases = OdmsJobPhases.OdmsJobPhases;
import * as OdmsPhaseActions from "./odms-phase-actions";
export import OdmsPhaseActions = OdmsPhaseActions.OdmsPhaseActions;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as PhaseExtractEntry from "./phase-extract-entry";
export import PhaseExtractEntry = PhaseExtractEntry.PhaseExtractEntry;
import * as PhaseExtractTypes from "./phase-extract-types";
export import PhaseExtractTypes = PhaseExtractTypes.PhaseExtractTypes;
import * as PhaseStatus from "./phase-status";
export import PhaseStatus = PhaseStatus.PhaseStatus;
import * as PrivateEndpointDetails from "./private-endpoint-details";
export import PrivateEndpointDetails = PrivateEndpointDetails.PrivateEndpointDetails;
import * as ReasonKeywords from "./reason-keywords";
export import ReasonKeywords = ReasonKeywords.ReasonKeywords;
import * as Replicat from "./replicat";
export import Replicat = Replicat.Replicat;
import * as ReplicatPerformanceProfile from "./replicat-performance-profile";
export import ReplicatPerformanceProfile = ReplicatPerformanceProfile.ReplicatPerformanceProfile;
import * as ResultError from "./result-error";
export import ResultError = ResultError.ResultError;
import * as ResultType from "./result-type";
export import ResultType = ResultType.ResultType;
import * as ResumeJobDetails from "./resume-job-details";
export import ResumeJobDetails = ResumeJobDetails.ResumeJobDetails;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as SshDetails from "./ssh-details";
export import SshDetails = SshDetails.SshDetails;
import * as StartMigrationDetails from "./start-migration-details";
export import StartMigrationDetails = StartMigrationDetails.StartMigrationDetails;
import * as TargetTypeTablespaceDetails from "./target-type-tablespace-details";
export import TargetTypeTablespaceDetails = TargetTypeTablespaceDetails.TargetTypeTablespaceDetails;
import * as UnsupportedDatabaseObject from "./unsupported-database-object";
export import UnsupportedDatabaseObject = UnsupportedDatabaseObject.UnsupportedDatabaseObject;
import * as UpdateAdminCredentials from "./update-admin-credentials";
export import UpdateAdminCredentials = UpdateAdminCredentials.UpdateAdminCredentials;
import * as UpdateAdvisorSettings from "./update-advisor-settings";
export import UpdateAdvisorSettings = UpdateAdvisorSettings.UpdateAdvisorSettings;
import * as UpdateAgentDetails from "./update-agent-details";
export import UpdateAgentDetails = UpdateAgentDetails.UpdateAgentDetails;
import * as UpdateAwsS3Details from "./update-aws-s3-details";
export import UpdateAwsS3Details = UpdateAwsS3Details.UpdateAwsS3Details;
import * as UpdateConnectDescriptor from "./update-connect-descriptor";
export import UpdateConnectDescriptor = UpdateConnectDescriptor.UpdateConnectDescriptor;
import * as UpdateConnectionDetails from "./update-connection-details";
export import UpdateConnectionDetails = UpdateConnectionDetails.UpdateConnectionDetails;
import * as UpdateDataPumpParameters from "./update-data-pump-parameters";
export import UpdateDataPumpParameters = UpdateDataPumpParameters.UpdateDataPumpParameters;
import * as UpdateDataPumpSettings from "./update-data-pump-settings";
export import UpdateDataPumpSettings = UpdateDataPumpSettings.UpdateDataPumpSettings;
import * as UpdateDataTransferMediumDetails from "./update-data-transfer-medium-details";
export import UpdateDataTransferMediumDetails = UpdateDataTransferMediumDetails.UpdateDataTransferMediumDetails;
import * as UpdateDatabaseLinkDetails from "./update-database-link-details";
export import UpdateDatabaseLinkDetails = UpdateDatabaseLinkDetails.UpdateDatabaseLinkDetails;
import * as UpdateDirectoryObject from "./update-directory-object";
export import UpdateDirectoryObject = UpdateDirectoryObject.UpdateDirectoryObject;
import * as UpdateDumpTransferDetails from "./update-dump-transfer-details";
export import UpdateDumpTransferDetails = UpdateDumpTransferDetails.UpdateDumpTransferDetails;
import * as UpdateExtract from "./update-extract";
export import UpdateExtract = UpdateExtract.UpdateExtract;
import * as UpdateGoldenGateDetails from "./update-golden-gate-details";
export import UpdateGoldenGateDetails = UpdateGoldenGateDetails.UpdateGoldenGateDetails;
import * as UpdateGoldenGateHub from "./update-golden-gate-hub";
export import UpdateGoldenGateHub = UpdateGoldenGateHub.UpdateGoldenGateHub;
import * as UpdateGoldenGateServiceDetails from "./update-golden-gate-service-details";
export import UpdateGoldenGateServiceDetails = UpdateGoldenGateServiceDetails.UpdateGoldenGateServiceDetails;
import * as UpdateGoldenGateSettings from "./update-golden-gate-settings";
export import UpdateGoldenGateSettings = UpdateGoldenGateSettings.UpdateGoldenGateSettings;
import * as UpdateHostDumpTransferDetails from "./update-host-dump-transfer-details";
export import UpdateHostDumpTransferDetails = UpdateHostDumpTransferDetails.UpdateHostDumpTransferDetails;
import * as UpdateJobDetails from "./update-job-details";
export import UpdateJobDetails = UpdateJobDetails.UpdateJobDetails;
import * as UpdateMigrationDetails from "./update-migration-details";
export import UpdateMigrationDetails = UpdateMigrationDetails.UpdateMigrationDetails;
import * as UpdateObjectStoreBucket from "./update-object-store-bucket";
export import UpdateObjectStoreBucket = UpdateObjectStoreBucket.UpdateObjectStoreBucket;
import * as UpdatePrivateEndpoint from "./update-private-endpoint";
export import UpdatePrivateEndpoint = UpdatePrivateEndpoint.UpdatePrivateEndpoint;
import * as UpdateReplicat from "./update-replicat";
export import UpdateReplicat = UpdateReplicat.UpdateReplicat;
import * as UpdateSshDetails from "./update-ssh-details";
export import UpdateSshDetails = UpdateSshDetails.UpdateSshDetails;
import * as UpdateTargetTypeTablespaceDetails from "./update-target-type-tablespace-details";
export import UpdateTargetTypeTablespaceDetails = UpdateTargetTypeTablespaceDetails.UpdateTargetTypeTablespaceDetails;
import * as UpdateVaultDetails from "./update-vault-details";
export import UpdateVaultDetails = UpdateVaultDetails.UpdateVaultDetails;
import * as VaultDetails from "./vault-details";
export import VaultDetails = VaultDetails.VaultDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as ADBDedicatedAutoCreateTablespaceDetails from "./a-db-dedicated-auto-create-tablespace-details";
export import ADBDedicatedAutoCreateTablespaceDetails = ADBDedicatedAutoCreateTablespaceDetails.ADBDedicatedAutoCreateTablespaceDetails;
import * as ADBDedicatedRemapTargetTablespaceDetails from "./a-db-dedicated-remap-target-tablespace-details";
export import ADBDedicatedRemapTargetTablespaceDetails = ADBDedicatedRemapTargetTablespaceDetails.ADBDedicatedRemapTargetTablespaceDetails;
import * as ADBServerlesTablespaceDetails from "./a-db-serverles-tablespace-details";
export import ADBServerlesTablespaceDetails = ADBServerlesTablespaceDetails.ADBServerlesTablespaceDetails;
import * as AwsS3DataTransferMediumDetails from "./aws-s3-data-transfer-medium-details";
export import AwsS3DataTransferMediumDetails = AwsS3DataTransferMediumDetails.AwsS3DataTransferMediumDetails;
import * as CreateADBDedicatedAutoCreateTablespaceDetails from "./create-ad-bdedicated-auto-create-tablespace-details";
export import CreateADBDedicatedAutoCreateTablespaceDetails = CreateADBDedicatedAutoCreateTablespaceDetails.CreateADBDedicatedAutoCreateTablespaceDetails;
import * as CreateADBDedicatedRemapTargetTablespaceDetails from "./create-ad-bdedicated-remap-target-tablespace-details";
export import CreateADBDedicatedRemapTargetTablespaceDetails = CreateADBDedicatedRemapTargetTablespaceDetails.CreateADBDedicatedRemapTargetTablespaceDetails;
import * as CreateADBServerlesTablespaceDetails from "./create-ad-bserverles-tablespace-details";
export import CreateADBServerlesTablespaceDetails = CreateADBServerlesTablespaceDetails.CreateADBServerlesTablespaceDetails;
import * as CreateCurlTransferDetails from "./create-curl-transfer-details";
export import CreateCurlTransferDetails = CreateCurlTransferDetails.CreateCurlTransferDetails;
import * as CreateNonADBAutoCreateTablespaceDetails from "./create-non-ad-bauto-create-tablespace-details";
export import CreateNonADBAutoCreateTablespaceDetails = CreateNonADBAutoCreateTablespaceDetails.CreateNonADBAutoCreateTablespaceDetails;
import * as CreateNonADBRemapTablespaceDetails from "./create-non-ad-bremap-tablespace-details";
export import CreateNonADBRemapTablespaceDetails = CreateNonADBRemapTablespaceDetails.CreateNonADBRemapTablespaceDetails;
import * as CreateOciCliDumpTransferDetails from "./create-oci-cli-dump-transfer-details";
export import CreateOciCliDumpTransferDetails = CreateOciCliDumpTransferDetails.CreateOciCliDumpTransferDetails;
import * as CurlTransferDetails from "./curl-transfer-details";
export import CurlTransferDetails = CurlTransferDetails.CurlTransferDetails;
import * as DbLinkDataTransferMediumDetails from "./db-link-data-transfer-medium-details";
export import DbLinkDataTransferMediumDetails = DbLinkDataTransferMediumDetails.DbLinkDataTransferMediumDetails;
import * as NfsDataTransferMediumDetails from "./nfs-data-transfer-medium-details";
export import NfsDataTransferMediumDetails = NfsDataTransferMediumDetails.NfsDataTransferMediumDetails;
import * as NonADBAutoCreateTablespaceDetails from "./non-ad-bauto-create-tablespace-details";
export import NonADBAutoCreateTablespaceDetails = NonADBAutoCreateTablespaceDetails.NonADBAutoCreateTablespaceDetails;
import * as NonADBRemapTablespaceDetails from "./non-ad-bremap-tablespace-details";
export import NonADBRemapTablespaceDetails = NonADBRemapTablespaceDetails.NonADBRemapTablespaceDetails;
import * as ObjectStorageDataTransferMediumDetails from "./object-storage-data-transfer-medium-details";
export import ObjectStorageDataTransferMediumDetails = ObjectStorageDataTransferMediumDetails.ObjectStorageDataTransferMediumDetails;
import * as OciCliDumpTransferDetails from "./oci-cli-dump-transfer-details";
export import OciCliDumpTransferDetails = OciCliDumpTransferDetails.OciCliDumpTransferDetails;
import * as UpdateADBDedicatedAutoCreateTablespaceDetails from "./update-ad-bdedicated-auto-create-tablespace-details";
export import UpdateADBDedicatedAutoCreateTablespaceDetails = UpdateADBDedicatedAutoCreateTablespaceDetails.UpdateADBDedicatedAutoCreateTablespaceDetails;
import * as UpdateADBDedicatedRemapTargetTablespaceDetails from "./update-ad-bdedicated-remap-target-tablespace-details";
export import UpdateADBDedicatedRemapTargetTablespaceDetails = UpdateADBDedicatedRemapTargetTablespaceDetails.UpdateADBDedicatedRemapTargetTablespaceDetails;
import * as UpdateADBServerlesTablespaceDetails from "./update-ad-bserverles-tablespace-details";
export import UpdateADBServerlesTablespaceDetails = UpdateADBServerlesTablespaceDetails.UpdateADBServerlesTablespaceDetails;
import * as UpdateCurlTransferDetails from "./update-curl-transfer-details";
export import UpdateCurlTransferDetails = UpdateCurlTransferDetails.UpdateCurlTransferDetails;
import * as UpdateNonADBAutoCreateTablespaceDetails from "./update-non-ad-bauto-create-tablespace-details";
export import UpdateNonADBAutoCreateTablespaceDetails = UpdateNonADBAutoCreateTablespaceDetails.UpdateNonADBAutoCreateTablespaceDetails;
import * as UpdateNonADBRemapTablespaceDetails from "./update-non-ad-bremap-tablespace-details";
export import UpdateNonADBRemapTablespaceDetails = UpdateNonADBRemapTablespaceDetails.UpdateNonADBRemapTablespaceDetails;
import * as UpdateOciCliDumpTransferDetails from "./update-oci-cli-dump-transfer-details";
export import UpdateOciCliDumpTransferDetails = UpdateOciCliDumpTransferDetails.UpdateOciCliDumpTransferDetails;
import * as UpdateTargetDefaultsAutoCreateTablespaceDetails from "./update-target-defaults-auto-create-tablespace-details";
export import UpdateTargetDefaultsAutoCreateTablespaceDetails = UpdateTargetDefaultsAutoCreateTablespaceDetails.UpdateTargetDefaultsAutoCreateTablespaceDetails;
import * as UpdateTargetDefaultsRemapTablespaceDetails from "./update-target-defaults-remap-tablespace-details";
export import UpdateTargetDefaultsRemapTablespaceDetails = UpdateTargetDefaultsRemapTablespaceDetails.UpdateTargetDefaultsRemapTablespaceDetails;
