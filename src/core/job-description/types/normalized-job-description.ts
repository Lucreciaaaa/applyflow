import { HiringContext } from "@/core/analysis/types/analysis-prompt-payload";

export type NormalizedJobDescription = {
  rawText: string;

  requiredSkills: string[];

  seniority?: "junior" | "mid" | "senior" | "lead" | "manager" | "director" | "vp" | "c-level";

  companyType?: HiringContext;

  hiringSignals: string[]; // environment, pace and corporate culture
};
