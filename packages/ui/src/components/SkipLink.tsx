import * as React from "react";
import { cn } from "../lib/utils";

export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string;
}

/**
 * A skip link component that allows keyboard users to skip navigation and jump to the main content.
 */
export const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ className, targetId, children = "Skip to main content", ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

SkipLink.displayName = "SkipLink";
