import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "text-card-foreground rounded-xl border border-emerald-900/30 bg-gray-950/70 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
