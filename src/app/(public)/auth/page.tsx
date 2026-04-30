import { Zap } from "lucide-react";

export default function Authentication() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border border-emerald-500/20 bg-black/40 p-6 backdrop-blur-xl">
        {/* Card Header */}
        <div className="space-y-4 text-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-xl bg-[#00b37e] p-2">
              <Zap size={24} color="white" strokeWidth={2} />
            </div>
            <h1 className="text-3xl font-semibold text-white">ApplyFlow</h1>
          </div>
          <h4 className="leading-none font-medium text-white">Welcome back</h4>
          <p className="text-emerald-100/70">Sign in to analyze your CV and get more interviews</p>
        </div>
      </div>
    </div>
  );
}
