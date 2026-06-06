import { callOpenRouter } from "@/core/shared/ai/openrouter";
import { MODELS } from "./model-fallback";
import { parseAndRepair } from "./parse-and-repair";
import { AnalysisResultSchema } from "../schemas/analysis-result-schema";
import { logger } from "@/core/shared/logger";

export async function analyzeWithRetry(prompt: string) {
  let lastError: string | null = null;

  logger.info("Starting analysis", {
    promptLength: prompt.length,
    modelsAvailable: MODELS.length,
  });

  for (let attempt = 0; attempt < MODELS.length; attempt++) {
    const model = MODELS[attempt];

    logger.debug(`Attempt ${attempt + 1}/${MODELS.length}`, { model });

    try {
      const raw = await callOpenRouter(prompt, model);

      logger.debug("Model response received", { length: raw.length });

      const parsed = parseAndRepair(raw);

      if (!parsed) {
        lastError = "parse_failed";
        continue;
      }

      const validated = AnalysisResultSchema.safeParse(parsed);

      if (validated.success) {
        logger.info("Analysis succeeded", { model });
        return validated.data;
      }

      lastError = "schema_invalid";
      logger.warn("Schema validation failed", { model, issues: validated.error?.issues });
    } catch (err) {
      const errorDetail = err instanceof Error ? { message: err.message, name: err.name, cause: err.cause } : String(err);
      logger.error("Model call failed", { model, error: errorDetail });
    }
  }

  throw new Error(`Analysis failed: ${lastError}`);
}
