import { NormalizedCv } from "@/core/cv/types/normalized-cv";
import { NormalizedJobDescription } from "@/core/job-description/types/normalized-job-description";

export type HiringContext = "startup" | "scale-up" | "enterprise" | "fintech" | "saas" | "general";

export type AnalysisPromptPayload = {
  cv: NormalizedCv;
  jobDescription: NormalizedJobDescription;
  hiringContext: HiringContext;
};
