/**
 *
 *
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
import stream = require("stream");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/objectstorage/PutObject.ts.html |here} to see how to use PutObjectRequest.
 */
export interface PutObjectRequest extends common.BaseRequest {
  /**
   * The Object Storage namespace used for the request.
   */
  "namespaceName": string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   * Example: `my-new-bucket1`
   *
   */
  "bucketName": string;
  /**
   * The name of the object. Avoid entering confidential information.
   * Example: `test/object1.log`
   *
   */
  "objectName": string;
  /**
   * The content length of the body.
   */
  "contentLength"?: number;
  /**
   * The object to upload to the object store.
   */
  "putObjectBody": Uint8Array | Buffer | Blob | stream.Readable | ReadableStream | string;
  /**
   * The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of
   * the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload
   * the resource.
   *
   */
  "ifMatch"?: string;
  /**
   * The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should
   * fail if the resource already exists.
   *
   */
  "ifNoneMatch"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
  /**
   * A value of `100-continue` requests preliminary verification of the request method, path, and headers before the request body is sent.
   * If no error results from such verification, the server will send a 100 (Continue) interim response to indicate readiness for the request body.
   * The only allowed value for this parameter is \"100-Continue\" (case-insensitive).
   *
   */
  "expect"?: string;
  /**
 * The optional base-64 header that defines the encoded MD5 hash of the body. If the optional Content-MD5 header is present, Object
* Storage performs an integrity check on the body of the HTTP request by computing the MD5 hash for the body and comparing it to the
* MD5 hash supplied in the header. If the two hashes do not match, the object is rejected and an HTTP-400 Unmatched Content MD5 error
* is returned with the message:
* <p>
\"The computed MD5 of the request body (ACTUAL_MD5) does not match the Content-MD5 header (HEADER_MD5)\"
* 
 */
  "contentMD5"?: string;
  /**
   * The optional Content-Type header that defines the standard MIME type format of the object. Content type defaults to
   * 'application/octet-stream' if not specified in the PutObject call. Specifying values for this header has no effect
   * on Object Storage behavior. Programs that read the object determine what to do based on the value provided. For example,
   * you could use this header to identify and perform special operations on text only objects.
   *
   */
  "contentType"?: string;
  /**
   * The optional Content-Language header that defines the content language of the object to upload. Specifying
   * values for this header has no effect on Object Storage behavior. Programs that read the object determine what
   * to do based on the value provided. For example, you could use this header to identify and differentiate objects
   * based on a particular language.
   *
   */
  "contentLanguage"?: string;
  /**
   * The optional Content-Encoding header that defines the content encodings that were applied to the object to
   * upload. Specifying values for this header has no effect on Object Storage behavior. Programs that read the
   * object determine what to do based on the value provided. For example, you could use this header to determine
   * what decoding mechanisms need to be applied to obtain the media-type specified by the Content-Type header of
   * the object.
   *
   */
  "contentEncoding"?: string;
  /**
   * The optional Content-Disposition header that defines presentational information for the object to be
   * returned in GetObject and HeadObject responses. Specifying values for this header has no effect on Object
   * Storage behavior. Programs that read the object determine what to do based on the value provided.
   * For example, you could use this header to let users download objects with custom filenames in a browser.
   *
   */
  "contentDisposition"?: string;
  /**
   * The optional Cache-Control header that defines the caching behavior value to be returned in GetObject and
   * HeadObject responses. Specifying values for this header has no effect on Object Storage behavior. Programs
   * that read the object determine what to do based on the value provided.
   * For example, you could use this header to identify objects that require caching restrictions.
   *
   */
  "cacheControl"?: string;
  /**
   * The optional header that specifies \"AES256\" as the encryption algorithm. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.cloud.oracle.com/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerAlgorithm"?: string;
  /**
   * The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or
   * decrypt the data. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.cloud.oracle.com/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerKey"?: string;
  /**
   * The optional header that specifies the base64-encoded SHA256 hash of the encryption key. This
   * value is used to check the integrity of the encryption key. For more information, see
   * [Using Your Own Keys for Server-Side Encryption](https://docs.cloud.oracle.com/Content/Object/Tasks/usingyourencryptionkeys.htm).
   *
   */
  "opcSseCustomerKeySha256"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key
   * Management service to generate a data encryption key or to encrypt or decrypt a data encryption key.
   *
   */
  "opcSseKmsKeyId"?: string;
  /**
   * The storage tier that the object should be stored in. If not specified, the object will be stored in
   * the same storage tier as the bucket.
   *
   */
  "storageTier"?: model.StorageTier;
  /**
   * Optional user-defined metadata key and value.
   */
  "opcMeta"?: { [key: string]: string };
}
