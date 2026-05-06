import { Zap } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

const AuthCard = ({ children }: Props) => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6 rounded-xl border border-emerald-500/20 bg-black/40 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center rounded-xl bg-emerald-500 p-2">
          <Zap size={24} color="white" strokeWidth={2} />
        </div>
        <h1 className="text-3xl font-semibold text-white">ApplyFlow</h1>
      </div>
      {children}
    </div>
  );
};

export default AuthCard;
