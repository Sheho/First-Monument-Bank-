import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { CheckCircle2, ShieldCheck, Zap, GraduationCap, ChevronRight, ChevronDown, Check, Minus } from "lucide-react";

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

export function CheckingAccounts() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden bg-slate-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl opacity-50 pointer-events-none -mt-40 -mr-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl opacity-50 pointer-events-none -mb-40 -ml-40"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-8 shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> Everyday & Premium Checking
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900">
              Checking accounts that fit your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">life</span>.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Access your money on your terms with over 15,000 ATMs and nearly 4,700 branches nationwide. Enjoy industry-leading digital tools like remote check deposit and seamless Zelle® transfers.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 font-bold px-8 py-6 text-lg" onClick={() => navigate("/open-account")}>
                Find Your Account
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 font-bold px-8 py-6 text-lg" onClick={() => navigate("/compare")}>
                Compare Features
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">15k+</div>
                <div className="text-sm font-medium text-slate-500">Fee-Free ATMs</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">$0</div>
                <div className="text-sm font-medium text-slate-500">Minimum to Open*</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">24/7</div>
                <div className="text-sm font-medium text-slate-500">Fraud Protection</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Checking Types Section */}
      <section className="w-full py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Premier Checking */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white border-blue-200 hover:border-blue-400 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-[60px] group-hover:bg-blue-400/20 transition-all duration-500"></div>
                <div className="absolute top-6 right-6 bg-blue-100 border border-blue-300 text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">MOST POPULAR</div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 shadow-sm flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-blue-300 transition-all duration-300">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Premier Client Checking</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Our premium tier offering elevated benefits, personalized service, and waived fees worldwide for higher balance clients.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /> Zero fees at non-FMB ATMs worldwide</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /> Dedicated Premier Bankers to support your financial goals</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /> No fees on incoming or outgoing wire transfers</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /> Avoid the $35 monthly fee with $75K+ in linked deposits/investments</li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md transform hover:scale-105 transition-transform" onClick={() => navigate("/open-account")}>
                    Open Premier Account
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Everyday Checking */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-[60px] group-hover:bg-blue-50 transition-all duration-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Total Checking</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    The everyday workhorse account. Enjoy simplicity, convenience, and easy ways to waive the monthly maintenance fee.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> $0 monthly fee when you have electronic deposits totaling $500 or more</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> Otherwise, a flat $12 monthly maintenance fee</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> Send and receive money in moments with Zelle®</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" /> 24/7 fraud monitoring and Zero Liability Protection</li>
                  </ul>
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-transform" onClick={() => navigate("/open-account")}>
                    Open Everyday Account
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Student Checking */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-cyan-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-[60px] group-hover:bg-cyan-50 transition-all duration-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-cyan-200 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">College Checking</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Built for college students aged 17-24. No monthly service fee for up to five years while you are in college.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" /> $0 monthly service fee for college students</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" /> Easy digital account opening with a valid student ID</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" /> Free access to credit score and financial education tools</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" /> Seamless parent transfers via the mobile app</li>
                  </ul>
                  <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 transform hover:scale-105 transition-transform" onClick={() => navigate("/open-account")}>
                    Open Student Account
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Feature Banner - Virtual Cards */}
      <section className="w-full py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] p-6 md:p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Abstract Background Image */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80" alt="Abstract Background" loading="lazy" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold mb-6 border border-blue-500/30">
                <ShieldCheck className="w-4 h-4" /> SECURE TRANSACTIONS
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                Every account includes our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Virtual Cards</span>.
              </h2>
              <p className="text-slate-300 mb-8 text-base md:text-lg leading-relaxed">
                Generate single-use or merchant-specific cards instantly to protect your real debit card numbers online. Pause, delete, or set limits with just one tap.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Merchant Locking:</strong> Cards that only work at a specific store.</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Burner Cards:</strong> Single-use cards that self-destruct after one purchase.</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Instant Issuance:</strong> Available to use immediately in your digital wallet.</span>
                </li>
              </ul>

              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-blue-500/30 transition-transform transform hover:scale-105 text-lg" onClick={() => navigate("/virtual-cards")}>
                Learn More <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Right: Floating Card Animation */}
            <div className="relative h-[300px] md:h-full min-h-[350px] flex items-center justify-center">
              {/* Glowing Orb Behind Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] animate-pulse duration-[4000ms]"></div>
              
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[320px] h-[200px] bg-gradient-to-br from-blue-600/80 to-cyan-500/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 relative flex flex-col justify-between overflow-hidden"
              >
                {/* Glass Highlights */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-8 bg-yellow-400/80 rounded border border-yellow-300/50 flex items-center justify-center">
                    <div className="w-8 h-4 border border-yellow-600/30 rounded-sm"></div>
                  </div>
                  <div className="text-white/80 font-bold italic tracking-wider">FMB Virtual</div>
                </div>
                
                <div className="relative z-10">
                  <div className="font-mono text-white/90 text-xl tracking-[0.2em] mb-2 drop-shadow-md">
                    **** **** **** 4092
                  </div>
                  <div className="flex justify-between items-end text-white/70 font-mono text-sm uppercase">
                    <div>
                      <div className="text-[10px] text-white/50">Valid Thru</div>
                      12/28
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50">Merchant</div>
                      Amazon.com
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Comparison Table Section */}
      <section className="w-full py-20 px-4 bg-white border-t border-[var(--color-bank-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Compare Checking Accounts</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Review the details and fee structures of our checking accounts to find the one that best fits your financial life.</p>
          </div>
          
          <div className="overflow-x-auto pb-6">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-slate-200 w-1/4 text-slate-500 font-medium">Features & Fees</th>
                  <th className="p-4 border-b-2 border-blue-600 w-1/4  rounded-tl-xl text-center">
                    <div className="font-bold text-slate-900 text-base md:text-lg">Total Checking</div>
                  </th>
                  <th className="p-4 border-b-2 border-slate-200 w-1/4 text-center">
                    <div className="font-bold text-slate-900 text-base md:text-lg">Premier Client</div>
                  </th>
                  <th className="p-4 border-b-2 border-slate-200 w-1/4 text-center">
                    <div className="font-bold text-slate-900 text-base md:text-lg">College Checking</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-100 hover: transition-colors">
                  <td className="p-4 font-medium text-slate-900">Monthly Service Fee</td>
                  <td className="p-4 text-center  text-slate-600">$12 (Waivable)</td>
                  <td className="p-4 text-center text-slate-600">$35 (Waivable)</td>
                  <td className="p-4 text-center text-slate-600">$0</td>
                </tr>
                <tr className="border-b border-slate-100 hover: transition-colors">
                  <td className="p-4 font-medium text-slate-900">How to Waive Fee</td>
                  <td className="p-4 text-center  text-slate-600 text-xs">$500+ in electronic deposits OR $1,500 beginning day balance</td>
                  <td className="p-4 text-center text-slate-600 text-xs">$75,000+ combined average daily balance in linked accounts</td>
                  <td className="p-4 text-center text-slate-600"><Minus className="w-4 h-4 mx-auto text-slate-300" /></td>
                </tr>
                <tr className="border-b border-slate-100 hover: transition-colors">
                  <td className="p-4 font-medium text-slate-900">Non-FMB ATM Fee</td>
                  <td className="p-4 text-center  text-slate-600">$3.00 per transaction</td>
                  <td className="p-4 text-center text-slate-600 font-bold text-blue-600">No Fee Worldwide</td>
                  <td className="p-4 text-center text-slate-600">$3.00 per transaction</td>
                </tr>
                <tr className="border-b border-slate-100 hover: transition-colors">
                  <td className="p-4 font-medium text-slate-900">Overdraft Fee</td>
                  <td className="p-4 text-center  text-slate-600">$34 per item (max 3/day)</td>
                  <td className="p-4 text-center text-slate-600">$34 per item (max 3/day)</td>
                  <td className="p-4 text-center text-slate-600">Transactions declined</td>
                </tr>
                <tr className="border-b border-slate-100 hover: transition-colors">
                  <td className="p-4 font-medium text-slate-900">Outgoing Wire Transfers (Domestic)</td>
                  <td className="p-4 text-center  text-slate-600">$25 (Online) / $35 (Branch)</td>
                  <td className="p-4 text-center text-slate-600 font-bold text-blue-600">$0</td>
                  <td className="p-4 text-center text-slate-600">$25 (Online) / $35 (Branch)</td>
                </tr>
                <tr className="border-b border-slate-100 hover: transition-colors">
                  <td className="p-4 font-medium text-slate-900">Free Cashier's Checks</td>
                  <td className="p-4 text-center  text-slate-600"><Minus className="w-4 h-4 mx-auto text-slate-300" /></td>
                  <td className="p-4 text-center text-slate-600"><Check className="w-5 h-5 mx-auto text-blue-600" /></td>
                  <td className="p-4 text-center text-slate-600"><Minus className="w-4 h-4 mx-auto text-slate-300" /></td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4  rounded-bl-xl text-center"><Button className=" text-xs">Open Total</Button></td>
                  <td className="p-4 text-center"><Button variant="outline" className=" text-xs border-blue-200">Open Premier</Button></td>
                  <td className="p-4 text-center"><Button variant="outline" className=" text-xs border-blue-200">Open College</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-4  border-t border-[var(--color-bank-border)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do I waive the monthly service fee?", a: "For Total Checking, the $12 fee is waived if you receive $500 or more in qualifying electronic direct deposits during the statement period, or if you maintain a $1,500 minimum beginning day balance." },
              { q: "What qualifies as an electronic direct deposit?", a: "A qualifying direct deposit is an electronic deposit of your salary, pension, Social Security, or other regular monthly income through the ACH network. Transfers from one account to another do not qualify." },
              { q: "How long does it take to get my debit card?", a: "Your physical contactless debit card will arrive in the mail within 5-7 business days. However, you can instantly generate a Virtual Card in the mobile app immediately after approval to begin spending online right away." },
              { q: "Can I use Zelle® with these accounts?", a: "Yes. All First Monument Bank checking accounts include free access to Zelle® within the mobile app, allowing you to send and receive money with friends and family in minutes." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-[var(--color-bank-border)] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                <button 
                  className="w-full px-6 py-4 flex items-center justify-between font-semibold text-slate-900 bg-white hover: transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="text-left pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}



