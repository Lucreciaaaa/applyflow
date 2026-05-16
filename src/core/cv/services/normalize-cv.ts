import { ParsedCv } from "../types/parsed-cv";
import { NormalizedCv } from "../types/normalized-cv";

const COMMON_STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "a",
  "an",
  "to",
  "in",
  "on",
  "of",
  "at",
  "by",
  "from",
  "as",
  "is",
  "are",
  "was",
  "were",

  // CV noise
  "experience",
  "education",
  "skills",
  "projects",
  "work",
  "team",
  "responsible",
  "responsibilities",
  "developer",
  "engineer",
  "software",
]);

// llm ready text construction
function buildLlmReadyText(parsedCv: ParsedCv): string {
  const { sections } = parsedCv;

  return [
    "=== EXPERIENCE ===",
    sections.experience ?? "",

    "=== EDUCATION ===",
    sections.education ?? "",

    "=== SKILLS ===",
    sections.skills ?? "",

    "=== PROJECTS ===",
    sections.projects ?? "",
  ]
    .filter((s) => s.trim().length > 0)
    .join("\n\n")
    .trim();
}

// XP estimation
function estimateExperience(parsedCv: ParsedCv): number | undefined {
  const text = parsedCv.rawText.toLowerCase();

  const match = text.match(/(\d+)\+?\s*(years|yrs|year|ans|années)/i);

  if (!match) return undefined;

  const value = parseInt(match[1], 10);

  if (Number.isNaN(value)) return undefined;

  return Math.min(value, 40);
}

// skill extraction (signal-based)
function extractSkills(parsedCv: ParsedCv): string[] {
  const text = parsedCv.rawText.toLowerCase();

  const words = text.match(/\b[a-z][a-z0-9+#.-]{2,}\b/g) || [];

  const freq = new Map<string, number>();

  for (const w of words) {
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }

  const filtered = Array.from(freq.entries())
    .filter(([word, count]) => {
      return count >= 2 && word.length >= 4 && !COMMON_STOPWORDS.has(word);
    })
    .map(([word]) => word);

  return filtered.slice(0, 40);
}

export function normalizeCv(parsedCv: ParsedCv): NormalizedCv {
  const llmReadyText = buildLlmReadyText(parsedCv);

  const extractedSkills = extractSkills(parsedCv);

  const estimatedYearsExperience = estimateExperience(parsedCv);

  return {
    llmReadyText,
    extractedSkills,
    estimatedYearsExperience,
  };
}
