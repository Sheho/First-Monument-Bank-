import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-[var(--color-bank-border)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-slate-900 ring-offset-[var(--color-bank-bg)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-bank-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bank-primary)] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
