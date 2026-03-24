import * as React from "react";
import { cn } from "../lib/utils";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * A component that hides its children visually but keeps them accessible to screen readers.
 */
export const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("sr-only", className)}
        {...props}
      />
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";
