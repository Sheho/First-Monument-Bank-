import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ccSchema = z.object({
  selectedCard: z.string(),
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  dob: z.string().min(1, "Required"),
  ssn: z.string().min(9, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
  address: z.string().min(10, "Required"),
  employmentStatus: z.string(),
  annualIncome: z.string().min(1, "Required"),
  housingPayment: z.string().min(1, "Required")
});

export function CreditCardApplication() {
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Parse selected card from URL query params
  const searchParams = new URLSearchParams(location.search);
  const initialCard = searchParams.get("card") || "cash-rewards";
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ccSchema),
    defaultValues: {
      selectedCard: initialCard,
      firstName: "", lastName: "", dob: "", ssn: "",
      email: "", phone: "", address: "", employmentStatus: "employed",
      annualIncome: "", housingPayment: ""
    }
  });

  const watchSelectedCard = watch("selectedCard", initialCard);

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#1a1b26] border border-green-500/30 p-6 md:p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0  blur-[50px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20  rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Application Received!</h2>
            <p className="text-[var(--color-bank-text-muted)] mb-8">
              Thank you for applying. Our team is currently reviewing your application. You'll receive a decision via email within 1-2 business days.
            </p>
            <Button onClick={() => navigate("/")} className="w-full">
              Return Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col items-center w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl md:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
            Secure Credit Card Application
          </h1>
          <p className="text-[var(--color-bank-text-muted)]">
            Applying only takes a few minutes. Checking your rate won't affect your credit score.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className=" backdrop-blur-xl border border-[var(--color-bank-border)] p-6 md:p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient background for the form */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px]  rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10 space-y-10">
            {/* Card Selection */}
            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-[var(--color-bank-border)] pb-2">Select Your Card</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className={`cursor-pointer border rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all ${watchSelectedCard === 'cash-rewards' ? 'border-blue-500 ' : 'border-[var(--color-bank-border)] hover:border-gray-500'}`}>
                  <input type="radio" value="cash-rewards" {...register("selectedCard")} className="hidden" />
                  <span className="font-bold mb-1">Cash Rewards</span>
                  <span className="text-xs text-[var(--color-bank-text-muted)]">No Annual Fee</span>
                </label>
                <label className={`cursor-pointer border rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all ${watchSelectedCard === 'travel-elite' ? 'border-purple-500 ' : 'border-[var(--color-bank-border)] hover:border-gray-500'}`}>
                  <input type="radio" value="travel-elite" {...register("selectedCard")} className="hidden" />
                  <span className="font-bold mb-1">Travel Elite</span>
                  <span className="text-xs text-[var(--color-bank-text-muted)]">$95 Annual Fee</span>
                </label>
                <label className={`cursor-pointer border rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all ${watchSelectedCard === 'platinum-build' ? 'border-emerald-500 ' : 'border-[var(--color-bank-border)] hover:border-gray-500'}`}>
                  <input type="radio" value="platinum-build" {...register("selectedCard")} className="hidden" />
                  <span className="font-bold mb-1">Platinum Build</span>
                  <span className="text-xs text-[var(--color-bank-text-muted)]">Credit Builder</span>
                </label>
              </div>
            </section>

            {/* Personal Details */}
            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-[var(--color-bank-border)] pb-2">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">First Name</label>
                  <input type="text" {...register("firstName")} className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="Legal first name" />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Last Name</label>
                  <input type="text" {...register("lastName")} className={`w-full bg-white border ${errors.lastName ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="Legal last name" />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Date of Birth</label>
                  <input type="date" {...register("dob")} className={`w-full bg-white border ${errors.dob ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} />
                  {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Social Security Number</label>
                  <input type="password" {...register("ssn")} className={`w-full bg-white border ${errors.ssn ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="XXX-XX-XXXX" />
                  {errors.ssn && <p className="text-red-500 text-xs mt-1">{errors.ssn.message}</p>}
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-[var(--color-bank-border)] pb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Email Address</label>
                  <input type="email" {...register("email")} className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="you@example.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Phone Number</label>
                  <input type="tel" {...register("phone")} className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="(555) 000-0000" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Home Address</label>
                  <input type="text" {...register("address")} className={`w-full bg-white border ${errors.address ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="123 Main St, City, State, ZIP" />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>
              </div>
            </section>

            {/* Financial Details */}
            <section>
              <h2 className="text-xl font-semibold mb-6 border-b border-[var(--color-bank-border)] pb-2">Financial Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Employment Status</label>
                  <select {...register("employmentStatus")} className="w-full bg-white border border-[var(--color-bank-border)] rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors">
                    <option value="employed">Employed Full-Time</option>
                    <option value="part-time">Employed Part-Time</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Gross Annual Income</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-[var(--color-bank-text-muted)]">$</span>
                    <input type="number" {...register("annualIncome")} className={`w-full bg-white border ${errors.annualIncome ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl pl-8 pr-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="0.00" />
                  </div>
                  {errors.annualIncome && <p className="text-red-500 text-xs mt-1">{errors.annualIncome.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[var(--color-bank-text-muted)]">Monthly Rent/Mortgage</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-[var(--color-bank-text-muted)]">$</span>
                    <input type="number" {...register("housingPayment")} className={`w-full bg-white border ${errors.housingPayment ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl pl-8 pr-4 py-3 text-slate-900 focus:outline-none focus:border-purple-500 transition-colors`} placeholder="0.00" />
                  </div>
                  {errors.housingPayment && <p className="text-red-500 text-xs mt-1">{errors.housingPayment.message}</p>}
                </div>
              </div>
            </section>

            {/* Disclosures & Submit */}
            <section className="pt-6 border-t border-[var(--color-bank-border)]">
              <p className="text-xs text-[var(--color-bank-text-muted)] mb-6 leading-relaxed">
                By clicking "Submit Application", you authorize First Monument Bank Bank to check your credit history and verify the information provided. You also agree to our <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
              <Button type="submit" disabled={isSubmitting} size="sm" className=" bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-500 hover:to-blue-700 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Submit Application <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </section>

          </div>
        </motion.form>
      </div>
    </div>
  );
}


