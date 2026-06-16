import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight, MessageSquare, Heart, Star } from 'lucide-react';
import { STUDENT_TESTIMONIALS, PARENT_TESTIMONIALS } from '../data';

// Map testifiers to actual warm human faces for premium conversion rates
const AVATAR_IMAGES: Record<string, string> = {
  'Rajesh Verma': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', // Kanpur Dad profile
  'Meenakshi Sharma': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', // Kanpur Mom profile
  'Sardar Gurpreet Singh': 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop', // Proud Sikh Dad profile
  'Aniket Dwivedi': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop', // Elite Topper Aniket
  'Priya Gupta': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', // Class 10th Topper Priya
  'Rohan Malhotra': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' // Science Topper Rohan
};

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<'parents' | 'students'>('parents');
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonials = activeTab === 'parents' ? PARENT_TESTIMONIALS : STUDENT_TESTIMONIALS;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
  };

  const handleTabChange = (tab: 'parents' | 'students') => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const currentTestimonial = activeTestimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden border-b border-slate-100 text-left">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
            COMMUNITY TRUST INDEX
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Parents Trust Us & Students <br />
            <span className="font-serif italic font-semibold text-brand-gold">Acknowledge Real Mentoring</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Custom Tab Switcher (Stripe / Framer style) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200">
            <button
              onClick={() => handleTabChange('parents')}
              className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                activeTab === 'parents'
                  ? 'bg-brand-blue text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Heart className="h-3.5 w-3.5" /> Parents Trust Us
            </button>
            <button
              onClick={() => handleTabChange('students')}
              className={`flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer ${
                activeTab === 'students'
                  ? 'bg-brand-blue text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5" /> Student Achievements
            </button>
          </div>
        </div>

        {/* Testimonial Active Display Card with Fade Slider Animations */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl p-6 sm:p-10 relative border border-slate-200 bg-slate-50/50 shadow-md flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
            >
              <div className="absolute top-6 left-6 text-brand-gold/10">
                <Quote className="h-16 w-16 stroke-[1.5px]" />
              </div>

              {/* Informative Avatar + Main Quote text */}
              <div className="flex-1 flex flex-col sm:flex-row gap-5 items-start pl-2">
                {/* Visual Avatar frame */}
                <div className="relative h-18 w-18 sm:h-20 sm:w-20 rounded-full overflow-hidden border-2 border-brand-gold bg-slate-150 flex-shrink-0 shadow-sm">
                  <img 
                    src={AVATAR_IMAGES[currentTestimonial.name]} 
                    alt={currentTestimonial.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3.5 max-w-xl">
                  {/* Star review overlay */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#C69214] text-[#C69214]" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-slate-705 leading-relaxed font-sans italic font-medium">
                    "{currentTestimonial.content}"
                  </p>

                  <div className="pt-1">
                    <span className="block font-display font-black text-brand-blue text-base leading-none">
                      {currentTestimonial.name}
                    </span>
                    <span className="block text-[10px] font-mono text-[#8c670d] font-bold uppercase tracking-widest mt-1.5">
                      {currentTestimonial.role === 'Student' ? 'Distinction Topper Group' : 'Verified Kalyanpur Resident'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right panel inside testimonial: Achievement Badge of Honor */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center border border-slate-200 bg-white rounded-2xl px-5 py-5 w-full md:w-[200px] text-center space-y-1 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-extrabold leading-none mb-1.5 font-mono">
                  Verified Result
                </span>
                <span className="text-sm font-black text-brand-blue leading-snug">
                  {currentTestimonial.achievement}
                </span>
                <span className="rounded-full bg-slate-100 border border-slate-200 py-0.5 px-3 text-brand-blue text-[10px] font-mono mt-3 font-bold uppercase">
                  {currentTestimonial.classTag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation nodes for the Slider */}
          <div className="flex justify-end gap-2.5 mt-6">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue hover:text-white text-slate-700 transition duration-150 cursor-pointer shadow-xs"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue hover:text-white text-slate-700 transition duration-150 cursor-pointer shadow-xs"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
