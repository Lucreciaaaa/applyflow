"use client";

import { AnalysisState } from "@/types/analysis/state";
import { useState } from "react";
import AnalysisInput from "./analysis-input";
import AnalysisOutput from "./analysis-ouput";

const AnalysisContainer = () => {
  const [state, setState] = useState<AnalysisState>({ status: "idle" });

  return (
    <div className="flex flex-row gap-6">
      <AnalysisInput
        disabled={state.status === "loading"}
        onSubmit={() => setState({ status: "loading" })}
      />
      <AnalysisOutput />
    </div>
  );
};
export default AnalysisContainer;
