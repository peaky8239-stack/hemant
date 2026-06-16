import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Notebook, BookOpen, Layers, Award } from 'lucide-react';
import { COURSES_DATA } from '../data';
import { Course } from '../types';
import scienceLab from '../assets/images/science_lab_students_1781618034689.jpg';

interface CoursesProps {
  onInquireCourse: (courseTitle: string) => void;
}

// Map each Course to a stunning, context-appropriate photo
const COURSE_IMAGES: Record<string, string> = {
  'pg': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop', // Colorful preschool sensory play
  'primary': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop', // Primary school children reading
  'middle': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop', // Smart tablet/numerical study
  'secondary': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop', // Interactive board discussion 
  'science-11-12': scienceLab, // Our generated high-tech science lab students!
  'commerce-11-12': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop' // Real transactions & analytical spreadsheets
};

export default function Courses({ onInquireCourse }: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'foundation' | 'secondary' | 'senior'>('all');

  const categories = [
    { name: 'All Milestones', value: 'all' },
    { name: 'Foundations (PG - Class 5)', value: 'foundation' },
    { name: 'Middle & Secondary (Class 6 - 10)', value: 'secondary' },
    { name: 'Senior Division (Class 11 - 12)', value: 'senior' }
  ];

  const filterCourses = (course: Course) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'foundation') {
      return course.id === 'pg' || course.id === 'primary';
    }
    if (activeCategory === 'secondary') {
      return course.id === 'middle' || course.id === 'secondary';
    }
    if (activeCategory === 'senior') {
      return course.id === 'science-11-12' || course.id === 'commerce-11-12';
    }
    return true;
  };

  const filteredCourses = COURSES_DATA.filter(filterCourses);

  return (
    <section id="courses" className="relative py-24 bg-slate-50 overflow-hidden border-b border-slate-100 text-left">
      {/* Decorative vector shape */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
            ADMISSION DIRECTORY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Comprehensive Scholastic Curriculums <br />
            <span className="font-serif italic font-semibold text-brand-gold">Optimized for CBSE, ICSE & Boards</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector with Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => {
            let Icon = Layers;
            if (cat.value === 'foundation') Icon = BookOpen;
            if (cat.value === 'secondary') Icon = Notebook;
            if (cat.value === 'senior') Icon = Award;

            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition cursor-pointer border ${
                  activeCategory === cat.value
                    ? 'bg-brand-blue text-white shadow-md font-bold border-brand-blue'
                    : 'bg-white hover:bg-slate-100 text-slate-650 border-slate-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Display Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                key={course.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                {/* Course Card Top Photo */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={COURSE_IMAGES[course.id] || COURSE_IMAGES['middle']} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill Floating */}
                  <span className="absolute top-4 left-4 rounded-lg bg-brand-blue/95 border border-brand-gold/30 text-white px-3 py-1 text-[9px] font-bold tracking-widest uppercase shadow-sm">
                    {course.level}
                  </span>

                  {/* Target Group floating at bottom right */}
                  <span className="absolute bottom-3 right-4 text-white text-[10px] font-bold font-mono tracking-wide uppercase px-2 py-0.5 rounded bg-slate-900/60">
                    {course.targetGroup}
                  </span>
                </div>

                {/* Content Area with Label and Grade description */}
                <div className="p-6 pb-0 flex-grow text-left">
                  <h3 className="font-display text-lg font-bold text-brand-blue tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-[#C69214] text-[11px] font-bold tracking-wide uppercase mt-1">
                    {course.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans mt-3">
                    {course.description}
                  </p>
                </div>

                {/* Features area */}
                <div className="p-6 pt-4 text-left">
                  <div className="h-px bg-slate-100 mb-4" />
                  <span className="text-[10px] font-extrabold tracking-widest font-display uppercase block text-brand-blue mb-3">
                    Academic Inclusions:
                  </span>
                  
                  <ul className="space-y-2.5">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-655">
                        <span className="flex h-4.5 w-4.5 mt-0.5 items-center justify-center rounded-full bg-amber-50 text-[#C69214] flex-shrink-0 border border-brand-gold/20">
                          <Check className="h-2.5 w-2.5 stroke-[3px]" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Inquire for this Class Button */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => onInquireCourse(course.title)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue text-xs font-bold uppercase tracking-wider text-slate-705 hover:text-white py-3.5 transition duration-200 cursor-pointer"
                  >
                    Inquire For Admission
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
