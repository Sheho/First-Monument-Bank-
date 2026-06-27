import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, animate, useTransform } from "framer-motion";
import { Building, TrendingUp, Globe, Briefcase, ChevronRight, BarChart3, LineChart, ChevronDown, HelpCircle, ArrowRight, Landmark, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

// Animated Stat Component
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

export function Commercial() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full py-24 px-4 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-300 text-xs font-bold mb-6">
            <Building className="w-4 h-4" /> FIRST MONUMENT INSTITUTIONAL
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Corporate & Investment Banking
          </h1>
          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-3xl mx-auto">
            Strategic advisory, capital raising, and comprehensive treasury solutions for large corporations, institutions, and government entities. Navigate global markets with an elite partner.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none" onClick={() => navigate('/contact')}>
              Contact Commercial Team
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Capital Markets & Advisory */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Capital Markets & Advisory</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our global network and deep industry expertise enable us to deliver tailored capital structure solutions. From IPOs to complex M&A advisory, First Monument Bank provides the intellectual capital to navigate volatile markets and execute transformational deals.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><TrendingUp className="w-3 h-3 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-sm">Mergers & Acquisitions</h4>
                  <p className="text-xs text-slate-500 mt-1">Buy-side and sell-side advisory, fairness opinions, and valuation services executed by industry specialists.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><BarChart3 className="w-3 h-3 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-sm">Equity Capital Markets</h4>
                  <p className="text-xs text-slate-500 mt-1">Origination and execution of equity offerings including IPOs, follow-ons, and convertibles.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5"><Landmark className="w-3 h-3 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-sm">Debt Capital Markets</h4>
                  <p className="text-xs text-slate-500 mt-1">Syndicated loans, high-yield bonds, and investment-grade debt structuring.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-blue-600 block mb-2"><AnimatedStat prefix="$" value={150} suffix="B+" /></span>
              <p className="text-sm font-bold text-slate-900">Capital Raised</p>
              <p className="text-xs text-slate-500 mt-1">In the last fiscal year across all global markets.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow mt-8">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-blue-600 block mb-2"><AnimatedStat prefix="Top " value={5} /></span>
              <p className="text-sm font-bold text-slate-900">Global Bookrunner</p>
              <p className="text-xs text-slate-500 mt-1">Consistently ranked in global syndication and M&A.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow -mt-8">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-blue-600 block mb-2"><AnimatedStat value={130} suffix="+" /></span>
              <p className="text-sm font-bold text-slate-900">Currencies Traded</p>
              <p className="text-xs text-slate-500 mt-1">Seamless execution in emerging and developed markets.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl md:text-3xl md:text-4xl font-black text-blue-600 block mb-2">A+</span>
              <p className="text-sm font-bold text-slate-900">Credit Rating</p>
              <p className="text-xs text-slate-500 mt-1">Fitch and S&P Global Ratings (Long-Term).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Treasury Solutions */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Global Treasury Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Optimize your working capital, mitigate risk, and streamline your operations on a global scale with our award-winning treasury platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <Globe className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Global Payments</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">Execute cross-border payments efficiently in over 130 currencies with real-time SWIFT tracking and competitive institutional FX rates.</p>
              <button onClick={() => navigate('/contact')} className="text-blue-600 text-sm font-bold hover:underline inline-flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></button>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Liquidity Management</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">Maximize the yield on your excess cash balances with automated sweep accounts, physical notional pooling, and short-term investment options.</p>
              <button onClick={() => navigate('/contact')} className="text-blue-600 text-sm font-bold hover:underline inline-flex items-center gap-1">Explore Liquidity <ArrowRight className="w-3 h-3" /></button>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <LineChart className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Trade Finance</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">Mitigate the risks of global trade with commercial letters of credit, documentary collections, and robust supply chain finance programs.</p>
              <button onClick={() => navigate('/contact')} className="text-blue-600 text-sm font-bold hover:underline inline-flex items-center gap-1">View Trade Services <ArrowRight className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Onboarding Process */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-16">How to become an Institutional Client</h2>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-blue-100"></div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white border-[4px] border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">1. Inquiry</h3>
              <p className="text-xs text-slate-600">Submit a Request for Proposal (RFP) or contact our corporate coverage team.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white border-[4px] border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">2. Discovery</h3>
              <p className="text-xs text-slate-600">Our analysts evaluate your capital structure and treasury workflows.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white border-[4px] border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">3. Structuring</h3>
              <p className="text-xs text-slate-600">We propose a bespoke suite of credit, advisory, and cash management tools.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-blue-600 border-[4px] border-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">4. Execution</h3>
              <p className="text-xs text-slate-600">Seamless onboarding via our dedicated institutional implementation team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Institutional FAQs</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="What is the minimum revenue requirement for commercial banking?" 
              answer="First Monument Bank typically serves middle-market companies with annual revenues between $50 million and $1 billion, and large corporate clients with revenues exceeding $1 billion." 
            />
            <FAQItem 
              question="Do you offer syndicated loan facilities?" 
              answer="Yes, our Syndicated Finance group routinely acts as Lead Arranger and Administrative Agent for multi-bank credit facilities ranging from $50 million to over $2 billion." 
            />
            <FAQItem 
              question="How secure is the institutional API platform?" 
              answer="Our Open Banking API platform utilizes OAuth 2.0, mutual TLS (mTLS) authentication, and end-to-end payload encryption. It undergoes rigorous third-party penetration testing quarterly to ensure enterprise-grade security." 
            />
            <FAQItem 
              question="Who will be my primary point of contact?" 
              answer="Every institutional client is assigned a dedicated Corporate Relationship Manager who acts as your primary point of contact, coordinating with specialists across Treasury, Credit, and Investment Banking." 
            />
          </div>
        </div>
      </section>

      {/* 6. Legal / Fine Print */}
      <section className="w-full py-12 px-4 bg-slate-100 text-slate-600">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm font-medium space-y-4 text-justify">
          <p><strong>1. Investment Banking:</strong> Investment banking and securities products are offered through First Monument Securities, Inc., a registered broker-dealer and member of FINRA and SIPC. Products are NOT FDIC INSURED, NOT BANK GUARANTEED, and MAY LOSE VALUE.</p>
          <p><strong>2. Global Treasury:</strong> Foreign exchange services and international payments are subject to market volatility. Transaction times may vary depending on the destination country, clearing systems, and regulatory reviews. First Monument Bank makes no representations regarding the tax implications of cross-border transactions.</p>
          <p><strong>3. Commercial Lending:</strong> All credit facilities and loan products are subject to underwriting, credit approval, and acceptable collateral. Terms and conditions apply and are subject to change without notice. First Monument Bank reserves the right to require audited financial statements.</p>
          <p>First Monument Bank, N.A. Member FDIC. Equal Housing Lender. © {new Date().getFullYear()} First Monument Bank. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}


