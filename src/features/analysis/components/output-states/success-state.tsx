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
    aria-label={message}
  >
    <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
    {message}
  </div>
);

const SuccessState = ({ data }: Props) => {
  const missingSkills = data.missingSkills ?? [];
  const redFlags = data.redFlags ?? [];
  const actionableFixes = data.actionableFixes ?? [];

  return (
    <Card className="flex flex-2 flex-col gap-4 p-6 text-white">
      {/* Match Score */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-emerald-400" aria-hidden="true" />
          <h3 className="text-xl font-semibold">Match Score: {data.matchScore}%</h3>
        </div>
        <div
          className="h-3 w-full overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-valuenow={data.matchScore}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Match score: ${data.matchScore} out of 100`}
        >
          <div
            className={`h-full rounded-full transition-all duration-500 ${scoreColor(data.matchScore)}`}
            style={{ width: `${data.matchScore}%` }}
          />
        </div>
      </div>

      {/* Missing Skills */}
      <section aria-labelledby="missing-skills-title">
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-yellow-400" aria-hidden="true" />
          <h4 id="missing-skills-title" className="text-lg font-semibold">
            Missing Skills
          </h4>
        </div>
        {missingSkills.length === 0 ? (
          <EmptySection message="No major missing skills detected" />
        ) : (
          <ul aria-label="Missing skills list" className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <li key={i} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Red Flags */}
      <section aria-labelledby="red-flags-title">
        <div className="mb-3 flex items-center gap-2">
          <Ban className="h-6 w-6 text-red-400" aria-hidden="true" />
          <h4 id="red-flags-title" className="text-lg font-semibold">
            Red Flags
          </h4>
        </div>
        {redFlags.length === 0 ? (
          <EmptySection message="No red flags detected." />
        ) : (
          <ul aria-label="Red flags list" className="flex flex-col gap-2">
            {redFlags.map((flag, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-200"
              >
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                {flag}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Actionable Fixes */}
      <section aria-labelledby="actionables-title">
        <div className="mb-3 flex items-center gap-2">
          <Wrench className="h-6 w-6 text-emerald-400" aria-hidden="true" />
          <h4 id="actionables-title" className="text-lg font-semibold">
            Actionable Fixes
          </h4>
        </div>
        <ul aria-label="Actionable fixes list" className="flex flex-col gap-3">
          {actionableFixes.map((item, i) => {
            const priority = priorityConfig[item.priority] ?? priorityConfig["low"];
            return (
              <li key={`${item.issue}-${i}`} className="rounded-lg bg-white/5 p-3 text-sm">
                <dl>
                  <dt className="font-medium text-white">{item.issue}</dt>
                  <dd className="mt-1 text-white/70">{item.fix}</dd>
                </dl>
                <span
                  aria-label={priority.label}
                  className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${priority.className}`}
                >
                  {priority.icon}
                  {priority.label}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </Card>
  );
};

export default SuccessState;
