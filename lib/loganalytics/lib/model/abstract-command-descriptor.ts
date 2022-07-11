/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Generic command descriptor defining all attributes common to all querylanguage commands for parse output.
 *
 */
export interface AbstractCommandDescriptor {
  /**
   * Command fragment display string from user specified query string formatted by query builder.
   *
   */
  "displayQueryString": string;
  /**
   * Command fragment internal string from user specified query string formatted by query builder.
   *
   */
  "internalQueryString": string;
  /**
   * querylanguage command designation for example; reporting vs filtering
   *
   */
  "category"?: string;
  /**
   * Fields referenced in command fragment from user specified query string.
   *
   */
  "referencedFields"?: Array<model.AbstractField>;
  /**
   * Fields declared in command fragment from user specified query string.
   *
   */
  "declaredFields"?: Array<model.AbstractField>;

  "name": string;
}

export namespace AbstractCommandDescriptor {
  export function getJsonObj(obj: AbstractCommandDescriptor): object {
    const jsonObj = {
      ...obj,
      ...{
        "referencedFields": obj.referencedFields
          ? obj.referencedFields.map(item => {
              return model.AbstractField.getJsonObj(item);
            })
          : undefined,
        "declaredFields": obj.declaredFields
          ? obj.declaredFields.map(item => {
              return model.AbstractField.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "name" in obj && obj.name) {
      switch (obj.name) {
        case "TOP":
          return model.TopCommandDescriptor.getJsonObj(
            <model.TopCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HIGHLIGHT":
          return model.HighlightCommandDescriptor.getJsonObj(
            <model.HighlightCommandDescriptor>(<object>jsonObj),
            true
          );
        case "MULTI_SEARCH":
          return model.MultiSearchCommandDescriptor.getJsonObj(
            <model.MultiSearchCommandDescriptor>(<object>jsonObj),
            true
          );
        case "COMPARE":
          return model.CompareCommandDescriptor.getJsonObj(
            <model.CompareCommandDescriptor>(<object>jsonObj),
            true
          );
        case "STATS":
          return model.StatsCommandDescriptor.getJsonObj(
            <model.StatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "TIME_COMPARE":
          return model.TimeCompareCommandDescriptor.getJsonObj(
            <model.TimeCompareCommandDescriptor>(<object>jsonObj),
            true
          );
        case "TAIL":
          return model.TailCommandDescriptor.getJsonObj(
            <model.TailCommandDescriptor>(<object>jsonObj),
            true
          );
        case "REGEX":
          return model.RegexCommandDescriptor.getJsonObj(
            <model.RegexCommandDescriptor>(<object>jsonObj),
            true
          );
        case "DELTA":
          return model.DeltaCommandDescriptor.getJsonObj(
            <model.DeltaCommandDescriptor>(<object>jsonObj),
            true
          );
        case "LOOKUP":
          return model.LookupCommandDescriptor.getJsonObj(
            <model.LookupCommandDescriptor>(<object>jsonObj),
            true
          );
        case "DEMO_MODE":
          return model.DemoModeCommandDescriptor.getJsonObj(
            <model.DemoModeCommandDescriptor>(<object>jsonObj),
            true
          );
        case "FIELD_SUMMARY":
          return model.FieldSummaryCommandDescriptor.getJsonObj(
            <model.FieldSummaryCommandDescriptor>(<object>jsonObj),
            true
          );
        case "GEO_STATS":
          return model.GeoStatsCommandDescriptor.getJsonObj(
            <model.GeoStatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "JSON_EXTRACT":
          return model.JsonExtractCommandDescriptor.getJsonObj(
            <model.JsonExtractCommandDescriptor>(<object>jsonObj),
            true
          );
        case "MAP":
          return model.MapCommandDescriptor.getJsonObj(
            <model.MapCommandDescriptor>(<object>jsonObj),
            true
          );
        case "EVENT_STATS":
          return model.EventStatsCommandDescriptor.getJsonObj(
            <model.EventStatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HIGHLIGHT_GROUPS":
          return model.HighlightGroupsCommandDescriptor.getJsonObj(
            <model.HighlightGroupsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "WHERE":
          return model.WhereCommandDescriptor.getJsonObj(
            <model.WhereCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER_SPLIT":
          return model.ClusterSplitCommandDescriptor.getJsonObj(
            <model.ClusterSplitCommandDescriptor>(<object>jsonObj),
            true
          );
        case "TIME_STATS":
          return model.TimeStatsCommandDescriptor.getJsonObj(
            <model.TimeStatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER":
          return model.ClusterCommandDescriptor.getJsonObj(
            <model.ClusterCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER_DETAILS":
          return model.ClusterDetailsCommandDescriptor.getJsonObj(
            <model.ClusterDetailsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "DELETE":
          return model.DeleteCommandDescriptor.getJsonObj(
            <model.DeleteCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER_COMPARE":
          return model.ClusterCompareCommandDescriptor.getJsonObj(
            <model.ClusterCompareCommandDescriptor>(<object>jsonObj),
            true
          );
        case "SEARCH":
          return model.SearchCommandDescriptor.getJsonObj(
            <model.SearchCommandDescriptor>(<object>jsonObj),
            true
          );
        case "BUCKET":
          return model.BucketCommandDescriptor.getJsonObj(
            <model.BucketCommandDescriptor>(<object>jsonObj),
            true
          );
        case "COMMAND":
          return model.CommandDescriptor.getJsonObj(
            <model.CommandDescriptor>(<object>jsonObj),
            true
          );
        case "DISTINCT":
          return model.DistinctCommandDescriptor.getJsonObj(
            <model.DistinctCommandDescriptor>(<object>jsonObj),
            true
          );
        case "LINK":
          return model.LinkCommandDescriptor.getJsonObj(
            <model.LinkCommandDescriptor>(<object>jsonObj),
            true
          );
        case "SORT":
          return model.SortCommandDescriptor.getJsonObj(
            <model.SortCommandDescriptor>(<object>jsonObj),
            true
          );
        case "EXTRACT":
          return model.ExtractCommandDescriptor.getJsonObj(
            <model.ExtractCommandDescriptor>(<object>jsonObj),
            true
          );
        case "NLP":
          return model.NlpCommandDescriptor.getJsonObj(
            <model.NlpCommandDescriptor>(<object>jsonObj),
            true
          );
        case "BOTTOM":
          return model.BottomCommandDescriptor.getJsonObj(
            <model.BottomCommandDescriptor>(<object>jsonObj),
            true
          );
        case "FIELDS":
          return model.FieldsCommandDescriptor.getJsonObj(
            <model.FieldsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HIGHLIGHT_ROWS":
          return model.HighlightRowsCommandDescriptor.getJsonObj(
            <model.HighlightRowsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "MACRO":
          return model.MacroCommandDescriptor.getJsonObj(
            <model.MacroCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLASSIFY":
          return model.ClassifyCommandDescriptor.getJsonObj(
            <model.ClassifyCommandDescriptor>(<object>jsonObj),
            true
          );
        case "LINK_DETAILS":
          return model.LinkDetailsCommandDescriptor.getJsonObj(
            <model.LinkDetailsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "SEARCH_LOOKUP":
          return model.SearchLookupCommandDescriptor.getJsonObj(
            <model.SearchLookupCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HEAD":
          return model.HeadCommandDescriptor.getJsonObj(
            <model.HeadCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CREATE_VIEW":
          return model.CreateViewCommandDescriptor.getJsonObj(
            <model.CreateViewCommandDescriptor>(<object>jsonObj),
            true
          );
        case "ADD_FIELDS":
          return model.AddFieldsCommandDescriptor.getJsonObj(
            <model.AddFieldsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "EVAL":
          return model.EvalCommandDescriptor.getJsonObj(
            <model.EvalCommandDescriptor>(<object>jsonObj),
            true
          );
        case "RENAME":
          return model.RenameCommandDescriptor.getJsonObj(
            <model.RenameCommandDescriptor>(<object>jsonObj),
            true
          );
        case "XML_EXTRACT":
          return model.XmlExtractCommandDescriptor.getJsonObj(
            <model.XmlExtractCommandDescriptor>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.name);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AbstractCommandDescriptor): object {
    const jsonObj = {
      ...obj,
      ...{
        "referencedFields": obj.referencedFields
          ? obj.referencedFields.map(item => {
              return model.AbstractField.getDeserializedJsonObj(item);
            })
          : undefined,
        "declaredFields": obj.declaredFields
          ? obj.declaredFields.map(item => {
              return model.AbstractField.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "name" in obj && obj.name) {
      switch (obj.name) {
        case "TOP":
          return model.TopCommandDescriptor.getDeserializedJsonObj(
            <model.TopCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HIGHLIGHT":
          return model.HighlightCommandDescriptor.getDeserializedJsonObj(
            <model.HighlightCommandDescriptor>(<object>jsonObj),
            true
          );
        case "MULTI_SEARCH":
          return model.MultiSearchCommandDescriptor.getDeserializedJsonObj(
            <model.MultiSearchCommandDescriptor>(<object>jsonObj),
            true
          );
        case "COMPARE":
          return model.CompareCommandDescriptor.getDeserializedJsonObj(
            <model.CompareCommandDescriptor>(<object>jsonObj),
            true
          );
        case "STATS":
          return model.StatsCommandDescriptor.getDeserializedJsonObj(
            <model.StatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "TIME_COMPARE":
          return model.TimeCompareCommandDescriptor.getDeserializedJsonObj(
            <model.TimeCompareCommandDescriptor>(<object>jsonObj),
            true
          );
        case "TAIL":
          return model.TailCommandDescriptor.getDeserializedJsonObj(
            <model.TailCommandDescriptor>(<object>jsonObj),
            true
          );
        case "REGEX":
          return model.RegexCommandDescriptor.getDeserializedJsonObj(
            <model.RegexCommandDescriptor>(<object>jsonObj),
            true
          );
        case "DELTA":
          return model.DeltaCommandDescriptor.getDeserializedJsonObj(
            <model.DeltaCommandDescriptor>(<object>jsonObj),
            true
          );
        case "LOOKUP":
          return model.LookupCommandDescriptor.getDeserializedJsonObj(
            <model.LookupCommandDescriptor>(<object>jsonObj),
            true
          );
        case "DEMO_MODE":
          return model.DemoModeCommandDescriptor.getDeserializedJsonObj(
            <model.DemoModeCommandDescriptor>(<object>jsonObj),
            true
          );
        case "FIELD_SUMMARY":
          return model.FieldSummaryCommandDescriptor.getDeserializedJsonObj(
            <model.FieldSummaryCommandDescriptor>(<object>jsonObj),
            true
          );
        case "GEO_STATS":
          return model.GeoStatsCommandDescriptor.getDeserializedJsonObj(
            <model.GeoStatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "JSON_EXTRACT":
          return model.JsonExtractCommandDescriptor.getDeserializedJsonObj(
            <model.JsonExtractCommandDescriptor>(<object>jsonObj),
            true
          );
        case "MAP":
          return model.MapCommandDescriptor.getDeserializedJsonObj(
            <model.MapCommandDescriptor>(<object>jsonObj),
            true
          );
        case "EVENT_STATS":
          return model.EventStatsCommandDescriptor.getDeserializedJsonObj(
            <model.EventStatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HIGHLIGHT_GROUPS":
          return model.HighlightGroupsCommandDescriptor.getDeserializedJsonObj(
            <model.HighlightGroupsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "WHERE":
          return model.WhereCommandDescriptor.getDeserializedJsonObj(
            <model.WhereCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER_SPLIT":
          return model.ClusterSplitCommandDescriptor.getDeserializedJsonObj(
            <model.ClusterSplitCommandDescriptor>(<object>jsonObj),
            true
          );
        case "TIME_STATS":
          return model.TimeStatsCommandDescriptor.getDeserializedJsonObj(
            <model.TimeStatsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER":
          return model.ClusterCommandDescriptor.getDeserializedJsonObj(
            <model.ClusterCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER_DETAILS":
          return model.ClusterDetailsCommandDescriptor.getDeserializedJsonObj(
            <model.ClusterDetailsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "DELETE":
          return model.DeleteCommandDescriptor.getDeserializedJsonObj(
            <model.DeleteCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLUSTER_COMPARE":
          return model.ClusterCompareCommandDescriptor.getDeserializedJsonObj(
            <model.ClusterCompareCommandDescriptor>(<object>jsonObj),
            true
          );
        case "SEARCH":
          return model.SearchCommandDescriptor.getDeserializedJsonObj(
            <model.SearchCommandDescriptor>(<object>jsonObj),
            true
          );
        case "BUCKET":
          return model.BucketCommandDescriptor.getDeserializedJsonObj(
            <model.BucketCommandDescriptor>(<object>jsonObj),
            true
          );
        case "COMMAND":
          return model.CommandDescriptor.getDeserializedJsonObj(
            <model.CommandDescriptor>(<object>jsonObj),
            true
          );
        case "DISTINCT":
          return model.DistinctCommandDescriptor.getDeserializedJsonObj(
            <model.DistinctCommandDescriptor>(<object>jsonObj),
            true
          );
        case "LINK":
          return model.LinkCommandDescriptor.getDeserializedJsonObj(
            <model.LinkCommandDescriptor>(<object>jsonObj),
            true
          );
        case "SORT":
          return model.SortCommandDescriptor.getDeserializedJsonObj(
            <model.SortCommandDescriptor>(<object>jsonObj),
            true
          );
        case "EXTRACT":
          return model.ExtractCommandDescriptor.getDeserializedJsonObj(
            <model.ExtractCommandDescriptor>(<object>jsonObj),
            true
          );
        case "NLP":
          return model.NlpCommandDescriptor.getDeserializedJsonObj(
            <model.NlpCommandDescriptor>(<object>jsonObj),
            true
          );
        case "BOTTOM":
          return model.BottomCommandDescriptor.getDeserializedJsonObj(
            <model.BottomCommandDescriptor>(<object>jsonObj),
            true
          );
        case "FIELDS":
          return model.FieldsCommandDescriptor.getDeserializedJsonObj(
            <model.FieldsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HIGHLIGHT_ROWS":
          return model.HighlightRowsCommandDescriptor.getDeserializedJsonObj(
            <model.HighlightRowsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "MACRO":
          return model.MacroCommandDescriptor.getDeserializedJsonObj(
            <model.MacroCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CLASSIFY":
          return model.ClassifyCommandDescriptor.getDeserializedJsonObj(
            <model.ClassifyCommandDescriptor>(<object>jsonObj),
            true
          );
        case "LINK_DETAILS":
          return model.LinkDetailsCommandDescriptor.getDeserializedJsonObj(
            <model.LinkDetailsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "SEARCH_LOOKUP":
          return model.SearchLookupCommandDescriptor.getDeserializedJsonObj(
            <model.SearchLookupCommandDescriptor>(<object>jsonObj),
            true
          );
        case "HEAD":
          return model.HeadCommandDescriptor.getDeserializedJsonObj(
            <model.HeadCommandDescriptor>(<object>jsonObj),
            true
          );
        case "CREATE_VIEW":
          return model.CreateViewCommandDescriptor.getDeserializedJsonObj(
            <model.CreateViewCommandDescriptor>(<object>jsonObj),
            true
          );
        case "ADD_FIELDS":
          return model.AddFieldsCommandDescriptor.getDeserializedJsonObj(
            <model.AddFieldsCommandDescriptor>(<object>jsonObj),
            true
          );
        case "EVAL":
          return model.EvalCommandDescriptor.getDeserializedJsonObj(
            <model.EvalCommandDescriptor>(<object>jsonObj),
            true
          );
        case "RENAME":
          return model.RenameCommandDescriptor.getDeserializedJsonObj(
            <model.RenameCommandDescriptor>(<object>jsonObj),
            true
          );
        case "XML_EXTRACT":
          return model.XmlExtractCommandDescriptor.getDeserializedJsonObj(
            <model.XmlExtractCommandDescriptor>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.name);
      }
    }
    return jsonObj;
  }
}
