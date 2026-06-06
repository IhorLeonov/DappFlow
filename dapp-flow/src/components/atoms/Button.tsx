import Link from "next/link";

import { cn } from "@/src/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outlined";
type ButtonSize = "sm" | "md";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  rel?: string;
  size?: ButtonSize;
  target?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  "aria-label"?: string;
};

export function Button({
  children,
  className,
  disabled = false,
  href,
  rel,
  size = "md",
  target,
  type = "button",
  variant = "primary",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center border text-center font-bold transition cursor-pointer",
    "focus-visible:outline-df-accent focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",

    variant === "primary" &&
      "border-df-primary bg-df-primary text-df-on-bright hover:border-df-accent hover:bg-df-accent hover:text-df-on-bright",

    variant === "secondary" &&
      "border-df-accent bg-df-accent text-df-on-bright hover:border-df-primary hover:bg-df-primary hover:text-df-on-bright",

    variant === "outlined" &&
      "border-df-border-muted bg-df-surface text-df-text hover:border-df-danger hover:text-df-danger-soft",

    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-3 text-sm",

    disabled && "pointer-events-none opacity-50 cursor-default",
    className,
  );

  if (href) {
    return (
      <Link
        aria-disabled={disabled || undefined}
        aria-label={ariaLabel}
        className={classes}
        href={href}
        rel={target === "_blank" ? (rel ?? "noreferrer") : rel}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
