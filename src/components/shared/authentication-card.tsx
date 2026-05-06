import { Zap } from "lucide-react";

import { AuthenticationForm } from "./authentication/form";

type Props = {
  hasAnAccount: boolean;
};

const AuthenticationCard = ({ hasAnAccount }: Props) => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6 rounded-xl border border-emerald-500/20 bg-black/40 p-6 backdrop-blur-xl">
      {/* Card Header */}
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center rounded-xl bg-[#00b37e] p-2">
            <Zap size={24} color="white" strokeWidth={2} />
          </div>
          <h1 className="text-3xl font-semibold text-white">ApplyFlow</h1>
        </div>
        <h4 className="leading-none font-medium text-white">
          {hasAnAccount ? "Welcome back" : "Create your account"}
        </h4>
        <p className="text-emerald-100/70">
          {hasAnAccount
            ? "Sign in to analyze your CV and get more interviews"
            : "Start understanding why you're not getting interviews"}
        </p>
      </div>

      {/* Form */}
      <AuthenticationForm hasAnAccount={hasAnAccount} />

      {/* Card Header */}
      <div className="space-y-4">
        <button className="focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-2 whitespace-nowrap text-white transition-all hover:from-emerald-600 hover:to-emerald-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50">
          {!hasAnAccount ? "Create account" : "Sign in"}
        </button>
        <p className="text-center text-sm text-emerald-100/60">
          Already have an account ?{" "}
          <a href="/login" className="text-emerald-400 underline hover:text-emerald-300">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthenticationCard;
