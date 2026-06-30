import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Percent, TrendingUp, CheckCircle2, ChevronDown, HelpCircle, AlertCircle, ArrowRight, Calculator, FileText, Banknote } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";

// FAQ Item Component
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

export function HELOC() {
  const navigate = useNavigate();

  const HELOCIllustration = () => (
    <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-blue-100 text-center relative max-w-md mx-auto w-full">
      <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">Current Offer</div>
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 mt-4">Introductory APR</h3>
      <div className="text-5xl md:text-7xl font-black text-blue-700 mb-2">6.99%</div>
      <p className="text-sm text-slate-600 font-medium mb-6">for the first 6 months. Variable APR thereafter ranging from 8.50% to 11.25% based on Prime Rate.</p>
      <div className="bg-blue-50 p-4 rounded-xl text-left mb-6">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> Zero origination fees</li>
          <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> No closing costs on lines under $250k</li>
        </ul>
      </div>
      <p className="text-xs text-slate-500 border-t border-slate-100 pt-4 text-justify">Rate reflects a 0.25% autopay discount from a qualifying First Monument Bank checking account. Subject to credit approval and property valuation.</p>
    </div>
  );

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <HeroSection 
        badgeIcon={Home}
        badgeText="HOME EQUITY LINE OF CREDIT"
        titlePrefix="Unlock the value of"
        titleHighlight="your home."
        subtitle="A First Monument Bank Home Equity Line of Credit (HELOC) gives you flexible, ongoing access to funds at competitive rates. Perfect for home renovations, consolidating high-interest debt, or funding major life expenses."
        primaryButtonText="Apply Now"
        primaryButtonAction={(nav) => nav('/contact')}
        secondaryButtonText="Check My Rate"
        secondaryButtonAction={(nav) => nav('/contact')}
        illustration={HELOCIllustration}
      />

      {/* 2. How a HELOC works */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">How a HELOC works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A HELOC functions like a credit card secured by your home. You are granted a credit limit and can draw from it over a set period, paying interest only on what you use.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-blue-100"></div>
            
            <div className="text-center relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white">
                <span className="text-xl font-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Draw Period (Years 1-10)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">For the first 10 years, you can borrow from your available credit line whenever you need it via a dedicated debit card or online transfer. You are only required to make interest payments on the amount you draw.</p>
              <div className="bg-blue-50 text-blue-800 text-xs font-bold py-2 px-4 rounded-lg">Interest-Only Minimum Payments</div>
            </div>
            
            <div className="text-center relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Variable Rates & Replenishment</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Your interest rate is variable and fluctuates with the WSJ Prime Rate. As you pay back the principal during the draw period, those funds replenish and become available to borrow again.</p>
              <div className="bg-slate-100 text-slate-700 text-xs font-bold py-2 px-4 rounded-lg">Revolving Credit Line</div>
            </div>
            
            <div className="text-center relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg">
                <span className="text-xl font-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Repayment Period (Years 11-30)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">After 10 years, the draw period ends. The remaining balance converts to a 20-year repayment period where you pay both principal and interest, and you can no longer draw additional funds.</p>
              <div className="bg-emerald-50 text-emerald-800 text-xs font-bold py-2 px-4 rounded-lg">Principal + Interest Payments</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Equity Calculator Visual & Requirements */}
      <section className="w-full py-16 px-4 bg-slate-900 text-white bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
           <div>
             <h2 className="text-2xl md:text-3xl font-bold mb-6">Do you qualify for a HELOC?</h2>
             <p className="text-slate-300 mb-8">Before applying, ensure you meet our standard underwriting criteria. The amount you can borrow is heavily dependent on the equity you've built in your home.</p>
             <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400 w-6 h-6 shrink-0" /> <span className="font-bold">Minimum credit score of 680</span></li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400 w-6 h-6 shrink-0" /> <span className="font-bold">Maximum CLTV of 85%</span> (Combined Loan-to-Value)</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400 w-6 h-6 shrink-0" /> <span className="font-bold">Property must be your primary residence</span> or a qualifying secondary residence</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400 w-6 h-6 shrink-0" /> <span className="font-bold">Minimum credit line is $15,000</span> (Requires at least $15k in accessible equity)</li>
             </ul>
             <Button className="bg-white text-slate-900 hover:bg-slate-100" onClick={() => navigate('/contact')}>Speak with a Loan Officer</Button>
           </div>
           <div className="backdrop-blur-md bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-700 shadow-2xl">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Calculator className="w-5 h-5 text-emerald-400" /> Estimate Your Available Equity</h3>
             <p className="text-sm text-slate-300 mb-6">Generally, banks will lend up to 85% of your home's appraised value, minus what you currently owe on your primary mortgage.</p>
             
             <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Current Home Value</span>
                  <span className="font-bold">$500,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Multiply by 85% (Max CLTV)</span>
                  <span className="font-bold text-blue-400">$425,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                  <span className="text-slate-400">Minus Current Mortgage Balance</span>
                  <span className="font-bold text-red-400">-$250,000</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-base md:text-lg font-bold text-white">Estimated Available Equity</span>
                  <span className="text-2xl font-black text-emerald-400">$175,000</span>
                </div>
             </div>
             
             <div className=" p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center font-mono text-xs text-emerald-300">
               (Home Value × 0.85) − Mortgage Balance = Available Equity
             </div>
           </div>
         </div>
      </section>

      {/* 4. Comparison Table (HELOC vs Loan) */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">Which equity solution is right for you?</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Compare a HELOC with a traditional Home Equity Loan or Cash-Out Refinance to determine the best financial tool for your needs.</p>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4 w-1/4">Feature</th>
                  <th className="px-6 py-4 bg-blue-50 text-blue-900 w-1/4 border-l border-r border-blue-100">HELOC (Line of Credit)</th>
                  <th className="px-6 py-4 w-1/4">Home Equity Loan</th>
                  <th className="px-6 py-4 w-1/4">Cash-Out Refinance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900 bg-slate-50">How funds are disbursed</td>
                  <td className="px-6 py-4 bg-blue-50/30 border-l border-r border-blue-100">Revolving credit line (draw as needed)</td>
                  <td className="px-6 py-4">Lump sum upfront</td>
                  <td className="px-6 py-4">Lump sum upfront (replaces primary mortgage)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900 bg-slate-50">Interest Rate Type</td>
                  <td className="px-6 py-4 bg-blue-50/30 border-l border-r border-blue-100">Variable (based on Prime Rate)</td>
                  <td className="px-6 py-4">Fixed</td>
                  <td className="px-6 py-4">Fixed or Variable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900 bg-slate-50">Best For</td>
                  <td className="px-6 py-4 bg-blue-50/30 border-l border-r border-blue-100">Ongoing expenses (renovations, tuition)</td>
                  <td className="px-6 py-4">Single large expense (debt consolidation)</td>
                  <td className="px-6 py-4">Need lower rate on primary mortgage + cash</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-slate-900 bg-slate-50">Payment Structure</td>
                  <td className="px-6 py-4 bg-blue-50/30 border-l border-r border-blue-100 font-bold text-blue-700">Interest-only during 10-yr draw period</td>
                  <td className="px-6 py-4">Fixed monthly principal + interest</td>
                  <td className="px-6 py-4">Fixed monthly principal + interest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4.5. How it Works (Draw vs Repay) */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Understanding the two phases of your HELOC</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A First Monument Bank HELOC is structured in two distinct periods. It's important to understand how your payment requirements change over the life of the line.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl group-hover:bg-blue-200 transition-colors"></div>
              <div className="relative z-10">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">Phase 1: Years 1-10</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Draw Period</h3>
                <p className="text-slate-600 mb-6">During the first 10 years, your line of credit is active. You can draw funds, repay them, and draw them again up to your credit limit.</p>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Minimum payments are <strong>Interest-Only</strong> based on your outstanding balance.</li>
                  <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> You can pay down the principal at any time without penalty to replenish your available credit.</li>
                  <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Access funds via check, card, or instant online transfer.</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-slate-200 rounded-full blur-2xl group-hover:bg-slate-300 transition-colors"></div>
              <div className="relative z-10">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2 block">Phase 2: Years 11-20</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Repayment Period</h3>
                <p className="text-slate-600 mb-6">After 10 years, the draw period ends. You can no longer borrow additional funds from the line, and you must begin repaying the principal.</p>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" /> Monthly payments now include both <strong>Principal and Interest</strong>.</li>
                  <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" /> Payments are fully amortized over the remaining 10-20 years to pay the balance to zero.</li>
                  <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" /> Your payment amount will likely be significantly higher than during the draw period.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.75 What you'll need to apply */}
      <section className="w-full py-20 px-4 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What you'll need to apply</h2>
              <p className="text-lg text-slate-300 mb-8">Gathering your documents ahead of time ensures a smooth, rapid underwriting process. Most approvals happen within 48 hours when a complete package is submitted.</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-[0_0_15px_rgba(37,99,235,0.4)]" onClick={() => window.location.href = 'https://account.firstmonument.com/register'}>
                Start Your Application
              </Button>
            </div>
            <div className="flex-1 w-full bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-700">
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Proof of Income</h4>
                    <p className="text-slate-400 text-sm mt-1">Two most recent pay stubs and W-2 forms for the last two years. Self-employed borrowers will need two years of tax returns.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Property Information</h4>
                    <p className="text-slate-400 text-sm mt-1">Your most recent mortgage statement, proof of homeowners insurance, and property tax statements.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Debt Obligations</h4>
                    <p className="text-slate-400 text-sm mt-1">Statements for any other major loans, auto financing, or secondary mortgages that aren't visible on a standard credit pull.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">HELOC Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Are HELOC interest payments tax-deductible?" 
              answer="Under current IRS rules, the interest paid on a HELOC may be tax-deductible only if the borrowed funds are used to 'buy, build, or substantially improve' the taxpayer's home that secures the loan. We strongly recommend consulting a tax advisor for details specific to your situation." 
            />
            <FAQItem 
              question="What fees are associated with opening a HELOC?" 
              answer="First Monument Bank offers zero origination fees and covers the closing costs (appraisal, title search, recording fees) for credit lines up to $250,000. However, if the HELOC is closed within the first 36 months, you may be required to reimburse the bank for those third-party closing costs. There is also an annual maintenance fee of $50, which is waived for the first year." 
            />
            <FAQItem 
              question="How do I access my HELOC funds?" 
              answer="Once your line is open, you can access funds in three ways: 1) Using the dedicated First Monument HELOC Visa Card, 2) Writing a check from your HELOC checkbook, or 3) Transferring funds instantly to your checking account via our mobile app." 
            />
            <FAQItem 
              question="Does the introductory 6.99% rate apply to my entire balance?" 
              answer="Yes, the promotional introductory APR applies to all advances made during the first 6 billing cycles after the account is opened. After the promo period ends, any remaining balance—and all future advances—will be subject to the standard variable APR based on the Prime Rate." 
            />
          </div>
        </div>
      </section>

      {/* 6. Cross Sell (Personal Loan fallback) */}
      <section className="w-full py-32 px-4 bg-slate-900 text-white relative overflow-hidden">
        {/* Vibrant Framer Motion Animated Background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl opacity-50 pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-[100%] blur-3xl opacity-50 pointer-events-none"
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 backdrop-blur-xl bg-slate-900/40 p-8 md:p-12 md:p-16 rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
            <Banknote className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-300">Don't want to use your home as collateral?</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">If you need funds quickly but don't want to borrow against your home equity, consider an unsecured Personal Loan. Get fixed rates and funding as soon as the next business day.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] border-none" onClick={() => navigate('/loans')}>
              Explore Personal Loans
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 7. Massive Disclosures */}
      <section className="w-full py-12 px-4 bg-white text-xs text-slate-500 text-justify">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-slate-400 shrink-0" />
            <h3 className="font-bold text-slate-700 uppercase tracking-widest">Home Equity Disclosures</h3>
          </div>
          <p><strong>Equal Housing Lender.</strong> Loans are subject to credit approval, verifiable income, and property appraisal. Property insurance is required. Flood insurance may be required if the property is located in a Special Flood Hazard Area. Your home secures the HELOC; failure to repay the loan could result in the loss of your home.</p>
          <p><strong>Rates and Margins:</strong> The Introductory APR of 6.99% is fixed for the first 6 billing cycles. After the introductory period, the APR is variable and based on the highest Prime Rate published in the "Money Rates" section of The Wall Street Journal (the "Index") plus a margin. The margin is determined by your creditworthiness, Combined Loan-to-Value (CLTV) ratio, and credit line amount. As of {new Date().toLocaleDateString()}, the standard variable APR ranges from 8.50% to 11.25%. The maximum APR that can apply at any time is 18.00%.</p>
          <p><strong>Fees and Closing Costs:</strong> First Monument Bank pays third-party closing costs on your behalf for lines up to $250,000 (estimated to range between $300 and $1,500). If you close your HELOC within 36 months of the opening date, you will be required to reimburse the bank for these closing costs. A $50 annual fee applies, waived for the first year. There is no fee to take an advance.</p>
          <p><strong>Autopay Discount:</strong> The displayed rates include a 0.25% discount for establishing automatic monthly payments from a qualifying First Monument Bank checking account prior to closing. If automatic payments are cancelled or the checking account is closed, the APR will increase by 0.25%.</p>
          <p>First Monument Bank, N.A. Member FDIC. © {new Date().getFullYear()} First Monument Bank. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}




