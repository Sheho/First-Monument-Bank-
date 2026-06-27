import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Building2, ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  rememberMe: z.boolean().optional(),
});

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/dashboard");
  };

  return (
    <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-80px)] w-full relative overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px]  rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px]  rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className=" backdrop-blur-2xl border border-[var(--color-bank-border)] shadow-2xl rounded-3xl p-6 md:p-8 sm:p-10">
          
          <div className="flex flex-col items-center mb-8 text-center">
            <Link to="/" className="flex items-center justify-center w-14 h-14 bg-transparent mb-4 transition-all hover:scale-105">
              <img src="/fmb_logo.png" alt="First Monument Bank" className="w-14 h-14 object-contain " />
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-sm text-[var(--color-bank-text-muted)]">Sign in to securely manage your finances.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[var(--color-bank-text-muted)]" />
                </div>
                <input
                  type="email"
                  {...register("email")}
                  className={`block w-full pl-11 pr-4 py-3.5 bg-white/80 border ${errors.email ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl text-slate-900 placeholder-white/30 focus:ring-2 focus:ring-indigo-500/50 focus:border-blue-500 transition-all outline-none`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-sm font-medium text-slate-600">Password</label>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-600 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[var(--color-bank-text-muted)]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className={`block w-full pl-11 pr-12 py-3.5 bg-white/80 border ${errors.password ? 'border-red-500' : 'border-[var(--color-bank-border)]'} rounded-xl text-slate-900 placeholder-white/30 focus:ring-2 focus:ring-indigo-500/50 focus:border-blue-500 transition-all outline-none`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--color-bank-text-muted)] hover:text-slate-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center pl-1">
              <input
                id="remember-me"
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 rounded border-[var(--color-bank-border)] bg-white text-blue-600 focus:ring-indigo-500/50 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--color-bank-text-muted)] cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/30 transition-all overflow-hidden"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center text-white">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </div>
              ) : (
                <span className="flex items-center gap-2 text-white">
                  Sign In to Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-[var(--color-bank-border)] pt-6">
            <p className="text-sm text-[var(--color-bank-text-muted)]">
              Don't have an account yet?{" "}
              <Link to="/open-account" className="font-semibold text-blue-600 hover:text-blue-600 transition-colors">
                Open an Account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


