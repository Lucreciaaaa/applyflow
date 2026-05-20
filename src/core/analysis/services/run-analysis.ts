import { AnalysisPromptPayload } from "../types/analysis-prompt-payload";

import { buildAnalysisPrompt } from "../prompt/build-analysis-prompt";

import { analyzeWithRetry } from "../llm/analyze-with-retry";

export async function runAnalysis(payload: AnalysisPromptPayload) {
  const prompt = buildAnalysisPrompt(payload);
  return analyzeWithRetry(prompt);
}
