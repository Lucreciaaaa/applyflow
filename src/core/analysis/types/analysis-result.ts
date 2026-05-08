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
