import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Home, Car, Heart, Umbrella, CheckCircle2, ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Phone, FileText } from "lucide-react";
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

export function Insurance() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      {/* 1. Hero Section */}
      <section className="w-full relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 px-4 bg-slate-900 border-b border-slate-800 overflow-hidden text-white">
        {/* Background Image & Animated Elements */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80" alt="Insurance Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70"></div>
          {/* Animated Tech Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-left">
            <motion.div 
              animate={{ boxShadow: ["0 0 15px rgba(59,130,246,0.2)", "0 0 30px rgba(59,130,246,0.6)", "0 0 15px rgba(59,130,246,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-600/20 border border-blue-400/50 text-blue-200 text-xs font-black tracking-widest mb-6 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 text-blue-400" /> INDEPENDENT AGENCY
            </motion.div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Protect what <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">matters most</span>.
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl leading-relaxed">
              As an independent agency, First Monument Bank Insurance Agency shops top-rated national carriers to find you the exact coverage you need at the most competitive price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-6 py-3 text-base rounded-xl shadow-lg shadow-blue-500/30 border-none transition-transform transform hover:scale-105">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-bold px-6 py-3 text-base rounded-xl transition-transform transform hover:scale-105">
                File a Claim
              </Button>
            </div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 w-full max-w-sm ml-auto relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse duration-[4000ms]"></div>
            
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="backdrop-blur-xl bg-slate-800/60 border border-slate-600/50 p-6 md:p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>
              <ShieldCheck className="w-20 h-20 text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              <div className="text-3xl font-black text-white mb-4 tracking-tight">Bundle & Save</div>
              <p className="text-slate-300 text-base mb-8 leading-relaxed">Combine your Auto and Home policies and save up to 20% annually on your premiums.</p>
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-6 text-lg rounded-xl transition-transform transform hover:scale-105">Start Bundling</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Products Grid */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Coverage Options</h2>
            <p className="text-base md:text-lg text-slate-600">We don't believe in one-size-fits-all insurance. Our licensed agents custom-build policies tailored to your unique assets and lifestyle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Auto */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <Car className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Auto & Vehicle</h3>
              </div>
              <p className="text-slate-600 mb-6">Beyond basic liability, we ensure you have adequate uninsured motorist, collision, and comprehensive coverage to protect your daily commute or cross-country road trips.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Gap Coverage for new vehicles</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Classic Car & Motorcycle policies</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> RV, Boat, and Watercraft insurance</li>
              </ul>
            </div>

            {/* Home */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                  <Home className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Home & Renters</h3>
              </div>
              <p className="text-slate-600 mb-6">Protect your most valuable asset from fire, theft, and natural disasters. We calculate replacement cost to guarantee you can rebuild if the worst happens.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> High-Value Home policies</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Specialized Flood & Earthquake add-ons</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Valuable Personal Property (Jewelry/Art) schedules</li>
              </ul>
            </div>

            {/* Life */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <Heart className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Life & Health</h3>
              </div>
              <p className="text-slate-600 mb-6">Ensure your family's financial stability. Whether you need an affordable term policy to cover a mortgage or permanent life insurance for estate planning.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> Term Life (10, 20, 30-year)</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> Whole Life & Universal Life policies</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> Long-Term Care insurance</li>
              </ul>
            </div>

            {/* Umbrella */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                  <Umbrella className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Personal Umbrella</h3>
              </div>
              <p className="text-slate-600 mb-6">Lawsuits are unpredictable. An umbrella policy provides an extra $1M to $5M of liability coverage above your standard auto and home limits.</p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" /> Protection against major lawsuits</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" /> Covers libel, slander, and defamation</li>
                <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" /> Essential for pool owners and landlords</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Independent Advantage */}
      <section className="w-full py-24 px-4 bg-slate-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4 shadow-sm border border-blue-200">
              <ShieldCheck className="w-4 h-4" /> Why Choose Us
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Independent</span> Advantage
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Unlike captive agents who can only sell you one brand of insurance, First Monument is an independent broker. We work for <strong>you</strong>, not the insurance company.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-colors group-hover:bg-blue-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 text-white transform group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Unbiased Advice</h4>
              <p className="text-slate-600 leading-relaxed relative z-10">We analyze policies from dozens of A-rated carriers to find the absolute best match for your specific risk profile and budget.</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-10 -mt-10 transition-colors group-hover:bg-indigo-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 text-white transform group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Policy Shopping</h4>
              <p className="text-slate-600 leading-relaxed relative z-10">If your premium spikes at renewal time, we automatically shop your policy to other carriers behind the scenes to save you money.</p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full blur-3xl -mr-10 -mt-10 transition-colors group-hover:bg-cyan-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 text-white transform group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Claims Advocacy</h4>
              <p className="text-slate-600 leading-relaxed relative z-10">If you have a claim, you don't fight alone. Our agents act as your personal advocate, ensuring the carrier handles your payout fairly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="w-full py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Insurance FAQs</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Does First Monument Bank underwrite the insurance policies?" 
              answer="No. First Monument Bank Insurance Agency acts as an independent broker. Your actual policy is written, underwritten, and backed by third-party national insurance carriers (e.g., Travelers, Safeco, Progressive). This allows us to shop around on your behalf." 
            />
            <FAQItem 
              question="Can I bundle my policies even if they are with different carriers?" 
              answer="Generally, to receive a 'multi-line' or 'bundling' discount, both your auto and home policies must be underwritten by the same carrier. Our agents will price out bundled options versus standalone options to ensure you get the lowest total cost." 
            />
            <FAQItem 
              question="Do I need flood insurance?" 
              answer="Standard homeowners policies do NOT cover flood damage. If your home is located in a FEMA-designated Special Flood Hazard Area (SFHA) and you have a mortgage, federal law requires you to carry flood insurance. Even if you are outside a high-risk zone, we highly recommend a preferred-risk flood policy." 
            />
            <FAQItem 
              question="How do I file a claim?" 
              answer="You can file a claim directly with your carrier using the toll-free number on your policy declarations page. However, we encourage you to call our agency first. We can review the damage details, advise you on your deductible, and help you determine if filing a claim makes financial sense." 
            />
          </div>
        </div>
      </section>

      {/* 5. Cross-sell: Auto Loans */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
            <Car className="w-12 h-12 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Buying a new car?</h3>
            <p className="text-slate-600 mb-0">Don't just get it insured—get it financed. First Monument Bank offers auto loans with rates as low as 4.99% APR. Get pre-approved before you shop.</p>
          </div>
          <Button className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/loans')}>View Auto Loans</Button>
        </div>
      </section>

      {/* 6. Massive Disclosures */}
      <section className="w-full py-12 px-4 bg-slate-100 text-xs text-slate-500 text-justify">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="p-4 border border-slate-300 font-bold text-center mb-6 rounded-xl bg-white">
            <p className="uppercase tracking-widest text-[10px] mb-2 text-slate-400">Important Insurance Disclosures</p>
            <p>Insurance Products: Are Not FDIC Insured • Are Not Bank Guaranteed • May Lose Value • Are Not a Deposit • Are Not Insured by Any Federal Government Agency • Are Not a Condition to Any Banking Service or Loan Activity.</p>
          </div>
          <p><strong>1. Agency Disclosure:</strong> First Monument Bank Insurance Agency ("FMBIA") is a wholly owned subsidiary of First Monument Bank, N.A. FMBIA is a licensed insurance producer in all 50 states and the District of Columbia. Insurance products are offered through third-party carriers unaffiliated with First Monument Bank.</p>
          <p><strong>2. Policy Terms:</strong> All coverage is subject to the specific terms, conditions, and exclusions of the policy issued. In the event of a conflict between the information presented on this website and your policy documents, your policy documents will govern. Discounts, coverage options, and pricing vary by state and individual risk characteristics. Not all applicants will qualify.</p>
          <p><strong>3. Anti-Coercion:</strong> First Monument Bank cannot require you to purchase an insurance policy from FMBIA as a condition of securing a loan, mortgage, or any other credit product. You have the absolute right to purchase your insurance from any agency or carrier of your choice, provided the carrier meets the Bank's minimum rating requirements.</p>
          <p><strong>4. Life Insurance:</strong> Guarantees are based on the claims-paying ability of the issuing insurance company. Life insurance policies may contain exclusions, limitations, reductions of benefits, and terms for keeping them in force. Your agent can provide you with costs and complete details.</p>
          <p>First Monument Bank, N.A. Member FDIC. © {new Date().getFullYear()} First Monument Bank. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}


