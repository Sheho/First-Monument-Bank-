import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { category: "Security", q: "Is my money safe with First Monument Bank?", a: "Yes, absolutely. First Monument Bank Bank, N.A. is an FDIC member. Your deposits are insured up to $250,000 per depositor. We also use 256-bit AES encryption to secure all your data." },
    { category: "Accounts", q: "Are there any hidden fees?", a: "No! We believe in transparent banking. There are no monthly maintenance fees, no minimum balance requirements, and no overdraft fees for our standard checking accounts." },
    { category: "Accounts", q: "How quickly can I open an account?", a: "You can apply for an account online in less than 5 minutes. In most cases, your account will be approved and ready to use instantly." },
    { category: "Transfers", q: "Can I deposit cash?", a: "Yes, you can deposit cash at any of our 40,000+ partner ATMs nationwide, or at select retail partners." },
    { category: "Accounts", q: "What is a High-Yield Savings Account?", a: "It's a savings account that pays a much higher interest rate than a traditional savings account, helping your money grow faster while keeping it easily accessible." },
    { category: "Transfers", q: "How do I transfer money from another bank?", a: "You can easily link an external bank account through our secure dashboard and initiate a transfer. ACH transfers typically take 1-3 business days to clear." },
  ];

  const categories = ["All", "Accounts", "Transfers", "Security", "Loans"];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-grow flex flex-col items-center w-full relative z-10 pb-32">
      {/* Premium Grid Pattern Background with Fade */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-[-1]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'%23ffffff\' fill-opacity=\'0.07\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', 
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)' 
        }}
      ></div>
      {/* Subtle ambient top glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none z-[-1]"></div>

      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 mt-20">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl md:text-4xl font-bold tracking-tight mb-3">First Monument Bank FAQs.</h1>
          <p className="text-sm md:text-base text-[var(--color-bank-text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Find the answers to all your questions here. From understanding our uncompromised security protocols to setting up your first high-yield checking account, we've compiled everything you need to know to bank smarter with First Monument Bank.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-sm transition-colors duration-150 ease-in-out">
              Contact Us 🎧
            </Link>
            <Link to="/about" className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors duration-150 ease-in-out">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Search & Filters Block */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10 py-8 border-y border-slate-200">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search something..."
              className="w-full bg-white border border-slate-300 rounded-xl py-3 pl-12 pr-20 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                <span>CTRL</span><span>K</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-[var(--color-bank-text-muted)] mb-3 font-semibold tracking-wider uppercase">Filter by:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-white/5 text-slate-600 border border-white/10 hover:bg-white/10 hover:text-slate-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-2 min-h-[400px]">
          <AnimatePresence>
            {filteredFaqs.map((faq) => {
              const globalIndex = faqs.findIndex(f => f.q === faq.q);
              return (
                <motion.div 
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] shadow-lg group"
                >
                  <button 
                    className="w-full px-4 py-2.5 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                    onClick={() => toggleFaq(globalIndex)}
                  >
                    <span className="font-medium text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{faq.q}</span>
                    <motion.div 
                      animate={{ rotate: openFaq === globalIndex ? 180 : 0 }} 
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-6 h-6 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover: transition-colors ml-4"
                    >
                      <ChevronDown className="w-4 h-4 text-blue-600" />
                    </motion.div>
                  </button>
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: openFaq === globalIndex ? "auto" : 0, opacity: openFaq === globalIndex ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-3 pt-2 text-[13px] text-slate-600 border-t border-white/10 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {filteredFaqs.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-[var(--color-bank-text-muted)] bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <p>No results found for "{searchQuery}".</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
