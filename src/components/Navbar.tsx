import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, Phone, MessageSquare, ShieldCheck, Download } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenAdmin: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenAdmin, onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Results', id: 'results' },
    { name: 'Faculty', id: 'faculty' },
    { name: 'Admissions', id: 'admissions-timeline' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleDownloadOfflineHTML = () => {
    import('../utils/htmlExporter').then(({ buildOfflineHTML }) => {
      const htmlContent = buildOfflineHTML();
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'hemant_coaching_classes_offline.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }).catch(err => {
      console.error('Error generating portable HTML file', err);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link checking
      const scrollPos = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <>
      <header 
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Header branding logo */}
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/50 rounded-lg"
            >
              <Logo showText={true} light={false} />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Desktop Navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wide uppercase transition duration-200 cursor-pointer focus:outline-none ${
                    activeSection === link.id 
                      ? 'text-brand-blue font-bold' 
                      : 'text-slate-600 hover:text-brand-blue'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {activeSection === link.id && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-2 bottom-0 h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Portable Offline App Export Button */}
              <button
                onClick={handleDownloadOfflineHTML}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-gold/30 bg-brand-gold-light/40 text-[10px] font-mono tracking-wider uppercase text-brand-gold-dark hover:text-white hover:bg-brand-blue hover:border-brand-blue font-bold transition cursor-pointer"
                title="Download portable single-file offline application"
              >
                <Download className="h-3.5 w-3.5" /> Download HTML App
              </button>

              {/* Subtle Admin Mode link for testers */}
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-[10px] font-mono tracking-wider uppercase text-slate-500 hover:text-brand-blue hover:bg-slate-100 font-bold transition cursor-pointer"
                title="Open admissions dashboard cabinet"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" /> Leads Hub
              </button>

              <button
                onClick={() => handleLinkClick('inquiry-form')}
                className="relative px-5 py-2.5 overflow-hidden rounded-lg group border border-brand-blue bg-brand-blue text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-white hover:text-brand-blue cursor-pointer focus:outline-none"
              >
                <span className="relative z-10 transition duration-300">Book Free Demo</span>
              </button>
            </div>

            {/* Mobile Navigation Toggler */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenAdmin}
                className="flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:text-brand-blue transition"
                title="Admissions Cabinet"
              >
                <ShieldCheck className="h-4.5 w-4.5" />
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:text-brand-blue transition focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (with slide-down transition) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-30 flex flex-col bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left py-2.5 px-4 rounded-lg text-sm font-semibold tracking-wider uppercase transition ${
                    activeSection === link.id 
                      ? 'bg-slate-50 text-brand-blue border-l-4 border-brand-gold font-bold' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
              <button
                onClick={handleDownloadOfflineHTML}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-brand-gold/40 bg-brand-gold-light/60 py-3 text-center text-xs font-bold uppercase tracking-wider text-brand-gold-dark hover:bg-brand-blue hover:text-white transition shadow-sm"
              >
                <Download className="h-4 w-4" /> Download Portable HTML
              </button>

              <button
                onClick={() => handleLinkClick('inquiry-form')}
                className="w-full rounded-lg bg-brand-blue py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-blue-light transition shadow-md"
              >
                Book Free Demo Class
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917985919264"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-gold" /> Call Now
                </a>
                <a
                  href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%20would%20like%20to%20inquire%2520about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-500" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
