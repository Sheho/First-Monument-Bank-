import { motion } from "framer-motion";
import { FileText, ShieldAlert } from "lucide-react";

export function Terms() {
  return (
    <div className="flex-grow flex flex-col w-full  py-16 px-4">
      <div className="max-w-5xl mx-auto w-full bg-white p-6 md:p-8 md:p-14 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12  rounded-xl flex items-center justify-center text-blue-700">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900">Terms and Conditions</h1>
        </div>

        <div className="text-sm md:text-base text-slate-600 space-y-6 leading-relaxed">
          <p className="font-semibold">Last Updated: October 2026</p>
          
          <p>Welcome to First Monument Bank. These Terms and Conditions ("Terms") govern your use of the First Monument Bank website, mobile application, and all related online services and products (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Online Access Agreement</h2>
          <p>This Online Access Agreement sets forth the terms and conditions that apply to your access and use of our online banking services. By clicking "I Agree" or by accessing your accounts online, you consent to receive electronic communications and disclosures from First Monument Bank. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Account Agreements and Disclosures</h2>
          <p>Your use of specific First Monument Bank products (such as checking accounts, savings accounts, credit cards, and loans) is governed by the specific agreements and disclosures provided to you at the time of account opening. In the event of a conflict between these Terms and a specific account agreement, the specific account agreement will control.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Transfers and Payments</h2>
          <p>You may use the Services to transfer funds between your First Monument Bank accounts and to make payments to third parties. We reserve the right to limit the frequency and dollar amount of transfers and payments for security and regulatory reasons. We are not responsible for delays or failures in processing transfers or payments caused by circumstances beyond our control, including but not limited to network failures or incorrect payment instructions.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Dispute Resolution and Arbitration</h2>
          <div className=" p-6 rounded-xl border border-slate-200">
            <div className="flex items-start gap-3 mb-2">
              <ShieldAlert className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
              <p className="font-bold text-slate-900 uppercase">Please read this section carefully. It affects your rights.</p>
            </div>
            <p className="text-sm">Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by arbitration in the United States before one arbitrator. The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures.</p>
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, First Monument Bank and its affiliates, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services; or (c) unauthorized access, use, or alteration of your transmissions or content.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Changes to these Terms</h2>
          <p>We may modify these Terms from time to time. If we make material changes to these Terms, we will notify you by email or by posting a notice on our website prior to the effective date of the changes. Your continued use of the Services after the effective date of the changes constitutes your acceptance of the revised Terms.</p>
        </div>
      </div>
    </div>
  );
}

