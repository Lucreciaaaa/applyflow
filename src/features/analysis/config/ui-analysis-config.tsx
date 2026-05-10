export const priorityConfig = {
  high: {
    label: "High priority",
    className: "bg-white/5 text-rose-400 border-l-2 border-rose-400 font-medium",
  },

  medium: {
    label: "Medium priority",
    className: "bg-white/5 text-amber-400 border-l-2 border-amber-400 font-medium",
  },

  low: {
    label: "Low priority",
    className: "bg-white/5 text-emerald-400 border-l-2 border-emerald-400 font-medium",
  },
};

export const scoreColor = (score: number) => {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-white/70";
  if (score >= 40) return "bg-white/40";
  return "bg-white/20";
};
