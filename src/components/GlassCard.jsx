import { Card } from "./ui/Card";

export function GlassCard({ children, className = "", colorClass = "from-blue-600/10 to-emerald-600/10", borderClass = "border-blue-500/20", ...props }) {
  return (
    <Card className={`glass-card shadow-2xl relative overflow-hidden group border-2 ${borderClass} ${className}`} {...props}>
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
      {children}
    </Card>
  );
}
