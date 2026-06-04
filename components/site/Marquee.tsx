import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  speed?: "normal" | "slow";
  className?: string;
  pauseOnHover?: boolean;
};

export function Marquee({ children, reverse, speed = "normal", className, pauseOnHover }: Props) {
  const anim = reverse
    ? "animate-marquee-reverse"
    : speed === "slow"
      ? "animate-marquee-slow"
      : "animate-marquee";
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12",
          anim,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
