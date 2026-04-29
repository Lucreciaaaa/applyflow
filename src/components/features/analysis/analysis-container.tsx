"use client";

import { useState } from "react";

import AnalysisInput from "./analysis-input";
import AnalysisOutput from "./analysis-ouput";

import { AnalysisState } from "@/types/analysis/state";

const AnalysisContainer = () => {
  const [state, setState] = useState<AnalysisState>({
    status: "success",
    data: {
      matchScore: 78,
      missingSkills: ["Docker", "Kubernetes", "GraphQL"],
      redFlags: [
        "Gap d'emploi de 8 mois non expliqué",
        "Aucune expérience en management malgré le poste senior",
      ],
      actionableFixes: [
        {
          issue: "Pas de mention des tests unitaires",
          fix: "Ajouter Jest/Vitest avec un exemple de couverture de code",
          priority: "high",
        },
        {
          issue: "Résumé trop générique",
          fix: "Personnaliser l'accroche avec le nom de l'entreprise et le poste visé",
          priority: "high",
        },
        {
          issue: "Compétences Docker absentes",
          fix: "Ajouter une formation Docker si débutant, ou mentionner toute expérience de conteneurisation",
          priority: "medium",
        },
        {
          issue: "Dates de formation manquantes",
          fix: "Préciser les années d'obtention des diplômes",
          priority: "low",
        },
      ],
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
