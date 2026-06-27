import { motion } from "framer-motion";
import { Users, BookOpen, Heart, Globe, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Careers() {
  return (
    <div className="flex-grow flex flex-col w-full ">
      <section className="w-full py-24 px-4 bg-white border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Build your career.<br />Build the future of banking.
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            At First Monument Bank, we believe that investing in our people is the best investment we can make. Join a team dedicated to innovation, community, and excellence.
          </p>
          <Button size="sm" className=" hover: text-white ">View Open Roles</Button>
        </div>
      </section>

      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Work With Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We offer comprehensive benefits and a culture that supports your professional growth and personal well-being.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <Heart className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-base md:text-lg mb-2">Total Wellness</h3>
              <p className="text-sm text-slate-600">Premium medical, dental, and vision coverage, plus mental health resources and generous paid time off.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <Globe className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
              <h3 className="font-bold text-base md:text-lg mb-2">Remote Flexibility</h3>
              <p className="text-sm text-slate-600">Hybrid and fully remote options available for many roles, empowering you to work where you're most productive.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-base md:text-lg mb-2">Lifelong Learning</h3>
              <p className="text-sm text-slate-600">Up to $10,000 annually in tuition reimbursement, plus internal certification programs and leadership training.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
              <Users className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-base md:text-lg mb-2">Inclusive Culture</h3>
              <p className="text-sm text-slate-600">Join one of our 12 Employee Resource Groups (ERGs) to connect, mentor, and drive diversity initiatives across the bank.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full py-20 px-4 bg-slate-900 text-white bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <GraduationCap className="w-16 h-16 text-blue-400 mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Early Career & Internships</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Launch your career with our award-winning Analyst Program. We recruit from top universities worldwide to find the next generation of financial leaders, software engineers, and quantitative analysts.
            </p>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:">Explore Campus Recruiting <ChevronRight className="w-4 h-4 ml-2" /></Button>
          </div>
          <div className="flex-1 w-full  p-6 md:p-8 rounded-3xl border border-slate-700">
             <h3 className="text-xl font-bold mb-6">Upcoming Campus Events</h3>
             <div className="space-y-4">
               <div className="pb-4 border-b border-slate-700">
                 <p className="font-bold text-blue-300">Technology & Engineering Mixer</p>
                 <p className="text-sm text-slate-400">Virtual Event • October 15, 2026</p>
               </div>
               <div className="pb-4 border-b border-slate-700">
                 <p className="font-bold text-blue-300">Investment Banking Info Session</p>
                 <p className="text-sm text-slate-400">New York, NY • October 22, 2026</p>
               </div>
               <div>
                 <p className="font-bold text-blue-300">Women in Finance Summit</p>
                 <p className="text-sm text-slate-400">Chicago, IL • November 5, 2026</p>
               </div>
             </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 px-4 bg-white text-xs text-slate-500 text-center">
        <div className="max-w-4xl mx-auto">
          <p>First Monument Bank is an Equal Opportunity Employer. We do not discriminate on the basis of race, religion, color, sex, gender identity, sexual orientation, age, non-disqualifying physical or mental disability, national origin, veteran status or any other basis covered by appropriate law.</p>
        </div>
      </section>
    </div>
  );
}

