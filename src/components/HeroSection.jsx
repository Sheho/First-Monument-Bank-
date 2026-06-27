import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { AnimatedBadge } from "./AnimatedBadge";

export function HeroSection({
  badgeIcon,
  badgeText,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  subtitle,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  illustration: Illustration
}) {
  const navigate = useNavigate();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="w-full relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[var(--color-bank-border)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 text-center lg:text-left"
        >
          {badgeText && (
            <div className="mb-8">
              <AnimatedBadge icon={badgeIcon} text={badgeText} />
            </div>
          )}
          <motion.h1 variants={fadeInUp} className="text-2xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight text-slate-900">
            {titlePrefix} {titleHighlight && <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">{titleHighlight}</span>} {titleSuffix}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm lg:text-base text-[var(--color-bank-text-muted)] mb-8 max-w-2xl mx-auto lg:mx-0">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {primaryButtonText && (
              <Button size="sm" className="sm:w-auto transform hover:scale-105 transition-transform" onClick={() => primaryButtonAction ? primaryButtonAction(navigate) : null}>
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button size="sm" variant="secondary" className="sm:w-auto transform hover:scale-105 transition-transform" onClick={() => secondaryButtonAction ? secondaryButtonAction(navigate) : null}>
                {secondaryButtonText}
              </Button>
            )}
          </motion.div>
        </motion.div>

        {Illustration && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md lg:w-[450px]"
          >
            <Illustration />
          </motion.div>
        )}
      </div>
    </section>
  );
}
