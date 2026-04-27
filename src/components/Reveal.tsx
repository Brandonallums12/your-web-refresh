import { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

type Direction = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  /** Delay in ms before the animation begins. */
  delay?: number;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

const HIDDEN: Record<Direction, string> = {
  up: "opacity-0 translate-y-10 scale-[0.98]",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  scale: "opacity-0 scale-90",
};

const VISIBLE = "opacity-100 translate-y-0 translate-x-0 scale-100";

export const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  style,
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const merged: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div
      ref={ref}
      style={merged}
      className={`motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        inView ? VISIBLE : HIDDEN[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
};
