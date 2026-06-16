import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful visual tooltip trigger after 5 seconds of loading
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      {/* Auto tooltips banner */}
      {showTooltip && (
        <div className="pointer-events-auto flex items-center gap-2 bg-white text-slate-800 border border-slate-200 rounded-xl px-3.5 py-2 text-xs shadow-md max-w-[240px]">
          <span className="leading-normal font-sans text-left font-medium">
            Have questions? Chat with <strong className="text-brand-blue">Hemant Sir</strong> on WhatsApp!
          </span>
          <button 
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-800 flex-shrink-0 cursor-pointer"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Floating green WhatsApp circle */}
      <a
        href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%20would%20like%20to%20inquire%20about%20coaching%20admissions."
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-md transition duration-200 transform hover:-translate-y-0.5 group"
        aria-label="Direct Chat on WhatsApp"
      >
        {/* Radar pulse */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping group-hover:hidden" />
        
        {/* WhatsApp Vector Icon */}
        <MessageCircle className="h-7 w-7" />
        
        {/* Micro notification dot */}
        <span className="absolute top-0.5 right-0.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </a>
    </div>
  );
}
