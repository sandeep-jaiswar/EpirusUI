import * as React from "react";
import { cn } from "../lib/utils";
import { Label } from "./Label";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id: providedId, ...props }, ref) => {
    const generatedId = React.useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;

    return (
      <div className="space-y-2 w-full">
        {label && (
          <Label htmlFor={id}>
            {label}
          </Label>
        )}
        <input
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full bg-surface-low border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-4 transition-all text-sm placeholder:text-zinc-400 outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            error && "bg-red-50 border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-[10px] text-red-600 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
