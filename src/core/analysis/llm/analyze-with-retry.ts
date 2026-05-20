import { callOpenRouter } from "@/core/shared/ai/openrouter";

import { MODELS } from "./model-fallback";

import { parseAndRepair } from "./parse-and-repair";

import { AnalysisResultSchema } from "../schemas/analysis-result-schema";

export async function analyzeWithRetry(prompt: string) {
  let lastError: string | null = null;

  const models = [MODELS.primary, MODELS.fallback, MODELS.strict];

  for (let attempt = 0; attempt < models.length; attempt++) {
    const model = models[attempt];

    try {
      const raw = await callOpenRouter(prompt, model);

      const parsed = parseAndRepair(raw);

      if (!parsed) {
        lastError = "parse_failed";
        continue;
      }

      const validated = AnalysisResultSchema.safeParse(parsed);

      if (validated.success) {
        return validated.data;
      }

      lastError = "schema_invalid";
    } catch {
      lastError = "provider_failure";
    }
  }

  throw new Error(`Analysis failed: ${lastError}`);
}
