import React from 'react';
import { 
  BookOpen, Mail, Phone, MapPin, 
  Linkedin, Facebook, Youtube, ShieldAlert,
  ArrowUp, Sparkles, LayoutDashboard
} from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onOpenAdmin, onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Mentors', id: 'about' },
    { name: 'Core Foundations', id: 'trust-pillars' },
    { name: 'Subject Courses', id: 'courses' },
    { name: 'Results Honor', id: 'results' },
    { name: 'Admissions Timeline', id: 'admissions-timeline' },
    { name: 'Frequently Asked Questions', id: 'faqs' }
  ];

  const coursesShortcuts = [
    { name: 'Playgroup & Nursery', id: 'courses' },
    { name: 'Class 1 to 5 Foundation', id: 'courses' },
    { name: 'Class 6 to 8 Middle Years', id: 'courses' },
    { name: 'Class 9 to 10 Secondary Board', id: 'courses' },
    { name: 'Class 11 & 12 Science PCM/PCB', id: 'courses' },
    { name: 'Class 11 & 12 Commerce Finance', id: 'courses' }
  ];

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-left text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand details (Cols: 4) */}
          <div className="lg:col-span-4 space-y-5">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-brand-gold-light/20">
                <BookOpen className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <span className="block font-display font-black leading-none tracking-tight text-white uppercase text-base">
                  HEMANT
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-[#C69214] font-bold uppercase mt-1">
                  Coaching Classes
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              Securing high scores and building scientific lit foundation parameters in Kanpur. Guided consistently by educational values, restricted 15-student buffers, and transparent CRM alerts.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-800 hover:text-white transition">
                <Facebook className="h-4 w-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-800 hover:text-white transition">
                <Linkedin className="h-4 w-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-800 hover:text-white transition">
                <Youtube className="h-4 w-4 text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick links (Cols: 2.5) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-extrabold text-[11px] tracking-widest text-white uppercase">
              INSTITUTE DESK
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses highlights (Cols: 2.5) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-extrabold text-[11px] tracking-widest text-white uppercase">
              ACADEMIC PATHS
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {coursesShortcuts.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts details info (Cols: 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-[11px] tracking-widest text-white uppercase">
              CAMPUS CONTACT
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li className="flex items-start gap-2 text-left text-slate-300">
                <MapPin className="h-4.5 w-4.5 text-[#C69214] flex-shrink-0 mt-0.5" />
                <span>Kalyanpur, Kanpur, Uttar Pradesh 208017, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4.5 w-4.5 text-[#C69214] flex-shrink-0" />
                <a href="tel:+917985919264" className="hover:text-white font-mono">{`+91 7985919264`}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4.5 w-4.5 text-[#C69214] flex-shrink-0" />
                <a href="mailto:hem281294@gmail.com" className="hover:text-white block truncate">{`hem281294@gmail.com`}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] border-t border-transparent text-slate-400">
          <div>
            <span>© {currentYear} Hemant Coaching Classes. All academic integrity parameters assured.</span>
          </div>

          {/* Active Leads Portal controller for developers and admins */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Leads drawer button */}
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white border border-dashed border-slate-700 hover:border-slate-500 rounded px-2.5 py-1.5 font-mono tracking-wide uppercase transition bg-slate-800 hover:bg-slate-750 cursor-pointer"
              title="Admin CRM Panel"
            >
              <LayoutDashboard className="h-3.5 w-3.5" /> Admissions CRM Admin
            </button>

            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
