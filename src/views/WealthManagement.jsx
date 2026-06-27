import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Award, Briefcase, ChevronRight, BarChart3, ChevronDown, HelpCircle, ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, FileText, Landmark } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

// FAQ Item Component for Accordion
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-bold text-slate-800 text-base md:text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function WealthManagement() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full py-24 px-4 bg-slate-900 border-b border-slate-800 relative overflow-hidden bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="absolute inset-0 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-300 text-xs font-bold mb-6">
              <Award className="w-4 h-4" /> FIRST MONUMENT PRIVATE WEALTH
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Preserve and grow your legacy.
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-xl">
              Partner with a dedicated Private Wealth Advisor who understands your complex financial picture. We provide tailored portfolio management, estate planning, and tax-efficient strategies exclusively for high-net-worth individuals and families.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none" onClick={() => navigate('/contact')}>
                Schedule a Consultation
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md hidden md:block">
            <div className="backdrop-blur-md bg-slate-900/40 border border-slate-700 p-6 md:p-8 rounded-3xl">
              <BarChart3 className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Intelligent Portfolios</h3>
              <p className="text-slate-400 mb-6">Prefer a digital-first approach? Our automated investing platform builds a globally diversified portfolio tailored to your risk tolerance, automatically rebalancing to keep you on track.</p>
              <Button variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-900/50 hover:text-white w-full" onClick={() => navigate('/open-account')}>
                Start Investing with $0 Commission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Wealth Services Grid */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Comprehensive Wealth Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We offer a full spectrum of wealth management solutions tailored to high-net-worth individuals, families, and endowments. Our holistic approach ensures every aspect of your financial life is working in harmony.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:shadow-xl transition-shadow hover:border-blue-300">
              <Briefcase className="w-12 h-12 text-blue-700 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Estate Planning</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Ensure your wealth is transferred according to your wishes. Our fiduciary experts help structure trusts to minimize tax liabilities, protect your assets from creditors, and secure financial stability for future generations.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Revocable Living Trusts</li>
                <li className="flex gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Generation-Skipping Trusts</li>
              </ul>
            </div>
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:shadow-xl transition-shadow hover:border-blue-300">
              <TrendingUp className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Credit Solutions</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Access liquidity without disrupting your carefully crafted investment strategy. We offer specialized credit facilities designed exclusively for our private wealth clients to meet short-term or opportunistic needs.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Securities-Backed Lines of Credit</li>
                <li className="flex gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Custom Jumbo Mortgages</li>
              </ul>
            </div>
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:shadow-xl transition-shadow hover:border-blue-300">
              <HeartHandshake className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Philanthropic Advisory</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Maximize the impact of your charitable giving while optimizing your tax picture. We assist with establishing vehicles that align with your family's core values and philanthropic goals.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Donor-Advised Funds (DAFs)</li>
                <li className="flex gap-2 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Private Family Foundations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Private Wealth Approach */}
      <section className="w-full py-24 px-4 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
        ></motion.div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The First Monument Approach</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              We do not believe in off-the-shelf portfolios. Your Private Wealth Advisor acts as the quarterback for your entire financial life, collaborating with our internal Chief Investment Office (CIO), your CPAs, and your attorneys.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
                  <span className="font-bold text-blue-400">1</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold mb-1">Deep Discovery</h4>
                  <p className="text-sm text-slate-400">We start by understanding your life goals, risk tolerance, time horizon, and the legacy you wish to leave.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
                  <span className="font-bold text-blue-400">2</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold mb-1">Bespoke Allocation</h4>
                  <p className="text-sm text-slate-400">We construct a portfolio spanning public equities, fixed income, and exclusive alternative investments (Private Equity, Real Estate, Hedge Funds).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0">
                  <span className="font-bold text-blue-400">3</span>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold mb-1">Active Monitoring & Rebalancing</h4>
                  <p className="text-sm text-slate-400">Your portfolio is dynamically managed to capitalize on market dislocations and harvest tax losses proactively.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-3xl border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <span className="block text-2xl md:text-3xl font-bold text-emerald-400 mb-2">$5M</span>
                  <span className="text-xs text-slate-400 font-bold tracking-widest">MINIMUM ASSETS</span>
                </div>
                <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-3xl border border-slate-700/50 text-center mt-8 hover:bg-slate-800 transition-colors">
                  <span className="block text-2xl md:text-3xl font-bold text-blue-400 mb-2">Top 1%</span>
                  <span className="text-xs text-slate-400 font-bold tracking-widest">ADVISORY FIRM</span>
                </div>
                <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-3xl border border-slate-700/50 text-center -mt-8 hover:bg-slate-800 transition-colors">
                  <span className="block text-2xl md:text-3xl font-bold text-purple-400 mb-2">45+</span>
                  <span className="text-xs text-slate-400 font-bold tracking-widest">YEARS EXPERIENCE</span>
                </div>
                <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-3xl border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <span className="block text-2xl md:text-3xl font-bold text-yellow-400 mb-2">1:15</span>
                  <span className="text-xs text-slate-400 font-bold tracking-widest">ADVISOR RATIO</span>
                </div>
             </div>
             
             {/* A robust testimonial or trust badge overlay */}
             <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-slate-800/50 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none"></div>
                <h4 className="text-xl font-bold mb-3 text-white">The Family Office Experience</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  We maintain one of the lowest advisor-to-client ratios in the industry, ensuring that your family receives the dedicated, highly-personalized attention you deserve.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Advisor" loading="lazy" />
                    <img className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Advisor" loading="lazy" />
                    <img className="w-10 h-10 rounded-full border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" alt="Advisor" loading="lazy" />
                  </div>
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Dedicated Teams</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Wealth Management FAQs</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="What is the minimum asset requirement for Private Wealth services?" 
              answer="First Monument Private Wealth requires a minimum of $5,000,000 in investable assets to establish an advisory relationship. However, our digital Intelligent Portfolios platform is available to clients starting with just $5,000." 
            />
            <FAQItem 
              question="How are your Private Wealth Advisors compensated?" 
              answer="Our advisors act as fiduciaries and are compensated through a transparent, fee-only structure based on a percentage of the assets we manage for you. We do not earn commissions on trading or proprietary fund sales, ensuring our interests are perfectly aligned with yours." 
            />
            <FAQItem 
              question="Do you offer access to alternative investments?" 
              answer="Yes. Qualified purchasers have access to our curated institutional-grade alternative investment platform, which includes Private Equity, Venture Capital, Private Credit, Real Estate, and Hedge Funds." 
            />
            <FAQItem 
              question="Can you work with my existing CPA and Estate Attorney?" 
              answer="Absolutely. In fact, we prefer it. Your Wealth Advisor will actively coordinate with your external tax and legal professionals to ensure your investment strategy aligns perfectly with your tax planning and estate documents." 
            />
          </div>
        </div>
      </section>

      {/* 5. Cross-sell: Corporate Exec Services */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-blue-50 rounded-3xl border border-blue-100 p-6 md:p-8 md:p-12 text-center">
          <Landmark className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Corporate Executive Services</h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl mx-auto">
            Are you a C-suite executive navigating complex equity compensation? Our specialists provide concentrated stock management, Rule 144/10b5-1 trading plans, and restricted stock unit (RSU) tax optimization strategies.
          </p>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white" onClick={() => navigate('/contact')}>
            Explore Executive Services
          </Button>
        </div>
      </section>

      {/* 6. Massive Legal Disclaimers */}
      <section className="w-full py-12 px-4 border-t border-slate-200 bg-slate-100 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto space-y-4 text-justify">
          <div className="p-4 border border-slate-300 font-bold text-center mb-6 rounded-xl bg-white">
            <p className="uppercase tracking-widest text-[10px] mb-2 text-slate-400">Important Investment Disclosures</p>
            <p>Investment and Insurance Products: Are Not FDIC Insured • Are Not Bank Guaranteed • May Lose Value • Are Not Deposits • Are Not Insured by Any Federal Government Agency • Are Not a Condition to Any Banking Service or Activity.</p>
          </div>
          <p><strong>1. General Disclosures:</strong> First Monument Private Wealth is a division of First Monument Bank. Investing involves risk, including possible loss of principal. Asset allocation and diversification do not guarantee a profit or protect against loss. Past performance is no guarantee of future results.</p>
          <p><strong>2. Fiduciary Status:</strong> When we provide investment advice to you regarding your retirement plan account or individual retirement account, we are fiduciaries within the meaning of Title I of the Employee Retirement Income Security Act and/or the Internal Revenue Code, as applicable.</p>
          <p><strong>3. Tax and Legal Advice:</strong> First Monument Bank and its affiliates do not provide tax or legal advice. You should consult with your personal tax and legal advisors regarding your specific situation before making any financial decisions.</p>
          <p><strong>4. Alternative Investments:</strong> Alternative investments are speculative, involve a high degree of risk, are highly illiquid, and are generally intended for experienced and financially sophisticated investors who meet specific regulatory requirements (e.g., Qualified Purchasers).</p>
          <p>© {new Date().getFullYear()} First Monument Bank. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}



