import { runAnalysis } from "@/core/analysis/services/run-analysis";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const result = await runAnalysis(payload);

    return Response.json(result);
  } catch (err) {
    return Response.json({ error: "Analysis failed" }, { status: 500 });
  }
}
