import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { CheckCircle2, PiggyBank, Target, Clock, ChevronRight, ShieldCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function SavingsAccounts() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #10b981 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-3xl opacity-50 pointer-events-none -mt-40 -mr-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl opacity-50 pointer-events-none -mb-40 -ml-40"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-8 shadow-sm">
              <PiggyBank className="w-4 h-4" /> High-Yield & Goal Savings
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900">
              Grow your wealth <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">faster</span>.
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Reach your financial goals quicker with industry-leading yields, automated savings rules, and powerful insight tools.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 font-bold px-8 py-6 text-lg" onClick={() => window.location.href = "https://account.firstmonument.com/register"}>
                Start Saving Now
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 font-bold px-8 py-6 text-lg" onClick={() => navigate("/compare")}>
                Compare Rates
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">5.25%</div>
                <div className="text-sm font-medium text-slate-500">Max APY*</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">$0</div>
                <div className="text-sm font-medium text-slate-500">Monthly Fees</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">FDIC</div>
                <div className="text-sm font-medium text-slate-500">Fully Insured</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Savings Types Section */}
      <section className="w-full py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* High-Yield Savings */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-gradient-to-b from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-[60px] group-hover:bg-emerald-400/20 transition-all duration-500"></div>
                <div className="absolute top-6 right-6 bg-emerald-100 border border-emerald-300 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">5.25% APY</div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-white border border-emerald-100 shadow-sm flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-emerald-300 transition-all duration-300">
                    <PiggyBank className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">High-Yield Savings</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Make your money work significantly harder. Earn over 10x the national average with zero minimum balance requirements.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> 5.25% Annual Percentage Yield</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> No minimum balance to open</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Daily compounding interest</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Free overdraft transfers</li>
                  </ul>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transform hover:scale-105 transition-transform" onClick={() => window.location.href = "https://account.firstmonument.com/register"}>
                    Open High-Yield Account
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goal-Saver */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-teal-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-[60px] group-hover:bg-teal-50 transition-all duration-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-teal-200 transition-all duration-300">
                    <Target className="w-6 h-6 text-teal-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Goal-Saver Account</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Perfect for saving up for specific milestones. Create virtual buckets for vacations, weddings, or an emergency fund.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" /> Up to 10 distinct savings buckets</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" /> Automated round-up savings</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" /> Shareable goal tracking</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-teal-500 mr-2 shrink-0 mt-0.5" /> 4.00% APY on all buckets</li>
                  </ul>
                  <Button variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50 transform hover:scale-105 transition-transform" onClick={() => window.location.href = "https://account.firstmonument.com/register"}>
                    Start Saving
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CDs */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-[60px] group-hover:bg-blue-50 transition-all duration-500"></div>
                <div className="absolute top-6 right-6 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">UP TO 5.75% APY</div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Certificates of Deposit</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Lock in guaranteed high returns. Choose a fixed term that works for you and watch your money grow predictably.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Terms from 3 to 60 months</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Fixed, guaranteed return rates</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> No risk of losing principal</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Minimum $1,000 deposit</li>
                  </ul>
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-transform" onClick={() => window.location.href = "https://account.firstmonument.com/register"}>
                    Open a CD
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Feature Banner - Safety */}
      <section className="w-full py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] p-6 md:p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Abstract Background Image */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80" alt="Abstract Background" loading="lazy" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" /> SECURE BANKING
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                Your money is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">safe</span> with us.
              </h2>
              <p className="text-slate-300 mb-8 text-base md:text-lg leading-relaxed">
                All First Monument Bank deposit accounts are fully protected. We use military-grade encryption to ensure your funds and data are always secure.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>FDIC Insured:</strong> Protected up to $250,000 per depositor.</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>24/7 Monitoring:</strong> Continuous fraud detection and alerts.</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Zero Liability:</strong> You are not responsible for unauthorized charges.</span>
                </li>
              </ul>

              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-emerald-500/30 transition-transform transform hover:scale-105 text-lg" onClick={() => window.location.href = "https://account.firstmonument.com/register"}>
                Open an Account <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right: Floating Safety Animation */}
            <div className="relative h-[300px] md:h-full min-h-[350px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/30 rounded-full blur-[80px] animate-pulse duration-[4000ms]"></div>

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 bg-gradient-to-br from-emerald-600/80 to-teal-500/80 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                <ShieldCheck className="w-24 h-24 text-white drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



