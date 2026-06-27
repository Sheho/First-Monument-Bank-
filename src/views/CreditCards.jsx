import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { CheckCircle2, CreditCard, Plane, ShieldAlert, ChevronRight, Info } from "lucide-react";

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

export function CreditCards() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl opacity-50 pointer-events-none -mt-40 -mr-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl opacity-50 pointer-events-none -mb-40 -ml-40"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-8 shadow-sm">
              <CreditCard className="w-4 h-4" /> Rewards & Travel Cards
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900">
              Credit cards that reward your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">lifestyle</span>.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Turn daily purchases into everyday wins. Whether you want rewards you control, premium travel perks, or unlimited cash back, we have a card for every ambition.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 font-bold px-8 py-6 text-lg" onClick={() => navigate("/apply-credit-card")}>
                Find Your Card
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 font-bold px-8 py-6 text-lg" onClick={() => navigate("/compare")}>
                Compare Cards
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">$0</div>
                <div className="text-sm font-medium text-slate-500">Annual Fee Options</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">0%</div>
                <div className="text-sm font-medium text-slate-500">Intro APR*</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-black text-slate-900 mb-1">24/7</div>
                <div className="text-sm font-medium text-slate-500">Fraud Protection</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full py-12 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Cash Rewards */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-[60px] group-hover:bg-blue-50 transition-all duration-500"></div>
                <div className="absolute top-6 right-6 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">NO ANNUAL FEE</div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                    <CreditCard className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Customized Cash Rewards</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Rewards you control. Maximize your cash back in the categories you spend the most.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> 3% cash back in the category of your choice</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> 2% cash back at grocery stores and wholesale clubs</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" /> Online $200 cash rewards bonus offer</li>
                  </ul>
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-transform" onClick={() => navigate("/apply-credit-card?card=cash-rewards")}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Travel Elite */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-gradient-to-b from-indigo-50 to-white border-indigo-200 hover:border-indigo-400 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-[60px] group-hover:bg-indigo-400/20 transition-all duration-500"></div>
                <div className="absolute top-6 right-6 bg-indigo-100 border border-indigo-300 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">$95 ANNUAL FEE</div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-indigo-300 transition-all duration-300">
                    <Plane className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Premium Rewards®</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Elevate your travel experience with premium perks, limitless points, and travel statement credits.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0 mt-0.5" /> Unlimited 2 points for every $1 spent on travel and dining</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0 mt-0.5" /> Unlimited 1.5 points per $1 on all other purchases</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0 mt-0.5" /> Up to $100 in Airline Incidental Statement Credits annually</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0 mt-0.5" /> 60,000 online bonus points offer</li>
                  </ul>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transform hover:scale-105 transition-transform" onClick={() => navigate("/apply-credit-card?card=travel-elite")}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Platinum Build */}
            <motion.div variants={fadeInUp} className="h-full">
              <Card className="h-full flex flex-col bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/50 rounded-full blur-[60px] group-hover:bg-emerald-50 transition-all duration-500"></div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:border-emerald-200 transition-all duration-300">
                    <ShieldAlert className="w-6 h-6 text-emerald-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Unlimited Cash Rewards</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    Simple, straightforward cash back on everything you buy. No limit to what you can earn.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Earn unlimited 1.5% cash back on all purchases</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> Cash rewards do not expire</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> 0% Intro APR for your first 15 billing cycles</li>
                    <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" /> No annual fee</li>
                  </ul>
                  <Button variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-transform" onClick={() => navigate("/apply-credit-card?card=platinum-build")}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Feature Banner - Rewards Program */}
      <section className="w-full py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] p-6 md:p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Abstract Background Image */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80" alt="Abstract Background" loading="lazy" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold mb-6 border border-blue-500/30">
                <CreditCard className="w-4 h-4" /> REWARDS MULTIPLIER
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                Get even more with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Preferred Rewards</span>.
              </h2>
              <p className="text-slate-300 mb-8 text-base md:text-lg leading-relaxed">
                If you are an eligible First Monument Bank Preferred Rewards member, you can earn a 25% to 75% rewards bonus on every purchase.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Gold Tier:</strong> 25% bonus on all credit card rewards.</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Platinum Tier:</strong> 50% bonus on all credit card rewards.</span>
                </li>
                <li className="flex items-start text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                  <span><strong>Platinum Honors:</strong> 75% bonus on all credit card rewards.</span>
                </li>
              </ul>
            </div>
            
            {/* Right: Floating Card Animation */}
            <div className="relative h-[300px] md:h-full min-h-[350px] flex items-center justify-center">
              {/* Glowing Orb Behind Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] animate-pulse duration-[4000ms]"></div>
              
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [2, -2, 2] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[320px] h-[200px] bg-gradient-to-br from-blue-600/80 to-indigo-500/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 relative flex flex-col justify-between overflow-hidden"
              >
                {/* Glass Highlights */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-8 bg-slate-300/80 rounded border border-slate-200/50 flex items-center justify-center">
                    <div className="w-8 h-4 border border-slate-400/30 rounded-sm"></div>
                  </div>
                  <div className="text-white/80 font-bold italic tracking-wider">FMB Rewards</div>
                </div>
                
                <div className="relative z-10">
                  <div className="font-mono text-white/90 text-xl tracking-[0.2em] mb-2 drop-shadow-md">
                    **** **** **** 8824
                  </div>
                  <div className="flex justify-between items-end text-white/70 font-mono text-sm uppercase">
                    <div>
                      <div className="text-[10px] text-white/50">Cardholder</div>
                      VALUED MEMBER
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50">Bonus</div>
                      +75%
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Benefits Deep Dive */}
      <section className="w-full py-20 px-4 bg-white border-t border-[var(--color-bank-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Premium Benefits on Every Card</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Beyond rewards, your First Monument Bank credit card is packed with features designed to protect your purchases and elevate your travel experiences.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6  border border-slate-200 rounded-2xl">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Travel Protections</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Includes Trip Cancellation / Interruption Insurance up to $10,000 per trip, Auto Rental Collision Damage Waiver, and Lost Luggage Reimbursement up to $3,000.</p>
            </div>
            <div className="p-6  border border-slate-200 rounded-2xl">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                <ShieldAlert className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">Purchase & Warranty Protection</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Covers your new purchases for 120 days against damage or theft up to $10,000 per claim. Extends the time period of the U.S. manufacturer's warranty by an additional year.</p>
            </div>
            <div className="p-6  border border-slate-200 rounded-2xl">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">24/7 Concierge Service</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Need a last-minute dining reservation or tickets to a sold-out event? Our Visa Signature® Concierge is available 24/7 to assist you with travel, dining, and entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Rates & Fees Schumer Box */}
      <section className="w-full py-16 px-4  border-t border-[var(--color-bank-border)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Rates and Fees Disclosures</h2>
            <span className="text-xs  text-slate-700 font-bold px-2 py-1 rounded">IMPORTANT</span>
          </div>
          
          <div className="bg-white border-2 border-slate-800 p-0 overflow-hidden text-sm">
            <div className=" text-white font-bold p-3 text-base md:text-lg">Interest Rates and Interest Charges</div>
            
            <div className="border-b border-slate-300 flex flex-col md:flex-row">
              <div className="p-3 md:w-1/3 font-bold  border-r border-slate-300">Annual Percentage Rate (APR) for Purchases</div>
              <div className="p-3 md:w-2/3">
                <strong>0% Intro APR</strong> for 15 billing cycles for purchases.<br /><br />
                After that, your APR will be <strong>19.24%</strong> to <strong>29.24%</strong>, based on your creditworthiness. This APR will vary with the market based on the Prime Rate.
              </div>
            </div>
            
            <div className="border-b border-slate-300 flex flex-col md:flex-row">
              <div className="p-3 md:w-1/3 font-bold  border-r border-slate-300">APR for Balance Transfers</div>
              <div className="p-3 md:w-2/3">
                <strong>0% Intro APR</strong> for 15 billing cycles for any balance transfers made within 60 days of opening your account.<br /><br />
                After that, your APR will be <strong>19.24%</strong> to <strong>29.24%</strong>, based on your creditworthiness. This APR will vary with the market based on the Prime Rate.
              </div>
            </div>
            
            <div className="border-b border-slate-300 flex flex-col md:flex-row">
              <div className="p-3 md:w-1/3 font-bold  border-r border-slate-300">Paying Interest</div>
              <div className="p-3 md:w-2/3">
                Your due date is at least 25 days after the close of each billing cycle. We will not charge you any interest on purchases if you pay your entire balance by the due date each month. We will begin charging interest on cash advances and balance transfers on the transaction date.
              </div>
            </div>
            
            <div className=" text-white font-bold p-3 text-base md:text-lg border-b border-slate-300">Fees</div>
            
            <div className="border-b border-slate-300 flex flex-col md:flex-row">
              <div className="p-3 md:w-1/3 font-bold  border-r border-slate-300">Annual Fee</div>
              <div className="p-3 md:w-2/3">
                <strong>$0</strong> for Customized Cash Rewards and Unlimited Cash Rewards.<br />
                <strong>$95</strong> for Premium Rewards.
              </div>
            </div>
            
            <div className="border-b border-slate-300 flex flex-col md:flex-row">
              <div className="p-3 md:w-1/3 font-bold  border-r border-slate-300">Transaction Fees</div>
              <div className="p-3 md:w-2/3">
                <ul className="list-disc pl-5 space-y-2 mt-1">
                  <li><strong>Balance Transfer:</strong> Either <strong>$5</strong> or <strong>3%</strong> of the amount of each transfer, whichever is greater.</li>
                  <li><strong>Cash Advance:</strong> Either <strong>$10</strong> or <strong>5%</strong> of the amount of each cash advance, whichever is greater.</li>
                  <li><strong>Foreign Transaction:</strong> <strong>3%</strong> of the US dollar amount of each transaction (<strong>$0</strong> for Premium Rewards).</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="p-3 md:w-1/3 font-bold  border-r border-slate-300">Penalty Fees</div>
              <div className="p-3 md:w-2/3">
                <ul className="list-disc pl-5 space-y-2 mt-1">
                  <li><strong>Late Payment:</strong> Up to <strong>$40</strong></li>
                  <li><strong>Returned Payment:</strong> Up to <strong>$40</strong></li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-[10px] sm:text-xs text-slate-500 mt-6 text-justify">
            <strong>How We Will Calculate Your Balance:</strong> We use a method called "daily balance (including new purchases)". See your account agreement for more details.<br /><br />
            <strong>Billing Rights:</strong> Information on your rights to dispute transactions and how to exercise those rights is provided in your account agreement.<br /><br />
            Information about the costs of credit cards is accurate as of October 2026. This information may have changed after that date. To find out what may have changed, call us at 1-800-555-0199.
          </p>
        </div>
      </section>

    </div>
  );
}



