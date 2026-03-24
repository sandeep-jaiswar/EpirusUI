import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../lib/utils";
import { VisuallyHidden } from "./VisuallyHidden";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-zinc-800",
      ghost: "bg-surface-high text-primary hover:bg-surface-highest",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-8 py-3 text-sm",
      lg: "px-10 py-4 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading || props.disabled}
        aria-busy={isLoading}
        aria-disabled={isLoading || props.disabled}
        type={props.type || "button"}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          variants[variant],
          sizes[size],
          (isLoading || props.disabled) && "opacity-70 cursor-not-allowed",
          isLoading && "cursor-wait",
          className
        )}
        {...props}
      >
        {isLoading && (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
            </svg>
            <VisuallyHidden>Loading</VisuallyHidden>
          </>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
