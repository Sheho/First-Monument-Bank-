import { motion } from "framer-motion";
import { PiggyBank, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function IRA() {
  const navigate = useNavigate();

  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      <section className="w-full py-20 px-4  border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <PiggyBank className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl md:text-4xl md:text-5xl font-bold text-slate-900 mb-6">Plan your retirement, your way.</h1>
          <p className="text-base md:text-lg text-slate-600 mb-10">Whether you want tax benefits now or tax-free income later, an Individual Retirement Account (IRA) from First Monument Bank puts you in control of your future.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="sm" className=" hover: text-white" onClick={() => window.location.href = 'https://account.firstmonument.com/register'}>Open an IRA</Button>
            <Button size="sm" variant="outline" className="border-emerald-200 text-emerald-700" onClick={() => navigate('/contact')}>Talk to an Advisor</Button>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">Which IRA is right for you?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Traditional IRA</h3>
              <p className="text-emerald-700 font-semibold mb-6">Tax-deferred growth. Potential tax deduction now.</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  Contributions may be tax-deductible in the year they are made, potentially lowering your current tax bill.
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  Earnings grow tax-deferred until you withdraw them in retirement.
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  Best if you expect to be in a lower tax bracket during retirement.
                </li>
                <li className="flex items-start gap-3 text-slate-600 text-sm italic">
                  Note: Withdrawals before age 59½ may be subject to a 10% IRS penalty and income taxes. Required Minimum Distributions (RMDs) start at age 73.
                </li>
              </ul>
            </div>
            
            <div className="border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col h-full  text-white shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-2">Roth IRA</h3>
              <p className="text-emerald-400 font-semibold mb-6">Tax-free growth. Tax-free withdrawals later.</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  Contributions are made with after-tax money, meaning no immediate tax deduction.
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  Earnings and withdrawals are 100% tax-free in retirement (if rules are met).
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  Best if you expect to be in a higher tax bracket during retirement, or want tax-free income.
                </li>
                <li className="flex items-start gap-3 text-slate-400 text-sm italic">
                  Note: No Required Minimum Distributions (RMDs) during the original owner's lifetime. Income limits apply for eligibility to contribute.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 px-4  text-xs text-slate-500 text-center">
        <p className="max-w-4xl mx-auto">First Monument Bank does not provide legal or tax advice. Please consult your legal or tax advisor to determine how this information may apply to your own situation. Contribution limits for 2026 are $7,000 ($8,000 if age 50 or older).</p>
      </section>
    </div>
  );
}


