import { AnalysisInput } from "../types/analysis-input";

const MAX_JOB_DESCRIPTION_LENGTH = 20_000;
const MAX_CV_TEXT_LENGTH = 20_000;

const suspiciousPatterns = [
  // Basic patterns
  // TODO: Expand this list with more patterns commonly used in prompt injection attacks
  "ignore previous instructions",
  "system prompt",
  "<script>",
];

export function validateAnalysisInput(input: AnalysisInput): AnalysisInput {
  const normalizedJobDescription = input.jobDescription.trim();

  if (!normalizedJobDescription) {
    throw new Error("Job description is required");
  }

  if (normalizedJobDescription.length > MAX_JOB_DESCRIPTION_LENGTH) {
    throw new Error("Job description is too long");
  }

  for (const pattern of suspiciousPatterns) {
    if (normalizedJobDescription.toLowerCase().includes(pattern)) {
      throw new Error("Suspicious job description");
    }
  }

  if (input.cvSource.type === "raw-text") {
    if (!input.cvSource.text.trim()) {
      throw new Error("CV text is required");
    }

    if (input.cvSource.text.length > MAX_CV_TEXT_LENGTH) {
      throw new Error("CV text is too long");
    }

    return {
      ...input,
      jobDescription: normalizedJobDescription,
      cvSource: {
        ...input.cvSource,
        text: input.cvSource.text.trim(),
      },
    };
  }

  if (input.cvSource.type === "url") {
    try {
      new URL(input.cvSource.url);
    } catch {
      throw new Error("Invalid CV URL");
    }

    return {
      ...input,
      jobDescription: normalizedJobDescription,
    };
  }

  throw new Error("Invalid CV source");
}
