/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeEndpointCompartmentResponse from "./change-endpoint-compartment-response";
export import ChangeEndpointCompartmentResponse = ChangeEndpointCompartmentResponse.ChangeEndpointCompartmentResponse;
import * as ChangeRegistryCompartmentResponse from "./change-registry-compartment-response";
export import ChangeRegistryCompartmentResponse = ChangeRegistryCompartmentResponse.ChangeRegistryCompartmentResponse;
import * as CreateAttachDataAssetResponse from "./create-attach-data-asset-response";
export import CreateAttachDataAssetResponse = CreateAttachDataAssetResponse.CreateAttachDataAssetResponse;
import * as CreateConnectionResponse from "./create-connection-response";
export import CreateConnectionResponse = CreateConnectionResponse.CreateConnectionResponse;
import * as CreateConnectionValidationResponse from "./create-connection-validation-response";
export import CreateConnectionValidationResponse = CreateConnectionValidationResponse.CreateConnectionValidationResponse;
import * as CreateConnectivityValidationResponse from "./create-connectivity-validation-response";
export import CreateConnectivityValidationResponse = CreateConnectivityValidationResponse.CreateConnectivityValidationResponse;
import * as CreateDataAssetResponse from "./create-data-asset-response";
export import CreateDataAssetResponse = CreateDataAssetResponse.CreateDataAssetResponse;
import * as CreateDataPreviewResponse from "./create-data-preview-response";
export import CreateDataPreviewResponse = CreateDataPreviewResponse.CreateDataPreviewResponse;
import * as CreateDataProfileResponse from "./create-data-profile-response";
export import CreateDataProfileResponse = CreateDataProfileResponse.CreateDataProfileResponse;
import * as CreateDeReferenceArtifactResponse from "./create-de-reference-artifact-response";
export import CreateDeReferenceArtifactResponse = CreateDeReferenceArtifactResponse.CreateDeReferenceArtifactResponse;
import * as CreateDetachDataAssetResponse from "./create-detach-data-asset-response";
export import CreateDetachDataAssetResponse = CreateDetachDataAssetResponse.CreateDetachDataAssetResponse;
import * as CreateEndpointResponse from "./create-endpoint-response";
export import CreateEndpointResponse = CreateEndpointResponse.CreateEndpointResponse;
import * as CreateEntityShapeResponse from "./create-entity-shape-response";
export import CreateEntityShapeResponse = CreateEntityShapeResponse.CreateEntityShapeResponse;
import * as CreateExecuteOperationJobResponse from "./create-execute-operation-job-response";
export import CreateExecuteOperationJobResponse = CreateExecuteOperationJobResponse.CreateExecuteOperationJobResponse;
import * as CreateFolderResponse from "./create-folder-response";
export import CreateFolderResponse = CreateFolderResponse.CreateFolderResponse;
import * as CreateFullPushDownTaskResponse from "./create-full-push-down-task-response";
export import CreateFullPushDownTaskResponse = CreateFullPushDownTaskResponse.CreateFullPushDownTaskResponse;
import * as CreateReferenceArtifactResponse from "./create-reference-artifact-response";
export import CreateReferenceArtifactResponse = CreateReferenceArtifactResponse.CreateReferenceArtifactResponse;
import * as CreateRegistryResponse from "./create-registry-response";
export import CreateRegistryResponse = CreateRegistryResponse.CreateRegistryResponse;
import * as CreateTestNetworkConnectivityResponse from "./create-test-network-connectivity-response";
export import CreateTestNetworkConnectivityResponse = CreateTestNetworkConnectivityResponse.CreateTestNetworkConnectivityResponse;
import * as DeleteConnectionResponse from "./delete-connection-response";
export import DeleteConnectionResponse = DeleteConnectionResponse.DeleteConnectionResponse;
import * as DeleteDataAssetResponse from "./delete-data-asset-response";
export import DeleteDataAssetResponse = DeleteDataAssetResponse.DeleteDataAssetResponse;
import * as DeleteEndpointResponse from "./delete-endpoint-response";
export import DeleteEndpointResponse = DeleteEndpointResponse.DeleteEndpointResponse;
import * as DeleteFolderResponse from "./delete-folder-response";
export import DeleteFolderResponse = DeleteFolderResponse.DeleteFolderResponse;
import * as DeleteNetworkConnectivityStatusResponse from "./delete-network-connectivity-status-response";
export import DeleteNetworkConnectivityStatusResponse = DeleteNetworkConnectivityStatusResponse.DeleteNetworkConnectivityStatusResponse;
import * as DeleteRegistryResponse from "./delete-registry-response";
export import DeleteRegistryResponse = DeleteRegistryResponse.DeleteRegistryResponse;
import * as DeriveEntitiesResponse from "./derive-entities-response";
export import DeriveEntitiesResponse = DeriveEntitiesResponse.DeriveEntitiesResponse;
import * as GetConnectionResponse from "./get-connection-response";
export import GetConnectionResponse = GetConnectionResponse.GetConnectionResponse;
import * as GetDataAssetResponse from "./get-data-asset-response";
export import GetDataAssetResponse = GetDataAssetResponse.GetDataAssetResponse;
import * as GetDataEntityResponse from "./get-data-entity-response";
export import GetDataEntityResponse = GetDataEntityResponse.GetDataEntityResponse;
import * as GetEndpointResponse from "./get-endpoint-response";
export import GetEndpointResponse = GetEndpointResponse.GetEndpointResponse;
import * as GetEngineConfigurationsResponse from "./get-engine-configurations-response";
export import GetEngineConfigurationsResponse = GetEngineConfigurationsResponse.GetEngineConfigurationsResponse;
import * as GetExecuteOperationJobResponse from "./get-execute-operation-job-response";
export import GetExecuteOperationJobResponse = GetExecuteOperationJobResponse.GetExecuteOperationJobResponse;
import * as GetFolderResponse from "./get-folder-response";
export import GetFolderResponse = GetFolderResponse.GetFolderResponse;
import * as GetNetworkConnectivityStatusResponse from "./get-network-connectivity-status-response";
export import GetNetworkConnectivityStatusResponse = GetNetworkConnectivityStatusResponse.GetNetworkConnectivityStatusResponse;
import * as GetOperationResponse from "./get-operation-response";
export import GetOperationResponse = GetOperationResponse.GetOperationResponse;
import * as GetRegistryResponse from "./get-registry-response";
export import GetRegistryResponse = GetRegistryResponse.GetRegistryResponse;
import * as GetSchemaResponse from "./get-schema-response";
export import GetSchemaResponse = GetSchemaResponse.GetSchemaResponse;
import * as GetTypeResponse from "./get-type-response";
export import GetTypeResponse = GetTypeResponse.GetTypeResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListConnectionsResponse from "./list-connections-response";
export import ListConnectionsResponse = ListConnectionsResponse.ListConnectionsResponse;
import * as ListDataAssetsResponse from "./list-data-assets-response";
export import ListDataAssetsResponse = ListDataAssetsResponse.ListDataAssetsResponse;
import * as ListDataEntitiesResponse from "./list-data-entities-response";
export import ListDataEntitiesResponse = ListDataEntitiesResponse.ListDataEntitiesResponse;
import * as ListEndpointsResponse from "./list-endpoints-response";
export import ListEndpointsResponse = ListEndpointsResponse.ListEndpointsResponse;
import * as ListFoldersResponse from "./list-folders-response";
export import ListFoldersResponse = ListFoldersResponse.ListFoldersResponse;
import * as ListOperationsResponse from "./list-operations-response";
export import ListOperationsResponse = ListOperationsResponse.ListOperationsResponse;
import * as ListReferenceArtifactsResponse from "./list-reference-artifacts-response";
export import ListReferenceArtifactsResponse = ListReferenceArtifactsResponse.ListReferenceArtifactsResponse;
import * as ListRegistriesResponse from "./list-registries-response";
export import ListRegistriesResponse = ListRegistriesResponse.ListRegistriesResponse;
import * as ListSchemasResponse from "./list-schemas-response";
export import ListSchemasResponse = ListSchemasResponse.ListSchemasResponse;
import * as ListTypesResponse from "./list-types-response";
export import ListTypesResponse = ListTypesResponse.ListTypesResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
import * as UpdateConnectionResponse from "./update-connection-response";
export import UpdateConnectionResponse = UpdateConnectionResponse.UpdateConnectionResponse;
import * as UpdateDataAssetResponse from "./update-data-asset-response";
export import UpdateDataAssetResponse = UpdateDataAssetResponse.UpdateDataAssetResponse;
import * as UpdateEndpointResponse from "./update-endpoint-response";
export import UpdateEndpointResponse = UpdateEndpointResponse.UpdateEndpointResponse;
import * as UpdateFolderResponse from "./update-folder-response";
export import UpdateFolderResponse = UpdateFolderResponse.UpdateFolderResponse;
import * as UpdateRegistryResponse from "./update-registry-response";
export import UpdateRegistryResponse = UpdateRegistryResponse.UpdateRegistryResponse;
import * as ValidateDataAssetNetworkReachablityResponse from "./validate-data-asset-network-reachablity-response";
export import ValidateDataAssetNetworkReachablityResponse = ValidateDataAssetNetworkReachablityResponse.ValidateDataAssetNetworkReachablityResponse;
import * as GetNetworkConnectivityStatusCollectionResponse from "./get-network-connectivity-status-collection-response";
export import GetNetworkConnectivityStatusCollectionResponse = GetNetworkConnectivityStatusCollectionResponse.GetNetworkConnectivityStatusCollectionResponse;
