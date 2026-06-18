import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, Users, HeartHandshake, 
  ClipboardCheck, HelpCircle, LineChart 
} from 'lucide-react';

export default function TrustIndicators() {
  const indicators = [
    {
      icon: GraduationCap,
      title: 'Distinguished Faculty',
      description: 'Classes engineered directly by Hemant Kumar and highly certified senior subject specialists with cumulative 12+ years of tutoring expertise.',
      bgColor: 'bg-amber-50 text-brand-gold'
    },
    {
      icon: Users,
      title: 'Compulsory Batch Limits',
      description: 'We restrict every single batch to 15 students maximum. No packed auditoriums; your child receives personalized physical focus.',
      bgColor: 'bg-blue-50 text-brand-blue'
    },
    {
      icon: HeartHandshake,
      title: 'Individual Pace Monitoring',
      description: 'Students learn at different paces. We track individual assimilation rates and schedule customized explanation loops.',
      bgColor: 'bg-emerald-50 text-emerald-700'
    },
    {
      icon: ClipboardCheck,
      title: 'Disciplined Assessment Cycles',
      description: 'Weekly homework checkpoints combined with monthly simulation exam papers formatted to represent real board exam grading guidelines.',
      bgColor: 'bg-slate-50 text-slate-700'
    },
    {
      icon: HelpCircle,
      title: 'Daily Doubt Help Desks',
      description: 'Dedicated daily 1-on-1 doubt resolving desks. Students can confidently clear complicated queries instantly with faculty.',
      bgColor: 'bg-purple-50 text-purple-700'
    },
    {
      icon: LineChart,
      title: 'Continuous parent reporting',
      description: 'Consistent digital test scores, instant attendance notifications, and periodic Parent-Teacher Meetings to evaluate growth.',
      bgColor: 'bg-rose-50 text-rose-700'
    }
  ];

  return (
    <section id="trust-pillars" className="relative py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold-light/40 px-3 py-1 rounded-full">
            INSTITUTIONAL INTEGRITY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Built for Parents Who Prioritize <br className="hidden sm:block" />
            <span className="font-serif italic font-semibold text-brand-gold">Genuine Academic Mentorship</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Crisp Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="premium-card rounded-2xl p-7 bg-white flex flex-col justify-between transition-all duration-300 border border-slate-200 shadow-sm"
              >
                <div>
                  {/* Clean premium icon background frame */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bgColor} mb-6 border border-slate-100`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-blue mb-2.5">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line flourish (clean non-glow) */}
                <div className="h-0.5 w-8 bg-brand-gold/30 mt-6" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
