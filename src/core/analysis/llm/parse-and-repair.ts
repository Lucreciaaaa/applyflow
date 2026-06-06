import { extractJson } from "../utils/extract-json";

import { logger } from "@/core/shared/logger";

export function parseAndRepair(raw: string): unknown {
  const extracted = extractJson(raw);

  if (!extracted) {
    logger.debug("No JSON found in model response");
    return null;
  }

  try {
    return JSON.parse(extracted);
  } catch {
    logger.debug("Invalid JSON after extraction");
    return null;
  }
}
