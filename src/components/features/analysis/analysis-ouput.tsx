"use client";

import { AnalysisState } from "@/types/analysis/state";

import ErrorState from "./output-states/error-state";
import IdleState from "./output-states/idle-state";
import LoadingState from "./output-states/loading-state";
import SuccessState from "./output-states/success-state";

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
