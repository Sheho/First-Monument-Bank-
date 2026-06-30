import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { AnimatedBadge } from "../components/AnimatedBadge";
import { HeroSection } from "../components/HeroSection";
import { GlassCard } from "../components/GlassCard";
import {
  Lock,
  ShieldCheck,
  SmartphoneNfc,
  ChevronDown,
  ChevronUp,
  Star,
  Building,
  Globe,
  Wallet,
  PiggyBank,
  CreditCard as CreditCardIcon,
  TrendingUp,
  ChevronRight,
  Home as HomeIcon,
  CheckCircle,
  Zap,
  BarChart3
} from "lucide-react";

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

function AnimatedStat({ prefix = "", value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, motionValue, value]);

  const displayValue = useTransform(motionValue, (latest) => {
    return prefix + Math.floor(latest) + suffix;
  });

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function Home() {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const HomeIllustration = () => {
    return (
      <GlassCard colorClass="from-blue-600/10 to-emerald-600/10" borderClass="border-blue-500/20">
        <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Limited Time Offer</div>
        <CardHeader className="text-left pb-2 pt-8">
          <CardTitle className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">Get a <span className="text-blue-600">$300</span> Bonus</CardTitle>
          <p className="text-sm text-slate-600 mt-2">Open a new First Monument Bank Total Checking® account and set up direct deposit.</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mt-2">
            <div className="bg-white/50 backdrop-blur-sm border border-blue-100 rounded-xl p-4 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Instant Access</h4>
                <p className="text-xs text-slate-600 mt-1">Get your digital card immediately after approval to start using Apple Pay® or Google Pay™.</p>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <PiggyBank className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Zero Hidden Fees</h4>
                <p className="text-xs text-slate-600 mt-1">Enjoy transparent banking with easy ways to waive monthly service fees.</p>
              </div>
            </div>
            <Button className="relative overflow-hidden group hover:text-white mt-4 w-full" onClick={() => navigate('/open-account')}>
              <span className="relative z-10 font-bold text-base">Claim Your $300 Bonus</span>
            </Button>
            <p className="text-center text-[10px] text-slate-400 mt-2">Offer expires 12/31/2026. Terms and conditions apply.</p>
          </div>
        </CardContent>
      </GlassCard>
    );
  };

  return (
    <div className="flex-grow flex flex-col items-center w-full">

      {/* 1. Hero Section */}
      <HeroSection
        badgeIcon={ShieldCheck}
        badgeText="Voted #1 Digital Bank 2026"
        titlePrefix="The Bank of"
        titleHighlight="Doing"
        titleSuffix=". Achieve everything you want in life."
        subtitle="Experience a partner in your financial journey. Enjoy simple, secure, and centralized access to your accounts, backed by our unwavering commitment to your financial health."
        primaryButtonText="Open an Account"
        primaryButtonAction={(nav) => nav("https://account.firstmonument.com/register")}
        secondaryButtonText="Explore Features"
        secondaryButtonAction={(nav) => { }}
        illustration={HomeIllustration}
      />

      {/* 2. "Why First Monument Bank" / Stats */}
      <section className="w-full py-20 px-4 bg-[rgba(255,255,255,0.01)] border-b border-[var(--color-bank-border)] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--color-bank-border)]"
          >
            {[
              { prefix: "", value: 2, suffix: "M+", label: "Active Customers" },
              { prefix: "$", value: 10, suffix: "B+", label: "Assets Under Management" },
              { prefix: "", value: 40, suffix: "k+", label: "Fee-Free ATMs" },
              { prefix: "", value: 24, suffix: "/7", label: "Customer Support" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-4 group">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 group-hover:scale-105 group-hover:text-[var(--color-bank-primary)] transition-all duration-300 inline-block">
                  <AnimatedStat prefix={item.prefix} value={item.value} suffix={item.suffix} />
                </h3>
                <p className="text-sm text-[var(--color-bank-text-muted)] font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Product Highlights */}
      <section className="w-full py-24 px-4 border-b border-[var(--color-bank-border)] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Succeed financially with the right tools</h2>
            <p className="text-sm text-[var(--color-bank-text-muted)] max-w-2xl mx-auto">Whether you are looking for simple ways to manage your money, pay down balances, or monitor your activity, we have you covered every step of the way.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Wallet, title: "First Monument Bank Checking", desc: "A modern checking account that actually works for you.", features: ["No overdraft fees", "Get paid up to 2 days early", "Instantly send money to friends"] },
              { icon: PiggyBank, title: "High-Yield Savings", desc: "Earn more on your money with industry-leading rates.", features: ["4.50% Annual Percentage Yield", "No minimum balance to open", "Automated savings rules"] },
              { icon: CreditCardIcon, title: "Virtual Cards", desc: "Generate secure, single-use cards for safer online shopping.", features: ["Instant issuance", "Set specific spending limits", "Freeze or delete anytime"] }
            ].map((prod, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10 }} className="h-full">
                <Card className="h-full bg-gradient-to-br from-blue-700 to-blue-900 text-white border-none hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] cursor-pointer overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <prod.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold relative z-10 text-white">{prod.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-blue-100 mb-6">{prod.desc}</p>
                    <ul className="space-y-3 text-sm text-blue-50 font-medium">
                      {prod.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">✓ {f}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Security & Policies */}
      <section className="w-full py-24 px-4 bg-[rgba(255,255,255,0.01)] border-b border-[var(--color-bank-border)] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Uncompromising Security & Trust</h2>
            <p className="text-base text-[var(--color-bank-text-muted)] mb-8">
              We adhere to the strictest banking regulations and employ enterprise-grade security to ensure your peace of mind.
            </p>
            <div className="space-y-6">
              {[
                { icon: Building, color: "text-blue-600", bg: "bg-blue-100", title: "FDIC Insured", text: "Your deposits are insured up to $250,000 per depositor, for each account ownership category." },
                { icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-100", title: "Zero Liability Protection", text: "You won't be held responsible for promptly reported unauthorized transactions made with your FMB debit or credit cards." },
                { icon: Lock, color: "text-purple-600", bg: "bg-purple-100", title: "24/7 Fraud Monitoring", text: "We constantly monitor your accounts for suspicious activity and send immediate text alerts to keep your funds safe." }
              ].map((sec, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="flex gap-4 cursor-default">
                  <div className={`w-10 h-10 rounded-lg ${sec.bg} flex items-center justify-center flex-shrink-0`}>
                    <sec.icon className={`w-5 h-5 ${sec.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-slate-900">{sec.title}</h4>
                    <p className="text-sm text-[var(--color-bank-text-muted)]">{sec.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md"
          >
            <Card className="bg-blue-800 p-6 md:p-8 shadow-2xl relative overflow-hidden group border-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] right-[-10%] p-6 md:p-8 opacity-10 text-white"
              >
                <ShieldCheck className="w-64 h-64" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10">Protecting your wealth is our #1 priority.</h3>
              <p className="text-blue-100 text-sm mb-8 relative z-10 leading-relaxed">Read our comprehensive security policy to learn how we safeguard your financial future with enterprise encryption and 24/7 fraud monitoring.</p>
              <Button className="relative z-10 bg-white text-blue-800 hover:bg-slate-100 border-none shadow-sm" onClick={() => navigate('/security')}>Read Security Policy</Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="w-full py-24 px-4 border-b border-[var(--color-bank-border)] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">Loved by millions</h2>
            <p className="text-sm md:text-base text-[var(--color-bank-text-muted)] max-w-2xl mx-auto">Don't just take our word for it. See what our customers are saying.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { name: "Sarah J.", role: "Small Business Owner", text: "Switching to First Monument Bank was the best financial decision I've made. The high-yield savings rate is incredible, and the app is so intuitive." },
              { name: "David C.", role: "Software Engineer", text: "I love the virtual cards feature. It makes managing my online subscriptions incredibly easy and secure. Plus, no hidden fees ever!" },
              { name: "Elena R.", role: "Freelancer", text: "Getting paid 2 days early has been a lifesaver. The customer support is also phenomenal—real humans who actually help." }
            ].map((t, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="h-full">
                <Card className="bg-[rgba(255,255,255,0.02)] h-full cursor-pointer hover:border-white/20 transition-colors">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-6 flex-grow">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-[var(--color-bank-text-muted)]">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 7. Bento Grid CTA Section */}
      <section className="w-full pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/bento-bg.png')" }}>
        <div className="absolute inset-0 bg-[var(--color-bank-bg)]/40 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to upgrade your banking?</h2>
            <p className="text-base text-[var(--color-bank-text-muted)] max-w-2xl mx-auto mb-8">Choose the perfect account tailored for your financial goals. Open an account in minutes.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[260px]">
            {/* Box 1: Premier Checking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="md:col-span-2 md:row-span-2 rounded-3xl bg-blue-900 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group cursor-pointer shadow-xl border-none"
              onClick={() => navigate('/open-account')}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-30%] right-[-10%] p-6 md:p-8 opacity-10 text-white pointer-events-none"
              >
                <CreditCardIcon className="w-96 h-96" />
              </motion.div>

              {/* Badge */}
              <div className="absolute top-8 right-8 border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                <Zap className="w-3 h-3 text-yellow-400" fill="currentColor" /> MOST POPULAR
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <CreditCardIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">First Monument Bank Premier Checking</h3>
                <p className="text-blue-100 text-base max-w-md leading-relaxed mb-6">Experience elite banking with our flagship account. Designed for high-volume transactors who demand priority service.</p>

                {/* Feature List */}
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-blue-50 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-3" /> Zero ATM fees globally (100% reimbursed)
                  </li>
                  <li className="flex items-center text-sm text-blue-50 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-3" /> Priority 24/7 US-based customer support
                  </li>
                  <li className="flex items-center text-sm text-blue-50 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-3" /> $50,000 daily mobile deposit limit
                  </li>
                </ul>
              </div>
              <div className="mt-8 flex items-center text-white font-semibold relative z-10 text-base md:text-lg group-hover:text-blue-200 transition-colors">
                Open Premier Account <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Box 2: High-Yield Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="md:col-span-1 md:row-span-2 rounded-3xl bg-emerald-800 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group cursor-pointer shadow-xl border-none"
              onClick={() => navigate('/open-account')}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-20%] p-6 md:p-8 opacity-10 text-white pointer-events-none"
              >
                <PiggyBank className="w-64 h-64" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <PiggyBank className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-white text-[10px] font-bold px-2 py-1 rounded bg-white/20 backdrop-blur-sm">FDIC INSURED</div>
                </div>
                <h3 className="text-base md:text-lg md:text-xl font-bold text-white mb-3">High-Yield Savings</h3>
                <p className="text-emerald-50 text-sm leading-relaxed mb-6">Make your money work harder. Earn market-leading rates with auto-save features and zero minimum balance.</p>

                {/* Micro Chart */}
                <div className="flex items-end gap-2 h-20 mb-4 border-b border-white/20 pb-2">
                  <div className="w-1/3 bg-white/30 rounded-t-sm h-1/4 relative group-hover:bg-white/40 transition-colors"><span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-emerald-100">Nat'l Avg</span></div>
                  <div className="w-1/3 bg-white rounded-t-sm h-full relative">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-2 py-1 rounded bg-emerald-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">5.25%</div>
                  </div>
                </div>
              </div>
              <div className="mt-2 relative z-10">
                <span className="text-2xl md:text-3xl md:text-4xl md:text-5xl font-black text-white tracking-tighter">5.25%</span>
                <span className="text-sm text-emerald-100 ml-1 font-medium">APY</span>
              </div>
            </motion.div>

            {/* Box 3: Credit Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="md:col-span-1 md:row-span-1 rounded-3xl bg-slate-900 p-6 relative overflow-hidden group cursor-pointer flex flex-col justify-center shadow-xl border-none"
              onClick={() => navigate('/open-account')}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute right-[-10%] bottom-[-10%] p-6 md:p-8 opacity-10 text-white pointer-events-none"
              >
                <ShieldCheck className="w-48 h-48" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-[10px] font-bold px-2 py-1 rounded border border-white/30 backdrop-blur-sm bg-white/10">NEW REWARDS</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2">Elite Rewards Cards</h3>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-bold">3%</span> <span className="text-sm text-slate-300">Travel & Dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">2%</span> <span className="text-sm text-slate-300">Everything Else</span>
                </div>
              </div>
            </motion.div>

            {/* Box 4: Wealth Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="md:col-span-1 md:row-span-1 rounded-3xl bg-white p-6 relative overflow-hidden group cursor-pointer flex flex-col justify-center shadow-xl border border-slate-200"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute right-[-20%] bottom-[-30%] opacity-[0.03] text-blue-600 pointer-events-none"
              >
                <BarChart3 className="w-48 h-48" />
              </motion.div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded">0.25% FEE</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Wealth Management</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Automated robo-advisors or dedicated human financial planners.</p>
              </div>
            </motion.div>

            {/* Box 5: Wealth Management (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 0.98, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="md:col-span-2 lg:col-span-4 md:row-span-1 rounded-3xl bg-slate-900 border-none p-6 md:p-8 relative overflow-hidden group flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute left-[-5%] top-[-50%] p-6 md:p-8 opacity-5 text-emerald-400 pointer-events-none"
              >
                <TrendingUp className="w-96 h-96" />
              </motion.div>

              <div className="flex items-center gap-6 relative z-10 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">Wealth Management & Investing</h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-emerald-100 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">Expert Advisors</span>
                    <span className="text-emerald-100 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">$0 Commission Trades</span>
                  </div>
                  <p className="text-sm text-slate-300 max-w-xl leading-relaxed">Build and preserve your wealth with our cutting-edge <span className="text-emerald-400 font-bold">intelligent portfolios</span> tailored for you.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full md:w-auto shrink-0 relative z-10 gap-3">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] border-none px-8 font-bold" onClick={() => navigate('/open-account')}>Open an Account</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Financial Insights & Education */}
      <section className="w-full py-20 px-4 border-b border-[var(--color-bank-border)] ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">Financial Insights & Education</h2>
              <p className="text-sm text-slate-600 max-w-2xl">Expert analysis, market updates, and educational resources to help you make informed financial decisions.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Market Update", date: "Oct 24, 2026", title: "Federal Reserve holds rates steady: What it means for your savings", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" },
              { category: "Home Buying", date: "Oct 22, 2026", title: "Navigating the 2026 housing market: 5 tips for first-time buyers", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
              { category: "Retirement", date: "Oct 18, 2026", title: "Maximizing your 401(k) contributions before the end of the year", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => setSelectedArticle(article)}>
                <div className="w-full h-48  rounded-2xl overflow-hidden mb-4">
                  <img src={article.img} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-slate-500">{article.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEW: Business Banking Teaser */}
      <section
        className="w-full py-24 px-4 bg-slate-900 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-slate-900/85 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl md:text-4xl font-bold mb-6">Business banking that scales with you.</h2>
            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              From sole proprietorships to multinational corporations, our comprehensive suite of business checking, lending, and treasury services provides the financial foundation your business needs to thrive.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle className="w-5 h-5 text-blue-500" /> SBA & Commercial Lending</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Advanced Cash Management</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Merchant Payment Services</li>
            </ul>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none font-semibold px-8" onClick={() => navigate('/business')}>
              Explore Business Solutions
            </Button>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-3xl relative shadow-2xl">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
              <Building className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Dedicated Relationship Managers</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">Every business client gets a dedicated local expert who understands your industry and your unique financial needs.</p>
              <a href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center cursor-pointer transition-colors">Connect with a Banker <ChevronRight className="w-4 h-4 ml-1" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Community & ESG Impact */}
      <section className="w-full py-20 px-4  border-y border-[var(--color-bank-border)]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-emerald-800 text-xs font-bold mb-6 uppercase tracking-wider">
            Our Commitment
          </div>
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Banking for a better world.</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            We measure our success not just by our balance sheet, but by our positive impact on the communities we serve and the environment we all share.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-emerald-600 mb-2 block">$5B+</span>
              <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2">Affordable Housing</h3>
              <p className="text-sm text-slate-600">Committed to financing affordable housing projects in underserved communities over the next decade.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-emerald-600 mb-2 block">Net-Zero</span>
              <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2">Carbon Footprint</h3>
              <p className="text-sm text-slate-600">Pledged to achieve net-zero greenhouse gas emissions across all operational facilities by 2030.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-emerald-600 mb-2 block">1M+</span>
              <h3 className="font-bold text-base md:text-lg text-slate-900 mb-2">Volunteer Hours</h3>
              <p className="text-sm text-slate-600">Our employees are empowered with paid time off to volunteer and give back to local nonprofits.</p>
            </div>
          </div>
          <div className="mt-12">
            <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:" onClick={() => navigate('/community')}>Read our 2026 Impact Report</Button>
          </div>
        </div>
      </section>

      {/* NEW: Awards & Recognition Banner */}
      <section className="w-full py-12 px-4 bg-white border-b border-[var(--color-bank-border)]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Recognized for Excellence</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center group cursor-default transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300">
                <Star className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
              </div>
              <p className="text-sm font-black text-slate-900">#1 Digital Banking App</p>
              <p className="text-xs font-bold text-slate-600">J.D. Power 2026</p>
            </div>
            <div className="text-center group cursor-default transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm font-black text-slate-900">Best Bank for Security</p>
              <p className="text-xs font-bold text-slate-600">Forbes 2026</p>
            </div>
            <div className="text-center group cursor-default transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 group-hover:shadow-[0_0_20px_rgba(71,85,105,0.3)] transition-all duration-300">
                <Building className="w-8 h-8 text-slate-700 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm font-black text-slate-900">Top 10 Wealth Managers</p>
              <p className="text-xs font-bold text-slate-600">Barron's 2026</p>
            </div>
            <div className="text-center hidden sm:block group cursor-default transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                <Globe className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm font-black text-slate-900">Most Ethical Companies</p>
              <p className="text-xs font-bold text-slate-600">Ethisphere 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Massive Fine Print / Legal Disclaimers */}
      <section className="w-full py-12 px-4 bg-slate-50 border-t border-[var(--color-bank-border)]">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm font-medium text-slate-700 space-y-5 leading-relaxed text-justify">
          <p>
            <strong>Deposit products and services are offered by First Monument Bank, N.A. Member FDIC.</strong> Equal Housing Lender <HomeIcon className="inline w-3 h-3 mx-0.5" />.
          </p>
          <p>
            1. <strong>First Monument Bank Total Checking:</strong> Monthly maintenance fee is $12. This fee is waived if you have electronic deposits made into this account totaling $500 or more, such as payments from payroll providers or government benefit providers, by using (i) the ACH network, (ii) the Real Time Payment network, or (iii) third-party services that facilitate payments to your debit card using the Visa® or Mastercard® network. Transfers from one account to another, or deposits made at a branch or ATM, do not qualify as electronic deposits.
          </p>
          <p>
            2. <strong>Zero Liability Protection:</strong> You will not be held responsible for unauthorized transactions made with your First Monument Bank debit or credit card provided you promptly notify us. Certain limitations apply. Please see your Cardholder Agreement for details.
          </p>
          <p>
            3. <strong>Investment and Insurance Products:</strong> Are not FDIC Insured • Are not Bank Guaranteed • May Lose Value • Are not a Deposit • Are not Insured by any Federal Government Agency. Investment products are offered through First Monument Securities LLC (FMS), a registered broker-dealer and investment adviser, member FINRA and SIPC.
          </p>
          <p>
            4. <strong>Zelle®:</strong> Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC and are used herein under license. Transactions typically occur in minutes when the recipient's email address or U.S. mobile number is already enrolled with Zelle.
          </p>
          <p>
            5. <strong>Mobile Banking:</strong> Mobile deposit limits apply. Hardware and software requirements apply. Data connection required. Wireless carrier fees may apply. The First Monument Bank Mobile App is available for select mobile devices. Enroll in First Monument Online Banking to access the mobile app.
          </p>
          <p>
            Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
          <p>
            © 2026 First Monument Bank Corporation. All rights reserved. First Monument Bank is a registered trademark of First Monument Bank Corporation.
          </p>
        </div>
      </section>
      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col relative"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article"
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors z-10 text-2xl pb-1"
            >
              &times;
            </button>
            <div className="w-full h-64 shrink-0 relative">
              <img src={selectedArticle.img} alt={selectedArticle.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-900/50 px-2 py-1 rounded backdrop-blur-md">{selectedArticle.category}</span>
                  <span className="text-xs text-slate-300 font-medium drop-shadow-md">{selectedArticle.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">{selectedArticle.title}</h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-slate-600 leading-relaxed mb-6">
                This is a detailed analysis regarding <strong>{selectedArticle.title.toLowerCase()}</strong>.
                At First Monument Bank, we strive to provide our clients with the most up-to-date and
                actionable insights to help you navigate an ever-changing economic landscape.
              </p>
              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">Key Takeaways</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                <li>Understand the macroeconomic trends affecting your specific financial category.</li>
                <li>Leverage FMB's suite of tools to proactively adjust your financial strategy.</li>
                <li>Consult with our expert advisors for personalized recommendations.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-8">
                For a complete and tailored breakdown of how this impacts your personal or business portfolio,
                please reach out to your dedicated Relationship Manager or visit one of our branches.
              </p>
              <Button className="w-full bg-blue-700 hover:bg-blue-600 text-white border-none" onClick={() => setSelectedArticle(null)}>Close Article</Button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}

