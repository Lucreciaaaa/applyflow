"use client";

import { AnalysisState } from "@/features/analysis/state/analysis-state";

import ErrorState from "../../../features/analysis/components/output-states/error-state";
import IdleState from "../../../features/analysis/components/output-states/idle-state";
import LoadingState from "../../../features/analysis/components/output-states/loading-state";
import SuccessState from "../../../features/analysis/components/output-states/success-state";

type OutputProps = {
  state: AnalysisState;
};

const AnalysisOutput = ({ state }: OutputProps) => {
  switch (state.status) {
    case "idle":
      return <IdleState />;

    case "loading":
      return <LoadingState />;

    case "success":
      return <SuccessState data={state.data} />;

    case "error":
      return <ErrorState message={state.error} />;

    default:
      return null;
  }
};
export default AnalysisOutput;
