import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  WalletCards, 
  ArrowRightLeft, 
  CreditCard,
  Building2,
  LogOut,
  Bell,
  Settings
} from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: WalletCards, label: "Accounts", path: "/accounts" },
  { icon: ArrowRightLeft, label: "Transfers", path: "/transfers" },
  { icon: CreditCard, label: "Virtual Cards", path: "/cards" },
];

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-bank-bg)] flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 md:flex-shrink-0 border-r border-[var(--color-bank-border)] bg-[var(--color-bank-surface)] flex flex-col z-20 sticky top-0 md:h-screen">
        <div className="p-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/fmb_logo.png" alt="First Monument Bank Logo" className="w-10 h-10 object-contain " />
              <span className="font-bold text-xl text-slate-900 tracking-tight">First Monument Bank</span>
            </Link>
          </div>

        <nav className="flex-grow px-4 py-6 space-y-2 overflow-y-auto hidden md:block">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm",
                  isActive 
                    ? "bg-[var(--color-bank-primary)] text-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                    : "text-[var(--color-bank-text-muted)] hover:text-slate-900 hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-slate-900" : "text-[var(--color-bank-text-muted)]")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav (Bottom Bar simulation or simple horizontal scroll for now) */}
        <nav className="md:hidden flex overflow-x-auto p-4 gap-2 border-b border-[var(--color-bank-border)] no-scrollbar">
           {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium text-sm flex-shrink-0",
                  isActive 
                    ? "bg-[var(--color-bank-primary)] text-slate-900" 
                    : "text-[var(--color-bank-text-muted)] hover:text-slate-900 hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-bank-border)] hidden md:block">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[var(--color-bank-text-muted)] hover:text-red-400 hover:bg-[rgba(239,68,68,0.1)] transition-colors text-sm font-medium">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Translation Widget Container */}
      <div className="fixed top-4 right-4 z-50 md:absolute md:top-6 md:right-32 md:z-auto">
        <div id="google_translate_element"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-0 relative">
        <header className="h-20 border-b border-[var(--color-bank-border)] glass sticky top-0 z-10 hidden md:flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-slate-900">
            {navItems.find(i => i.path === location.pathname)?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-[150px] hidden md:block"></div> {/* Placeholder for translation widget */}
            <button className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.05)] text-[var(--color-bank-text-muted)] hover:text-slate-900 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.05)] text-[var(--color-bank-text-muted)] hover:text-slate-900 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-800 border-2 border-[var(--color-bank-border)] shadow-lg ml-2"></div>
          </div>
        </header>

        <main className="flex-grow p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
