import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  ChevronRight,
  Briefcase,
  Building2,
  ShieldCheck,
  BarChart,
  HeadphonesIcon,
  Users,
  Lock,
  Settings,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <div className="flex-grow flex flex-col items-center w-full relative z-10 pb-0">

      {/* SECTION 1: Cinematic Hero */}
      <div className="relative w-full h-[70vh] md:h-[85vh] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#050810]">

        {/* Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        {/* Subtle Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>

        {/* Corner Accents (Subtle brackets framing the hero) */}
        <div className="hidden md:block absolute top-[20%] left-[15%] w-10 h-10 border-t border-l border-blue-500/20"></div>
        <div className="hidden md:block absolute top-[20%] right-[15%] w-10 h-10 border-t border-r border-blue-500/20"></div>
        <div className="hidden md:block absolute bottom-[20%] left-[15%] w-10 h-10 border-b border-l border-blue-500/20"></div>
        <div className="hidden md:block absolute bottom-[20%] right-[15%] w-10 h-10 border-b border-r border-blue-500/20"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-4 md:mt-10">

          {/* Pill Badge */}
          <div className="flex items-center gap-3 px-5 py-1.5 rounded-full border border-blue-500/30 bg-[#0a0f1e]/80 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full  shadow-[0_0_10px_#818cf8]"></span>
            <span className="text-[10px] md:text-xs font-bold text-blue-600/80 uppercase tracking-[0.2em]">The Institution</span>
          </div>

          {/* Massive Heading */}
          <h1 className="text-2xl md:text-3xl sm:text-4xl md:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-black tracking-tight mb-8 flex flex-col md:block gap-2">
            <span className="text-white drop-shadow-md">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 filter drop-shadow-[0_0_25px_rgba(96,165,250,0.4)] leading-tight">First Monument Bank</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-14 font-light px-4">
            At First Monument Bank, we are guided by a common purpose to help make financial lives better. We are committed to connecting our customers to the resources they need to be successful and investing deeply in the communities we serve.
          </p>


        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 mt-16 md:mt-32 space-y-24 md:space-y-32">

        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-left order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Human Ingenuity Meets Digital Innovation
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                While we offer industry-leading digital platforms, we know that true financial success is built on human relationships. Our dedicated team of advisors provides personalized, human-centered guidance every step of the way.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed pb-4">
                By merging deep financial expertise with responsible business practices, we are driving sustainable growth and creating lasting value for our clients, our employees, and society.
              </p>
              <Link to="/faqs" className="inline-block bg-transparent border border-blue-500/50 text-blue-600 hover: hover:border-blue-500 hover:text-blue-600 px-6 py-2.5 rounded-xl font-semibold transition-all mt-4">
                Learn More
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group order-1 lg:order-2">
              <img
                src="/about_abstract_tech.png"
                alt="Abstract Tech Data"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: Our Core Values */}
        <div className="text-center">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full "></span>
            Our Vision
          </span>
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 text-left hover:border-blue-300 hover:scale-[0.97] transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Community First</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We put people and communities first. Our commitment extends beyond banking to robust investments in affordable housing, small businesses, and environmental sustainability.
              </p>
              <Link to="/faqs" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 text-left hover:border-blue-300 hover:scale-[0.97] transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">The Bank of Doing</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We are your partner in doing. Whether you're buying a home or expanding a business, we deliver the human-centered service and support you need to achieve your goals.
              </p>
              <Link to="/faqs" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 text-left hover:border-blue-300 hover:scale-[0.97] transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Responsible Growth</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We are committed to growing responsibly by taking a disciplined approach to risk, maintaining strong capital, and delivering innovative products that genuinely benefit our clients.
              </p>
              <Link to="/faqs" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 4: Exploring the Boundaries */}
        <div className="bg-slate-50 border border-slate-200 shadow-xl rounded-[2.5rem] p-6 md:p-8 md:p-12 overflow-hidden relative">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent animate-pulse duration-[3000ms] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left: Text Content */}
            <div className="space-y-6 text-left">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Our Commitment to Transparency
              </span>
              <h3 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                At First Monument Bank, our mission is to deliver financial solutions that enhance the lives of our customers and strengthen our communities. We strive to build long-lasting relationships based on trust, integrity, and mutual respect.
              </p>
              <Link to="https://account.firstmonument.com/register" className="inline-block bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 px-6 py-2.5 mt-4 rounded-xl font-semibold transition-all">
                Create an Account
              </Link>
            </div>

            {/* Right: Bento Grid of Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[350px] md:h-[450px]">
              {/* Stacked Images Column */}
              <div className="flex flex-col gap-4 h-full">
                <div className="relative w-full h-1/2 rounded-3xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Team Collaborating"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <div className="relative w-full h-1/2 rounded-3xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Business Meeting"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Tall Image Column */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Professional Interaction"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: Why Choose Us (Central Hub) */}
        <div className="text-center pb-12">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full "></span>
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-16 md:mb-24">
            Where Expertise Meets Security
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 max-w-5xl mx-auto">

            {/* Left Column */}
            <div className="flex flex-col gap-10 md:gap-16 w-full md:w-1/3 z-10">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md relative group hover:border-blue-300 transition-colors duration-500 min-h-[160px] flex flex-col justify-end">
                {/* Decorative Background Image Container */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl z-0 pointer-events-none">
                  <img src="/about_card_bg.png" alt="Abstract Texture" loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
                  {/* Watermark Number */}
                  <div className="absolute top-2 right-4 text-2xl md:text-3xl md:text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900/5 group-hover:text-blue-900/10 transition-colors duration-500">
                    01
                  </div>
                </div>

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-600 z-10 shadow-sm group-hover:shadow-md group-hover:border-blue-400 transition-all duration-500">
                  <BarChart className="w-5 h-5" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-4">Personal Banking</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Our personal banking services include a variety of checking and savings accounts tailored to meet your financial needs.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md relative group hover:border-blue-300 transition-colors duration-500 min-h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 overflow-hidden rounded-2xl z-0 pointer-events-none">
                  <img src="/about_card_bg.png" alt="Abstract Texture" loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
                  <div className="absolute top-2 right-4 text-2xl md:text-3xl md:text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900/5 group-hover:text-blue-900/10 transition-colors duration-500">
                    02
                  </div>
                </div>

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-600 z-10 shadow-sm group-hover:shadow-md group-hover:border-blue-400 transition-all duration-500">
                  <HeadphonesIcon className="w-5 h-5" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-4">Global Transfers</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Send and receive money globally with our secure and efficient international transfer services.</p>
                </div>
              </div>
            </div>

            {/* Center Node (Hidden on mobile for cleaner layout, visible on md+) */}
            <div className="hidden md:flex w-1/3 justify-center items-center relative z-0 min-h-[300px]">

              {/* Curved SVG connecting lines with data packet animations */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <path id="pathTL" d="M 50 50 C 25 50, 25 20, 0 20" />
                  <path id="pathBL" d="M 50 50 C 25 50, 25 80, 0 80" />
                  <path id="pathTR" d="M 50 50 C 75 50, 75 20, 100 20" />
                  <path id="pathBR" d="M 50 50 C 75 50, 75 80, 100 80" />

                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base dashed lines */}
                <use href="#pathTL" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="1 3" vectorEffect="non-scaling-stroke" />
                <use href="#pathBL" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="1 3" vectorEffect="non-scaling-stroke" />
                <use href="#pathTR" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="1 3" vectorEffect="non-scaling-stroke" />
                <use href="#pathBR" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1" strokeDasharray="1 3" vectorEffect="non-scaling-stroke" />

                {/* Animated Data Packets (Circles) */}
                <g>
                  <circle r="1" fill="#a5b4fc" filter="url(#glow)">
                    <animateMotion dur="3s" repeatCount="indefinite">
                      <mpath href="#pathTL" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g>
                  <circle r="1" fill="#a5b4fc" filter="url(#glow)">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="0.75s">
                      <mpath href="#pathBL" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="0.75s" />
                  </circle>
                </g>
                <g>
                  <circle r="1" fill="#a5b4fc" filter="url(#glow)">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                      <mpath href="#pathTR" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                </g>
                <g>
                  <circle r="1" fill="#a5b4fc" filter="url(#glow)">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="2.25s">
                      <mpath href="#pathBR" />
                    </animateMotion>
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3s" repeatCount="indefinite" begin="2.25s" />
                  </circle>
                </g>
              </svg>

              <div className="w-20 h-20 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center shadow-lg z-10 relative">
                <div className="w-12 h-12  rounded-full flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-10 md:gap-16 w-full md:w-1/3 z-10">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md relative group hover:border-blue-300 transition-colors duration-500 min-h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 overflow-hidden rounded-2xl z-0 pointer-events-none">
                  <img src="/about_card_bg.png" alt="Abstract Texture" loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700 transform scale-x-[-1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
                  <div className="absolute top-2 right-4 text-2xl md:text-3xl md:text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900/5 group-hover:text-blue-900/10 transition-colors duration-500">
                    03
                  </div>
                </div>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-600 z-10 shadow-sm group-hover:shadow-md group-hover:border-blue-400 transition-all duration-500">
                  <Users className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-4">Personal Loans</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Access flexible personal loans to meet your financial needs, with fast approval times.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md relative group hover:border-blue-300 transition-colors duration-500 min-h-[160px] flex flex-col justify-end">
                <div className="absolute inset-0 overflow-hidden rounded-2xl z-0 pointer-events-none">
                  <img src="/about_card_bg.png" alt="Abstract Texture" loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700 transform scale-y-[-1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
                  <div className="absolute top-2 right-4 text-2xl md:text-3xl md:text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-black text-blue-900/5 group-hover:text-blue-900/10 transition-colors duration-500">
                    04
                  </div>
                </div>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-blue-200 rounded-full flex items-center justify-center text-blue-600 z-10 shadow-sm group-hover:shadow-md group-hover:border-blue-400 transition-all duration-500">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-4">Virtual Cards</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Enhance your online shopping security with our virtual card services and temporary card numbers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 6: Testimonials Block */}
      <div className="w-full bg-slate-50 border-y border-slate-200 mt-12 py-20 relative overflow-hidden">
        {/* Spinning Background Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.15)_90deg,transparent_180deg)] animate-[spin_8s_linear_infinite] rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Genuine Feedback, Honest Opinions
          </h2>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 md:p-12 shadow-xl relative mb-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Quote className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <p className="text-base md:text-lg md:text-xl font-medium text-slate-600 leading-relaxed italic mt-4">
              "First Monument Bank has completely redefined how our corporate treasury operates. The seamless integration of global accounts and instantaneous transfers has saved us hundreds of hours and thousands in fees. They are truly the future of corporate banking."
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center gap-4">
            <img src="https://i.pravatar.cc/100?img=33" alt="User" loading="lazy" className="w-10 h-10 rounded-full border border-slate-200 opacity-50 cursor-pointer hover:opacity-100 transition-opacity shadow-sm" />
            <img src="https://i.pravatar.cc/100?img=47" alt="User" loading="lazy" className="w-10 h-10 rounded-full border border-slate-200 opacity-50 cursor-pointer hover:opacity-100 transition-opacity shadow-sm" />

            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-md">
              <img src="https://i.pravatar.cc/100?img=68" alt="Alex B." loading="lazy" className="w-12 h-12 rounded-full border-2 border-blue-500" />
              <div className="text-left pr-2">
                <div className="text-sm font-bold text-slate-900">Alex B.</div>
                <div className="text-xs text-blue-600">CEO, Nexus Tech</div>
              </div>
            </div>

            <img src="https://i.pravatar.cc/100?img=12" alt="User" loading="lazy" className="w-10 h-10 rounded-full border border-slate-200 opacity-50 cursor-pointer hover:opacity-100 transition-opacity shadow-sm" />
            <img src="https://i.pravatar.cc/100?img=25" alt="User" loading="lazy" className="w-10 h-10 rounded-full border border-slate-200 opacity-50 cursor-pointer hover:opacity-100 transition-opacity shadow-sm" />
          </div>
        </div>
      </div>





    </div>
  );
}



