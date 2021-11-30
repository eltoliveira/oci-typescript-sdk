/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Statistics of statements and findings for the SQL Tuning Advisor summary report.
 */
export interface SqlTuningAdvisorTaskSummaryReportStatistics {
  "statementCounts": model.SqlTuningAdvisorTaskSummaryReportStatementCounts;
  "findingCounts": model.SqlTuningAdvisorTaskSummaryFindingCounts;
  "findingBenefits": model.SqlTuningAdvisorTaskSummaryFindingBenefits;
}

export namespace SqlTuningAdvisorTaskSummaryReportStatistics {
  export function getJsonObj(obj: SqlTuningAdvisorTaskSummaryReportStatistics): object {
    const jsonObj = {
      ...obj,
      ...{
        "statementCounts": obj.statementCounts
          ? model.SqlTuningAdvisorTaskSummaryReportStatementCounts.getJsonObj(obj.statementCounts)
          : undefined,
        "findingCounts": obj.findingCounts
          ? model.SqlTuningAdvisorTaskSummaryFindingCounts.getJsonObj(obj.findingCounts)
          : undefined,
        "findingBenefits": obj.findingBenefits
          ? model.SqlTuningAdvisorTaskSummaryFindingBenefits.getJsonObj(obj.findingBenefits)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningAdvisorTaskSummaryReportStatistics): object {
    const jsonObj = {
      ...obj,
      ...{
        "statementCounts": obj.statementCounts
          ? model.SqlTuningAdvisorTaskSummaryReportStatementCounts.getDeserializedJsonObj(
              obj.statementCounts
            )
          : undefined,
        "findingCounts": obj.findingCounts
          ? model.SqlTuningAdvisorTaskSummaryFindingCounts.getDeserializedJsonObj(obj.findingCounts)
          : undefined,
        "findingBenefits": obj.findingBenefits
          ? model.SqlTuningAdvisorTaskSummaryFindingBenefits.getDeserializedJsonObj(
              obj.findingBenefits
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
