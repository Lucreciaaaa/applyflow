"use client";

import Card from "@/components/shared/card";
import { Sparkles, Upload } from "lucide-react";

type InputProps = {
  onSubmit: () => void;
  disabled: boolean;
};

const AnalysisInput = ({ disabled, onSubmit }: InputProps) => {
  /* TODO :
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState(""); */

  return (
    <Card className="flex flex-1 flex-col gap-6">
      {/* Cardheader */}
      <div className="flex flex-col items-start gap-1.5">
        <div className="flex items-center gap-2">
          <Sparkles color="rgb(0, 210, 145)" size={20} strokeWidth={2} />
          <h4 className="font-semibold text-white">Analysis Input</h4>
        </div>
        <p className="text-sm text-emerald-100/70">Upload your CV and paste the job description</p>
      </div>

      {/* 2. Upload Zone */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cv-upload" className="text-sm font-medium text-emerald-100/80">
          CV / Resume
        </label>

        <div className="relative flex min-h-40 flex-col items-center justify-center rounded-xl border-2 border-dashed border-emerald-500/20 bg-emerald-500/5 transition-all focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400 hover:border-emerald-500/40">
          <input
            type="file"
            id="cv-upload"
            className="absolute inset-0 z-10 cursor-pointer opacity-0"
            accept=".pdf,.doc,.docx"
          />
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <Upload size={24} color="rgb(0, 210, 145)" />
            <div className="space-y-1">
              <p className="text-sm text-emerald-100/70">
                Drag & drop your CV here or click to browse
              </p>
              <p className="text-xs text-emerald-100/50">PDF, DOC, DOCX (Max 5MB)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Description Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="job-description" className="text-sm font-medium text-emerald-100/80">
          Job Description
        </label>

        <textarea
          id="job-description"
          rows={8}
          placeholder={`Paste the full job description here...\n\nInclude:\n• Job title\n• Required skills\n• Responsibilities\n• Qualifications`}
          className="w-full rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-white placeholder:text-emerald-100/30 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none"
        />
      </div>

      {/* CTA : Analyze CV */}
      <button
        aria-busy={disabled}
        aria-label="Analyze CV with AI"
        onClick={onSubmit}
        disabled={disabled}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 font-medium text-white transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Sparkles size={18} color="white" strokeWidth={2} />
        <span>{disabled ? "Analyzing..." : "Analyze CV"}</span>
      </button>
    </Card>
  );
};
export default AnalysisInput;
