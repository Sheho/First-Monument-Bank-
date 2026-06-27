import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Building2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

const testimonials = [
  {
    quote: "Working with First Monument Bank has completely transformed our corporate treasury management. Their team's expertise allowed us to bring our vision to life with precision and security. They didn't just provide an account; they crafted an immersive financial experience that perfectly reflects our brand identity.",
    name: "Sarah J.",
    title: "Chief Financial Officer at TechSavvy Solutions"
  },
  {
    quote: "The personalized attention we receive from our wealth manager is unparalleled. They proactively suggest strategies that align perfectly with our family's long-term goals. I've never felt more secure about our financial future.",
    name: "Michael R.",
    title: "Private Wealth Client"
  },
  {
    quote: "As a rapidly growing startup, we needed a banking partner that could keep up with our pace. First Monument Bank delivered beyond expectations, providing seamless international wire capabilities and flexible credit lines when we needed them most.",
    name: "Elena T.",
    title: "Founder & CEO, Innovate AI"
  },
  {
    quote: "Their digital banking platform is intuitive and robust, but what truly sets them apart is their customer service. Whenever there's an issue, a real person answers the phone and resolves it immediately. It's the perfect blend of modern tech and traditional service.",
    name: "David L.",
    title: "Small Business Owner"
  }
];

export function ContactUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
    alert("Message sent successfully!");
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex-grow flex flex-col items-center w-full relative z-10 pb-32">
      
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-[-1]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'%23ffffff\' fill-opacity=\'0.07\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', 
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)' 
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none z-[-1]"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 mt-16 md:mt-24">
        
        {/* Contact Container */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-4 md:p-6 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            
            {/* Left Column: Image & Testimonial Overlay */}
            <div className="relative h-[400px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden group">
              <img 
                src="/contact_hero.png" 
                alt="Abstract Financial Technology Cube" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
              
              {/* Testimonial Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8"
              >
                <div className="min-h-[160px] relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <p className="text-white text-sm md:text-base leading-relaxed mb-6 font-medium">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                      <div>
                        <h4 className="text-white font-bold text-sm">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-slate-300 text-xs mt-1">{testimonials[currentTestimonial].title}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex justify-end gap-2 mt-4 relative z-10">
                  <button type="button" onClick={handlePrev} aria-label="Previous Testimonial" className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none cursor-pointer">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" onClick={handleNext} aria-label="Next Testimonial" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none cursor-pointer">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex flex-col justify-center py-8 lg:py-12 pr-0 lg:pr-8">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-slate-900" />
                </div>
                <span className="font-bold text-xl text-slate-900">First Monument Bank</span>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl md:text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight leading-tight"
              >
                Need financial guidance? <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Let's discuss it together.</span>
              </motion.h1>
              
              <p className="text-sm text-slate-600 mb-10 leading-relaxed max-w-md">
                Our team of wealth management advisors is available 24/7. Feel free to drop us a line if you have any questions or require custom corporate solutions.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600 pl-1">First name</label>
                    <input 
                      type="text" 
                      {...register("firstName")}
                      placeholder="Jane" 
                      className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.firstName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600 pl-1">Last name</label>
                    <input 
                      type="text" 
                      {...register("lastName")}
                      placeholder="Doe" 
                      className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 pl-1">Email address</label>
                  <input 
                    type="email" 
                    {...register("email")}
                    placeholder="jane@example.com" 
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-600 pl-1">Message</label>
                  <textarea 
                    {...register("message")}
                    placeholder="Any additional information..." 
                    rows={4}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input 
                        id="terms" 
                        {...register("terms")}
                        type="checkbox" 
                        className="h-4 w-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-indigo-500/50 focus:ring-offset-0 transition-all cursor-pointer" 
                      />
                    </div>
                    <div className="ml-3 text-xs leading-6">
                      <label htmlFor="terms" className="text-slate-600 cursor-pointer">
                        By clicking the button you agree to our terms and conditions.
                      </label>
                      {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl py-3.5 text-sm font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
