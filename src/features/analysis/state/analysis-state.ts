import { AnalysisResult } from "@/core/analysis/types/analysis-result";

export type AnalysisState =
  | { status: "idle" }
  | { status: "loading" }
  | {
      status: "success";
      data: AnalysisResult;
    }
  | { status: "error"; error: string };
