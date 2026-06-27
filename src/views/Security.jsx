import { motion } from "framer-motion";
import { ShieldCheck, Building, Key, AlertCircle, Smartphone, Lock, Eye, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function Security() {
  const navigate = useNavigate();
  return (
    <div className="flex-grow flex flex-col w-full bg-slate-50">
      
      {/* Hero Section */}
      <section className="w-full relative min-h-[500px] flex items-center justify-center py-20 px-4 bg-slate-900 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" alt="Cyber Security Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
          {/* Animated Tech Grid */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold mb-6 border border-blue-500/30">
              <ShieldCheck className="w-4 h-4" /> BANK-GRADE SECURITY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
              Your security is our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">top priority</span>.
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Protecting your personal information and financial assets is not just a feature, it's our foundation. Learn how First Monument Bank uses industry-leading technology to keep your money safe 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border-none text-white font-bold py-3 px-6 text-base rounded-xl shadow-lg shadow-blue-500/30 transition-transform transform hover:scale-105" onClick={() => navigate("/contact")}>
                Report Suspicious Activity
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-bold py-3 px-6 text-base rounded-xl transition-transform transform hover:scale-105" onClick={() => navigate("/security-best-practices")}>
                Security Best Practices
              </Button>
            </div>
          </motion.div>

          {/* Right Animation */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center items-center h-[400px]">
            {/* Glowing Orbs */}
            <div className="absolute w-64 h-64 bg-blue-600/30 rounded-full blur-3xl opacity-50 animate-pulse duration-[3000ms]"></div>
            <div className="absolute w-48 h-48 bg-cyan-400/20 rounded-full blur-[80px] -translate-y-10 translate-x-10"></div>
            
            {/* Central Shield */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-48 h-48 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
              <ShieldCheck className="w-24 h-24 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              
              {/* Scan Line effect */}
              <motion.div animate={{ y: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-1 bg-blue-400/50 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></motion.div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -left-4 top-16 bg-slate-800/90 backdrop-blur border border-slate-700 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3">
              <Lock className="w-5 h-5 text-emerald-400" />
              <div className="text-sm font-bold text-white">256-bit AES</div>
            </motion.div>

            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-8 bottom-24 bg-slate-800/90 backdrop-blur border border-slate-700 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3">
              <Eye className="w-5 h-5 text-cyan-400" />
              <div className="text-sm font-bold text-white">24/7 Monitoring</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Protections */}
      <section className="w-full py-16 px-4 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 md:p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <Building className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">FDIC Insured Deposits</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              First Monument Bank is a member of the FDIC. Your deposits are insured up to $250,000 per depositor, per ownership category, protecting your funds against bank failure.
            </p>
          </div>
          <div className="p-6 md:p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Liability Protection</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If your debit or credit card is lost or stolen, you won't be held responsible for unauthorized charges if you report them promptly. We fully reimburse confirmed fraudulent transactions.
            </p>
          </div>
          <div className="p-6 md:p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <Key className="w-10 h-10 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Encryption</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We utilize 256-bit AES encryption to protect your data. Whether you are logging in from your desktop or mobile app, your connection is always secure and private.
            </p>
          </div>
        </div>
      </section>

      {/* How we protect you */}
      <section className="w-full py-16 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">How We Protect You</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200">
              <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                <Lock className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Advanced Authentication</h4>
                <p className="text-sm text-slate-600 leading-relaxed">We require Multi-Factor Authentication (MFA) for unrecognized devices and high-risk transactions. You can also log in securely using biometric data (Face ID, Touch ID) on supported mobile devices.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200">
              <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                <Eye className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">24/7 Fraud Monitoring</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Our proprietary AI fraud detection systems analyze transactions in real-time. If we spot something unusual—like an out-of-state purchase or a sudden large transfer—we will immediately freeze the transaction and text you for verification.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-slate-200">
              <div className="bg-emerald-100 p-3 rounded-xl shrink-0">
                <Smartphone className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Instant Card Controls</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Misplaced your card? You can instantly lock your physical and virtual cards directly from the mobile app. You can also set hard spending limits and restrict international or online transactions with a single tap.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Alert */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-red-50 p-6 md:p-8 md:p-10 rounded-3xl border border-red-200 flex flex-col md:flex-row gap-8 items-center">
          <AlertCircle className="w-16 h-16 text-red-600 shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-red-900 mb-3">Beware of Phishing Scams</h2>
            <p className="text-red-800 text-sm leading-relaxed mb-4">
              First Monument Bank will <strong>never</strong> contact you via phone, email, or text to ask for your password, PIN, full social security number, or one-time passcode. Fraudsters can spoof Caller ID to make it look like they are calling from the bank. 
            </p>
            <p className="text-red-800 font-bold text-sm">
              If you receive a suspicious call, hang up immediately and dial the number on the back of your card.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}


