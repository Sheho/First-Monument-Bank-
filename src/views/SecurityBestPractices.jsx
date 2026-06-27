import { Shield, Key, Smartphone, Mail, AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function SecurityBestPractices() {
  return (
    <div className="flex-grow flex flex-col w-full bg-slate-50">
      {/* Hero */}
      <section className="w-full py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl opacity-50 pointer-events-none -mt-40 -mr-40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-500" />
          <h1 className="text-4xl md:text-5xl font-black mb-6">Security Best Practices</h1>
          <p className="text-lg text-slate-300">
            A comprehensive guide on how to protect your First Monument Bank accounts, personal data, and devices from online threats.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl"><Key className="w-6 h-6 text-blue-600" /></div>
              <h2 className="text-2xl font-bold text-slate-900">1. Password Security</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Use a strong, unique password:</strong> Never reuse passwords across multiple sites. Consider using a reputable password manager to generate and store them.</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Change it regularly:</strong> Update your banking password every 3-6 months.</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Enable Multi-Factor Authentication (MFA):</strong> Always require a one-time code sent to your phone or authenticator app when logging in from an unrecognized device.</span></li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-xl"><Mail className="w-6 h-6 text-purple-600" /></div>
              <h2 className="text-2xl font-bold text-slate-900">2. Beware of Phishing</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start"><AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Verify the sender:</strong> Always check the email address. Fraudsters often use domains that look similar to our official `@firstmonumentbank.com` domain.</span></li>
              <li className="flex items-start"><AlertTriangle className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Do not click unknown links:</strong> If you receive a suspicious text or email claiming your account is locked, do not click the links. Log in directly by typing our URL into your browser.</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>We will never ask for your PIN:</strong> First Monument Bank will never call, text, or email you asking for your full debit card PIN, online banking password, or one-time passcodes.</span></li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl"><Smartphone className="w-6 h-6 text-emerald-600" /></div>
              <h2 className="text-2xl font-bold text-slate-900">3. Device & App Security</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Keep your OS updated:</strong> Ensure your phone and computer are running the latest operating systems, as they contain critical security patches.</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Avoid Public Wi-Fi for Banking:</strong> Do not log into your bank account over open network connections at cafes or airports unless you are using a trusted VPN.</span></li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" /><span className="text-slate-600"><strong>Set up device locks:</strong> Ensure your mobile device requires a PIN, fingerprint, or facial recognition to unlock.</span></li>
            </ul>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}


