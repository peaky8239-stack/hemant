import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Send, ShieldAlert, Sparkles, CheckCircle2, 
  HelpCircle, ClipboardList 
} from 'lucide-react';
import { Inquiry } from '../types';

interface ReservationFormProps {
  preSelectedIndex: string; // The class selected from course cards
  onResetPreSelect: () => void;
}

export default function ReservationForm({ preSelectedIndex, onResetPreSelect }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    studentClass: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselected class name from course card clicks
  useEffect(() => {
    if (preSelectedIndex) {
      setFormData(prev => ({
        ...prev,
        studentClass: preSelectedIndex
      }));
    }
  }, [preSelectedIndex]);

  const classesOptions = [
    'Playgroup & Nursery',
    'Class 1 to 5',
    'Class 6 to 8',
    'Class 9 & 10',
    'Class 11 & 12 Science (PCM)',
    'Class 11 & 12 Science (PCB)',
    'Class 11 & 12 Commerce'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent or Guardian name is required';
    if (!formData.studentClass) newErrors.studentClass = 'Please select academic grade';
    
    // Indian Phone format validation
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,13}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Optional email check
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email structure';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear targeted error
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate standard server latency
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'inq-' + Math.random().toString(36).substr(2, 9),
        studentName: formData.studentName,
        parentName: formData.parentName,
        studentClass: formData.studentClass,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date().toISOString(),
        status: 'New'
      };

      // Retrieve existing list, append new lead
      const raw = localStorage.getItem('hemant_inquiries');
      let currentList: Inquiry[] = [];
      if (raw) {
        try {
          currentList = JSON.parse(raw);
        } catch (err) {
          console.error(err);
        }
      }
      currentList.unshift(newInquiry);
      localStorage.setItem('hemant_inquiries', JSON.stringify(currentList));

      // Trigger custom listener sync event
      window.dispatchEvent(new Event('inquiry_submitted'));

      setIsSubmitting(false);
      setIsSuccess(true);
      onResetPreSelect(); // Reset active tracking state on parent
    }, 1000);
  };

  const handleResetForm = () => {
    setFormData({
      studentName: '',
      parentName: '',
      studentClass: '',
      phone: '',
      email: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="inquiry-form" className="relative py-24 bg-white overflow-hidden border-t border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full">
            OFFICIAL ENROLLMENT PORTAL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
            Reserve a 3-Day Free Trial Seat <br />
            <span className="font-serif italic font-semibold text-brand-gold">No Credit Cards or Advance Required</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Success vs Form layout */}
        <div className="premium-card rounded-2xl p-6 sm:p-10 border border-slate-200 bg-slate-50/50 shadow-md relative overflow-hidden">
          {/* Accent top banner bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-blue" />

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-brand-blue">
                  Seat Registration Pending
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                  Demo application submitted! Hemant Coaching administration will call you shortly to confirm your batch time tables.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetForm}
                  className="rounded-lg bg-brand-blue text-white px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand-blue-light transition cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Form title details inside frame */}
              <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-gold shadow-xs">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-blue text-base">Admission Inquiry & Demo Form</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Verify credentials securely. No fees requested for trail schedules.</p>
                </div>
              </div>

              {/* Form Input fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Student Name */}
                <div className="space-y-1.5">
                  <label htmlFor="studentName" className="block text-xs font-bold tracking-wider uppercase text-slate-700">
                    Student Full Name <span className="text-brand-gold-dark">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Priyansh Kumar"
                    className={`w-full bg-white border rounded-lg py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition ${
                      errors.studentName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                    }`}
                  />
                  {errors.studentName && (
                    <span className="text-[10px] font-bold text-red-600 tracking-wide flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> {errors.studentName}
                    </span>
                  )}
                </div>

                {/* Parent Name */}
                <div className="space-y-1.5">
                  <label htmlFor="parentName" className="block text-xs font-bold tracking-wider uppercase text-slate-700">
                    Parent or Guardian Name <span className="text-brand-gold-dark">*</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full bg-white border rounded-lg py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition ${
                      errors.parentName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                    }`}
                  />
                  {errors.parentName && (
                    <span className="text-[10px] font-bold text-red-600 tracking-wide flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> {errors.parentName}
                    </span>
                  )}
                </div>

                {/* Student Academic Class Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="studentClass" className="block text-xs font-bold tracking-wider uppercase text-slate-700">
                    Applying Grade / Class <span className="text-brand-gold-dark">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="studentClass"
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleInputChange}
                      className={`w-full appearance-none bg-white border rounded-lg py-3 px-4 text-sm text-slate-800 focus:outline-none transition pr-10 ${
                        errors.studentClass ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                      }`}
                    >
                      <option value="" disabled>-- Select Class Grade --</option>
                      {classesOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-white text-slate-800">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                  </div>
                  {errors.studentClass && (
                    <span className="text-[10px] font-bold text-red-600 tracking-wide flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> {errors.studentClass}
                    </span>
                  )}
                </div>

                {/* Phone Number input */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-slate-700">
                    Primary Mobile Phone <span className="text-brand-gold-dark">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 7985919264"
                    className={`w-full bg-white border rounded-lg py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition ${
                      errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] font-bold text-red-600 tracking-wide flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email Address (optional) */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-slate-700">
                    Email Address <span className="text-slate-400 font-mono text-[10px] font-semibold tracking-wide">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. parent@gmail.com"
                    className={`w-full bg-white border rounded-lg py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition ${
                      errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] font-bold text-red-600 tracking-wide flex items-center gap-1">
                      <ShieldAlert className="h-3 w-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Custom Message input box */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-slate-700">
                    Message / Special Requests <span className="text-slate-400 font-mono text-[10px] font-semibold tracking-wide">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Explain what specific challenges your child faces (e.g. calculus fundamentals, chemistry balancing, UP/CBSE boards anxiety) so our faculty can prepare."
                    className="w-full bg-white border border-slate-300 rounded-lg py-3 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                  />
                </div>

              </div>

              {/* Security confirmation footer */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
                <span className="flex items-center gap-2 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>SSL Private Data Policy Assured</span>
                </span>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-2 rounded-lg bg-brand-blue hover:bg-brand-blue-light py-3.5 px-6 font-bold text-white uppercase tracking-wider text-xs shadow-md transition duration-150 cursor-pointer disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <span>Allocating Seat...</span>
                  ) : (
                    <>
                      <span>Submit Enrollment Application</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
