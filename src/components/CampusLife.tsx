import React from 'react';
import { Monitor, BookOpen, FlaskConical, Users, Shield, Calendar, Clock, Smile } from 'lucide-react';
import studentLounge from '../assets/images/student_lounge_hq_1781706277936.jpg';
import scienceLab from '../assets/images/physics_optics_girls_hq_1781786106878.jpg';
import classroomSeminar from '../assets/images/classroom_seminar_hq_1781784559363.jpg';
import smartClass from '../assets/images/smart_class_interactive_hq_1781784595932.jpg';

export default function CampusLife() {
  const cards = [
    {
      title: 'Smart AC Classrooms',
      subtitle: 'Comfortable Academic Chambers',
      desc: 'Our air-conditioned classrooms are designed with wide study desks and whiteboards to maximize optical ergonomics, high focus, and physical safety.',
      image: classroomSeminar,
      icon: Monitor,
      badge: 'High Focus Space'
    },
    {
      title: 'Interactive Subject Labs',
      subtitle: 'Physics & Chemistry Visualization',
      desc: 'Scientific concepts are illustrated under expert guidance with chemical models, electrical boards, and mini physical lab demonstrations.',
      image: scienceLab,
      icon: FlaskConical,
      badge: 'Experimental Learning'
    },
    {
      title: 'Quiet Mentoring Pods',
      subtitle: 'Air-Conditioned Study Lounge',
      desc: 'Students have daily open access to peaceful study pods, reference textbooks, and custom assessment files to resolve board mock question sheets.',
      image: studentLounge,
      icon: BookOpen,
      badge: 'Dedicated Help Desk'
    },
    {
      title: '15-Student Master Batches',
      subtitle: 'Collaborative Bench Circles',
      desc: 'By limiting seating directories strictly to 15, we foster interactive inquiry, immediate individual doubt rectification, and friendly competition.',
      image: smartClass,
      icon: Users,
      badge: 'Individual Care Limits'
    }
  ];

  const highlights = [
    { icon: Shield, label: 'CCTV Secure Safe Campus' },
    { icon: Calendar, label: 'Rigorous 6-Day Weekly Schedule' },
    { icon: Clock, label: 'Flexible Dynamic Evening Shifts' },
    { icon: Smile, label: 'Highly Encouraging Concept Pedagogy' }
  ];

  return (
    <section id="campus-life" className="relative py-24 bg-white border-b border-slate-100 text-left">
      {/* Background Dots */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(#C69214_0.4px,transparent_0.4px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-105 px-3 py-1 rounded-full inline-block">
            CAMPUS DISCOVERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Campus Life at Hemant Coaching <br />
            <span className="font-serif italic font-semibold text-brand-gold">Nurturing Intellect and Integrity Inside Kanpur</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge */}
                  <span className="absolute top-3 left-3 bg-[#fae8b4] text-[#8c670d] text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow-xs">
                    {card.badge}
                  </span>

                  {/* Icon over image circle */}
                  <span className="absolute bottom-3 left-4 h-9 w-9 rounded-full bg-brand-blue border border-brand-gold/30 text-white flex items-center justify-center shadow-md">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                </div>

                {/* Card description bodies */}
                <div className="p-5 flex-grow">
                  <span className="text-[10px] text-slate-400 block font-mono font-bold uppercase tracking-widest mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="font-display font-black text-brand-blue text-base">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mt-2.5">
                    {card.desc}
                  </p>
                </div>

                {/* Card footer decorative borders */}
                <div className="border-t border-slate-100 px-5 py-3.5 bg-slate-50 flex items-center justify-between text-[10px] font-mono font-extrabold text-[#C69214] uppercase tracking-wide">
                  <span>Admissions Open</span>
                  <span>Kalyanpur Wing</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust features row */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-150 rounded-2xl">
                <div className="h-10 w-10 rounded-xl bg-orange-100 text-[#C69214] flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-slate-805 leading-tight font-sans">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
