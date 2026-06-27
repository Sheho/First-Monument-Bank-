import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Chatbot } from "./components/Chatbot";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load feature views for performance
const Home = lazy(() => import("./views/Home").then(m => ({ default: m.Home })));
const CheckingAccounts = lazy(() => import("./views/CheckingAccounts").then(m => ({ default: m.CheckingAccounts })));
const SavingsAccounts = lazy(() => import("./views/SavingsAccounts").then(m => ({ default: m.SavingsAccounts })));
const CreditCards = lazy(() => import("./views/CreditCards").then(m => ({ default: m.CreditCards })));
const CreditCardApplication = lazy(() => import("./views/CreditCardApplication").then(m => ({ default: m.CreditCardApplication })));
const Login = lazy(() => import("./views/Login").then(m => ({ default: m.Login })));
const Dashboard = lazy(() => import("./views/Dashboard").then(m => ({ default: m.Dashboard })));
const Accounts = lazy(() => import("./views/Accounts").then(m => ({ default: m.Accounts })));
const Transfers = lazy(() => import("./views/Transfers").then(m => ({ default: m.Transfers })));
const Loans = lazy(() => import("./views/Loans").then(m => ({ default: m.Loans })));
const VirtualCards = lazy(() => import("./views/VirtualCards").then(m => ({ default: m.VirtualCards })));
const OpenAccount = lazy(() => import("./views/OpenAccount").then(m => ({ default: m.OpenAccount })));
const Faq = lazy(() => import("./views/Faq").then(m => ({ default: m.Faq })));
const AboutUs = lazy(() => import("./views/AboutUs").then(m => ({ default: m.AboutUs })));
const ContactUs = lazy(() => import("./views/ContactUs").then(m => ({ default: m.ContactUs })));
const Terms = lazy(() => import("./views/Terms").then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import("./views/Privacy").then(m => ({ default: m.Privacy })));
const Security = lazy(() => import("./views/Security").then(m => ({ default: m.Security })));
const SecurityBestPractices = lazy(() => import("./views/SecurityBestPractices").then(m => ({ default: m.SecurityBestPractices })));
const WealthManagement = lazy(() => import("./views/WealthManagement").then(m => ({ default: m.WealthManagement })));
const IRA = lazy(() => import("./views/IRA").then(m => ({ default: m.IRA })));
const HELOC = lazy(() => import("./views/HELOC").then(m => ({ default: m.HELOC })));
const Insurance = lazy(() => import("./views/Insurance").then(m => ({ default: m.Insurance })));
const BusinessBanking = lazy(() => import("./views/BusinessBanking").then(m => ({ default: m.BusinessBanking })));
const Commercial = lazy(() => import("./views/Commercial").then(m => ({ default: m.Commercial })));
const CommercialLending = lazy(() => import("./views/CommercialLending").then(m => ({ default: m.CommercialLending })));
const Careers = lazy(() => import("./views/Careers").then(m => ({ default: m.Careers })));
const Community = lazy(() => import("./views/Community").then(m => ({ default: m.Community })));
const Support = lazy(() => import("./views/Support").then(m => ({ default: m.Support })));
const NotFound = lazy(() => import("./views/NotFound").then(m => ({ default: m.NotFound })));

// Fancy Corporate Loading Fallback
const LoadingFallback = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--color-bank-bg)] relative overflow-hidden">
    {/* Subtle animated background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent animate-pulse duration-3000"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      {/* Outer pulsing ring */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-8">
        <div className="absolute inset-0 border-2 border-blue-200/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        <div className="absolute inset-2 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-4 border-t-2 border-blue-600 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        
        {/* Center Logo */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          <img src="/fmb_logo.png" alt="FMB Loading" className="w-8 h-8 object-contain" />
        </div>
      </div>

      {/* Corporate Text */}
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 uppercase">First Monument Bank</h2>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-2 animate-pulse">Establishing Secure Connection</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checking" element={<CheckingAccounts />} />
            <Route path="/savings" element={<SavingsAccounts />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/apply-credit-card" element={<CreditCardApplication />} />
            <Route path="/open-account" element={<OpenAccount />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/faq" element={<Navigate to="/faqs" replace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/security-best-practices" element={<SecurityBestPractices />} />
            <Route path="/wealth-management" element={<WealthManagement />} />
            <Route path="/ira" element={<IRA />} />
            <Route path="/heloc" element={<HELOC />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/business" element={<BusinessBanking />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/commercial-lending" element={<CommercialLending />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
          </Route>

          {/* Authenticated Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/cards" element={<VirtualCards />} />
          </Route>

          {/* 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Chatbot />
    </Router>
  );
}

export default App;
