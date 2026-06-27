import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { ShieldCheck, ChevronRight, User, MapPin, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const openAccountSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  address: z.string().min(10, "Full address is required"),
  idType: z.enum(["ssn", "dl", "passport", "state_id", "green_card"]),
  idNumber: z.string().min(6, "Valid ID number required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export function OpenAccount() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(openAccountSchema),
    defaultValues: {
      firstName: "", lastName: "", dob: "", email: "", phone: "", address: "", idType: "ssn", idNumber: "",
    },
  });

  const watchIdType = watch("idType", "ssn");

  const onSubmit = async (data) => {
    // Final submission, route to dashboard
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate("/dashboard");
  };

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (step === 1) fieldsToValidate = ["firstName", "lastName", "dob"];
    if (step === 2) fieldsToValidate = ["email", "phone", "address"];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full max-w-2xl z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl md:text-4xl font-bold tracking-tight mb-2">Join First Monument Bank</h1>
          <p className="text-[var(--color-bank-text-muted)]">Open your account in less than 5 minutes.</p>
        </div>

        <Card className="glass-card shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[rgba(255,255,255,0.05)]">
            <motion.div 
              className="h-full bg-[var(--color-bank-primary)]" 
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <CardHeader className="border-b border-[rgba(255,255,255,0.05)] pb-6 pt-8 px-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-[var(--color-bank-primary)]">Step {step} of 3</span>
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${s <= step ? 'bg-[var(--color-bank-primary)]' : 'bg-[rgba(255,255,255,0.1)]'}`} />
                ))}
              </div>
            </div>
            <CardTitle className="text-2xl">
              {step === 1 && "Personal Information"}
              {step === 2 && "Contact & Address"}
              {step === 3 && "Identity Verification"}
            </CardTitle>
            <CardDescription className="text-[var(--color-bank-text-muted)]">
              {step === 1 && "Tell us a bit about yourself."}
              {step === 2 && "How can we reach you?"}
              {step === 3 && "To comply with federal regulations, we need to verify your identity."}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-bank-text-muted)]" />
                        <Input {...register("firstName")} className={`pl-9 ${errors.firstName ? 'border-red-500' : ''}`} placeholder="John" />
                      </div>
                      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">Last Name</label>
                      <Input {...register("lastName")} className={errors.lastName ? 'border-red-500' : ''} placeholder="Doe" />
                      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Date of Birth</label>
                    <Input type="date" {...register("dob")} className={`text-slate-900 [color-scheme:dark] ${errors.dob ? 'border-red-500' : ''}`} />
                    {errors.dob && <p className="text-red-500 text-xs">{errors.dob.message}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Email Address</label>
                    <Input type="email" {...register("email")} className={errors.email ? 'border-red-500' : ''} placeholder="john.doe@example.com" />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Phone Number</label>
                    <Input type="tel" {...register("phone")} className={errors.phone ? 'border-red-500' : ''} placeholder="(555) 000-0000" />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Residential Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-bank-text-muted)]" />
                      <Input {...register("address")} className={`pl-9 ${errors.address ? 'border-red-500' : ''}`} placeholder="123 Main St, Apt 4B, City, State, ZIP" />
                    </div>
                    {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Identity */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="p-4 bg-[var(--color-bank-primary)]/10 border border-[var(--color-bank-primary)]/30 rounded-xl flex gap-3 mb-6">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-bank-primary)] flex-shrink-0" />
                    <p className="text-sm text-[var(--color-bank-text-muted)]">
                      Your information is encrypted and securely transmitted. We use this solely to verify your identity as required by the Patriot Act.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">Government Issued ID Type</label>
                      <select 
                        {...register("idType")}
                        className="w-full h-10 px-3 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-bank-primary)] focus:border-transparent transition-all"
                      >
                        <option value="ssn">Social Security Number (SSN)</option>
                        <option value="dl">State Driver's License</option>
                        <option value="passport">US Passport</option>
                        <option value="state_id">State ID Card</option>
                        <option value="green_card">Permanent Resident Card (Green Card)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">
                        {watchIdType === 'ssn' ? 'Social Security Number' : 
                         watchIdType === 'dl' ? "Driver's License Number" : 
                         watchIdType === 'passport' ? 'Passport Number' : 
                         watchIdType === 'state_id' ? 'State ID Number' : 'Green Card Number'}
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-bank-text-muted)]" />
                        <Input 
                          {...register("idNumber")}
                          className={`pl-9 ${errors.idNumber ? 'border-red-500' : ''}`} 
                          type={watchIdType === 'ssn' ? 'password' : 'text'} 
                          placeholder={watchIdType === 'ssn' ? 'XXX-XX-XXXX' : 'Enter document number'} 
                        />
                      </div>
                      {errors.idNumber && <p className="text-red-500 text-xs">{errors.idNumber.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-3 text-sm text-[var(--color-bank-text-muted)] cursor-pointer">
                      <input type="checkbox" {...register("terms")} className="mt-1 rounded border-[var(--color-bank-border)] bg-transparent w-4 h-4 shrink-0" />
                      <span>I agree to the <a href="#" className="text-[var(--color-bank-primary)] hover:underline">Terms of Service</a>, <a href="#" className="text-[var(--color-bank-primary)] hover:underline">Privacy Policy</a>, and consent to receiving electronic disclosures.</span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}
                  </div>
                </motion.div>
              )}

              <div className="pt-6 flex gap-4">
                {step > 1 && (
                  <Button type="button" variant="secondary" className="w-1/3" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button type="button" className={step > 1 ? "w-2/3" : "w-full"} onClick={nextStep}>
                    Continue <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} className={step > 1 ? "w-2/3" : "w-full"}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-center mt-6 text-sm text-[var(--color-bank-text-muted)]">
          Already have an account? <Link to="/dashboard" className="text-[var(--color-bank-primary)] hover:text-blue-600 font-medium">Log in here</Link>
        </p>
      </motion.div>
    </div>
  );
}


