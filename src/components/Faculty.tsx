import React from 'react';
import { FACULTY_DATA } from '../data';
import { GraduationCap, Briefcase, Award, Sparkles, Star } from 'lucide-react';

// Map faculty IDs to professional profile portraits of highly credible friendly educators
const FACULTY_IMAGES: Record<string, string> = {
  'f1': 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=300&auto=format&fit=crop', // Friendly expert male director
  'f2': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop', // Serious, cheerful female chemistry expert PhD
  'f3': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop', // Respectable elderly commerce expert of 15 yrs
  'f4': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop'  // Smiling early preschool childcare supervisor
};

export default function Faculty() {
  return (
    <section id="faculty" className="relative py-24 bg-white overflow-hidden border-b border-slate-100 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
            OUR CHAMPION MENTORS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Meet Our Exceptional Educators <br />
            <span className="font-serif italic font-semibold text-brand-gold">Guiding Your Child’s Learning Odyssey</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Faculty Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FACULTY_DATA.map((faculty) => (
            <div 
              key={faculty.id}
              className="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#C69214]/40 hover:shadow-xl transition-all duration-350 flex flex-col sm:flex-row gap-6"
            >
              {/* Photo Frame Column */}
              <div className="sm:w-36 flex-shrink-0 flex flex-col items-center">
                <div className="relative h-32 w-32 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
                  <img 
                    src={FACULTY_IMAGES[faculty.id]} 
                    alt={faculty.name} 
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Micro badge indicator */}
                <div className="mt-3 inline-flex items-center gap-1 rounded bg-[#fae8b4] text-[#8c670d] px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest">
                  <Star className="h-2.5 w-2.5 fill-[#C69214] text-[#C69214]" /> Verified
                </div>
              </div>

              {/* Information Column */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-blue leading-tight">
                      {faculty.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C69214] uppercase tracking-wider mt-0.5">
                      {faculty.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-brand-blue/5 border border-brand-blue/10 text-brand-blue px-2.5 py-0.5 text-[10px] font-bold uppercase font-mono">
                      {faculty.expertise}
                    </span>
                  </div>

                  {/* Credentials / Experience row */}
                  <div className="grid grid-cols-1 gap-2.5 pt-1.5 text-xs text-slate-700">
                    <div className="flex gap-2 items-start">
                      <Briefcase className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-600 block text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Tenure</span>
                        <span className="font-bold text-slate-850">{faculty.experience}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start">
                      <GraduationCap className="h-4 w-4 mt-0.5 text-[#C69214] flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-600 block text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Teaching Specialization</span>
                        <span className="font-bold text-slate-850">{faculty.subject}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio statement */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans italic border-l-2 border-brand-gold pl-3 py-1 bg-white rounded-r">
                    "{faculty.bio}"
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-brand-blue-deep pt-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#C69214]" /> Core Educator
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
