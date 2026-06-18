import React from 'react';
import { Award, GraduationCap, TrendingUp, Sparkles, Star, Users } from 'lucide-react';
import topperAniket from '../assets/images/topper_aniket_hq_1781786157298.jpg';
import topperRohan from '../assets/images/topper_rohan_hq_1781786173192.jpg';
import topperPriya from '../assets/images/topper_priya_hq_1781786191838.jpg';
import topperShreya from '../assets/images/topper_shreya_hq_1781786206852.jpg';

export default function Achievements() {
  const stats = [
    { value: '100%', label: 'Board Pass Rate', desc: 'Consistent perfect pass rate record for classes 10 & 12.' },
    { value: '94.2%', label: 'Class Distinction Avg', desc: 'Over half of our students obtain 90%+ aggregate marks.' },
    { value: '42+', label: '100/100 Perfect Scores', desc: 'Students achieving flawless maximum marks in board exams.' },
    { value: '120+', label: 'District Topper List', desc: 'Graduates listed in state & district top merit folders.' }
  ];

  const toppers = [
    { 
      name: 'Aniket Dwivedi', 
      score: '98% in Maths', 
      board: 'CBSE Class XII', 
      remarks: 'Kanpur District Rank 2',
      image: topperAniket
    },
    { 
      name: 'Priya Gupta', 
      score: '96.4% in Science', 
      board: 'CBSE Class X', 
      remarks: 'Grade A1 Double Distinction',
      image: topperPriya
    },
    { 
      name: 'Rohan Malhotra', 
      score: '95.2% in Physics', 
      board: 'UP Board Class XII', 
      remarks: 'State Merit List',
      image: topperRohan
    },
    { 
      name: 'Shreya Shukla', 
      score: '97% in Commerce', 
      board: 'CBSE Class XII', 
      remarks: 'Accountancy 100/100',
      image: topperShreya
    }
  ];

  return (
    <section id="results" className="relative py-24 bg-white border-b border-slate-100 text-left">
      <div className="absolute inset-0 bg-[radial-gradient(#C69214_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Highlights and numbers (Cols: 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
                UNMATCHED ACADEMIC STANDARDS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
                Authentic Success Stories <br />
                <span className="font-serif italic font-semibold text-brand-gold">Year After Year</span>
              </h2>
              <p className="text-base text-slate-600 max-w-lg leading-relaxed font-sans">
                By maintaining a highly focused student ratio, our concept-first methodology ensures students achieve top rankings in board assessments across Kanpur.
              </p>
              <div className="h-0.5 w-16 bg-brand-gold mt-4" />
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1 hover:bg-orange-50/10 transition-colors duration-200">
                  <div className="text-3xl font-black font-display text-brand-blue tracking-tight">
                    {stat.value}
                  </div>
                  <span className="block text-xs font-bold text-slate-850 tracking-wide uppercase">
                    {stat.label}
                  </span>
                  <span className="block text-[11px] text-slate-500 leading-normal">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honor Roll Board with student photography (Cols: 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
              <div className="absolute -top-3.5 left-6 rounded-full bg-brand-blue border border-brand-gold-light/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" /> BOARD EXAM TOPPERS
              </div>

              <div className="border-b border-slate-200 pb-4 pt-1 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-blue">Kanpur Board Distinction Group</h3>
                  <p className="text-xs text-slate-500 font-medium font-sans">Our latest batch topper scorecards and district achievements</p>
                </div>
              </div>

              {/* Topper cards grid with photography */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {toppers.map((student, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white hover:border-[#C69214]/50 hover:shadow-md transition duration-300 overflow-hidden"
                  >
                    {/* Student Photo Header Frame */}
                    <div className="relative h-[350px] min-h-[350px] sm:min-h-0 sm:h-40 overflow-hidden bg-slate-100">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                      {/* Top floating score badge */}
                      <div className="absolute top-2.5 right-2.5 rounded-lg bg-brand-blue border border-brand-gold/30 text-white px-2.5 py-1 text-[11px] font-extrabold tracking-wide uppercase">
                        {student.score}
                      </div>
                      
                      {/* Class Label details floating at the bottom */}
                      <div className="absolute bottom-2 left-2.5 rounded bg-slate-900/70 text-white text-[9px] font-mono tracking-wider px-2 py-0.5 uppercase">
                        {student.board}
                      </div>
                    </div>

                    {/* Student details body */}
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-black text-brand-blue text-sm">
                          {student.name}
                        </h4>
                        <span className="block text-[10px] text-[#C69214] font-mono tracking-widest font-extrabold uppercase mt-1">
                          {student.remarks}
                        </span>
                      </div>
                      
                      {/* Five-star ranking bar */}
                      <div className="flex items-center gap-0.5 mt-3 pt-2.5 border-t border-slate-100">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-[#C69214] text-[9px]">★</span>
                        ))}
                        <span className="text-[9px] text-slate-400 font-mono font-bold uppercase ml-1.5">Elite Alumni</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] italic text-slate-500 font-medium block">
                  *All academic scorecards are fully validated against authentic Central/State Boards database files.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
