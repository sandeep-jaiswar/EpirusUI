import * as React from "react";
import { cn } from "../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-white/40 backdrop-blur-md border border-outline-variant/10 shadow-sm",
      outline: "border-2 border-outline-variant/20",
      ghost: "bg-transparent",
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-xl p-6 transition-all", variants[variant], className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
