import React from 'react';
import { 
  Award, Heart, Calendar, ShieldCheck, 
  MapPin, NotebookTabs 
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Decades of Board Success',
      description: 'Outstanding pass rate in CBSE and ICSE board exams. Dozens of students achieve excellent distinction percentages in Physics, math, and Commerce.'
    },
    {
      icon: Heart,
      title: 'Growth-Focused Mentorship',
      description: 'We prioritize a respectful, constructive teaching tone. Our faculty acts as compassionate counselors who motivate children.'
    },
    {
      icon: Calendar,
      title: 'Structured Recovery Backups',
      description: 'If a student misses a regular lecture due to health or standard events, we provide customized support and individual catch-up checkpoints.'
    },
    {
      icon: ShieldCheck,
      title: 'Highly Secure Campus',
      description: 'Fully equipped with CCTV surveillance, high standard sanitation, clean water, and secure indoor waiting areas for parents.'
    },
    {
      icon: MapPin,
      title: 'Accessible Kalyanpur Center',
      description: 'Conveniently situated in the premium learning heart of Kalyanpur, Kanpur side. Zero traffic hazards or safe pickup difficulties.'
    },
    {
      icon: NotebookTabs,
      title: 'Custom Curated Revision Workbooks',
      description: 'Customized workbooks designed precisely to mimic standard board mark-distribution patterns. No outdated standard guides.'
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full">
            THE TRUST ADVANTAGE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Why Discerning Kanpur Parents <br />
            <span className="font-serif italic font-semibold text-brand-gold">Choose Hemant Classes</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Custom Icon-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i}
                className="group flex gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition duration-200"
              >
                {/* Icon Outline */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-brand-gold group-hover:bg-brand-blue group-hover:text-white transition duration-200 flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="font-display text-sm font-bold text-brand-blue group-hover:text-brand-gold-dark transition duration-150">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
