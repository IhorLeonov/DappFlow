import { cn } from "@/src/lib/cn";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-5xl font-semibold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-2xl font-semibold leading-tight", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-xl font-semibold leading-snug", className)}>
      {children}
    </h3>
  );
}

export function P({ children, className }: TypographyProps) {
  return <p className={cn("text-base leading-7 text-df-muted", className)}>{children}</p>;
}

export function SmallText({ children, className }: TypographyProps) {
  return <p className={cn("text-sm text-df-muted-strong", className)}>{children}</p>;
}

export function MonoText({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-mono text-xs text-df-accent", className)}>
      {children}
    </p>
  );
}
