"use client";

import { useState } from "react";

import AnalysisInput from "./analysis-input";
import AnalysisOutput from "./analysis-ouput";

import { AnalysisState } from "@/types/analysis/state";

const AnalysisContainer = () => {
  const [state, setState] = useState<AnalysisState>({
    status: "success",
    data: {
      matchScore: 58,
      missingSkills: ["Docker", "Kubernetes", "GraphQL"],
      redFlags: [],
      actionableFixes: [{ issue: "No testing", fix: "Add unit tests", priority: "high" }],
    },
  });

  return (
    <div className="flex flex-row gap-6">
      <AnalysisInput
        disabled={state.status === "loading"}
        onSubmit={() => setState({ status: "loading" })}
      />
      <AnalysisOutput state={state} />
    </div>
  );
};
export default AnalysisContainer;
