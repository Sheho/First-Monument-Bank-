import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Button = forwardRef(({ className, variant = "primary", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[var(--color-bank-bg)]";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white shadow-sm border-none",
    secondary: "bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 border border-slate-300 shadow-sm",
    ghost: "hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 text-[var(--color-bank-text)] hover:text-slate-900",
    danger: "bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white shadow-sm border-none",
    outline: "border border-current bg-transparent hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 hover:text-slate-900",
  };
  
  const sizes = {
    default: "h-10 px-5 py-2 text-sm rounded-xl",
    sm: "h-8 px-4 text-xs rounded-lg",
    lg: "h-11 px-6 py-2 text-base rounded-xl",
    icon: "h-10 w-10 rounded-xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
