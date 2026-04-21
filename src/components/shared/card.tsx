import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-emerald-500/20 bg-linear-to-br from-emerald-900/80 to-black/80 p-6 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
