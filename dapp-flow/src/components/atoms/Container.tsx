import type { ReactNode } from "react";

import { cn } from "@/src/lib/cn";

type ContainerElement = "div" | "footer" | "header" | "section";

type ContainerProps = {
  as?: ContainerElement;
  children: ReactNode;
  className?: string;
};

export function Container({ as: Component = "div", children, className }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </Component>
  );
}
