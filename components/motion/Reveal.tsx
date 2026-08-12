import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  eager = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  eager?: boolean;
}) {
  const style = eager || delay === 0 ? undefined : { animationDelay: `${delay}s` };
  return <div className={`${eager ? "" : "reveal-lite"} ${className}`.trim()} style={style}>{children}</div>;
}
