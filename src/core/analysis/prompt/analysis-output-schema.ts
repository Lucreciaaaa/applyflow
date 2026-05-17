export const ANALYSIS_OUTPUT_SCHEMA = `
Return ONLY a valid JSON object.

{
  "matchScore": "[integer 0-100] 0-30 very poor fit | 31-55 weak fit | 56-74 partial fit | 75-89 strong fit | 90-100 excellent fit",

  "summary": "2-3 sentences max. Factual recruiter-style assessment. MUST use 2nd person ('you'). No motivational language.",

  "strengths": ["string[] — evidence-based strengths (max 5 items)"],

  "missingSkills": ["string[] — required skills not demonstrated (max 6 items). Missing evidence = not demonstrated, not failure."],

  "redFlags": ["string[] — ONLY verified hiring risks (max 5 items). Unverifiable critical skills may be listed as risk."],

  "actionableFixes": [
    {
      "issue": "specific problem identified in your profile vs job",
      "fix": "concrete action YOU can take (rewrite, add, adjust, emphasize). MUST be in 2nd person.",
      "priority": "high | medium | low"
    }
  ]
}

STRICT RULES:
- output ONLY valid JSON
- no markdown, no explanation, no extra text
- always return at least 1 actionableFix (use low priority if strong candidate)
- do not invent experience or skills
`;
