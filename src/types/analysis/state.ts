import { AnalysisResult } from "@/features/analysis/domain/result";

export type AnalysisState =
  | { status: "idle" }
  | { status: "loading" }
  | {
      status: "success";
      data: AnalysisResult;
    }
  | { status: "error"; error: string };
