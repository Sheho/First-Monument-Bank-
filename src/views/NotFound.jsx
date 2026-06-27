import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bank-bg)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96  rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px]  rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl border border-[var(--color-bank-border)] p-6 md:p-8 md:p-12 max-w-lg w-full text-center relative z-10"
      >
        <div className="w-20 h-20 mx-auto  rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
          <ShieldAlert className="w-10 h-10 text-blue-600" />
        </div>
        
        <h1 className="text-2xl md:text-3xl md:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 bg-gradient-to-r from-blue-600 to-blue-800 mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-[var(--color-bank-text-muted)] mb-8 leading-relaxed">
          The page you are looking for has either been moved, deleted, or never existed in the First Monument Bank system.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className=" sm:w-auto flex items-center justify-center gap-2 border-blue-500/30 text-blue-600 hover:" onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Button>
          <Link to="/" className="w-full sm:w-auto">
            <Button className=" flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-600 hover:to-blue-800 shadow-[0_0_20px_rgba(79,70,229,0.3)] border-none">
              <Home className="w-4 h-4" /> Return Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}


