import { motion } from "framer-motion";
import { TreePine, Home, HeartHandshake, Leaf } from "lucide-react";

export function Community() {
  return (
    <div className="flex-grow flex flex-col w-full bg-white">
      <section className="w-full py-24 px-4 bg-emerald-900 border-b border-emerald-800 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-emerald-900/85"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Leaf className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Investing in our communities.
          </h1>
          <p className="text-base md:text-lg text-emerald-100 mb-0 max-w-2xl mx-auto">
            At First Monument Bank, our bottom line isn't just about profit—it's about the prosperity of the neighborhoods we serve and the health of our planet.
          </p>
        </div>
      </section>

      <section className="w-full py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <Home className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">$5B Affordable Housing Commitment</h3>
              <p className="text-slate-600 leading-relaxed">
                We've pledged $5 billion over the next decade to finance affordable housing projects in underserved communities, helping thousands of families achieve the dream of homeownership.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center transform md:-translate-y-4 shadow-xl border-t-4 border-t-emerald-500">
              <TreePine className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Carbon Neutral by 2030</h3>
              <p className="text-slate-600 leading-relaxed">
                First Monument Bank is committed to achieving net-zero greenhouse gas emissions across our operations by 2030. We are also deploying $50B in environmental and sustainable finance.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <HeartHandshake className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1 Million Volunteer Hours</h3>
              <p className="text-slate-600 leading-relaxed">
                Our employees are given 40 hours of paid volunteer time per year. Together, we've contributed over 1 million hours to local nonprofits, food banks, and mentorship programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">The First Monument Foundation</h2>
          <p className="text-base md:text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The First Monument Foundation provides critical grants to organizations advancing economic mobility, financial literacy, and community revitalization. In 2025 alone, the Foundation awarded over $250 million in philanthropic grants globally.
          </p>
          <div className=" p-6 md:p-8 rounded-3xl border border-slate-200 inline-block text-left">
            <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-sm">2026 Grant Focus Areas</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full "></div> Workforce Development & Job Training
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full "></div> Small Business & Microfinance Support
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full "></div> Financial Education in Public Schools
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full "></div> Disaster Relief & Resiliency
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

