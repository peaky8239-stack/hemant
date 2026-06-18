import React from 'react';
import { Target, Compass, BookOpenCheck, BrainCircuit, HeartHandshake, Award, Search, Sparkles } from 'lucide-react';
import studentLounge from '../assets/images/student_lounge_hq_1781706277936.jpg';

export default function About() {
  const methodologies = [
    {
      icon: BookOpenCheck,
      title: 'Concept-First Pedagogy',
      text: 'We do not force blind memorization. By establishing the "why" and "how" behind mathematical equations and scientific laws, we build lifelong interest.'
    },
    {
      icon: BrainCircuit,
      title: 'Spaced Assessments & Tracker',
      text: 'High-yield topics are re-evaluated every 30 days via customized diagnostics, preventing final exam score drops.'
    },
    {
      icon: HeartHandshake,
      title: 'Doubt Help-Desk Support',
      text: 'Dedicated daily individual hours. Students can confidently stay back after lectures to clear concepts interactively with professors.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white border-b border-slate-100 text-left">
      {/* Subtle modern vector background lines */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold-light/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vision, Mission & About Text (Cols: 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full inline-block">
                OVER A DECADE OF TRUST
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Empowering Kanpur’s Students <br />
                <span className="font-serif italic font-semibold text-brand-gold">With Quality Education</span>
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Founded over a decade ago in Kalyanpur, Kanpur, <strong className="text-brand-blue font-bold text-brand-blue">Hemant Coaching Classes</strong> is committed to values-first academic training over commercial expansion. 
              We guide students across critical developmental stages—from fundamental early childhood coaching up to rigorous Class 12 physical sciences, mathematics, and commerce board levels.
            </p>

            {/* Vision & Mission Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Vision Card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 shadow-sm hover:border-slate-300 transition duration-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-brand-gold">
                  <Compass className="h-5 w-5 text-[#C69214]" />
                </div>
                <h4 className="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">
                  Our Vision
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide Kanpur’s most disciplined and nurturing academic environment where every student develops concrete critical thinking.
                </p>
              </div>

              {/* Mission Card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 shadow-sm hover:border-slate-300 transition duration-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-brand-blue">
                  <Target className="h-5 w-5 text-brand-blue" />
                </div>
                <h4 className="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">
                  Our Mission
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To secure excellent parent satisfaction by delivering robust results while strictly limiting class size to ensure personal care.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Teaching Methodology + Real Image Card (Cols: 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Real Campus Study Lounge Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg group">
              <img 
                src={studentLounge} 
                alt="Students studying in the luxury air-conditioned lounge or private pod library at Hemant classes" 
                className="w-full h-56 sm:h-64 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-left text-white">
                <span className="inline-block bg-brand-gold/90 text-white font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded tracking-widest mb-1.5">
                  Premium Kalyanpur Campus
                </span>
                <h4 className="font-display font-bold text-base leading-tight">Quiet Self-Study & Mentorship Zone</h4>
                <p className="text-xs text-slate-200 leading-normal mt-1">
                  Students have full access to study booths and resources outside their regular batch hours.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-6">
              <h3 className="font-display text-sm font-extrabold text-brand-blue uppercase tracking-widest border-b border-slate-200 pb-3 flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-brand-gold" /> OUR STUDENT-FIRST PEDAGOGY
              </h3>

              <div className="space-y-5">
                {methodologies.map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 mt-0.5 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#C69214] shadow-sm flex-shrink-0">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-blue">
                          {method.title}
                        </h4>
                        <p className="text-xs text-slate-655 leading-relaxed font-sans">
                          {method.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verified academic banner at the bottom */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3.5 shadow-xs">
                <div className="h-8 w-8 rounded-full bg-amber-50 border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <span className="text-xs text-slate-600 leading-tight">
                  All test blueprints align meticulously with <strong>CBSE, ICSE, and UP State Board</strong> frameworks.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
