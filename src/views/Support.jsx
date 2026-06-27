import { PhoneCall, MessageSquare, Mail, HelpCircle, MapPin, ShieldAlert, CreditCard } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Support() {
  return (
    <div className="flex-grow flex flex-col w-full ">
      <section className="w-full py-16 px-4 bg-slate-900 text-white bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-3xl md:text-4xl md:text-5xl font-bold mb-4">How can we help you today?</h1>
          <p className="text-base md:text-lg text-blue-100 mb-8">24/7 Support for your banking needs.</p>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for answers (e.g., 'Lost card', 'Routing number')..." 
              className="w-full py-4 pl-6 pr-12 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
            />
            <Button className="absolute right-2 top-2 bottom-2 rounded-full hover: text-white">Search</Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="w-12 h-12  text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"><PhoneCall className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
            <p className="text-xs text-slate-500 mb-2">Available 24/7</p>
            <p className="text-sm font-bold text-blue-600">1-800-MONUMENT</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="w-12 h-12  text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"><MessageSquare className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-900 mb-1">Live Chat</h3>
            <p className="text-xs text-slate-500 mb-2">Fastest response</p>
            <p className="text-sm font-bold text-emerald-600">Start a chat</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="w-12 h-12  text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-900 mb-1">Find a Branch</h3>
            <p className="text-xs text-slate-500 mb-2">Over 3,000 locations</p>
            <p className="text-sm font-bold text-purple-600">Locate us</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-md transition-all cursor-pointer">
            <div className="w-12 h-12  text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-900 mb-1">Secure Message</h3>
            <p className="text-xs text-slate-500 mb-2">For account specifics</p>
            <p className="text-sm font-bold text-amber-600">Log in to send</p>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-6 hover: transition-colors flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-red-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Report Fraud</h4>
                <p className="text-xs text-slate-600">If you notice an unauthorized transaction, report it immediately.</p>
              </div>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 hover: transition-colors flex items-start gap-4">
              <CreditCard className="w-6 h-6 text-blue-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Replace a Card</h4>
                <p className="text-xs text-slate-600">Lost or stolen card? Request a new one in seconds.</p>
              </div>
            </div>
            <div className="border border-slate-200 rounded-xl p-6 hover: transition-colors flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Reset Password</h4>
                <p className="text-xs text-slate-600">Having trouble logging in? Reset your digital banking password.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
