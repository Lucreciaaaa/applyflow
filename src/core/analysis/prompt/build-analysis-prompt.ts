// instruction + context + business constraints

import { AnalysisPromptPayload } from "../types/analysis-prompt-payload";
import { ANALYSIS_OUTPUT_SCHEMA } from "./analysis-output-schema";

export function buildAnalysisPrompt(payload: AnalysisPromptPayload): string {
  return `
TASK:
Evaluate how well the candidate matches the job description.

ANALYSIS DIMENSIONS:
- technical alignment (skills match vs job requirements)
- seniority fit (experience level vs autonomy and responsibility expectations)
- business context fit (industry, domain, company type alignment)
- ATS compatibility (keywords, formatting, structure)
- missing requirements (critical gaps vs job requirements)
- hiring risks (factors that may prevent hiring decision)
- positioning quality (how well the CV argues the candidacy)

INTERPRETATION RULES:
- missing evidence = not demonstrated, not automatic weakness
- only flag red flags when there is strong or implicit evidence
- unverifiable skills should be labeled carefully, not assumed as failure
- always prioritize realistic hiring decisions

OUTPUT CONSTRAINTS:
- strengths: max 5
- missingSkills: max 6
- redFlags: max 5
- actionableFixes: at least 1 (use low priority if candidate is strong)

JOB DESCRIPTION:
${JSON.stringify(payload.jobDescription, null, 2)}

CANDIDATE:
${JSON.stringify(payload.cv, null, 2)}

HIRING CONTEXT:
${payload.hiringContext ?? "infer from job description"}

OUTPUT FORMAT:
${ANALYSIS_OUTPUT_SCHEMA}
`;
}
