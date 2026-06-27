import { motion } from "framer-motion";

export function AnimatedBadge({ icon: Icon, text, className = "" }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={fadeInUp}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--color-bank-border)] text-sm text-[var(--color-bank-primary)] font-medium ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{text}</span>
    </motion.div>
  );
}
