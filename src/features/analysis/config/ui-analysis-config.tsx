import { XCircle, AlertTriangle, CheckCircle } from "lucide-react";

export const priorityConfig = {
  high: {
    label: "High priority",
    className: "bg-red-500/20 text-red-300 border border-red-500/30",
    icon: <XCircle className="h-3 w-3" aria-hidden="true" />,
  },
  medium: {
    label: "Medium priority",
    className: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    icon: <AlertTriangle className="h-3 w-3" aria-hidden="true" />,
  },
  low: {
    label: "Low priority",
    className: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
    icon: <CheckCircle className="h-3 w-3" aria-hidden="true" />,
  },
};

export const scoreColor = (score: number) => {
  if (score >= 75) return "bg-teal-400";
  if (score >= 50) return "bg-amber-400";
  return "bg-rose-500";
};
