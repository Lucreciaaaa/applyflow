import { z } from "zod";

export const AnalysisResultSchema = z.object({
  matchScore: z.preprocess(
    (val) => (typeof val === "string" ? parseInt(val, 10) : val),
    z.number().min(0).max(100),
  ),
  summary: z.string(),
  strengths: z.array(z.string()).max(5),

  missingSkills: z.array(z.string()).max(6),

  redFlags: z.array(z.string()).max(5),

  actionableFixes: z
    .array(
      z.object({
        issue: z.string(),
        fix: z.string(),
        priority: z.enum(["high", "medium", "low"]),
      }),
    )
    .min(1),
});

export type AnalysisResult = z.infer<typeof AnalysisResultSchema>;
