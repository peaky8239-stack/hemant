import React from 'react';
import { motion } from 'motion/react';
import { MessageSquarePlus, HeartHandshake, Presentation, ShieldCheck } from 'lucide-react';

export default function AdmissionProcess() {
  const steps = [
    {
      step: '01',
      icon: MessageSquarePlus,
      title: 'Submit Inquiry',
      subtitle: 'Online or Telephone',
      desc: 'Submit our simple seat reservation form, call us directly, or chat with our admin team on WhatsApp.'
    },
    {
      step: '02',
      icon: HeartHandshake,
      title: 'Academic Review',
      subtitle: 'Parent Consultation',
      desc: 'Visit our Kalyanpur campus or schedule a physical review with Hemant Sir to analyze current gaps.'
    },
    {
      step: '03',
      icon: Presentation,
      title: 'Free Demo Lectures',
      subtitle: '2-3 Trial Sessions',
      desc: 'The student attends trial lectures with their actual cohort. Pay tuition fees only when fully satisfied.'
    },
    {
      step: '04',
      icon: ShieldCheck,
      title: 'Confirm Enrollment',
      subtitle: 'Secure Batch Admission',
      desc: 'Complete simple parent KYC ledgers, get syllabus revision books, set batch schedules, and begin lectures.'
    }
  ];

  return (
    <section id="admissions-timeline" className="relative py-24 bg-slate-50 border-b border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full">
            ADMISSION PROCESS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Four Simple Steps to Secure <br />
            <span className="font-serif italic font-semibold text-brand-gold">Your Child’s Path to Excellence</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Adaptive Horizontal on Desktop, Vertical on Mobile timeline */}
        <div className="relative mt-8">
          {/* Central Connector bar */}
          <div className="hidden lg:block absolute top-[41px] left-[10%] right-[10%] h-1 bg-slate-200" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center group"
                >
                  {/* Step bubble */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 text-brand-blue shadow-xs transition-all duration-200 group-hover:border-brand-gold mb-6 z-10">
                    {/* Floating Step Number */}
                    <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-brand-blue text-[10px] font-bold text-white border border-white leading-none">
                      {item.step}
                    </span>
                    
                    <Icon className="h-6 w-6 text-brand-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-brand-blue leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-brand-gold-dark font-bold uppercase tracking-wider block mt-1.5 mb-2 leading-none font-mono">
                    {item.subtitle}
                  </span>
                  
                  {/* description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-[240px] px-2 sm:px-0 lg:px-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
