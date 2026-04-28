import Card from "@/components/shared/card";
import { AlertTriangle } from "lucide-react";

type Props = {
  message: string;
};

const ErrorState = ({ message }: Props) => {
  return (
    <Card className="flex flex-2 flex-col items-center justify-center gap-4 p-6 text-center">
      <AlertTriangle className="h-8 w-8 text-red-500" />

      <div className="space-y-1">
        <p className="font-medium text-white">Something went wrong</p>
        <p className="text-sm text-gray-400">
          {message || "We couldn’t analyze your profile. Please try again."}
        </p>
      </div>
    </Card>
  );
};

export default ErrorState;
