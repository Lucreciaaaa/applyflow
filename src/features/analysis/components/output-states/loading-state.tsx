import Card from "@/components/shared/card";
import { Loader2 } from "lucide-react";

const LoadingState = () => {
  // TODO : Improve perceived loading exp
  return (
    <Card className="flex flex-2 items-center justify-center">
      <div role="status" className="flex flex-col items-center gap-4 text-center">
        <Loader2 className="h-10 w-10 animate-spin text-emerald-500" />

        <div className="space-y-1">
          <p className="font-medium text-white">Analyzing your profile</p>
          <p className="text-sm text-gray-400">Matching your CV with the job requirements...</p>
        </div>
      </div>
    </Card>
  );
};

export default LoadingState;
