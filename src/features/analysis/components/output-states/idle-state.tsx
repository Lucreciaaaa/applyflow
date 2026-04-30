import Card from "@/components/shared/card";
import { Target } from "lucide-react";

const IdleState = () => {
  return (
    <Card
      aria-labelledby="analysis-title"
      className="flex flex-2 flex-col items-center justify-center gap-6"
    >
      <div className="space-y-4 p-8 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10">
          <Target aria-hidden color="rgb(0, 210, 145)" size={32} strokeWidth={2} />
        </div>
        <h3 id="analysis-title" className="text-xl font-medium text-white">
          Ready to analyze
        </h3>
        <p className="mx-auto max-w-md wrap-break-word text-emerald-100">
          Get AI-powered insights to improve your chances of getting interviews.
        </p>
      </div>
    </Card>
  );
};

export default IdleState;
