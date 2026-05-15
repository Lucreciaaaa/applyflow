import { HiringContext } from "@/core/analysis/types/analysis-prompt-payload";

export type NormalizedJobDescription = {
  rawText: string;

  extractedSkills: string[];

  responsibilities: string[];

  seniority?: "junior" | "mid" | "senior" | "lead" | "manager" | "director" | "vp" | "c-level";

  keywords: string[];

  companyType?: HiringContext;
};
