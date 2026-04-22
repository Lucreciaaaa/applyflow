"use client";

import { AnalysisState } from "@/types/analysis/state";
import { useState } from "react";
import AnalysisInput from "./analysis-input";

const AnalysisContainer = () => {
  const [state, setState] = useState<AnalysisState>({ status: "idle" });

  return (
    <div className="grid grid-cols-2 gap-6">
      <AnalysisInput
        disabled={state.status === "loading"}
        onSubmit={() => setState({ status: "loading" })}
      />
    </div>
  );
};
export default AnalysisContainer;
