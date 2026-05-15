import Card from "@/components/shared/card";

import { AlertTriangle, TrendingUp, Wrench, Ban, XCircle, CheckCircle } from "lucide-react";

import { AnalysisResult } from "../../../../core/analysis/types/analysis-result";

import { priorityConfig, scoreColor } from "@/features/analysis/config/ui-analysis-config";

type Props = {
  data: AnalysisResult;
};

const EmptySection = ({ message }: { message: string }) => (
  <div
    className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/40"
    role="status"
  >
    <CheckCircle className="h-4 w-4 text-white/30" />
    {message}
  </div>
);

export default function SuccessState({ data }: Props) {
  const missingSkills = data.missingSkills ?? [];
  const redFlags = data.redFlags ?? [];
  const actionableFixes = data.actionableFixes ?? [];
  const strengths = data.strengths ?? [];

  return (
    <Card className="flex flex-2 flex-col gap-8 p-6 text-white" aria-label="CV analysis results">
      {/* Match Score + Summary */}
      <section className="space-y-3" aria-labelledby="score-title">
        <header className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-white/60" />
          <h3 className="text-lg font-semibold" id="score-title">
            Match score <span className="text-white">({data.matchScore}%)</span>
          </h3>
        </header>

        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full transition-all duration-500 ${scoreColor(data.matchScore)}`}
            role="progressbar"
            aria-valuenow={data.matchScore}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Match score ${data.matchScore} percent`}
            style={{ width: `${data.matchScore}%` }}
          />
        </div>

        <p className="text-sm leading-relaxed text-white/70">{data.summary}</p>
      </section>

      {/* Strengths */}
      <section className="space-y-3" aria-labelledby="strengths-title">
        <header className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-white/60" />
          <h4 className="text-base font-medium text-white/90" id="strengths-title">
            Strengths
          </h4>
        </header>

        {strengths.length === 0 ? (
          <EmptySection message="No significant strengths identified" />
        ) : (
          <div className="flex flex-wrap gap-2">
            {strengths.map((strength, i) => (
              <span key={i} className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80">
                {strength}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Missing skills */}
      <section className="space-y-3" aria-labelledby="missing-skills-title">
        <header className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-white/60" />
          <h4 className="text-base font-medium text-white/90" id="missing-skills-title">
            Missing skills
          </h4>
        </header>

        {missingSkills.length === 0 ? (
          <EmptySection message="No major missing skills detected" />
        ) : (
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <span key={i} className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80">
                {skill}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Red Flags */}
      <section className="space-y-3" aria-labelledby="red-flags-title">
        <header className="flex items-center gap-2">
          <Ban className="h-5 w-5 text-white/60" />
          <h4 className="text-base font-medium text-white/90" id="red-flags-title">
            Red flags
          </h4>
        </header>

        {redFlags.length === 0 ? (
          <EmptySection message="No red flags detected" />
        ) : (
          <div className="space-y-2">
            {redFlags.map((flag, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/80"
              >
                <XCircle className="mt-0.5 h-4 w-4 text-rose-400" />
                {flag}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Actionable Fixes */}
      <section className="space-y-3" aria-labelledby="actionable-fixes-title">
        <header className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-white/60" />
          <h4 className="text-base font-medium text-white/90" id="actionable-fixes-title">
            Actionable fixes
          </h4>
        </header>

        <div className="space-y-3">
          {actionableFixes.map((item, i) => {
            const priority = priorityConfig[item.priority] ?? priorityConfig.low;

            return (
              <div key={`${item.issue}-${i}`} className="space-y-2 rounded-lg bg-white/5 p-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-white">{item.issue}</p>

                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${priority.className}`}
                    aria-label={priority.label}
                  >
                    {priority.label}
                  </span>
                </div>

                <p className="text-sm text-white/70">{item.fix}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Card>
  );
}
