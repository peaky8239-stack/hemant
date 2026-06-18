import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, ZoomIn, X, Sparkles, BookOpen, Star, HelpCircle } from 'lucide-react';
import scienceLab from '../assets/images/science_lab_students_1781618034689.jpg';
import studentLounge from '../assets/images/student_lounge_hq_1781706277936.jpg';
import heroClassroom from '../assets/images/classroom_hero_hq_1781705629025.jpg';

export default function VisualGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      url: heroClassroom,
      title: 'Primary Teaching Desk',
      category: 'Smart Classroom View',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
      title: 'Foundations Library Corner',
      category: 'Child Cognitive Study',
      span: ''
    },
    {
      url: scienceLab,
      title: 'Advanced Electro-Physics Lab',
      category: 'Science Practical Visualization',
      span: 'md:col-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
      title: 'Peer Discussion Circles',
      category: 'Restricted Batch Hub',
      span: ''
    },
    {
      url: studentLounge,
      title: 'AC Silent Mentoring Booths',
      category: 'Self-Study Library Pods',
      span: 'md:col-span-2'
    },
    {
      url: 'https://images.unsplash.com/photo-1544531585-9847b66c6186?q=80&w=600&auto=format&fit=crop',
      title: '1-on-1 Concept Explanations',
      category: 'Personalized Help-Desks',
      span: ''
    }
  ];

  return (
    <section id="gallery" className="relative py-24 bg-slate-50 border-b border-slate-100 text-left">
      <div className="absolute top-12 right-0 w-[400px] h-[400px] bg-brand-gold-light/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
            CAMPUS PERSPECTIVE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Our Visual Campus Gallery <br />
            <span className="font-serif italic font-semibold text-brand-gold">A Clean, Transparent Glimpse Inside Kalyanpur Classes</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Bento Grid Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[160px] md:auto-rows-[180px]">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.url)}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm cursor-pointer ${item.span || ''}`}
            >
              {/* Image element */}
              <img 
                src={item.url} 
                alt={item.title} 
                className="h-full w-full object-cover transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Top floating zoom icon (micro design details) */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xs p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/30">
                <ZoomIn className="h-4 w-4 text-white" />
              </div>

              {/* Bottom description info */}
              <div className="absolute bottom-5 left-5 right-5 text-left text-white pointer-events-none">
                <span className="inline-block text-[#fae8b4] text-[8px] font-mono font-extrabold uppercase tracking-widest bg-brand-blue/90 border border-[#fae8b4]/30 px-2 py-0.5 rounded mb-1.5 leading-none">
                  {item.category}
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Call out Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-blue-deep rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-brand-gold/30 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(#fae8b4_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3.5 max-w-xl">
              <span className="text-[10px] text-brand-gold font-mono font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-brand-gold/20 inline-block">
                Secure Admission Tryouts
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Want to attend a live chemical derivation or visual math session?
              </h3>
              <p className="text-sm text-slate-300 max-w-md font-sans">
                We organize free-of-cost diagnostic trial sessions for classes Playgroup up to Class 12. Book in 1 minute below!
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center gap-3">
              <a 
                href="#inquiry-form"
                className="px-6 py-4 rounded-xl bg-white text-xs font-bold uppercase tracking-wider text-brand-blue hover:bg-slate-50 transition transform active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-brand-gold fill-brand-gold" />
                Reserve Trial Seat
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Screen Image Modal Frame on Click */}
      <AnimatePresence>
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs"
            onClick={() => setActiveImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-slate-900 border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 bg-slate-950/60 p-2.5 rounded-full text-white hover:text-brand-gold transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <img 
                src={activeImage} 
                alt="Enlarged Campus View" 
                className="w-full h-auto max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
