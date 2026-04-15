import { Priority } from "@/lib/data/dashboard/priorities/priorities.types";

export const priorityStyles: Record<Priority["type"], string> = {
  follow_up: "border-red-500 bg-red-500/10 text-red-200",
  interview: "border-purple-500 bg-purple-500/10 text-purple-200",
  warning: "border-orange-500 bg-orange-500/10 text-orange-200",
};
