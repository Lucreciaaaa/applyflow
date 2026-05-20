import { extractJson } from "../utils/extract-json";

export function parseAndRepair(raw: string): unknown {
  const extracted = extractJson(raw);

  if (!extracted) return null;

  try {
    return JSON.parse(extracted);
  } catch {
    // repair attempt 1: remove trailing commas
    const cleaned = extracted.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");

    try {
      return JSON.parse(cleaned);
    } catch {
      return null;
    }
  }
}
