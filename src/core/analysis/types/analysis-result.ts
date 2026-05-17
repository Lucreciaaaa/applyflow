export type RawLLMAnalysisResponse = unknown;

type ActionableFix = {
  issue: string;
  fix: string;
  priority: "high" | "medium" | "low";
};

export type AnalysisResult = {
  matchScore: number;

  summary: string;

  strengths: string[];

  missingSkills: string[];

  redFlags: string[];

  actionableFixes: ActionableFix[];
};

export type EnrichedAnalysisResult = AnalysisResult & {
  metadata: {
    generatedAt: Date;
    model: string;
    analysisVersion: string;
  };
};
