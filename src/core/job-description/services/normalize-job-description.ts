import { COMMON_STOPWORDS } from "@/core/shared/constants/stopwords";

import { NormalizedJobDescription } from "../types/normalized-job-description";
import { HiringContext } from "@/core/analysis/types/analysis-prompt-payload";

function sanitize(text: string): string {
  return text.replace(/\r/g, "").replace(/\t/g, " ").replace(/\s+/g, " ").trim();
}

export function detectSeniority(
  text: string,
): "junior" | "mid" | "senior" | "lead" | "manager" | "director" | "vp" | "c-level" | undefined {
  if (text.includes("c-level") || text.includes("chief")) return "c-level";
  if (text.includes("vp") || text.includes("vice president")) return "vp";
  if (text.includes("director") || text.includes("head of")) return "director";
  if (text.includes("manager")) return "manager";

  if (text.includes("lead") || text.includes("tech lead") || text.includes("engineering lead"))
    return "lead";

  if (text.includes("senior") || text.includes("sr.")) return "senior";

  if (text.includes("junior") || text.includes("entry") || text.includes("graduate"))
    return "junior";

  return undefined;
}

export function extractCompanyType(text: string): HiringContext | undefined {
  if (text.includes("startup")) return "startup";

  if (text.includes("scale-up") || text.includes("fast-growing")) {
    return "scale-up";
  }

  if (text.includes("enterprise") || text.includes("large company")) {
    return "enterprise";
  }

  if (text.includes("fintech")) return "fintech";
  if (text.includes("saas")) return "saas";

  return "general";
}

// skills (signal-based, not ontology)
function extractSkills(text: string): string[] {
  const words = text.match(/\b[a-z][a-z0-9+#.-]{3,}\b/g) || [];

  const freq = new Map<string, number>();

  for (const w of words) {
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }

  return Array.from(freq.entries())
    .filter(([word, count]) => {
      return count >= 2 && word.length >= 4 && !COMMON_STOPWORDS.has(word);
    })
    .map(([word]) => word)
    .slice(0, 25);
}

export function extractHiringSignals(text: string): string[] {
  const signals: string[] = [];

  if (text.includes("remote")) signals.push("remote");
  if (text.includes("hybrid")) signals.push("hybrid");
  if (text.includes("on-site") || text.includes("onsite")) signals.push("onsite");

  if (text.includes("fast-paced") || text.includes("high growth")) {
    signals.push("fast-paced");
  }

  if (text.includes("startup")) signals.push("startup-culture");
  if (text.includes("ownership")) signals.push("ownership");
  if (text.includes("autonomy")) signals.push("autonomy");
  if (text.includes("agile")) signals.push("agile");

  if (text.includes("cross-functional")) {
    signals.push("cross-functional");
  }

  if (text.includes("product-driven")) {
    signals.push("product-driven");
  }

  if (text.includes("data-driven")) {
    signals.push("data-driven");
  }

  if (text.includes("scale") || text.includes("scaling")) {
    signals.push("scaling");
  }

  return signals;
}

export function normalizeJobDescription(jd: string): NormalizedJobDescription {
  const clean = sanitize(jd.toLowerCase());

  return {
    rawText: clean,
    requiredSkills: extractSkills(clean),
    seniority: detectSeniority(clean),
    companyType: extractCompanyType(clean),
    hiringSignals: extractHiringSignals(clean),
  };
}
