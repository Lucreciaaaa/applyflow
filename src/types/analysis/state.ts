type AnalysisResult = {
  matchScore: number;
  missingSkills: string[];
  redFlags: string[];
  suggestions: string[];
};

export type AnalysisState =
  | { status: "idle" }
  | { status: "loading" }
  | {
      status: "success";
      data: AnalysisResult;
    }
  | { status: "error"; error: string };
