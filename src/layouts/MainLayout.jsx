import { useState } from "react";
import { useOutlet, Link, useLocation } from "react-router-dom";
import { Building2, Home, Award, CheckCircle, Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { AnimatedBackground } from "../components/AnimatedBackground";

export function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();
  const path = location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bank-bg)] text-[var(--color-bank-text)] relative z-0">
      <AnimatedBackground />

      {/* Super Header for Verticals */}
      <div className="w-full bg-white text-slate-600 text-[10px] md:text-xs font-medium py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200 z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <Link to="/" className={`${path === '/' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2`}>Personal</Link>
            <Link to="/business" className={`${path === '/business' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2`}>Small Business</Link>
            <Link to="/commercial" className={`${path === '/commercial' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2 hidden sm:block`}>Commercial</Link>
            <Link to="/wealth-management" className={`${path === '/wealth-management' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2 hidden sm:block`}>Wealth Management</Link>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className={`${path === '/about' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2`}>About Us</Link>
            <Link to="/careers" className={`${path === '/careers' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2 hidden sm:block`}>Careers</Link>
            <Link to="/support" className={`${path === '/support' ? 'text-blue-700 border-b-2 border-blue-700 font-bold' : 'text-slate-500 hover:text-blue-700 transition-colors'} pb-2`}>Support</Link>
          </div>
        </div>
      </div>

      <header className="border-b border-[var(--color-bank-border)] glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 relative z-10 group">
              <img src="/fmb_logo.png" alt="First Monument Bank Logo" className="w-12 h-12 object-contain " />
              <span className="font-bold text-xl md:text-2xl text-slate-900 tracking-tight">First Monument Bank</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              <div className="relative group">
                <button className="text-sm font-medium text-[var(--color-bank-text-muted)] group-hover:text-slate-900 transition-colors flex items-center gap-1">
                  Banking <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-4 w-56 bg-white border border-[var(--color-bank-border)] rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 flex flex-col py-2 z-50">
                  <Link to="/checking" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    Checking Accounts
                  </Link>
                  <Link to="/savings" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    Savings Accounts
                  </Link>
                  <Link to="/credit-cards" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    Credit Cards
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-sm font-medium text-[var(--color-bank-text-muted)] group-hover:text-slate-900 transition-colors flex items-center gap-1">
                  Borrowing <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-4 w-56 bg-white border border-[var(--color-bank-border)] rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 flex flex-col py-2 z-50">
                  <Link to="/loans" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    Auto & Personal Loans
                  </Link>
                  <Link to="/heloc" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    Home Equity & Mortgages
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-sm font-medium text-[var(--color-bank-text-muted)] group-hover:text-slate-900 transition-colors flex items-center gap-1">
                  Investing <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-4 w-56 bg-white border border-[var(--color-bank-border)] rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 flex flex-col py-2 z-50">
                  <Link to="/wealth-management" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    Wealth Management
                  </Link>
                  <Link to="/ira" className="px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover: transition-colors flex items-center justify-between">
                    IRAs & Retirement
                  </Link>
                </div>
              </div>
              <Link to="/insurance" className="text-sm font-medium text-[var(--color-bank-text-muted)] hover:text-slate-900 transition-colors">Insurance</Link>
              <Link to="/about" className="text-sm font-medium text-[var(--color-bank-text-muted)] hover:text-slate-900 transition-colors">About Us</Link>
            </nav>
            <div className="flex items-center gap-4">
              <div id="google_translate_element" className="hidden lg:flex items-center"></div>
              <a href="https://account.firstmonument.com/login" className="text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors hidden sm:block">Sign In</a>
              <a href="https://account.firstmonument.com/register" className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
                Open an Account
              </a>
              <button
                className="md:hidden text-slate-900 hover:text-blue-600 transition-colors p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Menu Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[280px] bg-white shadow-[4px_0_30px_rgba(0,0,0,0.8)] z-[70] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex justify-between items-center mb-10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">First Monument Bank</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 flex-grow">
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Accounts</span>
              <div className="flex flex-col space-y-4 pl-4 border-l-2 border-slate-100">
                <Link to="/checking" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">Checking Accounts</Link>
                <Link to="/savings" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">Savings Accounts</Link>
              </div>
            </div>
            <Link to="/credit-cards" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">Credit Cards</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">About Us</Link>
            <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">FAQs</Link>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-4 mt-auto">
            <a href="https://account.firstmonument.com/login" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-900 text-center border border-slate-300 rounded-full py-3 hover:bg-slate-50 transition-all">Sign In</a>
            <a href="https://account.firstmonument.com/register" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-white text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-full py-3 hover:opacity-90 transition-all">Open an Account</a>
          </div>
        </div>
      </div>

      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {outlet}
          </PageTransition>
        </AnimatePresence>
      </main>

      <footer className="border-t border-[var(--color-bank-border)] bg-[var(--color-bank-bg)] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-12 border-b border-[var(--color-bank-border)]/50">
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-sm tracking-widest uppercase">Personal Banking</h4>
              <ul className="space-y-4 text-sm text-slate-700 font-medium">
                <li><Link to="/checking" className="hover:text-blue-600 transition-colors">Checking Accounts</Link></li>
                <li><Link to="/savings" className="hover:text-blue-600 transition-colors">Savings Accounts</Link></li>
                <li><Link to="/credit-cards" className="hover:text-blue-600 transition-colors">Credit Cards</Link></li>
                <li><Link to="/faqs" className="hover:text-blue-600 transition-colors">Banking FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-sm tracking-widest uppercase">Borrowing & Loans</h4>
              <ul className="space-y-4 text-sm text-slate-700 font-medium">
                <li><Link to="/loans" className="hover:text-blue-600 transition-colors">Auto Loans</Link></li>
                <li><Link to="/loans" className="hover:text-blue-600 transition-colors">Personal Loans</Link></li>
                <li><Link to="/heloc" className="hover:text-blue-600 transition-colors">Home Equity (HELOC)</Link></li>
                <li><Link to="/heloc" className="hover:text-blue-600 transition-colors">Mortgages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-sm tracking-widest uppercase">Investing & Protection</h4>
              <ul className="space-y-4 text-sm text-slate-700 font-medium">
                <li><Link to="/wealth-management" className="hover:text-blue-600 transition-colors">Wealth Management</Link></li>
                <li><Link to="/ira" className="hover:text-blue-600 transition-colors">IRAs & Retirement</Link></li>
                <li><Link to="/insurance" className="hover:text-blue-600 transition-colors">Insurance Products</Link></li>
                <li><Link to="/security" className="hover:text-blue-600 transition-colors">Fraud Protection</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-sm tracking-widest uppercase">About & Legal</h4>
              <ul className="space-y-4 text-sm text-slate-700 font-medium">
                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link to="/community" className="hover:text-blue-600 transition-colors">Community Impact</Link></li>
                <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms and Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* About & Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-[var(--color-bank-border)]/50">
            <div className="max-w-md text-center md:text-left">
              <h4 className="text-slate-900 font-semibold mb-4 text-xl tracking-tight">About First Monument Bank</h4>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                First Monument Bank provides intelligent banking solutions for the modern world. We combine cutting-edge technology with uncompromising security to help you grow your wealth effortlessly.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 flex items-center justify-center rounded-full  border border-[var(--color-bank-border)] hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1" aria-label="Facebook">
                <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-bank-text-muted)] group-hover:text-blue-400 transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 flex items-center justify-center rounded-full  border border-[var(--color-bank-border)] hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:-translate-y-1" aria-label="Instagram">
                <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-bank-text-muted)] group-hover:text-pink-400 transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              {/* X */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 flex items-center justify-center rounded-full  border border-[var(--color-bank-border)] hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(156,163,175,0.4)] hover:-translate-y-1" aria-label="X (formerly Twitter)">
                <div className="absolute inset-0  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-bank-text-muted)] group-hover:text-gray-300 transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* Threads */}
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 flex items-center justify-center rounded-full  border border-[var(--color-bank-border)] hover:border-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1" aria-label="Threads">
                <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-[var(--color-bank-text-muted)] group-hover:text-slate-900 transition-colors"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.393.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.046 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.737 0 4.598-1.436 4.598-3.981 0-1.141-.59-2.056-1.554-2.671a5 5 0 0 0-1.236-.575v.025c0 1.42-.73 2.455-1.745 3.018s-2.277.62-3.133.153c-.87-.47-1.332-1.341-1.332-2.316 0-1.026.471-1.896 1.332-2.456C5.553 5.488 6.32 5.016 6.32 5.016zm1.189 6.29c.813-.423 1.157-1.108 1.157-2.133 0-.742-.317-1.314-.85-1.58-.535-.268-1.25-.212-1.92.176-.7.4-1.05.99-1.05 1.764 0 .61.272 1.096.711 1.334.426.233.993.284 1.952-.423l.001.861h.001z" /></svg>
              </a>
            </div>
          </div>

          {/* Logo & Badges */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12 pb-12 border-b border-[var(--color-bank-border)]/50">
            <Link to="/" className="flex items-center gap-3">
              <img src="/fmb_logo.png" alt="First Monument Bank Logo" className="w-12 h-12 object-contain " />
              <span className="font-bold text-2xl text-slate-900 tracking-tight">First Monument Bank</span>
            </Link>

            <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-75">
              {/* FDIC Badge */}
              <div className="border border-[var(--color-bank-text-muted)] rounded flex items-center justify-center px-4 h-9">
                <span className="text-slate-900 font-bold tracking-widest leading-none text-sm">FDIC</span>
              </div>

              {/* Equal Housing */}
              <div className="flex flex-col items-center justify-center opacity-80 h-10">
                <Home className="w-5 h-5 text-slate-900 mb-0.5" />
                <span className="text-[7px] uppercase text-slate-900 font-bold tracking-widest text-center leading-tight">Equal Housing<br />Opportunity</span>
              </div>

              {/* Top Workplaces */}
              <div className="flex flex-col items-center justify-center border border-[var(--color-bank-text-muted)] rounded-t-full rounded-b-sm px-2 pt-1.5 pb-0.5 h-11 bg-[rgba(255,255,255,0.02)]">
                <span className="text-[8px] uppercase text-[var(--color-bank-text-muted)] font-bold text-center leading-tight">Top<br />Work<br />Places</span>
                <span className="text-[8px] text-slate-900 font-bold mt-0.5">2026</span>
              </div>

              {/* BBB Badge */}
              <div className="flex items-center gap-1.5 border border-[var(--color-bank-text-muted)] bg-white rounded-sm p-1 h-9">
                <div className="bg-[#005a9c] p-0.5 rounded-sm">
                  <span className="text-slate-900 font-bold text-[10px] tracking-tighter">BBB</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[6px] text-[#005a9c] font-bold uppercase leading-none">Accredited<br />Business</span>
                  <span className="text-[6px] text-black font-bold mt-px">Rating: A+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Copyright */}
          <div className="flex flex-col justify-end items-center mb-12">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-slate-900 font-bold">
              <span>Copyright © 2026, All Rights Reserved</span>
              <span className="hidden md:inline">|</span>
              <span>Routing # 271188081 | NMLS # 384759</span>
            </div>
          </div>

          {/* Bottom Row: Fine Print */}
          <div className="space-y-6 pt-12 mt-12 border-t border-[var(--color-bank-border)]/50 text-[10px] md:text-xs text-slate-700 font-medium leading-relaxed max-w-7xl">
            <div className="flex gap-2">
              <span className="font-bold">1.</span>
              <p>It reaches maturity to a 12 Month Share Certificate with a 10-day grace period where you can transfer the money to another Share Certificate or withdraw your money without penalty.</p>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">2.</span>
              <p>APY= Annual Percentage Yield. Fees could reduce earnings on the account. Rate is subject to change without notice. The rate may change after the account is opened and without notice. Dividends calculated using Average Daily Balance. Requirements to earn the current declared High Yield Checking rate on balances up to $10,000: You must (1) be enrolled in digital banking by registering for First Monument Bank's digital banking service and create a password, (2) be enrolled in eStatements for the account in which the High Yield Checking Account is established, (3) have at least 15 First Monument Bank Bill Pay or First Monument Bank Visa® debit card transactions per calendar month (or a combination of the two), excluding ATM transactions, in the High Yield Checking Account, and (4) have minimum aggregate deposits totaling $1,000 deposited into the High Yield Checking per calendar month. Balances over $10,000 will earn 0.01% APY. Transactions that are pending on your High Yield Checking account and have not posted as of the end of the calendar month qualification cycle, will not count as qualifying transaction for that calendar month cycle. If Requirements are not met, balances will earn 0.01% APY. Deposits, bill pay transactions, and/or debit card transactions made to any other account or sub account belonging to the account owner, or any joint owner, will not apply to these High Yield checking requirements.</p>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">3.</span>
              <div>
                <p className="font-bold underline mb-1">Home Equity Loan</p>
                <p className="mb-2">For any Fixed Rate Home Equity Loan, the borrower is responsible for any third-party fees associated with the origination of the loan. There is a $100 Origination Fee. The borrower should consult a tax adviser for further information regarding the deductibility of interest and charges. Available for properties located in California, Florida, Illinois, Indiana, Iowa, Georgia, Minnesota, Nevada, Tennessee, Washington, Wisconsin only.</p>
                <p className="font-bold mb-1">Loan Payment Example: A Home Equity Loan of $20,000 at 7.00% APR for a 20-year term would result in a monthly payment of approximately $155.06. Home Equity Loan payment examples do not include taxes and insurance premiums. Home Equity Loans do not escrow for taxes and insurance. These premiums will be paid separately from the Home Equity Loan principal and interest payment.</p>
                <p className="mb-2">Property insurance is required on all Home Equity loans. A statement of property insurance will be requested prior to loan origination.</p>
                <p>Must be an existing First Monument Bank member or be eligible for membership prior to loan origination. New members may be required to pay a one-time membership fee of up to $10. Rate and payment may vary based on creditworthiness and loan terms.</p>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">4.</span>
              <div>
                <p className="mb-2">APR = Annual Percentage Rate. Rates, terms and conditions are subject to change and may vary based on creditworthiness, qualifications and collateral conditions. All loans subject to approval. Auto Loans have a $5,000 minimum loan amount, a minimum 36-month term, and a floor rate of 4.99% APR. There is a $49 Processing Fee on all new auto loans (2026 and newer). *The vehicle must have 1,000 miles or less at the time of financing.</p>
                <p className="font-bold">Loan Payment Example: An Auto Loan of $20,000 at 5.24% APR for a 60-month term would result in a monthly payment of approximately $377.33.</p>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">5.</span>
              <p>This offer is available to First Monument Bank members and does not apply to existing First Monument Bank loans. .25% rate reduction available on new direct auto loans when automatic payments are established from a First Monument Bank account and the member is enrolled in eStatements. Both conditions must be maintained for the term of the loan to retain the discount. If either condition is not met at any time, the rate will increase by .25%. Offer subject to change or cancellation at any time.</p>
            </div>

            <div className="flex gap-2">
              <span className="font-bold">6.</span>
              <p><span className="font-bold">No Down Payment Mortgage</span> available for owner-occupied primary residence purchases only. <span className="font-bold">$0 down payment is required.</span> A 30-year fixed rate term is typical; other terms may be available. Private Mortgage Insurance (PMI) is required and will be in addition to the monthly principle and interest mortgage payments. Loan will require an escrow account to be established for property taxes, homeowners insurance, PMI, and flood insurance, if applicable. Subject to closing costs and other third-party fees. This is a <span className="font-bold">conventional loan product</span>, not insured or guaranteed by the FHA or VA. Program availability subject to credit union lending policies and credit approval. Borrowers are responsible for closing costs, PMI, and applicable fees. "No Down Payment" refers to the lack of an upfront down payment toward the principal loan amount.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

