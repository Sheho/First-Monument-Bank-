import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Landmark, Briefcase, ChevronRight, FileText, CheckCircle2, ChevronDown, Handshake, Calculator, Banknote } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-bold text-slate-800 text-base md:text-lg group-hover:text-blue-700 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-700" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function CommercialLending() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-24 px-4 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 text-blue-300 text-xs font-bold mb-6">
              <Handshake className="w-4 h-4" /> CAPITAL TO SCALE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fuel your ambition with commercial capital.
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl">
              Whether you're acquiring real estate, expanding operations, or managing working capital, First Monument Bank delivers tailored credit facilities with competitive terms and rapid execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="sm" className="hover:bg-blue-600 bg-blue-700 text-white border-none" onClick={() => navigate('/contact')}>
                Speak to a Lender
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lending Products Grid */}
      <section className="w-full py-24 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Credit facilities built for your trajectory.</h2>
            <p className="text-base md:text-lg text-slate-600">From short-term liquidity needs to massive infrastructure projects, our dedicated lending team architects the exact debt structure you need to maximize ROI without stifling cash flow.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Real Estate */}
            <div className="bg-white p-6 md:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => navigate('/contact')}>
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Commercial Real Estate (CRE)</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6">Acquisition, development, and refinancing loans for owner-occupied and investment properties. We finance multifamily, retail, office, industrial, and specialized real estate.</p>
              <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Up to 80% LTV on multi-family properties</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Amortization up to 25 years</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Fixed and floating rate options</li>
              </ul>
            </div>

            {/* Business Lines of Credit */}
            <div className="bg-white p-6 md:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => navigate('/contact')}>
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Banknote className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Revolving Lines of Credit</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6">Bridge gaps in cash flow, fund seasonal inventory buildup, and capitalize on sudden vendor discounts. Draw only what you need, when you need it.</p>
              <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Facilities from $100,000 to $50M+</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Asset-based lending (ABL) options</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Interest only charged on drawn balances</li>
              </ul>
            </div>

            {/* Term Loans */}
            <div className="bg-white p-6 md:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => navigate('/contact')}>
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Calculator className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Equipment & Term Loans</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6">Lump sum financing for permanent working capital, partner buyouts, mergers & acquisitions (M&A), and heavy machinery or vehicle fleet purchases.</p>
              <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Up to 100% equipment financing</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Terms from 1 to 10 years</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Predictable fixed monthly payments</li>
              </ul>
            </div>

            {/* SBA Loans */}
            <div className="bg-white p-6 md:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => navigate('/contact')}>
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Landmark className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">SBA 7(a) & 504 Loans</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6">As a Preferred SBA Lender, we expedite government-backed loans offering lower down payments and longer terms than conventional bank loans.</p>
              <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Only 10% down on commercial real estate</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Terms up to 25 years</li>
                <li className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> SBA Preferred Lender Program (PLP) status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Underwriting Process */}
      <section className="w-full py-24 px-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A streamlined path to funding.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">We respect your time. Our local underwriting team ensures rapid decision-making without the bureaucratic delays of mega-banks.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Meet with your dedicated Relationship Manager to discuss your capital requirements and business trajectory." },
              { step: "02", title: "Document Collection", desc: "Submit 3 years of business and personal tax returns, interim financials, and a debt schedule." },
              { step: "03", title: "Underwriting", desc: "Our local credit committee evaluates cash flow (DSCR), collateral, and global credit strength." },
              { step: "04", title: "Closing & Funding", desc: "Sign final loan documents. Funds are wired to your operating account or dispersed to escrow immediately." }
            ].map((item, idx) => (
              <div key={idx} className="relative pt-8">
                <span className="absolute top-0 left-0 text-4xl md:text-6xl font-black text-slate-100 -z-10">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Commercial Lending FAQs</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="What is the minimum Debt Service Coverage Ratio (DSCR) you require?" 
              answer="Generally, we look for a historical and projected global DSCR of at least 1.25x. However, for certain asset-backed loans or highly-liquid borrowers, we may underwrite with more flexible ratios." 
            />
            <FAQItem 
              question="Do you require personal guarantees?" 
              answer="In most cases, yes. We typically require joint and several personal guarantees from any individual owning 20% or more of the borrowing entity. Exemptions may be made for large, investment-grade corporate borrowers." 
            />
            <FAQItem 
              question="What is the typical timeline from application to funding?" 
              answer="For lines of credit and equipment loans, we typically provide a term sheet within 48 hours and can fund within 2-3 weeks of receiving a complete package. Commercial Real Estate loans take 4-6 weeks to accommodate appraisals and environmental (Phase I) assessments." 
            />
            <FAQItem 
              question="Is there a prepayment penalty on commercial term loans?" 
              answer="Yes, conventional commercial real estate and term loans typically feature a declining prepayment penalty structure (e.g., 3-2-1 or 5-4-3-2-1). However, business lines of credit generally have no prepayment penalties." 
            />
          </div>
        </div>
      </section>

      {/* Massive Legal Disclosures */}
      <section className="w-full py-12 px-4 bg-slate-100 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto space-y-4 text-justify">
          <p className="font-bold uppercase tracking-widest mb-2 text-[10px] text-slate-400">Important Commercial Lending Disclosures</p>
          <p>
            All credit applications are subject to standard credit and underwriting approval. Not all applicants will qualify. Terms, conditions, rates, and fees are subject to change without notice and may vary based on borrower creditworthiness, collateral type, and prevailing market conditions. Minimum loan amounts apply.
          </p>
          <p>
            <strong>Lines of Credit:</strong> Revolving lines of credit are subject to an annual review. First Monument Bank reserves the right to suspend or terminate advances based on material adverse changes in the borrower's financial condition or failure to comply with financial covenants. Prime-based variable rates are indexed to the Wall Street Journal Prime Rate (WSJP) plus a specified margin.
          </p>
          <p>
            <strong>Commercial Real Estate:</strong> First Lien position is required on all CRE financing. An appraisal by a bank-approved appraiser, an acceptable Phase I Environmental Site Assessment (ESA), and an ALTA Title Insurance policy are required prior to closing. The borrower is responsible for all third-party closing costs, including but not limited to appraisal fees, environmental fees, legal counsel fees, and origination fees.
          </p>
          <p>
            <strong>SBA Lending:</strong> First Monument Bank is an SBA Preferred Lender. SBA loans are subject to approval by the Small Business Administration. Certain guarantee fees apply and can typically be financed into the loan amount. SBA 504 loans involve a Certified Development Company (CDC) and require two distinct loans: a first mortgage from First Monument Bank and a second mortgage via the CDC.
          </p>
          <p>
            Equal Housing Lender <span className="font-serif">⌂</span> | Member FDIC.
          </p>
        </div>
      </section>
    </div>
  );
}


