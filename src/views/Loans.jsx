import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Home, CheckCircle2, AlertCircle, Percent, ChevronDown, HelpCircle, ArrowRight, Ship, Briefcase, Calculator, Clock } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

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

export function Loans() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full py-24 px-4 bg-slate-900 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-300 text-xs font-bold mb-6">
              <Percent className="w-4 h-4" /> COMPETITIVE LENDING
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Borrowing built for your life's big moments.
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl">
              From hitting the open road to consolidating high-interest debt, First Monument Bank offers flexible term loans with transparent pricing and no hidden origination fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none" onClick={() => navigate('/contact')}>
                Apply for a Loan
              </Button>
              <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-900/50 hover:text-white" onClick={() => navigate('/heloc')}>
                Explore Home Equity
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md hidden lg:block">
            <div className="backdrop-blur-md bg-slate-900/40 border border-slate-700 p-6 md:p-8 rounded-3xl">
              <Calculator className="w-16 h-16 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Check Your Rate</h3>
              <p className="text-slate-400 mb-6">See what you qualify for in just 2 minutes without affecting your credit score. We use a soft credit pull to estimate your APR.</p>
              <Button variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-900/50 hover:text-white w-full" onClick={() => navigate('/contact')}>
                Get Pre-Qualified Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Products Grid */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-6">Choose the loan that fits your goals.</h2>
            <p className="text-base md:text-lg text-slate-600">Fixed rates. Clear terms. Zero prepayment penalties. Select the product that matches your financial objective.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Auto Loan */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Auto Loans</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Finance a new or used vehicle, or refinance your existing high-rate auto loan to save money.</p>
              <div className="mb-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Rates as low as</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-black text-slate-900">4.99%</span>
                  <span className="text-sm text-slate-500 font-bold">APR</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Up to 84-month terms</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 100% financing available</li>
              </ul>
              <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900" onClick={() => navigate('/contact')}>Apply Now</Button>
            </div>

            {/* Personal Loan */}
            <div className="bg-white border-2 border-blue-600 rounded-3xl p-6 md:p-8 relative shadow-xl transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Fast Funding</div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Personal Loans</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Unsecured funds for major purchases, weddings, or unexpected medical expenses.</p>
              <div className="mb-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Rates as low as</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-black text-slate-900">7.50%</span>
                  <span className="text-sm text-slate-500 font-bold">APR</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Borrow up to $50,000</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Next-day funding available</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/contact')}>Check Rate</Button>
            </div>

            {/* Debt Consolidation */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Debt Consolidation</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Combine high-interest credit card balances into one predictable, lower-rate monthly payment.</p>
              <div className="mb-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Rates as low as</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-black text-slate-900">6.99%</span>
                  <span className="text-sm text-slate-500 font-bold">APR</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Direct payment to creditors</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Fixed term up to 60 months</li>
              </ul>
              <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900" onClick={() => navigate('/contact')}>Apply Now</Button>
            </div>

            {/* RV & Boat */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <Ship className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">RV & Boat Loans</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">Hit the water or the open road with specialty financing designed for recreational vehicles.</p>
              <div className="mb-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Rates as low as</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-black text-slate-900">6.25%</span>
                  <span className="text-sm text-slate-500 font-bold">APR</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Borrow up to $150,000</li>
                <li className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Extended terms up to 144 mos</li>
              </ul>
              <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900" onClick={() => navigate('/contact')}>Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Rates Table / Matrix */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Current Auto Loan Rates</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-6 py-4">Vehicle Type</th>
                  <th className="px-6 py-4">Term Length</th>
                  <th className="px-6 py-4">Est. Monthly Payment (per $10k)</th>
                  <th className="px-6 py-4 bg-blue-50 text-blue-800">Lowest APR*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">New (2024-2025)</td>
                  <td className="px-6 py-4">Up to 36 months</td>
                  <td className="px-6 py-4">$299.66</td>
                  <td className="px-6 py-4 bg-blue-50/50 font-bold text-slate-900">4.99%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">New (2024-2025)</td>
                  <td className="px-6 py-4">48 - 60 months</td>
                  <td className="px-6 py-4">$190.58</td>
                  <td className="px-6 py-4 bg-blue-50/50 font-bold text-slate-900">5.49%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Used (2018-2023)</td>
                  <td className="px-6 py-4">Up to 48 months</td>
                  <td className="px-6 py-4">$235.32</td>
                  <td className="px-6 py-4 bg-blue-50/50 font-bold text-slate-900">5.99%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Used (2018-2023)</td>
                  <td className="px-6 py-4">60 - 72 months</td>
                  <td className="px-6 py-4">$167.35</td>
                  <td className="px-6 py-4 bg-blue-50/50 font-bold text-slate-900">6.49%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">*Rates shown include a 0.25% discount for enrolling in Autopay from a First Monument Checking account. Rates vary based on credit history.</p>
        </div>
      </section>

      {/* 4. Process */}
      <section className="w-full py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">The application process is simple.</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-blue-900">1</div>
              <h3 className="text-xl font-bold mb-3">Apply in minutes</h3>
              <p className="text-slate-400 text-sm">Tell us about yourself and how much you need. Our secure online application takes less than 10 minutes to complete.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-blue-900">2</div>
              <h3 className="text-xl font-bold mb-3">Get a fast decision</h3>
              <p className="text-slate-400 text-sm">Many applicants receive an instant decision. If approved, you can review your rate, term, and monthly payment immediately.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold border-4 border-blue-900">3</div>
              <h3 className="text-xl font-bold mb-3">Receive your funds</h3>
              <p className="text-slate-400 text-sm">E-sign your loan documents. For personal loans, funds can be deposited directly into your account as soon as the next business day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full py-20 px-4 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Loan FAQs</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Does checking my rate impact my credit score?" 
              answer="No. When you check your rate through our pre-qualification tool, we perform a 'soft pull' on your credit report, which does not affect your credit score. We only perform a 'hard pull' if you choose a loan offer and submit a formal application." 
            />
            <FAQItem 
              question="What is the difference between an unsecured personal loan and a secured loan?" 
              answer="An unsecured personal loan (like our standard Personal Loan) is approved based purely on your creditworthiness and requires no collateral. A secured loan (like an Auto Loan or RV Loan) requires an asset (the vehicle) to serve as collateral, which generally results in a lower interest rate." 
            />
            <FAQItem 
              question="Are there prepayment penalties?" 
              answer="Never. First Monument Bank does not charge prepayment penalties on any of our consumer loan products. You can pay off your loan early, or make extra principal payments, at any time without fees." 
            />
            <FAQItem 
              question="Can I use a personal loan to pay for college?" 
              answer="No. Federal regulations prohibit the use of our standard Personal Loans for post-secondary educational expenses. If you need to fund tuition, we recommend exploring dedicated student loan options." 
            />
          </div>
        </div>
      </section>

      {/* 6. Massive Fine Print / Disclosures */}
      <section className="w-full py-16 px-4 bg-slate-50 text-slate-500 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-6 h-6 text-slate-400 shrink-0" />
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest">Important Lending Disclosures</h3>
          </div>
          <div className="text-xs leading-relaxed space-y-4 text-justify">
            <p><strong>General Lending Terms:</strong> All loans are subject to credit approval, income verification, and satisfactory collateral (if applicable). Rates, terms, and conditions are subject to change without notice. The Annual Percentage Rate (APR) you receive is based on your creditworthiness, loan amount, and term length. Not all applicants will qualify for the lowest rate. Maximum loan amounts may vary based on credit score and state of residence.</p>
            <p><strong>Auto Loans:</strong> Minimum loan amount is $5,000. Maximum loan amount is $100,000. 4.99% APR is available for new vehicles (model years 2024 or 2025) with up to a 36-month term. Used vehicle rates apply to model years 2018-2023. Vehicles older than 2018 may be subject to higher rates or may not qualify for standard auto financing. APR includes a 0.25% interest rate discount for setting up automatic payments from a qualifying First Monument Bank checking account prior to loan closing. If autopay is cancelled at any time, the rate will increase by 0.25% for the remainder of the term.</p>
            <p><strong>Personal Loans:</strong> Minimum loan amount is $2,000. Maximum loan amount is $50,000. 7.50% APR is available for terms up to 24 months for borrowers with excellent credit. APR includes the 0.25% autopay discount. Personal loans cannot be used for post-secondary educational expenses, purchasing crypto-assets, or illegal activities. Funding timeline depends on when your application is approved and when you electronically sign your loan documents. Funds are generally deposited on the next business day if documents are signed before 5:00 PM EST.</p>
            <p><strong>Debt Consolidation:</strong> If you select a loan for the purpose of debt consolidation, First Monument Bank may require that loan proceeds be disbursed directly to your creditors. Consolidation does not erase debt, it merely transfers it to a new lender. You should carefully consider if a longer repayment term will result in paying more total interest over the life of the loan.</p>
            <p>First Monument Bank, N.A. Member FDIC. Equal Housing Lender. © {new Date().getFullYear()} First Monument Bank. All rights reserved.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

