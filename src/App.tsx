/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import About from './components/About';
import Courses from './components/Courses';
import CampusLife from './components/CampusLife';
import WhyChooseUs from './components/WhyChooseUs';
import VisualGallery from './components/VisualGallery';
import Achievements from './components/Achievements';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import AdmissionProcess from './components/AdmissionProcess';
import ReservationForm from './components/ReservationForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preSelectedClass, setPreSelectedClass] = useState('');

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCourseForInquiry = (courseTitle: string) => {
    setPreSelectedClass(courseTitle);
    handleScrollToSection('inquiry-form');
  };

  const handleResetPreSelection = () => {
    setPreSelectedClass('');
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-brand-gold-light selection:text-brand-blue antialiased overflow-x-hidden">
      {/* Premium subtle background glow patterns */}
      <div className="fixed inset-0 bg-white pointer-events-none -z-50" />

      {/* Navigation Headers bar */}
      <Navbar 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* Main Core site flow */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Core Pillars / trust indicators */}
        <TrustIndicators />

        {/* Professional About Us section with campus lounge photo */}
        <About />

        {/* Filterable Courses Catalog with custom visual covers */}
        <Courses onInquireCourse={handleSelectCourseForInquiry} />

        {/* Campus Life with image cards highlighting facility quality */}
        <CampusLife />

        {/* Why Parents Choose Us icon board */}
        <WhyChooseUs />

        {/* Bento grid Visual Gallery with zoomable lightbox classroom pictures */}
        <VisualGallery />

        {/* Success Metrics / Results Board with student topper photographs */}
        <Achievements />

        {/* Faculty board with certified educator portrait cards */}
        <Faculty />

        {/* Communities feedback (slider testimonials) with verified parents & students photo testimonials */}
        <Testimonials />

        {/* Four steps Timeline admissions */}
        <AdmissionProcess />

        {/* Live Seat reserving form */}
        <ReservationForm 
          preSelectedIndex={preSelectedClass} 
          onResetPreSelect={handleResetPreSelection} 
        />

        {/* Modern FAQs accordions */}
        <FAQ />

        {/* Geo Maps & Contacts details */}
        <Contact />
      </main>

      {/* Premium footer */}
      <Footer 
        onOpenAdmin={() => setIsAdminOpen(true)} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* CRM Leads Cabinet drawer */}
      <AdminPanel 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />

      {/* Quick floating WhatsApp widget */}
      <WhatsAppWidget />
    </div>
  );
}
