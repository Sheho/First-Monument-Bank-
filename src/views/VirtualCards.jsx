import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { CreditCard, Eye, PlusCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function VirtualCards() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer} 
      className="space-y-8"
    >
      <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Virtual Cards</h1>
          <p className="text-[var(--color-bank-text-muted)]">Manage your secure, digital-only cards for safe online shopping.</p>
        </div>
        <Button className="transform hover:scale-105 transition-transform duration-300">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create New Card
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.05, rotateY: 5 }} className="relative group perspective-[1000px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-800 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <Card className="relative h-full border-0 bg-gradient-to-br from-[#1a1b26] to-[#121214] transform-style-3d shadow-2xl">
            <CardContent className="p-6 h-full flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-start">
                <CreditCard className="w-8 h-8 text-slate-600" />
                <span className="px-2 py-1  text-green-400 text-xs rounded-md font-medium border border-green-500/20">Active</span>
              </div>
              <div className="mt-8 space-y-4">
                <p className="font-mono text-xl tracking-widest text-slate-600">•••• •••• •••• 4281</p>
                <div className="flex justify-between text-sm text-[var(--color-bank-text-muted)] font-mono">
                  <span>EXP 12/28</span>
                  <span>CVC •••</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs text-[var(--color-bank-text-muted)]">Card Name</p>
                  <p className="text-sm font-medium text-slate-900">Online Subscriptions</p>
                </div>
                <Button variant="ghost" size="icon" aria-label="View virtual card details" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-transform">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.05, rotateY: 5 }} className="relative group perspective-[1000px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
          <Card className="relative h-full border-0 bg-gradient-to-br from-[#1a1b26] to-[#121214] transform-style-3d shadow-2xl">
            <CardContent className="p-6 h-full flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-start">
                <CreditCard className="w-8 h-8 text-slate-600" />
                <span className="px-2 py-1 bg-[var(--color-bank-primary)]/20 text-blue-400 text-xs rounded-md font-medium border border-blue-500/20">Single-Use</span>
              </div>
              <div className="mt-8 space-y-4">
                <p className="font-mono text-xl tracking-widest text-slate-600">•••• •••• •••• 9920</p>
                <div className="flex justify-between text-sm text-[var(--color-bank-text-muted)] font-mono">
                  <span>EXP 06/26</span>
                  <span>CVC •••</span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs text-[var(--color-bank-text-muted)]">Card Name</p>
                  <p className="text-sm font-medium text-slate-900">Amazon Purchase</p>
                </div>
                <Button variant="ghost" size="icon" aria-label="View virtual card details" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-transform">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Info Card */}
        <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }}>
          <Card className="bg-[rgba(255,255,255,0.02)] border-dashed border-2 flex flex-col items-center justify-center text-center p-6 hover:border-[var(--color-bank-primary)]/50 transition-colors cursor-pointer h-full">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-[var(--color-bank-surface)] rounded-full flex items-center justify-center mb-4"
            >
              <ShieldCheck className="w-6 h-6 text-[var(--color-bank-primary)]" />
            </motion.div>
            <h3 className="font-semibold mb-2">Why Virtual Cards?</h3>
            <p className="text-sm text-[var(--color-bank-text-muted)]">Keep your real card number safe from data breaches. Generate cards instantly and freeze them anytime.</p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
