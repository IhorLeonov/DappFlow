import { cn } from "@/src/lib/cn";

type TagVariant = "accent" | "danger" | "primary" | "reward" | "muted";

type TagProps = {
  children: React.ReactNode;
  className?: string;
  variant?: TagVariant;
};

const variantClasses: Record<TagVariant, string> = {
  accent: "border-df-accent text-sm text-df-accent",
  danger:
    "border-df-danger bg-df-surface-danger text-xs font-semibold uppercase tracking-[0.2em] text-df-danger-soft",
  muted: "border-df-border-muted text-xs text-df-muted",
  primary: "border-df-primary text-xs text-df-primary",
  reward: "border-df-border-muted text-xs text-df-primary",
};

export function Tag({ children, className, variant = "primary" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex border px-3 py-1 font-mono",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
