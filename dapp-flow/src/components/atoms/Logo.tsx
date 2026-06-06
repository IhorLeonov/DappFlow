import Link from "next/link";

import { cn } from "@/src/lib/cn";

type LogoProps = {
  className?: string;
  href?: string;
  showText?: boolean;
};

export function Logo({ className, href = "/", showText = true }: LogoProps) {
  return (
    <Link className={cn("flex items-center gap-3", className)} href={href}>
      <span className="grid size-9 place-items-center border border-df-primary bg-df-surface-strong font-mono text-sm font-bold text-df-accent">
        DF
      </span>
      {showText ? (
        <span className="text-lg font-semibold tracking-tight">DappFlow</span>
      ) : null}
    </Link>
  );
}
