/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivateDomainRequest from "./activate-domain-request";
export import ActivateDomainRequest = ActivateDomainRequest.ActivateDomainRequest;
import * as ActivateMfaTotpDeviceRequest from "./activate-mfa-totp-device-request";
export import ActivateMfaTotpDeviceRequest = ActivateMfaTotpDeviceRequest.ActivateMfaTotpDeviceRequest;
import * as AddTagDefaultLockRequest from "./add-tag-default-lock-request";
export import AddTagDefaultLockRequest = AddTagDefaultLockRequest.AddTagDefaultLockRequest;
import * as AddTagNamespaceLockRequest from "./add-tag-namespace-lock-request";
export import AddTagNamespaceLockRequest = AddTagNamespaceLockRequest.AddTagNamespaceLockRequest;
import * as AddUserToGroupRequest from "./add-user-to-group-request";
export import AddUserToGroupRequest = AddUserToGroupRequest.AddUserToGroupRequest;
import * as AssembleEffectiveTagSetRequest from "./assemble-effective-tag-set-request";
export import AssembleEffectiveTagSetRequest = AssembleEffectiveTagSetRequest.AssembleEffectiveTagSetRequest;
import * as BulkDeleteResourcesRequest from "./bulk-delete-resources-request";
export import BulkDeleteResourcesRequest = BulkDeleteResourcesRequest.BulkDeleteResourcesRequest;
import * as BulkDeleteTagsRequest from "./bulk-delete-tags-request";
export import BulkDeleteTagsRequest = BulkDeleteTagsRequest.BulkDeleteTagsRequest;
import * as BulkEditTagsRequest from "./bulk-edit-tags-request";
export import BulkEditTagsRequest = BulkEditTagsRequest.BulkEditTagsRequest;
import * as BulkMoveResourcesRequest from "./bulk-move-resources-request";
export import BulkMoveResourcesRequest = BulkMoveResourcesRequest.BulkMoveResourcesRequest;
import * as CascadeDeleteTagNamespaceRequest from "./cascade-delete-tag-namespace-request";
export import CascadeDeleteTagNamespaceRequest = CascadeDeleteTagNamespaceRequest.CascadeDeleteTagNamespaceRequest;
import * as ChangeDomainCompartmentRequest from "./change-domain-compartment-request";
export import ChangeDomainCompartmentRequest = ChangeDomainCompartmentRequest.ChangeDomainCompartmentRequest;
import * as ChangeDomainLicenseTypeRequest from "./change-domain-license-type-request";
export import ChangeDomainLicenseTypeRequest = ChangeDomainLicenseTypeRequest.ChangeDomainLicenseTypeRequest;
import * as ChangeTagNamespaceCompartmentRequest from "./change-tag-namespace-compartment-request";
export import ChangeTagNamespaceCompartmentRequest = ChangeTagNamespaceCompartmentRequest.ChangeTagNamespaceCompartmentRequest;
import * as CreateAuthTokenRequest from "./create-auth-token-request";
export import CreateAuthTokenRequest = CreateAuthTokenRequest.CreateAuthTokenRequest;
import * as CreateCompartmentRequest from "./create-compartment-request";
export import CreateCompartmentRequest = CreateCompartmentRequest.CreateCompartmentRequest;
import * as CreateCustomerSecretKeyRequest from "./create-customer-secret-key-request";
export import CreateCustomerSecretKeyRequest = CreateCustomerSecretKeyRequest.CreateCustomerSecretKeyRequest;
import * as CreateDbCredentialRequest from "./create-db-credential-request";
export import CreateDbCredentialRequest = CreateDbCredentialRequest.CreateDbCredentialRequest;
import * as CreateDomainRequest from "./create-domain-request";
export import CreateDomainRequest = CreateDomainRequest.CreateDomainRequest;
import * as CreateDynamicGroupRequest from "./create-dynamic-group-request";
export import CreateDynamicGroupRequest = CreateDynamicGroupRequest.CreateDynamicGroupRequest;
import * as CreateGroupRequest from "./create-group-request";
export import CreateGroupRequest = CreateGroupRequest.CreateGroupRequest;
import * as CreateIdentityProviderRequest from "./create-identity-provider-request";
export import CreateIdentityProviderRequest = CreateIdentityProviderRequest.CreateIdentityProviderRequest;
import * as CreateIdpGroupMappingRequest from "./create-idp-group-mapping-request";
export import CreateIdpGroupMappingRequest = CreateIdpGroupMappingRequest.CreateIdpGroupMappingRequest;
import * as CreateMfaTotpDeviceRequest from "./create-mfa-totp-device-request";
export import CreateMfaTotpDeviceRequest = CreateMfaTotpDeviceRequest.CreateMfaTotpDeviceRequest;
import * as CreateNetworkSourceRequest from "./create-network-source-request";
export import CreateNetworkSourceRequest = CreateNetworkSourceRequest.CreateNetworkSourceRequest;
import * as CreateOAuthClientCredentialRequest from "./create-oauth-client-credential-request";
export import CreateOAuthClientCredentialRequest = CreateOAuthClientCredentialRequest.CreateOAuthClientCredentialRequest;
import * as CreateOrResetUIPasswordRequest from "./create-or-reset-uipassword-request";
export import CreateOrResetUIPasswordRequest = CreateOrResetUIPasswordRequest.CreateOrResetUIPasswordRequest;
import * as CreatePolicyRequest from "./create-policy-request";
export import CreatePolicyRequest = CreatePolicyRequest.CreatePolicyRequest;
import * as CreateRegionSubscriptionRequest from "./create-region-subscription-request";
export import CreateRegionSubscriptionRequest = CreateRegionSubscriptionRequest.CreateRegionSubscriptionRequest;
import * as CreateSmtpCredentialRequest from "./create-smtp-credential-request";
export import CreateSmtpCredentialRequest = CreateSmtpCredentialRequest.CreateSmtpCredentialRequest;
import * as CreateSwiftPasswordRequest from "./create-swift-password-request";
export import CreateSwiftPasswordRequest = CreateSwiftPasswordRequest.CreateSwiftPasswordRequest;
import * as CreateTagRequest from "./create-tag-request";
export import CreateTagRequest = CreateTagRequest.CreateTagRequest;
import * as CreateTagDefaultRequest from "./create-tag-default-request";
export import CreateTagDefaultRequest = CreateTagDefaultRequest.CreateTagDefaultRequest;
import * as CreateTagNamespaceRequest from "./create-tag-namespace-request";
export import CreateTagNamespaceRequest = CreateTagNamespaceRequest.CreateTagNamespaceRequest;
import * as CreateUserRequest from "./create-user-request";
export import CreateUserRequest = CreateUserRequest.CreateUserRequest;
import * as DeactivateDomainRequest from "./deactivate-domain-request";
export import DeactivateDomainRequest = DeactivateDomainRequest.DeactivateDomainRequest;
import * as DeleteApiKeyRequest from "./delete-api-key-request";
export import DeleteApiKeyRequest = DeleteApiKeyRequest.DeleteApiKeyRequest;
import * as DeleteAuthTokenRequest from "./delete-auth-token-request";
export import DeleteAuthTokenRequest = DeleteAuthTokenRequest.DeleteAuthTokenRequest;
import * as DeleteCompartmentRequest from "./delete-compartment-request";
export import DeleteCompartmentRequest = DeleteCompartmentRequest.DeleteCompartmentRequest;
import * as DeleteCustomerSecretKeyRequest from "./delete-customer-secret-key-request";
export import DeleteCustomerSecretKeyRequest = DeleteCustomerSecretKeyRequest.DeleteCustomerSecretKeyRequest;
import * as DeleteDbCredentialRequest from "./delete-db-credential-request";
export import DeleteDbCredentialRequest = DeleteDbCredentialRequest.DeleteDbCredentialRequest;
import * as DeleteDomainRequest from "./delete-domain-request";
export import DeleteDomainRequest = DeleteDomainRequest.DeleteDomainRequest;
import * as DeleteDynamicGroupRequest from "./delete-dynamic-group-request";
export import DeleteDynamicGroupRequest = DeleteDynamicGroupRequest.DeleteDynamicGroupRequest;
import * as DeleteGroupRequest from "./delete-group-request";
export import DeleteGroupRequest = DeleteGroupRequest.DeleteGroupRequest;
import * as DeleteIdentityProviderRequest from "./delete-identity-provider-request";
export import DeleteIdentityProviderRequest = DeleteIdentityProviderRequest.DeleteIdentityProviderRequest;
import * as DeleteIdpGroupMappingRequest from "./delete-idp-group-mapping-request";
export import DeleteIdpGroupMappingRequest = DeleteIdpGroupMappingRequest.DeleteIdpGroupMappingRequest;
import * as DeleteMfaTotpDeviceRequest from "./delete-mfa-totp-device-request";
export import DeleteMfaTotpDeviceRequest = DeleteMfaTotpDeviceRequest.DeleteMfaTotpDeviceRequest;
import * as DeleteNetworkSourceRequest from "./delete-network-source-request";
export import DeleteNetworkSourceRequest = DeleteNetworkSourceRequest.DeleteNetworkSourceRequest;
import * as DeleteOAuthClientCredentialRequest from "./delete-oauth-client-credential-request";
export import DeleteOAuthClientCredentialRequest = DeleteOAuthClientCredentialRequest.DeleteOAuthClientCredentialRequest;
import * as DeletePolicyRequest from "./delete-policy-request";
export import DeletePolicyRequest = DeletePolicyRequest.DeletePolicyRequest;
import * as DeleteSmtpCredentialRequest from "./delete-smtp-credential-request";
export import DeleteSmtpCredentialRequest = DeleteSmtpCredentialRequest.DeleteSmtpCredentialRequest;
import * as DeleteSwiftPasswordRequest from "./delete-swift-password-request";
export import DeleteSwiftPasswordRequest = DeleteSwiftPasswordRequest.DeleteSwiftPasswordRequest;
import * as DeleteTagRequest from "./delete-tag-request";
export import DeleteTagRequest = DeleteTagRequest.DeleteTagRequest;
import * as DeleteTagDefaultRequest from "./delete-tag-default-request";
export import DeleteTagDefaultRequest = DeleteTagDefaultRequest.DeleteTagDefaultRequest;
import * as DeleteTagNamespaceRequest from "./delete-tag-namespace-request";
export import DeleteTagNamespaceRequest = DeleteTagNamespaceRequest.DeleteTagNamespaceRequest;
import * as DeleteUserRequest from "./delete-user-request";
export import DeleteUserRequest = DeleteUserRequest.DeleteUserRequest;
import * as EnableReplicationToRegionRequest from "./enable-replication-to-region-request";
export import EnableReplicationToRegionRequest = EnableReplicationToRegionRequest.EnableReplicationToRegionRequest;
import * as GenerateTotpSeedRequest from "./generate-totp-seed-request";
export import GenerateTotpSeedRequest = GenerateTotpSeedRequest.GenerateTotpSeedRequest;
import * as GetAuthenticationPolicyRequest from "./get-authentication-policy-request";
export import GetAuthenticationPolicyRequest = GetAuthenticationPolicyRequest.GetAuthenticationPolicyRequest;
import * as GetCompartmentRequest from "./get-compartment-request";
export import GetCompartmentRequest = GetCompartmentRequest.GetCompartmentRequest;
import * as GetDomainRequest from "./get-domain-request";
export import GetDomainRequest = GetDomainRequest.GetDomainRequest;
import * as GetDynamicGroupRequest from "./get-dynamic-group-request";
export import GetDynamicGroupRequest = GetDynamicGroupRequest.GetDynamicGroupRequest;
import * as GetGroupRequest from "./get-group-request";
export import GetGroupRequest = GetGroupRequest.GetGroupRequest;
import * as GetIamWorkRequestRequest from "./get-iam-work-request-request";
export import GetIamWorkRequestRequest = GetIamWorkRequestRequest.GetIamWorkRequestRequest;
import * as GetIdentityProviderRequest from "./get-identity-provider-request";
export import GetIdentityProviderRequest = GetIdentityProviderRequest.GetIdentityProviderRequest;
import * as GetIdpGroupMappingRequest from "./get-idp-group-mapping-request";
export import GetIdpGroupMappingRequest = GetIdpGroupMappingRequest.GetIdpGroupMappingRequest;
import * as GetMfaTotpDeviceRequest from "./get-mfa-totp-device-request";
export import GetMfaTotpDeviceRequest = GetMfaTotpDeviceRequest.GetMfaTotpDeviceRequest;
import * as GetNetworkSourceRequest from "./get-network-source-request";
export import GetNetworkSourceRequest = GetNetworkSourceRequest.GetNetworkSourceRequest;
import * as GetPolicyRequest from "./get-policy-request";
export import GetPolicyRequest = GetPolicyRequest.GetPolicyRequest;
import * as GetStandardTagTemplateRequest from "./get-standard-tag-template-request";
export import GetStandardTagTemplateRequest = GetStandardTagTemplateRequest.GetStandardTagTemplateRequest;
import * as GetTagRequest from "./get-tag-request";
export import GetTagRequest = GetTagRequest.GetTagRequest;
import * as GetTagDefaultRequest from "./get-tag-default-request";
export import GetTagDefaultRequest = GetTagDefaultRequest.GetTagDefaultRequest;
import * as GetTagNamespaceRequest from "./get-tag-namespace-request";
export import GetTagNamespaceRequest = GetTagNamespaceRequest.GetTagNamespaceRequest;
import * as GetTaggingWorkRequestRequest from "./get-tagging-work-request-request";
export import GetTaggingWorkRequestRequest = GetTaggingWorkRequestRequest.GetTaggingWorkRequestRequest;
import * as GetTenancyRequest from "./get-tenancy-request";
export import GetTenancyRequest = GetTenancyRequest.GetTenancyRequest;
import * as GetUserRequest from "./get-user-request";
export import GetUserRequest = GetUserRequest.GetUserRequest;
import * as GetUserGroupMembershipRequest from "./get-user-group-membership-request";
export import GetUserGroupMembershipRequest = GetUserGroupMembershipRequest.GetUserGroupMembershipRequest;
import * as GetUserUIPasswordInformationRequest from "./get-user-uipassword-information-request";
export import GetUserUIPasswordInformationRequest = GetUserUIPasswordInformationRequest.GetUserUIPasswordInformationRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ImportStandardTagsRequest from "./import-standard-tags-request";
export import ImportStandardTagsRequest = ImportStandardTagsRequest.ImportStandardTagsRequest;
import * as ListAllowedDomainLicenseTypesRequest from "./list-allowed-domain-license-types-request";
export import ListAllowedDomainLicenseTypesRequest = ListAllowedDomainLicenseTypesRequest.ListAllowedDomainLicenseTypesRequest;
import * as ListApiKeysRequest from "./list-api-keys-request";
export import ListApiKeysRequest = ListApiKeysRequest.ListApiKeysRequest;
import * as ListAuthTokensRequest from "./list-auth-tokens-request";
export import ListAuthTokensRequest = ListAuthTokensRequest.ListAuthTokensRequest;
import * as ListAvailabilityDomainsRequest from "./list-availability-domains-request";
export import ListAvailabilityDomainsRequest = ListAvailabilityDomainsRequest.ListAvailabilityDomainsRequest;
import * as ListBulkActionResourceTypesRequest from "./list-bulk-action-resource-types-request";
export import ListBulkActionResourceTypesRequest = ListBulkActionResourceTypesRequest.ListBulkActionResourceTypesRequest;
import * as ListBulkEditTagsResourceTypesRequest from "./list-bulk-edit-tags-resource-types-request";
export import ListBulkEditTagsResourceTypesRequest = ListBulkEditTagsResourceTypesRequest.ListBulkEditTagsResourceTypesRequest;
import * as ListCompartmentsRequest from "./list-compartments-request";
export import ListCompartmentsRequest = ListCompartmentsRequest.ListCompartmentsRequest;
import * as ListCostTrackingTagsRequest from "./list-cost-tracking-tags-request";
export import ListCostTrackingTagsRequest = ListCostTrackingTagsRequest.ListCostTrackingTagsRequest;
import * as ListCustomerSecretKeysRequest from "./list-customer-secret-keys-request";
export import ListCustomerSecretKeysRequest = ListCustomerSecretKeysRequest.ListCustomerSecretKeysRequest;
import * as ListDbCredentialsRequest from "./list-db-credentials-request";
export import ListDbCredentialsRequest = ListDbCredentialsRequest.ListDbCredentialsRequest;
import * as ListDomainsRequest from "./list-domains-request";
export import ListDomainsRequest = ListDomainsRequest.ListDomainsRequest;
import * as ListDynamicGroupsRequest from "./list-dynamic-groups-request";
export import ListDynamicGroupsRequest = ListDynamicGroupsRequest.ListDynamicGroupsRequest;
import * as ListFaultDomainsRequest from "./list-fault-domains-request";
export import ListFaultDomainsRequest = ListFaultDomainsRequest.ListFaultDomainsRequest;
import * as ListGroupsRequest from "./list-groups-request";
export import ListGroupsRequest = ListGroupsRequest.ListGroupsRequest;
import * as ListIamWorkRequestErrorsRequest from "./list-iam-work-request-errors-request";
export import ListIamWorkRequestErrorsRequest = ListIamWorkRequestErrorsRequest.ListIamWorkRequestErrorsRequest;
import * as ListIamWorkRequestLogsRequest from "./list-iam-work-request-logs-request";
export import ListIamWorkRequestLogsRequest = ListIamWorkRequestLogsRequest.ListIamWorkRequestLogsRequest;
import * as ListIamWorkRequestsRequest from "./list-iam-work-requests-request";
export import ListIamWorkRequestsRequest = ListIamWorkRequestsRequest.ListIamWorkRequestsRequest;
import * as ListIdentityProviderGroupsRequest from "./list-identity-provider-groups-request";
export import ListIdentityProviderGroupsRequest = ListIdentityProviderGroupsRequest.ListIdentityProviderGroupsRequest;
import * as ListIdentityProvidersRequest from "./list-identity-providers-request";
export import ListIdentityProvidersRequest = ListIdentityProvidersRequest.ListIdentityProvidersRequest;
import * as ListIdpGroupMappingsRequest from "./list-idp-group-mappings-request";
export import ListIdpGroupMappingsRequest = ListIdpGroupMappingsRequest.ListIdpGroupMappingsRequest;
import * as ListMfaTotpDevicesRequest from "./list-mfa-totp-devices-request";
export import ListMfaTotpDevicesRequest = ListMfaTotpDevicesRequest.ListMfaTotpDevicesRequest;
import * as ListNetworkSourcesRequest from "./list-network-sources-request";
export import ListNetworkSourcesRequest = ListNetworkSourcesRequest.ListNetworkSourcesRequest;
import * as ListOAuthClientCredentialsRequest from "./list-oauth-client-credentials-request";
export import ListOAuthClientCredentialsRequest = ListOAuthClientCredentialsRequest.ListOAuthClientCredentialsRequest;
import * as ListPoliciesRequest from "./list-policies-request";
export import ListPoliciesRequest = ListPoliciesRequest.ListPoliciesRequest;
import * as ListRegionSubscriptionsRequest from "./list-region-subscriptions-request";
export import ListRegionSubscriptionsRequest = ListRegionSubscriptionsRequest.ListRegionSubscriptionsRequest;
import * as ListRegionsRequest from "./list-regions-request";
export import ListRegionsRequest = ListRegionsRequest.ListRegionsRequest;
import * as ListSmtpCredentialsRequest from "./list-smtp-credentials-request";
export import ListSmtpCredentialsRequest = ListSmtpCredentialsRequest.ListSmtpCredentialsRequest;
import * as ListStandardTagNamespacesRequest from "./list-standard-tag-namespaces-request";
export import ListStandardTagNamespacesRequest = ListStandardTagNamespacesRequest.ListStandardTagNamespacesRequest;
import * as ListSwiftPasswordsRequest from "./list-swift-passwords-request";
export import ListSwiftPasswordsRequest = ListSwiftPasswordsRequest.ListSwiftPasswordsRequest;
import * as ListTagDefaultsRequest from "./list-tag-defaults-request";
export import ListTagDefaultsRequest = ListTagDefaultsRequest.ListTagDefaultsRequest;
import * as ListTagNamespacesRequest from "./list-tag-namespaces-request";
export import ListTagNamespacesRequest = ListTagNamespacesRequest.ListTagNamespacesRequest;
import * as ListTaggingWorkRequestErrorsRequest from "./list-tagging-work-request-errors-request";
export import ListTaggingWorkRequestErrorsRequest = ListTaggingWorkRequestErrorsRequest.ListTaggingWorkRequestErrorsRequest;
import * as ListTaggingWorkRequestLogsRequest from "./list-tagging-work-request-logs-request";
export import ListTaggingWorkRequestLogsRequest = ListTaggingWorkRequestLogsRequest.ListTaggingWorkRequestLogsRequest;
import * as ListTaggingWorkRequestsRequest from "./list-tagging-work-requests-request";
export import ListTaggingWorkRequestsRequest = ListTaggingWorkRequestsRequest.ListTaggingWorkRequestsRequest;
import * as ListTagsRequest from "./list-tags-request";
export import ListTagsRequest = ListTagsRequest.ListTagsRequest;
import * as ListUserGroupMembershipsRequest from "./list-user-group-memberships-request";
export import ListUserGroupMembershipsRequest = ListUserGroupMembershipsRequest.ListUserGroupMembershipsRequest;
import * as ListUsersRequest from "./list-users-request";
export import ListUsersRequest = ListUsersRequest.ListUsersRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as MoveCompartmentRequest from "./move-compartment-request";
export import MoveCompartmentRequest = MoveCompartmentRequest.MoveCompartmentRequest;
import * as RecoverCompartmentRequest from "./recover-compartment-request";
export import RecoverCompartmentRequest = RecoverCompartmentRequest.RecoverCompartmentRequest;
import * as RemoveTagDefaultLockRequest from "./remove-tag-default-lock-request";
export import RemoveTagDefaultLockRequest = RemoveTagDefaultLockRequest.RemoveTagDefaultLockRequest;
import * as RemoveTagNamespaceLockRequest from "./remove-tag-namespace-lock-request";
export import RemoveTagNamespaceLockRequest = RemoveTagNamespaceLockRequest.RemoveTagNamespaceLockRequest;
import * as RemoveUserFromGroupRequest from "./remove-user-from-group-request";
export import RemoveUserFromGroupRequest = RemoveUserFromGroupRequest.RemoveUserFromGroupRequest;
import * as ResetIdpScimClientRequest from "./reset-idp-scim-client-request";
export import ResetIdpScimClientRequest = ResetIdpScimClientRequest.ResetIdpScimClientRequest;
import * as UpdateAuthTokenRequest from "./update-auth-token-request";
export import UpdateAuthTokenRequest = UpdateAuthTokenRequest.UpdateAuthTokenRequest;
import * as UpdateAuthenticationPolicyRequest from "./update-authentication-policy-request";
export import UpdateAuthenticationPolicyRequest = UpdateAuthenticationPolicyRequest.UpdateAuthenticationPolicyRequest;
import * as UpdateCompartmentRequest from "./update-compartment-request";
export import UpdateCompartmentRequest = UpdateCompartmentRequest.UpdateCompartmentRequest;
import * as UpdateCustomerSecretKeyRequest from "./update-customer-secret-key-request";
export import UpdateCustomerSecretKeyRequest = UpdateCustomerSecretKeyRequest.UpdateCustomerSecretKeyRequest;
import * as UpdateDomainRequest from "./update-domain-request";
export import UpdateDomainRequest = UpdateDomainRequest.UpdateDomainRequest;
import * as UpdateDynamicGroupRequest from "./update-dynamic-group-request";
export import UpdateDynamicGroupRequest = UpdateDynamicGroupRequest.UpdateDynamicGroupRequest;
import * as UpdateGroupRequest from "./update-group-request";
export import UpdateGroupRequest = UpdateGroupRequest.UpdateGroupRequest;
import * as UpdateIdentityProviderRequest from "./update-identity-provider-request";
export import UpdateIdentityProviderRequest = UpdateIdentityProviderRequest.UpdateIdentityProviderRequest;
import * as UpdateIdpGroupMappingRequest from "./update-idp-group-mapping-request";
export import UpdateIdpGroupMappingRequest = UpdateIdpGroupMappingRequest.UpdateIdpGroupMappingRequest;
import * as UpdateNetworkSourceRequest from "./update-network-source-request";
export import UpdateNetworkSourceRequest = UpdateNetworkSourceRequest.UpdateNetworkSourceRequest;
import * as UpdateOAuthClientCredentialRequest from "./update-oauth-client-credential-request";
export import UpdateOAuthClientCredentialRequest = UpdateOAuthClientCredentialRequest.UpdateOAuthClientCredentialRequest;
import * as UpdatePolicyRequest from "./update-policy-request";
export import UpdatePolicyRequest = UpdatePolicyRequest.UpdatePolicyRequest;
import * as UpdateSmtpCredentialRequest from "./update-smtp-credential-request";
export import UpdateSmtpCredentialRequest = UpdateSmtpCredentialRequest.UpdateSmtpCredentialRequest;
import * as UpdateSwiftPasswordRequest from "./update-swift-password-request";
export import UpdateSwiftPasswordRequest = UpdateSwiftPasswordRequest.UpdateSwiftPasswordRequest;
import * as UpdateTagRequest from "./update-tag-request";
export import UpdateTagRequest = UpdateTagRequest.UpdateTagRequest;
import * as UpdateTagDefaultRequest from "./update-tag-default-request";
export import UpdateTagDefaultRequest = UpdateTagDefaultRequest.UpdateTagDefaultRequest;
import * as UpdateTagNamespaceRequest from "./update-tag-namespace-request";
export import UpdateTagNamespaceRequest = UpdateTagNamespaceRequest.UpdateTagNamespaceRequest;
import * as UpdateUserRequest from "./update-user-request";
export import UpdateUserRequest = UpdateUserRequest.UpdateUserRequest;
import * as UpdateUserCapabilitiesRequest from "./update-user-capabilities-request";
export import UpdateUserCapabilitiesRequest = UpdateUserCapabilitiesRequest.UpdateUserCapabilitiesRequest;
import * as UpdateUserStateRequest from "./update-user-state-request";
export import UpdateUserStateRequest = UpdateUserStateRequest.UpdateUserStateRequest;
import * as UploadApiKeyRequest from "./upload-api-key-request";
export import UploadApiKeyRequest = UploadApiKeyRequest.UploadApiKeyRequest;
