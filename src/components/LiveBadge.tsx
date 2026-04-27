import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const LiveBadge = ({ children, className }: LiveBadgeProps) => (
  <div
    className={cn(
      "inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-white/40 backdrop-blur-sm uppercase text-[11px] font-extrabold tracking-[0.18em] text-white",
      className
    )}
  >
    <span className="relative flex size-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
      <span className="relative inline-flex size-2 rounded-full bg-primary" />
    </span>
    {children}
  </div>
);
