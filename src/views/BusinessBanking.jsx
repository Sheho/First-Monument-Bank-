import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Briefcase, Calculator, Handshake, ChevronRight, CheckCircle2, ChevronDown, ShieldCheck, CreditCard, Banknote, HelpCircle, ArrowRight } from "lucide-react";
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

export function BusinessBanking() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full py-24 px-4 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-300 text-xs font-bold mb-6">
              <Building2 className="w-4 h-4" /> FIRST MONUMENT FOR BUSINESS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fuel your business growth.
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl">
              From checking accounts for startups to complex cash management for established corporations, we provide the tools and capital you need to succeed. Experience banking built for visionaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="sm" className="hover:bg-blue-600 bg-blue-700 text-white border-none" onClick={() => window.location.href = 'https://account.firstmonument.com/register'}>
                Open a Business Account
              </Button>
              <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-900/50 hover:text-white" onClick={() => navigate('/contact')}>
                Speak to a Specialist
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="backdrop-blur-md bg-slate-900/40 border border-slate-700 p-6 rounded-3xl">
                <Briefcase className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">Business Checking</h3>
                <p className="text-sm text-slate-400">Tailored accounts for businesses of all sizes with mobile deposit capabilities.</p>
              </div>
              <div className="backdrop-blur-md bg-slate-900/40 border border-slate-700 p-6 rounded-3xl mt-8 cursor-pointer hover:bg-slate-800/60 transition-colors" onClick={() => navigate('/commercial-lending')}>
                <Handshake className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">Commercial Lending</h3>
                <p className="text-sm text-slate-400">Lines of credit, term loans, and commercial real estate financing.</p>
              </div>
              <div className="backdrop-blur-md bg-slate-900/40 border border-slate-700 p-6 rounded-3xl -mt-8">
                <Calculator className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">Cash Management</h3>
                <p className="text-sm text-slate-400">Streamline your payables and receivables with advanced treasury solutions.</p>
              </div>
              <div className="backdrop-blur-md bg-slate-900/40 border border-slate-700 p-6 rounded-3xl">
                <Building2 className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="font-bold text-base md:text-lg mb-2">Merchant Services</h3>
                <p className="text-sm text-slate-400">Accept payments anywhere with seamless point-of-sale integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive Features Grid */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-6">Complete financial solutions for your business.</h2>
            <p className="text-base md:text-lg text-slate-600">Managing a business is hard enough. Managing your money shouldn't be. Discover our suite of tools designed to optimize your cash flow and secure your operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fraud Protection Services</h3>
              <p className="text-slate-600 mb-4">Safeguard your accounts with Positive Pay and ACH block filters. Control exactly who can pull funds from your account.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CreditCard className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate Credit Cards</h3>
              <p className="text-slate-600 mb-4">Empower your employees with individual spending limits while earning 2% cash back on all business purchases.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/commercial-lending')}>
              <Banknote className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business Lines of Credit</h3>
              <p className="text-slate-600 mb-4">Access working capital on demand to cover inventory, payroll, or unexpected expenses with competitive variable rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comparison / Pricing */}
      <section className="w-full py-20 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Compare Business Checking</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">Whether you're a solopreneur or a mid-market corporation, we have a checking account designed for your transaction volume.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Small Business */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Total Business</h3>
              <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-100">Perfect for growing businesses with moderate transaction volume.</p>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl md:text-4xl font-black text-slate-900">$15</span><span className="text-slate-500"> /mo</span>
                <p className="text-xs text-blue-600 font-bold mt-1">Waivable with $2,000 minimum balance</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 100 free transactions per month</li>
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> $5,000 cash deposit per month free</li>
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> First Monument Business Debit Card</li>
              </ul>
              <Button className="w-full hover:bg-slate-100 bg-white text-slate-900 border border-slate-300" onClick={() => window.location.href = 'https://account.firstmonument.com/register'}>Open Total Business</Button>
            </div>

            {/* Performance Business */}
            <div className="bg-white border-2 border-blue-600 rounded-3xl p-6 md:p-8 relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Performance Business</h3>
              <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-blue-100">For mid-sized companies needing higher limits and basic cash management.</p>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl md:text-4xl font-black text-slate-900">$30</span><span className="text-slate-500"> /mo</span>
                <p className="text-xs text-blue-600 font-bold mt-1">Waivable with $35,000 minimum balance</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> 250 free transactions per month</li>
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> $20,000 cash deposit per month free</li>
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" /> 2 free incoming domestic wires per month</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.location.href = 'https://account.firstmonument.com/register'}>Open Performance</Button>
            </div>

            {/* Commercial */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Commercial Platinum</h3>
              <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-100">Designed for large enterprises needing full treasury services.</p>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl md:text-4xl font-black text-slate-900">$95</span><span className="text-slate-500"> /mo</span>
                <p className="text-xs text-blue-600 font-bold mt-1">Waivable with $100,000 minimum balance</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 500 free transactions per month</li>
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Earnings credit to offset service fees</li>
                <li className="flex gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Full Treasury and Cash Management Suite</li>
              </ul>
              <Button className="w-full hover:bg-slate-100 bg-white text-slate-900 border border-slate-300" onClick={() => navigate('/contact')}>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Steps to Open */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-16">How to get started in 3 easy steps.</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-200"></div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white border-[4px] border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl md:text-3xl font-black text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gather your documents</h3>
              <p className="text-slate-600 text-sm">You'll need your EIN, Articles of Incorporation, and personal ID for all beneficial owners.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-white border-[4px] border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl md:text-3xl font-black text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Apply online or in-branch</h3>
              <p className="text-slate-600 text-sm">Fill out our secure 10-minute application. We provide instant decisions for most small businesses.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-blue-600 border-[4px] border-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-2xl md:text-3xl font-black text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fund and go</h3>
              <p className="text-slate-600 text-sm">Transfer your initial deposit electronically and get instant access to your virtual debit card.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="What do I need to open a business account?" 
              answer="You will need your Employer Identification Number (EIN) or Social Security Number (if sole proprietor), business formation documents (like Articles of Organization), a valid government-issued ID, and your business license if applicable." 
            />
            <FAQItem 
              question="Can I open a business account online?" 
              answer="Yes! If your business is a Sole Proprietorship, LLC, or Corporation with simple ownership structures, you can complete the entire account opening process online in about 10 minutes." 
            />
            <FAQItem 
              question="How do I waive the monthly maintenance fee?" 
              answer="Each tier has different requirements. For Total Business, you must maintain a $2,000 average daily balance. For Performance Business, you need a $35,000 combined deposit balance." 
            />
            <FAQItem 
              question="Does First Monument Bank offer SBA loans?" 
              answer="Yes, we are a Preferred SBA Lender offering SBA 7(a), SBA 504, and SBA Express loans to help you acquire real estate, purchase equipment, or increase working capital." 
            />
          </div>
        </div>
      </section>

      {/* 6. Cross-sell */}
      <section className="w-full py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a Business Credit Card?</h2>
            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl">Separate your business and personal expenses while earning industry-leading rewards. Explore our Platinum Business Cash Card and earn 2% unlimited cash back.</p>
            <Button className="bg-white text-slate-900 hover:bg-slate-100 flex items-center gap-2" onClick={() => navigate('/credit-cards')}>
              Explore Credit Cards <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-40 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-2xl shadow-2xl border border-slate-600 flex flex-col justify-between p-6 transform rotate-3">
              <div className="flex justify-between items-center">
                <Building2 className="w-6 h-6 text-slate-400" />
                <span className="text-xs font-bold text-slate-400">BUSINESS</span>
              </div>
              <div>
                <div className="text-base md:text-lg font-mono tracking-widest text-slate-300 mb-1">•••• •••• •••• 4281</div>
                <div className="text-xs text-slate-400">FIRST MONUMENT BANK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Massive Fine Print / Legal Disclaimers */}
      <section className="w-full py-12 px-4 bg-slate-50 text-slate-600 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm font-medium space-y-4 text-justify">
          <p><strong>1. Account Fees & Balances:</strong> Annual Percentage Yield (APY) is accurate as of today and is subject to change without notice. Minimum opening deposit for Total Business Checking is $100. Average daily balance is calculated by adding the principal in the account for each day of the period and dividing that figure by the number of days in the period.</p>
          <p><strong>2. Transaction Limits:</strong> For Total Business Checking, the first 100 transactions per month are free. "Transactions" include checks paid, deposit tickets, deposited items, ACH debits, and ACH credits. Excess transactions are $0.40 each.</p>
          <p><strong>3. Business Lending:</strong> All credit products are subject to credit approval and property valuation (where applicable). Rates, terms, and conditions are subject to change. SBA loans are subject to SBA eligibility guidelines.</p>
          <p><strong>4. Merchant Services:</strong> Merchant services are provided by First Monument Merchant Solutions, LLC, a registered ISO/MSP of First Monument Bank. Separate application and agreement are required. Early termination fees may apply depending on the contract terms.</p>
          <p>First Monument Bank, N.A. Member FDIC. Equal Housing Lender. © {new Date().getFullYear()} First Monument Bank. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}



