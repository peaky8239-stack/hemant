import React from 'react';
import { 
  MapPin, Phone, Mail, MessageSquare, 
  Clock, ShieldCheck 
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full">
            CONNECT WITH US
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Visit Our Study Campus Or <br />
            <span className="font-serif italic font-semibold text-brand-gold">Book an Academic Counseling slot</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Quick Contacts Panel (Cols: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Address card */}
              <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50 shadow-xs">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold-light/40 text-brand-gold-dark border border-brand-gold-light flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1 text-left">
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider block uppercase font-bold">PHYSICAL STUDY CAMPUS</span>
                  <p className="text-sm font-extrabold text-brand-blue">Kalyanpur Center</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">Kalyanpur, Kanpur, Uttar Pradesh 208017, India</p>
                </div>
              </div>

              {/* Direct Call card */}
              <a 
                href="tel:+917985919264"
                className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-brand-blue transition shadow-xs group text-left"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue border border-slate-200 flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider block uppercase font-bold">PHONE ASSISTANCE</span>
                  <p className="text-sm font-extrabold text-brand-blue group-hover:text-brand-gold transition">+91 7985919264</p>
                  <p className="text-xs text-slate-600 leading-normal font-sans">Call immediately for batch slot checks (Hemant Kumar Sir)</p>
                </div>
              </a>

              {/* Direct Email Card */}
              <a 
                href="mailto:hem281294@gmail.com"
                className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-brand-blue transition shadow-xs group text-left"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-700 border border-slate-200 flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider block uppercase font-bold">DIGITAL EMAIL DESK</span>
                  <p className="text-sm font-extrabold text-brand-blue group-hover:text-brand-gold transition">hem281294@gmail.com</p>
                  <p className="text-xs text-slate-600 leading-normal font-sans">Drop direct mail queries with student grade requirements</p>
                </div>
              </a>

              {/* WhatsApp direct chat link */}
              <a 
                href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%20would%20like%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 p-5 rounded-2xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100/70 hover:border-emerald-400 transition shadow-xs group text-left"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 border border-emerald-200 flex-shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[10px] text-emerald-700 font-mono tracking-wider block uppercase font-bold">FAST WHATSAPP CHAT DESK</span>
                  <p className="text-sm font-extrabold text-emerald-950">Chat in Real-Time</p>
                  <p className="text-xs text-emerald-800 leading-normal font-sans font-medium">Click to talk to our help desk instantly</p>
                </div>
              </a>
            </div>

            {/* Timings card bottom */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-700 mt-6 font-medium">
              <span className="flex items-center gap-2">
                <Clock className="h-4.5 w-4.5 text-brand-gold" />
                <span>Office Hours: 08:00 AM - 08:30 PM (Daily)</span>
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-brand-blue font-bold tracking-wider">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> CCTV MONITORED CAMPUS
              </span>
            </div>

          </div>

          {/* Map Embed Frame (Cols: 7) */}
          <div className="lg:col-span-7 h-full min-h-[350px]">
            <div className="h-full w-full rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!1s0x399c386616db6149%3A0xeebdcbcfbe13c6b6!2sKalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208017!5e0!3m2!1sen!2sin!4v1718300000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '350px', background: '#f8fafc', borderRadius: '12px' }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hemant Coaching Classes, Kalyanpur, Kanpur Map Location"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
