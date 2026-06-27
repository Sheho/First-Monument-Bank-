import { motion } from "framer-motion";
import { Lock, EyeOff, Cookie, ShieldCheck } from "lucide-react";

export function Privacy() {
  return (
    <div className="flex-grow flex flex-col w-full  py-16 px-4">
      <div className="max-w-5xl mx-auto w-full bg-white p-6 md:p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12  rounded-xl flex items-center justify-center text-emerald-700">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
        </div>

        <div className="text-sm md:text-base text-slate-600 space-y-6 leading-relaxed">
          <p className="font-semibold text-slate-900">Effective Date: October 2026</p>
          
          <p>At First Monument Bank, we understand that confidentiality and security of the personal information that you share with us is of paramount importance. This Privacy Policy describes how we collect, use, and protect your personal data when you interact with our websites, mobile applications, and banking services.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2"><EyeOff className="w-5 h-5 text-slate-400" /> Information We Collect</h2>
          <p>We may collect personal information from you such as your name, address, Social Security number, income, account balances, payment history, and credit scores. We also automatically collect digital data such as IP addresses, device identifiers, and browsing activity when you use our digital services.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-slate-400" /> How We Use Your Information</h2>
          <p>We use your information to provide and manage your accounts, process transactions, prevent fraud, verify your identity, and comply with legal requirements. We may also use your information to personalize your experience and present you with targeted offers for First Monument Bank products that may be of interest to you.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 flex items-center gap-2"><Cookie className="w-5 h-5 text-slate-400" /> Cookies and Tracking Technologies</h2>
          <p>We use cookies, web beacons, and similar tracking technologies to monitor our website's performance, enhance user experience, and deliver relevant advertisements. You can manage your cookie preferences through your browser settings, though disabling cookies may affect the functionality of our online banking portals.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Information Sharing</h2>
          <p>We do not sell your personal information to third parties. We only share your data with trusted service providers who process information on our behalf under strict confidentiality agreements, or as required by law to respond to subpoenas, court orders, or regulatory requests.</p>
          
          <div className=" p-6 rounded-xl border border-emerald-100 mt-8">
            <h3 className="font-bold text-emerald-900 mb-2">Your Privacy Choices</h3>
            <p className="text-sm text-emerald-800">You have the right to limit how we share your information with affiliates for marketing purposes. To exercise your opt-out rights, please log in to your account, visit the Security Center, and adjust your Privacy Preferences, or call us at 1-800-555-0199.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

