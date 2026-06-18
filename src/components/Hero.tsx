import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Phone, MessageSquare, Award, Users, 
  MapPin, CheckCircle2, GraduationCap, Star
} from 'lucide-react';
import heroClassroom from '../assets/images/classroom_seminar_premium_hq_1781788314079.jpg';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="home"
      className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 md:pt-36 md:pb-24 border-b border-slate-100"
    >
      {/* Decorative clean academic backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#C69214_0.4px,transparent_0.4px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-gold-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero texts (Cols: 7) */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col space-y-6 text-left">
            {/* Trusted Brand Badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-full bg-[#fae8b4] border border-brand-gold/30 px-3 py-1 text-[11px] font-bold text-brand-blue-deep tracking-wider uppercase">
              <GraduationCap className="h-3.5 w-3.5 text-[#C69214]" />
              <span>Admissions Open for 2026 - 2027</span>
              <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
            </div>
 
            {/* Premium Academic Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-brand-blue">
              Kanpur’s Premier Coaching for <br />
              <span className="font-serif italic font-normal text-brand-gold">Academic Distinction</span>
            </h1>

            {/* Sub-description built for Parent confidence */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-sans">
              Hemant Coaching Classes provides rigorous, concept-driven tuition for students from <strong className="text-slate-950 font-semibold text-brand-blue">Playgroup to Class 12th</strong>. 
              We emphasize personalized mentorship, disciplined test schedules, and a maximum of 15 students per batch to unlock your child’s highest board exam achievements.
            </p>

            {/* Credibility bullets right below text with colored bullet checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-xl text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="text-xs sm:text-sm font-medium"><strong>Guaranteed Attendance Tracker</strong> & updates to parents</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="text-xs sm:text-sm font-medium"><strong>Max 15 Students</strong> per Batch for high focus</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="text-xs sm:text-sm font-medium"><strong>Daily Practice Problems</strong> & weekly assessment cycle</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </span>
                <span className="text-xs sm:text-sm font-medium"><strong>Kanpur's Highly Trusted team</strong> for Boards preparation</span>
              </div>
            </div>

            {/* Premium UI Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              {/* Primary Book seat */}
              <button
                onClick={() => onScrollToSection('inquiry-form')}
                className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/20 transition duration-200 transform active:scale-95 cursor-pointer"
              >
                Book Free Demo Class
                <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Call */}
              <a
                href="tel:+917985919264"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-800 transition duration-200"
              >
                <Phone className="h-4 w-4 text-brand-gold" />
                Inquire on Call
              </a>

              {/* Tertiary WhatsApp */}
              <a
                href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%20would%20like%20to%20inquire%20about%20coaching%2520admissions."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold uppercase tracking-wider text-emerald-800 transition duration-200"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                WhatsApp Chat
              </a>
            </div>

            {/* Local geography confirmation */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-2">
              <MapPin className="h-4 w-4 text-brand-gold" />
              <span>Campus Location: <strong>Kalyanpur, Kanpur</strong> (Convenient, safe & easily accessible center)</span>
            </div>
          </div>

          {/* Genuine Student Success Grid / real photo feel (Cols: 5) */}
          <div className="lg:col-span-12 xl:col-span-5 relative w-full lg:mt-6 xl:mt-0 xl:block">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Premium Hero Multi-Image Collage Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-100 bg-slate-100 shadow-xl">
                <img 
                  src={heroClassroom} 
                  alt="Students studying inside a bright modern premium classroom at Hemant Classes" 
                   className="w-full h-[350px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-500 rounded-xl animate-fade-in"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption on the image */}
                <div className="absolute bottom-4 left-4 right-4 text-left p-1 text-white">
                  <div className="flex items-center gap-1.5 mb-1 text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
                    <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" /> Premium Seminar Hall
                  </div>
                  <p className="text-xs font-medium text-slate-100 leading-snug">
                    Comfortable ergonomic seating and premium projector-guided smart lecture facilities.
                  </p>
                </div>
              </div>

              {/* Floating review card highlighting student trust */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 shadow-xl rounded-xl p-4.5 max-w-[260px] text-left hidden sm:block z-20">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C69214] text-xs">★</span>
                  ))}
                </div>
                <p className="text-xs italic text-slate-700 font-sans leading-relaxed">
                  "Hemant Classes transformed my physics scores. Went from 70% to 96% in board exams!"
                </p>
                <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
                  <span className="block text-[10px] font-bold text-brand-blue uppercase font-sans tracking-wide">Aniket Dwivedi</span>
                  <span className="bg-[#fae8b4] text-[#8c670d] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase font-mono">98% Math</span>
                </div>
              </div>

              {/* High precision stats indicator on right */}
              <div className="absolute -top-5 -right-5 bg-brand-blue border border-brand-gold/30 shadow-xl rounded-xl p-4 text-center text-white hidden sm:block z-20 max-w-[140px]">
                <Award className="h-6 w-6 text-brand-gold mx-auto mb-1.5" />
                <span className="block text-2xl font-black text-white font-display font-bold">100%</span>
                <span className="text-[9px] text-slate-350 block uppercase font-extrabold tracking-widest leading-none mt-1">Board Pass Rate</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
