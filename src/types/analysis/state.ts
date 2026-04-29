export type AnalysisResult = {
  matchScore: number;
  missingSkills: string[];
  redFlags: string[];
  actionableFixes: {
    issue: string;
    fix: string;
    priority: "high" | "medium" | "low";
  }[];
};

export type AnalysisState =
  | { status: "idle" }
  | { status: "loading" }
  | {
      status: "success";
      data: AnalysisResult;
    }
  | { status: "error"; error: string };
