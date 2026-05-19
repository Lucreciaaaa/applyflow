import { AnalysisPromptPayload } from "../types/analysis-prompt-payload";

import { buildAnalysisPrompt } from "../prompt/build-analysis-prompt";

import { AnalysisResultSchema } from "../schemas/analysis-result-schema";

import { extractJson } from "../utils/extract-json";

const callLLM = async (prompt: string): Promise<string> => {
  // mock
  return Promise.resolve(`{
    "strengths": ["strong technical skills", "good ATS compatibility"],
    "missingSkills": ["no experience with cloud platforms", "limited leadership experience"],
    "redFlags": ["frequent job changes"]
  }`);
};

export async function runAnalysis(payload: AnalysisPromptPayload) {
  const prompt = buildAnalysisPrompt(payload);
  const raw = await callLLM(prompt);

  const extracted = extractJson(raw);

  if (!extracted) {
    throw new Error("No JSON found");
  }

  const json = JSON.parse(extracted);

  const parsed = AnalysisResultSchema.safeParse(json);

  if (!parsed.success) {
    throw new Error("Invalid analysis response");
  }

  return parsed.data;
}
