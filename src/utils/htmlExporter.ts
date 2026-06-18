/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COURSES_DATA, STUDENT_TESTIMONIALS, PARENT_TESTIMONIALS, FACULTY_DATA, FAQ_DATA, STATS } from '../data';

// Map faculty/course IDs to corresponding portrait & landscape images
const IMAGES_RESOLVER = {
  'f1': 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=300&auto=format&fit=crop',
  'f2': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
  'f3': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
  'f4': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
  'pg': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop',
  'primary': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
  'middle': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  'secondary': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
  'science-11-12': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop',
  'commerce-11-12': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
  'classroom': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop',
  'lounge': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
  'Aniket Dwivedi': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
  'Priya Gupta': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  'Rohan Malhotra': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
  'Shreya Shukla': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  'Rajesh Verma': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  'Meenakshi Sharma': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  'Sardar Gurpreet Singh': 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop'
};

export function buildOfflineHTML(): string {
  // Convert courses data to HTML elements string representation
  const coursesCardsHTML = COURSES_DATA.map((course) => {
    const imgUrl = (IMAGES_RESOLVER as any)[course.id] || IMAGES_RESOLVER['middle'];
    const featuresList = course.features.map(f => `
      <li class="flex items-start gap-2 text-xs text-slate-600">
        <span class="flex h-4.5 w-4.5 mt-0.5 items-center justify-center rounded-full bg-amber-50 text-[#C69214] flex-shrink-0 border border-brand-gold/20">
          <i data-lucide="check" class="h-2.5 w-2.5 stroke-[3px]"></i>
        </span>
        <span class="leading-snug">${f}</span>
      </li>
    `).join('');

    // Determine category filter markers
    let categoryClass = '';
    if (course.id === 'pg' || course.id === 'primary') categoryClass = 'cat-foundation';
    else if (course.id === 'middle' || course.id === 'secondary') categoryClass = 'cat-secondary';
    else if (course.id === 'science-11-12' || course.id === 'commerce-11-12') categoryClass = 'cat-senior';

    return `
      <div class="course-card flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-md hover:shadow-xl group ${categoryClass}" data-title="${course.title}">
        <!-- Top Cover -->
        <div class="relative h-[320px] min-h-[320px] sm:min-h-0 sm:h-44 overflow-hidden bg-slate-100">
          <img src="${imgUrl}" alt="${course.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
          <span class="absolute top-4 left-4 rounded-lg bg-brand-blue/95 border border-brand-gold/30 text-white px-3 py-1 text-[9px] font-bold tracking-widest uppercase shadow-sm">
            ${course.level}
          </span>
          <span class="absolute bottom-3 right-4 text-white text-[10px] font-bold font-mono tracking-wide uppercase px-2 py-0.5 rounded bg-slate-900/60">
            ${course.targetGroup}
          </span>
        </div>

        <div class="p-6 pb-0 flex-grow">
          <h3 class="font-display text-lg font-bold text-brand-blue tracking-tight">${course.title}</h3>
          <p class="text-[#C69214] text-[11px] font-bold tracking-wide uppercase mt-1">${course.subtitle}</p>
          <p class="text-xs text-slate-600 leading-relaxed mt-3">${course.description}</p>
        </div>

        <!-- Inclusions -->
        <div class="p-6 pt-4">
          <div class="h-px bg-slate-100 mb-4"></div>
          <span class="text-[10px] font-extrabold tracking-widest uppercase block text-brand-blue mb-3">Academic Inclusions:</span>
          <ul class="space-y-2.5">${featuresList}</ul>
        </div>

        <!-- CTA button -->
        <div class="p-6 pt-0 mt-auto">
          <button onclick="selectCourseForInquiry('${course.title}')" class="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-white py-3.5 transition duration-200 cursor-pointer">
            Inquire For Admission
            <i data-lucide="arrow-right" class="h-4 w-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Convert parents testimonials
  const parentTestimonialsJSON = JSON.stringify(PARENT_TESTIMONIALS);
  const studentTestimonialsJSON = JSON.stringify(STUDENT_TESTIMONIALS);

  // Convert faculty data to HTML
  const facultyHTML = FACULTY_DATA.map((fac) => {
    const portrait = (IMAGES_RESOLVER as any)[fac.id] || IMAGES_RESOLVER['f1'];
    return `
      <div class="rounded-3xl p-6 sm:p-8 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#C69214]/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6">
        <div class="sm:w-36 flex-shrink-0 flex flex-col items-center">
          <div class="relative h-32 w-32 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md">
            <img src="${portrait}" alt="${fac.name}" class="h-full w-full object-cover" />
          </div>
          <div class="mt-3 inline-flex items-center gap-1 rounded bg-[#fae8b4] text-[#8c670d] px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest">
            <i data-lucide="star" class="h-2.5 w-2.5 fill-[#C69214] text-[#C69214]"></i> Verified
          </div>
        </div>

        <div class="flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div>
              <h3 class="font-display text-xl font-bold text-brand-blue leading-tight">${fac.name}</h3>
              <p class="text-xs font-semibold text-[#C69214] uppercase tracking-wider mt-0.5">${fac.role}</p>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span class="rounded bg-brand-blue/5 border border-brand-blue/10 text-brand-blue px-2.5 py-0.5 text-[10px] font-bold uppercase font-mono">
                ${fac.expertise}
              </span>
            </div>

            <div class="grid grid-cols-1 gap-2.5 pt-1.5 text-xs text-slate-700">
              <div class="flex gap-2 items-start">
                <i data-lucide="briefcase" class="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0"></i>
                <div>
                  <span class="font-medium text-slate-600 block text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Tenure</span>
                  <span class="font-bold text-slate-800">${fac.experience}</span>
                </div>
              </div>
              <div class="flex gap-2 items-start">
                <i data-lucide="graduation-cap" class="h-4 w-4 mt-0.5 text-[#C69214] flex-shrink-0"></i>
                <div>
                  <span class="font-medium text-slate-600 block text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Specialization</span>
                  <span class="font-bold text-slate-800">${fac.subject}</span>
                </div>
              </div>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed italic border-l-2 border-brand-gold pl-3 py-1 bg-white rounded-r">
              "${fac.bio}"
            </p>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Convert FAQ data to HTML
  const faqHTML = FAQ_DATA.map((faq, idx) => `
    <div class="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-slate-350 transition duration-150">
      <button onclick="toggleFaq(${idx})" class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-brand-blue focus:outline-none select-none">
        <span class="font-display font-bold text-sm sm:text-base leading-snug">${faq.question}</span>
        <span class="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-600 transition flex-shrink-0 faq-icon" id="faq-icon-${idx}">
          <i data-lucide="chevron-down" class="h-4 w-4"></i>
        </span>
      </button>
      <div id="faq-answer-${idx}" class="hidden border-t border-slate-100 px-6 py-5 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed">
        ${faq.answer}
      </div>
    </div>
  `).join('');

  // Assemble full single self-contained interactive template elements
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hemant Coaching Classes, Kalyanpur, Kanpur</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'brand-blue': '#002C54',
            'brand-blue-deep': '#001A33',
            'brand-gold': '#C69214',
            'brand-gold-light': '#fae8b4',
            'brand-gold-dark': '#8c670d',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Space Grotesk', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Smooth Scroll & Selection styles */
    html {
      scroll-behavior: smooth;
    }
    ::selection {
      background-color: #fae8b4;
      color: #002C54;
    }
    .faq-icon.active {
      transform: rotate(180deg);
      background-color: #fae8b4;
      color: #8c670d;
      border-color: rgba(198, 146, 20, 0.3);
    }
    .animate-fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>

  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-white text-slate-800 antialiased selection:bg-brand-gold-light selection:text-brand-blue">

  <!-- Header / Navigation -->
  <header id="main-navigation" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white border-b border-slate-100 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Logo -->
        <a href="#home" class="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none">
          <div class="relative flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue border border-brand-gold-light/40 shadow-sm">
            <i data-lucide="book-open" class="h-5 w-5 text-brand-gold-light"></i>
          </div>
          <div>
            <span class="block font-display font-extrabold leading-tight tracking-tight text-brand-blue text-sm sm:text-base">HEMANT</span>
            <span class="block text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase">COACHING CLASSES</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1.5">
          <a href="#about" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">About</a>
          <a href="#courses" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">Courses</a>
          <a href="#results" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">Results</a>
          <a href="#faculty" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">Faculty</a>
          <a href="#admissions-timeline" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">Timeline</a>
          <a href="#faqs" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">FAQs</a>
          <a href="#contact" class="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-650 hover:text-brand-blue transition">Contact</a>
        </nav>

        <!-- CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <button onclick="toggleAdminPanel(true)" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-[10px] font-mono tracking-wider uppercase text-slate-500 hover:text-brand-blue hover:bg-slate-100 font-bold transition">
            <i data-lucide="shield-check" class="h-3.5 w-3.5 text-brand-gold"></i> Leads Hub
          </button>
          <a href="#inquiry-form" class="relative px-5 py-2.5 overflow-hidden rounded-lg bg-brand-blue border border-brand-blue text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-brand-blue transition duration-200">
            Book Free Demo
          </a>
        </div>

        <!-- Mobile Toggler -->
        <div class="flex items-center gap-2 lg:hidden">
          <button onclick="toggleAdminPanel(true)" class="flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-655 hover:text-brand-blue transition">
            <i data-lucide="shield-check" class="h-4.5 w-4.5"></i>
          </button>
          <button onclick="toggleMobileMenu()" class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:text-brand-blue transition">
            <i data-lucide="menu" id="mob-menu-icon" class="h-5 w-5"></i>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobile-menu" class="hidden fixed inset-x-0 top-[70px] z-30 flex flex-col bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl lg:hidden">
    <div class="flex flex-col gap-2">
      <a href="#about" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">About</a>
      <a href="#courses" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">Courses</a>
      <a href="#results" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">Toppers</a>
      <a href="#faculty" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">Faculty</a>
      <a href="#admissions-timeline" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">Timeline</a>
      <a href="#faqs" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">FAQs</a>
      <a href="#contact" onclick="toggleMobileMenu()" class="w-full text-left py-2 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-650 hover:bg-slate-50">Contact</a>
    </div>
    <div class="border-t border-slate-100 pt-4 flex flex-col gap-3">
      <a href="#inquiry-form" onclick="toggleMobileMenu()" class="w-full rounded-lg bg-brand-blue py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-blue-light transition shadow-md">
        Book Free Demo Class
      </a>
      <div class="grid grid-cols-2 gap-2">
        <a href="tel:+917985919264" class="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition">
          <i data-lucide="phone" class="h-3.5 w-3.5 text-brand-gold"></i> Call Now
        </a>
        <a href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%2520would%2520like%2520to%2520inquire%2520about%2520admissions." target="_blank" class="flex items-center justify-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition">
          <i data-lucide="message-square" class="h-3.5 w-3.5 text-emerald-500"></i> WhatsApp
        </a>
      </div>
    </div>
  </div>


  <!-- Hero Section -->
  <section id="home" class="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 md:pt-36 md:pb-24 border-b border-slate-100 text-left">
    <div class="absolute inset-0 bg-[radial-gradient(#C69214_0.4px,transparent_0.4px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
    
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Hero Text -->
        <div class="lg:col-span-12 xl:col-span-7 flex flex-col space-y-6">
          <div class="inline-flex self-start items-center gap-2 rounded-full bg-[#fae8b4] border border-brand-gold/30 px-3 py-1 text-[11px] font-bold text-brand-blue-deep tracking-wider uppercase">
            <i data-lucide="graduation-cap" class="h-3.5 w-3.5 text-[#C69214]"></i>
            <span>Admissions Open for 2026 - 2027</span>
            <span class="h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-brand-blue">
            Kanpur’s Premier Coaching for <br />
            <span class="font-serif italic font-normal text-brand-gold">Academic Distinction</span>
          </h1>

          <p class="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Hemant Coaching Classes provides rigorous, concept-driven tuition for students from <strong class="text-slate-950 font-semibold text-brand-blue">Playgroup to Class 12th</strong>. 
            We emphasize personalized mentorship, disciplined test schedules, and a maximum of 15 students per batch to unlock your child’s highest board exam achievements.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-xl text-slate-700">
            <div class="flex items-start gap-2.5">
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-600"></i>
              </span>
              <span class="text-xs sm:text-sm font-medium"><strong>Guaranteed Attendance Tracker</strong> & updates to parents</span>
            </div>
            <div class="flex items-start gap-2.5">
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-150 text-emerald-800 flex-shrink-0 mt-0.5">
                <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-600"></i>
              </span>
              <span class="text-xs sm:text-sm font-medium"><strong>Max 15 Students</strong> per Batch for high focus</span>
            </div>
            <div class="flex items-start gap-2.5">
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-600"></i>
              </span>
              <span class="text-xs sm:text-sm font-medium"><strong>Daily Practice Problems</strong> & weekly assessment cycle</span>
            </div>
            <div class="flex items-start gap-2.5">
              <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0 mt-0.5">
                <i data-lucide="check" class="h-3.5 w-3.5 text-emerald-600"></i>
              </span>
              <span class="text-xs sm:text-sm font-medium"><strong>Kanpur's Highly Trusted team</strong> for Boards preparation</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <a href="#inquiry-form" class="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-blue-light transition duration-200">
              Book Free Demo Class
              <i data-lucide="arrow-right" class="h-4 w-4"></i>
            </a>

            <a href="tel:+917985919264" class="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-800 transition duration-200">
              <i data-lucide="phone" class="h-4 w-4 text-brand-gold"></i>
              Inquire on Call
            </a>

            <a href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%20would%20like%20to%20inquire%20about%20coaching%2520admissions." target="_blank" class="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold uppercase tracking-wider text-emerald-850 transition duration-200">
              <i data-lucide="message-square" class="h-4 w-4 text-emerald-600"></i>
              WhatsApp Chat
            </a>
          </div>

          <div class="flex items-center gap-2 text-xs text-slate-500 font-medium pt-2">
            <i data-lucide="map-pin" class="h-4 w-4 text-brand-gold"></i>
            <span>Campus Location: <strong>Kalyanpur, Kanpur</strong> (Convenient, safe & easily accessible center)</span>
          </div>
        </div>

        <!-- Hero Photo -->
        <div class="lg:col-span-12 xl:col-span-5 relative w-full">
          <div class="relative mx-auto max-w-lg lg:max-w-none">
            <div class="relative rounded-2xl overflow-hidden border-4 border-slate-100 bg-slate-100 shadow-xl">
              <img src="${IMAGES_RESOLVER['classroom']}" alt="Students inside modern classroom" class="w-full h-[600px] min-h-[600px] sm:min-h-0 sm:h-[400px] object-cover rounded-xl" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              <div class="absolute bottom-4 left-4 right-4 text-left p-1 text-white">
                <div class="flex items-center gap-1.5 mb-1 text-brand-gold text-xs font-bold uppercase tracking-widest font-mono">
                  <i data-lucide="star" class="h-3.5 w-3.5 fill-brand-gold text-brand-gold"></i> Real Classroom View
                </div>
                <p class="text-xs font-medium text-slate-150 leading-snug">
                  Spacious, clean, and modern study desks at our Kalyanpur training wing.
                </p>
              </div>
            </div>

            <!-- Review Widget -->
            <div class="absolute -bottom-6 -left-6 bg-white border border-slate-200 shadow-xl rounded-xl p-4 max-w-[260px] text-left hidden sm:block z-20">
              <div class="flex items-center gap-0.5 mb-1.5">
                <i data-lucide="star" class="h-3 w-3 fill-brand-gold text-brand-gold"></i>
                <i data-lucide="star" class="h-3 w-3 fill-brand-gold text-brand-gold"></i>
                <i data-lucide="star" class="h-3 w-3 fill-brand-gold text-brand-gold"></i>
                <i data-lucide="star" class="h-3 w-3 fill-brand-gold text-brand-gold"></i>
                <i data-lucide="star" class="h-3 w-3 fill-brand-gold text-brand-gold"></i>
              </div>
              <p class="text-xs italic text-slate-700 leading-relaxed">
                "Hemant Classes transformed my physics scores. Went from 70% to 96% in board exams!"
              </p>
              <div class="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100">
                <span class="block text-[10px] font-bold text-brand-blue uppercase tracking-wide">Aniket Dwivedi</span>
                <span class="bg-[#fae8b4] text-[#8c670d] text-[8px] font-bold px-1.5 py-0.5 rounded uppercase font-mono">98% Math</span>
              </div>
            </div>

            <!-- Trophy Badge -->
            <div class="absolute -top-5 -right-5 bg-brand-blue border border-brand-gold/30 shadow-xl rounded-xl p-4 text-center text-white hidden sm:block z-20 max-w-[140px]">
              <i data-lucide="award" class="h-6 w-6 text-brand-gold mx-auto mb-1.5"></i>
              <span class="block text-2xl font-black text-white font-display leading-none">100%</span>
              <span class="text-[9px] text-slate-300 block uppercase font-extrabold tracking-widest leading-none mt-1">Board Pass Rate</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- Trust Metrics Counter -->
  <section class="py-12 bg-brand-blue text-white relative border-b border-brand-gold/20 text-left">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y divide-white/10 md:divide-y-0 md:divide-x divide-white/10">
        ${STATS.map((stat, i) => `
          <div class="pt-6 md:pt-0 ${i > 0 ? 'md:pl-6' : ''} space-y-1">
            <span class="block text-4xl sm:text-5xl font-black text-brand-gold tracking-tight">${stat.value}</span>
            <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-105">${stat.label}</h4>
            <p class="text-[11px] sm:text-xs text-slate-300 leading-relaxed max-w-xs">${stat.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>


  <!-- About Us Section -->
  <section id="about" class="relative py-24 bg-white border-b border-slate-100 text-left">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold-light/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="space-y-3">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-brand-gold-light/40 px-3 py-1 rounded-full inline-block">
              OVER A DECADE OF TRUST
            </span>
            <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
              Empowering Kanpur’s Students <br />
              <span class="font-serif italic font-semibold text-brand-gold">With Quality Education</span>
            </h2>
          </div>

          <p class="text-base text-slate-650 leading-relaxed font-sans">
            Founded over a decade ago in Kalyanpur, Kanpur, <strong class="text-brand-blue font-bold text-brand-blue">Hemant Coaching Classes</strong> is committed to values-first academic training over commercial expansion. 
            We guide students across critical developmental stages—from fundamental early childhood coaching up to rigorous Class 12 physical sciences, mathematics, and commerce board levels.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 shadow-sm">
              <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-[#C69214]">
                <i data-lucide="compass" class="h-5 w-5"></i>
              </div>
              <h4 class="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">Our Vision</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                To provide Kanpur’s most disciplined and nurturing academic environment where every student develops concrete critical thinking.
              </p>
            </div>

            <div class="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3 shadow-sm">
              <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-brand-blue">
                <i data-lucide="target" class="h-5 w-5"></i>
              </div>
              <h4 class="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">Our Mission</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                To secure excellent parent satisfaction by delivering robust results while strictly limiting class size to ensure personal care.
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 space-y-6">
          <div class="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg">
            <img src="${IMAGES_RESOLVER['lounge']}" alt="Students lounge area" class="w-full h-56 sm:h-64 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            <div class="absolute bottom-4 left-5 right-5 text-left text-white">
              <span class="inline-block bg-brand-gold/90 text-white font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded tracking-widest mb-1.5">
                Premium Kalyanpur Campus
              </span>
              <h4 class="font-display font-bold text-base leading-tight">Quiet Self-Study & Mentorship Zone</h4>
              <p class="text-xs text-slate-200 leading-normal mt-1">
                Students have full access to study booths and resources outside their regular batch hours.
              </p>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-6">
            <h3 class="font-display text-sm font-extrabold text-brand-blue uppercase tracking-widest border-b border-slate-200 pb-3 flex items-center gap-2">
              <i data-lucide="sparkles" class="h-4.5 w-4.5 text-brand-gold"></i> OUR STUDENT-FIRST PEDAGOGY
            </h3>

            <div class="space-y-5">
              <div class="flex gap-4">
                <div class="flex h-10 w-10 mt-0.5 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#C69214] flex-shrink-0">
                  <i data-lucide="book-open-check" class="h-4.5 w-4.5"></i>
                </div>
                <div>
                  <h4 class="font-display text-xs font-bold uppercase tracking-wider text-brand-blue">Concept-First Pedagogy</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    We do not force blind memorization. By establishing the "why" and "how" behind mathematical equations and scientific laws, we build lifelong interest.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex h-10 w-10 mt-0.5 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#C69214] flex-shrink-0">
                  <i data-lucide="brain-circuit" class="h-4.5 w-4.5"></i>
                </div>
                <div>
                  <h4 class="font-display text-xs font-bold uppercase tracking-wider text-brand-blue">Spaced Assessments & Tracker</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    High-yield topics are re-evaluated every 30 days via customized diagnostics, preventing final exam score drops.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="flex h-10 w-10 mt-0.5 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#C69214] flex-shrink-0">
                  <i data-lucide="heart-handshake" class="h-4.5 w-4.5"></i>
                </div>
                <div>
                  <h4 class="font-display text-xs font-bold uppercase tracking-wider text-brand-blue">Doubt Help-Desk Support</h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    Dedicated daily individual hours. Students can confidently stay back after lectures to clear concepts interactively with professors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- Courses Directory Section -->
  <section id="courses" class="relative py-24 bg-slate-50 border-b border-slate-100 text-left">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
          ADMISSION DIRECTORY
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
          Comprehensive Scholastic Curriculums <br />
          <span class="font-serif italic font-semibold text-brand-gold">Optimized for CBSE, ICSE & Boards</span>
        </h2>
        <div class="h-0.5 w-16 bg-brand-gold mx-auto mt-4"></div>
      </div>

      <!-- Categories Filter Tab Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button onclick="filterCourses('all')" class="cat-btn flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition border bg-brand-blue text-white shadow-md border-brand-blue" id="btn-cat-all">
          <i data-lucide="layers" class="h-4 w-4"></i> All Milestones
        </button>
        <button onclick="filterCourses('foundation')" class="cat-btn flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition border bg-white hover:bg-slate-100 text-slate-700 border-slate-200" id="btn-cat-foundation">
          <i data-lucide="book-open" class="h-4 w-4"></i> Foundations (PG - Class 5)
        </button>
        <button onclick="filterCourses('secondary')" class="cat-btn flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition border bg-white hover:bg-slate-100 text-slate-700 border-slate-200" id="btn-cat-secondary">
          <i data-lucide="notebook" class="h-4 w-4"></i> Middle & Secondary (6 - 10)
        </button>
        <button onclick="filterCourses('senior')" class="cat-btn flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition border bg-white hover:bg-slate-100 text-slate-700 border-slate-200" id="btn-cat-senior">
          <i data-lucide="award" class="h-4 w-4"></i> Senior Division (11 - 12)
        </button>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-grid-container">
        ${coursesCardsHTML}
      </div>

    </div>
  </section>


  <!-- Campus Life discovery -->
  <section id="campus-life" class="relative py-24 bg-white border-b border-slate-100 text-left">
    <div class="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(#C69214_0.4px,transparent_0.4px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-[#002C54] bg-blue-50 px-3 py-1 rounded-full inline-block">
          CAMPUS DISCOVERY
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
          Campus Life at Hemant Coaching <br />
          <span class="font-serif italic font-semibold text-brand-gold">Nurturing Intellect and Integrity Inside Kanpur</span>
        </h2>
        <div class="h-0.5 w-16 bg-brand-gold mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card 1 -->
        <div class="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-350">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            <span class="absolute top-3 left-3 bg-[#fae8b4] text-[#8c670d] text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow-xs">High Focus Space</span>
            <span class="absolute bottom-3 left-4 h-9 w-9 rounded-full bg-brand-blue border border-brand-gold/30 text-white flex items-center justify-center shadow-md">
              <i data-lucide="monitor" class="h-4.5 w-4.5"></i>
            </span>
          </div>
          <div class="p-5 flex-grow">
            <span class="text-[10px] text-slate-400 block font-mono font-bold uppercase tracking-widest mb-1">Comfortable Academic Chambers</span>
            <h3 class="font-display font-bold text-brand-blue text-base">Smart AC Classrooms</h3>
            <p class="text-xs text-slate-600 leading-relaxed mt-2.5">
              Our air-conditioned classrooms are designed with wide study desks and whiteboards to maximize optical ergonomics, high focus, and physical safety.
            </p>
          </div>
          <div class="border-t border-slate-100 px-5 py-3.5 bg-slate-50 flex items-center justify-between text-[10px] font-mono font-bold text-[#C69214] uppercase">
            <span>Admissions Open</span>
            <span>Kalyanpur Wing</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-350">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="${IMAGES_RESOLVER['science-11-12']}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            <span class="absolute top-3 left-3 bg-[#fae8b4] text-[#8c670d] text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow-xs">Experimental Learning</span>
            <span class="absolute bottom-3 left-4 h-9 w-9 rounded-full bg-brand-blue border border-brand-gold/30 text-white flex items-center justify-center shadow-md">
              <i data-lucide="flask-conical" class="h-4.5 w-4.5"></i>
            </span>
          </div>
          <div class="p-5 flex-grow">
            <span class="text-[10px] text-slate-400 block font-mono font-bold uppercase tracking-widest mb-1">Physics & Chemistry Visualization</span>
            <h3 class="font-display font-bold text-brand-blue text-base">Interactive Subject Labs</h3>
            <p class="text-xs text-slate-600 leading-relaxed mt-2.5">
              Scientific concepts are illustrated under expert guidance with chemical models, electrical boards, and mini physical lab demonstrations.
            </p>
          </div>
          <div class="border-t border-slate-100 px-5 py-3.5 bg-slate-50 flex items-center justify-between text-[10px] font-mono font-bold text-[#C69214] uppercase">
            <span>Admissions Open</span>
            <span>Kalyanpur Wing</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-350">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="${IMAGES_RESOLVER['lounge']}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            <span class="absolute top-3 left-3 bg-[#fae8b4] text-[#8c670d] text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow-xs">Dedicated Help Desk</span>
            <span class="absolute bottom-3 left-4 h-9 w-9 rounded-full bg-brand-blue border border-brand-gold/30 text-white flex items-center justify-center shadow-md">
              <i data-lucide="book-open" class="h-4.5 w-4.5"></i>
            </span>
          </div>
          <div class="p-5 flex-grow">
            <span class="text-[10px] text-slate-400 block font-mono font-bold uppercase tracking-widest mb-1">Air-Conditioned Study Lounge</span>
            <h3 class="font-display font-bold text-brand-blue text-base">Quiet Mentoring Pods</h3>
            <p class="text-xs text-slate-600 leading-relaxed mt-2.5">
              Students have daily open access to peaceful study booths, reference textbooks, and custom assessment files to resolve board mock papers.
            </p>
          </div>
          <div class="border-t border-slate-100 px-5 py-3.5 bg-slate-50 flex items-center justify-between text-[10px] font-mono font-bold text-[#C69214] uppercase">
            <span>Admissions Open</span>
            <span>Kalyanpur Wing</span>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-350">
          <div class="relative h-44 overflow-hidden bg-slate-100">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            <span class="absolute top-3 left-3 bg-[#fae8b4] text-[#8c670d] text-[8px] font-mono font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow-xs">Individual Care Limits</span>
            <span class="absolute bottom-3 left-4 h-9 w-9 rounded-full bg-brand-blue border border-brand-gold/30 text-white flex items-center justify-center shadow-md">
              <i data-lucide="users" class="h-4.5 w-4.5"></i>
            </span>
          </div>
          <div class="p-5 flex-grow">
            <span class="text-[10px] text-slate-400 block font-mono font-bold uppercase tracking-widest mb-1">Collaborative Bench Circles</span>
            <h3 class="font-display font-bold text-brand-blue text-base">15-Student Batches</h3>
            <p class="text-xs text-slate-600 leading-relaxed mt-2.5">
              By limiting seating directories strictly to 15, we foster interactive inquiry, immediate individual doubt rectification, and friendly peer environment.
            </p>
          </div>
          <div class="border-t border-slate-100 px-5 py-3.5 bg-slate-50 flex items-center justify-between text-[10px] font-mono font-bold text-[#C69214] uppercase">
            <span>Admissions Open</span>
            <span>Kalyanpur Wing</span>
          </div>
        </div>
      </div>

    </div>
  </section>


  <!-- Achievements/Merit List Topper Section -->
  <section id="results" class="relative py-24 bg-white border-b border-slate-100 text-left">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Stats description -->
        <div class="lg:col-span-5 space-y-6">
          <div class="space-y-3">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
              UNMATCHED ACADEMIC STANDARDS
            </span>
            <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
              Authentic Success Stories <br />
              <span class="font-serif italic font-semibold text-brand-gold">Year After Year</span>
            </h2>
            <p class="text-base text-slate-600 max-w-lg leading-relaxed">
              By maintaining a highly focused student ratio, our concept-first methodology ensures students achieve top rankings in board assessments across Kanpur.
            </p>
            <div class="h-0.5 w-16 bg-brand-gold mt-4"></div>
          </div>

          <!-- Mini grids -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1">
              <span class="block text-3xl font-black text-brand-blue leading-none">100%</span>
              <span class="block text-xs font-bold text-slate-800 uppercase tracking-wide">Board Pass Rate</span>
              <span class="block text-[11px] text-slate-500 leading-normal">Consistent perfect pass rate record for classes 10 & 12.</span>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1">
              <span class="block text-3xl font-black text-brand-blue leading-none">94.2%</span>
              <span class="block text-xs font-bold text-slate-800 uppercase tracking-wide">Class Distinction Avg</span>
              <span class="block text-[11px] text-slate-500 leading-normal">Over half of our students obtain 90%+ aggregate marks.</span>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1">
              <span class="block text-3xl font-black text-brand-blue leading-none">42+</span>
              <span class="block text-xs font-bold text-slate-800 uppercase tracking-wide">100/100 Scores</span>
              <span class="block text-[11px] text-slate-500 leading-normal">Students achieving flawless maximum marks in board exams.</span>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-1">
              <span class="block text-3xl font-black text-brand-blue leading-none">120+</span>
              <span class="block text-xs font-bold text-slate-800 uppercase tracking-wide">District Toppers</span>
              <span class="block text-[11px] text-slate-500 leading-normal">Graduates listed in state & district top merit folders.</span>
            </div>
          </div>
        </div>

        <!-- Right Topper Card list -->
        <div class="lg:col-span-7">
          <div class="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div class="absolute -top-3.5 left-6 rounded-full bg-brand-blue border border-brand-gold-light/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-1">
              <i data-lucide="star" class="h-3.5 w-3.5 fill-brand-gold text-brand-gold"></i> BOARD EXAM TOPPERS
            </div>

            <div class="border-b border-slate-200 pb-4 pt-1">
              <h3 class="font-display text-lg font-bold text-brand-blue">Kanpur Board Distinction Group</h3>
              <p class="text-xs text-slate-500 font-medium">Our latest batch topper scorecards and district achievements</p>
            </div>

            <!-- Student grids -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Topper 1 -->
              <div class="flex flex-col rounded-2xl border border-slate-200 bg-white hover:border-[#C69214]/55 hover:shadow-md transition duration-300 overflow-hidden">
                <div class="relative h-[350px] min-h-[350px] sm:min-h-0 sm:h-40 overflow-hidden bg-slate-100">
                  <img src="${IMAGES_RESOLVER['Aniket Dwivedi']}" class="w-full h-full object-cover object-top" />
                  <span class="absolute top-2.5 right-2.5 rounded-lg bg-brand-blue border border-brand-gold/30 text-white px-2.5 py-1 text-[11px] font-extrabold">98% in Maths</span>
                  <span class="absolute bottom-2 left-2.5 rounded bg-slate-900/70 text-white text-[9px] font-mono px-2 py-0.5 uppercase">CBSE Class XII</span>
                </div>
                <div class="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 class="font-display font-bold text-brand-blue text-sm">Aniket Dwivedi</h4>
                    <span class="block text-[10px] text-[#C69214] font-mono font-bold uppercase mt-1">Kanpur District Rank 2</span>
                  </div>
                  <div class="flex items-center gap-0.5 mt-3 pt-2.5 border-t border-slate-100">
                    <span class="text-[#C69214] text-[9px] font-bold uppercase">★★★★★ Elite Alumni</span>
                  </div>
                </div>
              </div>

              <!-- Topper 2 -->
              <div class="flex flex-col rounded-2xl border border-slate-200 bg-white hover:border-[#C69214]/55 hover:shadow-md transition duration-300 overflow-hidden">
                <div class="relative h-[350px] min-h-[350px] sm:min-h-0 sm:h-40 overflow-hidden bg-slate-100">
                  <img src="${IMAGES_RESOLVER['Priya Gupta']}" class="w-full h-full object-cover object-top" />
                  <span class="absolute top-2.5 right-2.5 rounded-lg bg-brand-blue border border-brand-gold/30 text-white px-2.5 py-1 text-[11px] font-extrabold">96.4% in Science</span>
                  <span class="absolute bottom-2 left-2.5 rounded bg-slate-900/70 text-white text-[9px] font-mono px-2 py-0.5 uppercase">CBSE Class X</span>
                </div>
                <div class="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 class="font-display font-bold text-brand-blue text-sm">Priya Gupta</h4>
                    <span class="block text-[10px] text-[#C69214] font-mono font-bold uppercase mt-1">Double Distinction</span>
                  </div>
                  <div class="flex items-center gap-0.5 mt-3 pt-2.5 border-t border-slate-100">
                    <span class="text-[#C69214] text-[9px] font-bold uppercase">★★★★★ Elite Alumni</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-2 text-center text-[10px] italic text-slate-500 font-medium">
              *All academic scorecards are fully validated against authentic Central/State Boards databases.
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- Mentors Faculty Card board -->
  <section id="faculty" class="relative py-24 bg-white border-b border-slate-100 text-left">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
          OUR CHAMPION MENTORS
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
          Meet Our Exceptional Educators <br />
          <span class="font-serif italic font-semibold text-brand-gold">Guiding Your Child’s Learning Odyssey</span>
        </h2>
        <div class="h-0.5 w-16 bg-brand-gold mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        ${facultyHTML}
      </div>

    </div>
  </section>


  <!-- Communities Verified Testimonial slider -->
  <section id="testimonials" class="relative py-24 bg-white border-b border-slate-100 text-left">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">
          COMMUNITY TRUST INDEX
        </span>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight">
          Parents Trust Us & Students <br />
          <span class="font-serif italic font-semibold text-brand-gold">Acknowledge Real Mentoring</span>
        </h2>
        <div class="h-0.5 w-16 bg-brand-gold mx-auto mt-4"></div>
      </div>

      <!-- Tab Buttons Slider -->
      <div class="flex justify-center mb-10">
        <div class="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200">
          <button onclick="changeTestimonialTab('parents')" id="tab-test-parents" class="flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 bg-brand-blue text-white font-bold">
            <i data-lucide="heart" class="h-3.5 w-3.5"></i> Parents Trust Us
          </button>
          <button onclick="changeTestimonialTab('students')" id="tab-test-students" class="flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition duration-200 text-slate-600 hover:text-slate-900">
            <i data-lucide="message-square" class="h-3.5 w-3.5"></i> Student Achievements
          </button>
        </div>
      </div>

      <!-- Active Slider Display -->
      <div class="relative">
        <div id="testimonial-card-element" class="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-slate-50/50 shadow-md flex flex-col md:flex-row gap-8 items-start md:items-center justify-between transition-opacity duration-200">
          <!-- Populated dynamically via JS -->
        </div>

        <!-- Slider nav controls -->
        <div class="flex justify-end gap-2.5 mt-6">
          <button onclick="prevTestimonial()" class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue hover:text-white text-slate-700 transition cursor-pointer shadow-xs">
            <i data-lucide="arrow-left" class="h-4.5 w-4.5"></i>
          </button>
          <button onclick="nextTestimonial()" class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 hover:bg-brand-blue border border-slate-200 hover:border-brand-blue hover:text-white text-slate-700 transition cursor-pointer shadow-xs">
            <i data-lucide="arrow-right" class="h-4.5 w-4.5"></i>
          </button>
        </div>
      </div>

    </div>
  </section>


  <!-- Timeline Admissions milestones -->
  <section id="admissions-timeline" class="py-24 bg-slate-50 border-b border-slate-100 text-left">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">ADMISSIONS WALKTHROUGH</span>
        <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight leading-tight mt-3">Simple 4-Step Registration</h2>
        <div class="h-0.5 w-16 bg-brand-gold mx-auto mt-4"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <span class="text-4xl font-extrabold text-[#C69214] font-mono mb-4 block leading-none">01</span>
          <h4 class="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">Inquiry Webform</h4>
          <p class="text-xs text-slate-600 mt-2.5 leading-relaxed">
            Fill the inquiry form below, mentioning your target child's level or grade. We respond in under 2 hours.
          </p>
        </div>
        <!-- Step 2 -->
        <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <span class="text-4xl font-extrabold text-brand-blue mb-4 block leading-none">02</span>
          <h4 class="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">Diagnostic Consultation</h4>
          <p class="text-xs text-slate-600 mt-2.5 leading-relaxed">
            Parents visit our physical campus with the child. We host a friendly diagnostic interaction to gauge skill levels.
          </p>
        </div>
        <!-- Step 3 -->
        <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <span class="text-4xl font-extrabold text-[#C69214] font-mono mb-4 block leading-none">03</span>
          <h4 class="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">Trial Demo Session</h4>
          <p class="text-xs text-slate-600 mt-2.5 leading-relaxed">
            Student attends multiple free demo concept sessions to experience the premium, interactive class framework.
          </p>
        </div>
        <!-- Step 4 -->
        <div class="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <span class="text-4xl font-extrabold text-brand-blue mb-4 block leading-none">04</span>
          <h4 class="font-display font-bold text-brand-blue text-sm uppercase tracking-wider">Reserved Batch Entry</h4>
          <p class="text-xs text-slate-600 mt-2.5 leading-relaxed">
            Secure admission checks, customized workbook allocations, parent-tracker setups, and start regular training!
          </p>
        </div>
      </div>

    </div>
  </section>


  <!-- Admission Inquiry / Seat reserving form -->
  <section id="inquiry-form" class="relative py-24 bg-white border-b border-slate-100 text-left">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-12 relative overflow-hidden shadow-sm">
        
        <div class="max-w-xl mx-auto text-center mb-10">
          <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">BOOK SECURE TRIAL</span>
          <h2 class="font-display text-2xl sm:text-3xl font-extrabold text-brand-blue mt-3">Reserve Your Free Demo Class Today</h2>
          <p class="text-xs text-slate-500 mt-2">Limited to 15 students per batch. Safe offline Kalyanpur wing.</p>
        </div>

        <form id="offline-form" onsubmit="handleInquirySubmit(event)" class="space-y-5 max-w-2xl mx-auto">
          <div class="text-emerald-700 bg-emerald-50 border border-emerald-250 p-4 rounded-xl text-xs font-bold hidden mb-4 leading-relaxed" id="submit-success-banner">
            <i data-lucide="check-circle" class="inline h-4 w-4 mr-1 text-emerald-600"></i> Inquiry registered successfully! Hemant Classes Kalyanpur team will call you within 2 hours.
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5" for="form-student">Student's Full Name *</label>
              <input type="text" id="form-student" required class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:outline-none" />
            </div>
            <div>
              <label class="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5" for="form-parent">Parent / Guardian Name *</label>
              <input type="text" id="form-parent" required class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5" for="form-class">Class / Standard *</label>
              <select id="form-class" required class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:outline-none">
                <option value="">-- Choose Class --</option>
                <option value="Playgroup - Nursery">Playgroup, Nursery, KG</option>
                <option value="Class 1st - 5th">Class 1st to 5th Grade</option>
                <option value="Class 6th - 8th">Class 6th to 8th Grade</option>
                <option value="Class 9th - 10th">Class 9th & 10th Board</option>
                <option value="Class 11th - 12th Science">Class 11th & 12th Science PCM / PCB</option>
                <option value="Class 11th - 12th Commerce">Class 11th & 12th Commerce</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5" for="form-phone">Active Telephone Number *</label>
              <input type="tel" id="form-phone" required placeholder="e.g. 7985919264" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:outline-none" />
            </div>
          </div>

          <div>
            <label class="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5" for="form-email">Email Address (Optional)</label>
            <input type="email" id="form-email" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand-blue focus:outline-none" />
          </div>

          <div>
            <label class="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-1.5" for="form-message">Describe Student Goals or Doubts *</label>
            <textarea id="form-message" required rows="3" placeholder="Explain subjects requiring guidance..." class="w-full bg-white border border-slate-200 rounded-xl px-4.5 py-3 text-sm focus:border-brand-blue focus:outline-none"></textarea>
          </div>

          <div class="pt-2 text-center">
            <button type="submit" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-light text-xs font-bold uppercase tracking-wider text-white transition transform active:scale-95 shadow-md cursor-pointer">
              Submit Secure Trial Registration
            </button>
          </div>
        </form>

      </div>
    </div>
  </section>


  <!-- FAQs Accordions -->
  <section id="faqs" class="py-24 bg-slate-50 border-b border-slate-100 text-left">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full inline-block">ACADEMIC FAQS</span>
        <h2 class="font-display text-4xl font-extrabold text-brand-blue">Got General Questions?</h2>
        <div class="h-0.5 w-16 bg-brand-gold mx-auto mt-4"></div>
      </div>

      <div class="space-y-4">
        ${faqHTML}
      </div>

    </div>
  </section>


  <!-- Contact Coordinates -->
  <section id="contact" class="py-24 bg-white border-b border-slate-100 text-left">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-5 space-y-6">
          <div class="space-y-3">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C69214] bg-[#fae8b4] px-3 py-1 rounded-full inline-block">VISIT KALYANPUR SITE</span>
            <h2 class="font-display text-3xl font-extrabold text-brand-blue">Talk To Us Directly</h2>
            <p class="text-sm text-slate-500 leading-normal">Our team remains online to answer board prep evaluations instantly.</p>
          </div>

          <div class="space-y-4 pt-2">
            <div class="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-brand-blue shadow-sm flex-shrink-0">
                <i data-lucide="map-pin" class="h-5 w-5"></i>
              </span>
              <div>
                <span class="block text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1">Campus Center</span>
                <span class="font-bold text-slate-800 text-sm">Kalyanpur Main Road, Kalyanpur, Kanpur, Uttar Pradesh 208017</span>
              </div>
            </div>

            <div class="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#C69214] shadow-sm flex-shrink-0">
                <i data-lucide="phone" class="h-5 w-5"></i>
              </span>
              <div>
                <span class="block text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1">Mobile Admission lines</span>
                <a href="tel:+917985919264" class="font-bold text-[#C69214] text-sm hover:underline font-mono">+91 79859 19264</a>
              </div>
            </div>

            <div class="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
              <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-emerald-500 shadow-sm flex-shrink-0">
                <i data-lucide="message-square" class="h-5 w-5"></i>
              </span>
              <div>
                <span class="block text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-1">WhatsApp CRM Desk</span>
                <a href="https://wa.me/917985919264" class="font-bold text-emerald-700 text-sm hover:underline font-mono">+91 79859 19264</a>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="rounded-3xl border border-slate-200 overflow-hidden shadow-md bg-slate-100 aspect-video md:h-96">
            <!-- Simulated high contrast geographic layout -->
            <div class="h-full w-full bg-slate-100 relative flex flex-col items-center justify-center text-center p-6 bg-cover" style="background-image: radial-gradient(#C69214 0.6px, transparent 0.6px); background-size: 20px 20px;">
              <div class="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl max-w-sm">
                <i data-lucide="map-pin" class="h-8 w-8 text-[#C69214] mx-auto mb-3"></i>
                <h4 class="font-display font-bold text-brand-blue text-base">Hemant Classes Kalyanpur Center</h4>
                <p class="text-xs text-slate-600 mt-2">Situated precisely near Kalyanpur Main Road, extremely safe, visible, and convenient transit links.</p>
                <a href="https://maps.google.com/?q=Kalyanpur+Kanpur" target="_blank" class="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-blue text-[10px] font-bold uppercase tracking-wider text-white hover:bg-brand-blue-light transition">
                  Open Google Maps <i data-lucide="arrow-up-right" class="h-3 w-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-16 text-left border-t-2 border-brand-gold">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 divide-y divide-slate-800 space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue border border-brand-gold/30">
              <i data-lucide="book-open" class="h-4 w-4 text-brand-gold-light"></i>
            </div>
            <div>
              <span class="block font-display font-extrabold leading-tight tracking-tight text-white text-sm">HEMANT</span>
              <span class="block text-[8px] font-mono font-bold tracking-widest text-[#C69214] uppercase">COACHING CLASSES</span>
            </div>
          </div>
          <p class="text-xs text-slate-500 max-w-xs leading-relaxed">
            Nurturing academic excellence, personal values, and concept-first derivations for Playgroup to Class 12 in Kalyanpur, Kanpur.
          </p>
        </div>

        <div class="space-y-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-widest font-display">Admissions Quick</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="#courses" class="hover:text-white transition">Early Childhood Foundations</a></li>
            <li><a href="#courses" class="hover:text-white transition">Class 6th to 8th Milestones</a></li>
            <li><a href="#courses" class="hover:text-white transition">Secondary Class 9-10 Boards</a></li>
            <li><a href="#courses" class="hover:text-white transition">Senior Secondary Class 11-12</a></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-widest font-display">Support & Leads</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="#about" class="hover:text-white transition">About Pedagogy</a></li>
            <li><a href="#results" class="hover:text-white transition">Topper Honorroll</a></li>
            <li><a href="#faqs" class="hover:text-white transition">FAQs & Blueprints</a></li>
            <li><button onclick="toggleAdminPanel(true)" class="hover:text-white border border-slate-700/60 rounded px-2 py-0.5 text-[9px] bg-slate-800 transition">Leads Hub CRM Portal</button></li>
          </ul>
        </div>

        <div class="space-y-3">
          <h4 class="text-white text-xs font-bold uppercase tracking-widest font-display">Contact Us</h4>
          <ul class="space-y-2 text-xs leading-relaxed">
            <li>Center Campus Location: Kalyanpur, Kanpur, Uttar Pradesh 208017</li>
            <li>Tel: <a href="tel:+917985919264" class="text-white hover:underline font-mono">+91 79859 19264</a></li>
            <li>WhatsApp: <a href="https://wa.me/917985919264" class="text-emerald-500 hover:underline font-mono">Chat Desk</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Hemant Coaching Classes Kalyanpur. All Rights Reserved.</p>
        <div class="flex items-center gap-4">
          <span class="text-slate-600 font-mono text-[10px]">Portable HTML Edition: Offline Enabled</span>
        </div>
      </div>

    </div>
  </footer>


  <!-- Leads Hub CRM Overlay Modal -->
  <div id="admin-panel" class="hidden fixed inset-0 z-50 flex items-center justify-end bg-slate-950/40 backdrop-blur-xs">
    <div class="flex h-full w-full flex-col bg-white border-l border-slate-200 shadow-2xl md:max-w-3xl lg:max-w-4xl animate-fade-in">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-slate-200 px-6 py-5 bg-slate-50">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue text-[#fae8b4]">
            <i data-lucide="users" class="h-5 w-5"></i>
          </div>
          <div>
            <h3 class="font-display font-bold text-brand-blue text-sm sm:text-base text-left">Admissions CRM Database (Offline Mode)</h3>
            <p class="text-xs text-slate-500 font-medium">Verify class inquiries and print CSV files from local browser state</p>
          </div>
        </div>
        <button onclick="toggleAdminPanel(false)" class="rounded-lg p-2 text-slate-400 hover:bg-slate-150 transition cursor-pointer">
          <i data-lucide="x" class="h-5 w-5"></i>
        </button>
      </div>

      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="relative flex-1 max-w-sm">
            <i data-lucide="search" class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"></i>
            <input type="text" id="crm-search" oninput="renderInquiriesTable()" placeholder="Search student name..." class="w-full bg-slate-100 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-850" />
          </div>
          <div class="flex items-center gap-2">
            <button onclick="exportInquiriesCsv()" class="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50">
              <i data-lucide="download" class="h-3.5 w-3.5"></i> Export CSV
            </button>
            <button onclick="clearAllInquiries()" class="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-bold text-red-700 hover:bg-red-100">
              <i data-lucide="trash-2" class="h-3.5 w-3.5"></i> Delete All
            </button>
          </div>
        </div>

        <div class="space-y-4" id="crm-leads-list">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- CRM Footer -->
      <div class="border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>Offline Secure LocalStorage Encrypted</span>
        <span>Hemant Classes CRM System</span>
      </div>

    </div>
  </div>


  <!-- Floating WhatsApp widget -->
  <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
    <div id="wa-tooltip" class="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 max-w-[270px] animate-fade-in relative text-left">
      <button onclick="dismissWaTooltip()" class="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-700">
        <i data-lucide="x" class="h-3.5 w-3.5"></i>
      </button>
      <div class="flex items-center gap-2 text-xs font-bold text-brand-blue mb-1">
        <span class="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span> Hemant Kumar Online
      </div>
      <p class="text-xs text-slate-650 leading-relaxed">
        Let's schedule our free trial session for your child right now! Direct admissions line.
      </p>
    </div>
    
    <a href="https://wa.me/917985919264?text=Hello%20Hemant%20Coaching%20Classes,%20I%20would%2520like%2520to%2520book%2520a%2520demo%2520trial." target="_blank" class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 border-2 border-emerald-350 shadow-xl text-white hover:bg-emerald-600 hover:scale-105 transition duration-200">
      <i data-lucide="message-square" class="h-7 w-7"></i>
    </a>
  </div>


  <!-- Interactive JavaScript mechanics -->
  <script>
    // Inquiries database helper
    function getInquiries() {
      const raw = localStorage.getItem('hemant_inquiries');
      if (!raw) return [];
      try {
        return JSON.parse(raw);
      } catch (e) {
        return [];
      }
    }

    // Write interactive submission
    function handleInquirySubmit(e) {
      e.preventDefault();
      
      const studentName = document.getElementById('form-student').value;
      const parentName = document.getElementById('form-parent').value;
      const studentClass = document.getElementById('form-class').value;
      const phone = document.getElementById('form-phone').value;
      const email = document.getElementById('form-email').value;
      const message = document.getElementById('form-message').value;

      const newInquiry = {
        id: 'inq-' + Date.now(),
        studentName,
        parentName,
        studentClass,
        phone,
        email,
        message,
        status: 'New',
        submittedAt: new Date().toISOString()
      };

      const existing = getInquiries();
      existing.unshift(newInquiry);
      localStorage.setItem('hemant_inquiries', JSON.stringify(existing));

      // Reset form & show banner
      document.getElementById('offline-form').reset();
      const successBanner = document.getElementById('submit-success-banner');
      successBanner.classList.remove('hidden');

      setTimeout(() => {
        successBanner.classList.add('hidden');
      }, 7000);

      // Re-render desk if opened
      renderInquiriesTable();
    }

    // Modal helpers
    function toggleAdminPanel(show) {
      const modal = document.getElementById('admin-panel');
      if (show) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        renderInquiriesTable();
      } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    function selectCourseForInquiry(title) {
      document.getElementById('form-class').value = title;
      // scroll to active form
      const element = document.getElementById('inquiry-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Render local inquiries inside Leads drawer
    function renderInquiriesTable() {
      const container = document.getElementById('crm-leads-list');
      const term = document.getElementById('crm-search').value.toLowerCase();
      const inquiries = getInquiries();

      const filtered = inquiries.filter(item => 
        item.studentName.toLowerCase().includes(term) ||
        item.parentName.toLowerCase().includes(term) ||
        item.phone.includes(term)
      );

      if (filtered.length === 0) {
        container.innerHTML = \`
          <div class="flex flex-col items-center justify-center border border-dashed border-slate-200 bg-slate-50/50 py-12 rounded-xl text-center">
            <i data-lucide="users" class="h-8 w-8 text-slate-350 mb-2"></i>
            <p class="text-sm font-semibold text-slate-700">No batch inquiries verified yet</p>
            <p class="text-xs text-slate-500 mt-1">Trial inquiries submitted on this offline page will populate instantly inside this device.</p>
          </div>
        \`;
        lucide.createIcons();
        return;
      }

      container.innerHTML = filtered.map(item => \`
        <div class="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="font-display font-bold text-brand-blue text-sm sm:text-base">\${item.studentName}</h4>
                <span class="rounded-full bg-slate-100 text-brand-blue px-2.5 py-0.5 text-xs font-bold border border-slate-250">
                  Class \${item.studentClass}
                </span>
                <span class="rounded-full bg-amber-100 text-[#8c670d] px-2 py-0.5 text-[9px] font-bold border border-amber-200 uppercase tracking-widest leading-none">
                  \${item.status}
                </span>
              </div>
              <p class="text-[10px] text-slate-400 mt-1">Submitted at \${new Date(item.submittedAt).toLocaleString()}</p>
            </div>
            
            <button onclick="deleteOfflineInquiry('\${item.id}')" class="text-red-500 hover:bg-neutral-50 p-1.5 rounded-lg border border-transparent hover:border-red-200 self-start">
              <i data-lucide="trash-2" class="h-4 w-4"></i>
            </button>
          </div>

          <div class="mt-4 grid grid-cols-2 text-xs border-t border-slate-100 pt-3 text-slate-650">
            <div>
              <span class="text-[9px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Parent / Guardian</span>
              <strong class="text-slate-850">\${item.parentName}</strong>
            </div>
            <div>
              <span class="text-[9px] text-slate-400 block font-bold uppercase tracking-wider mb-0.5">Contact Link</span>
              <a href="tel:\${item.phone}" class="text-brand-gold font-bold font-mono hover:underline">\${item.phone}</a>
              <span class="block text-slate-500 text-[10px]">\${item.email || 'No email mentioned'}</span>
            </div>
          </div>

          <div class="mt-3 bg-slate-50 rounded-lg p-3 text-xs text-slate-700 italic border border-slate-200">
            "\${item.message}"
          </div>
        </div>
      \`).join('');

      lucide.createIcons();
    }

    function deleteOfflineInquiry(id) {
      if (confirm('Delete inquiry record permanently?')) {
        const remaining = getInquiries().filter(i => i.id !== id);
        localStorage.setItem('hemant_inquiries', JSON.stringify(remaining));
        renderInquiriesTable();
      }
    }

    function clearAllInquiries() {
      if (confirm('Permanently wipe out target browser inquiries folder?')) {
        localStorage.removeItem('hemant_inquiries');
        renderInquiriesTable();
      }
    }

    function exportInquiriesCsv() {
      const records = getInquiries();
      if (records.length === 0) {
        alert('Database folder contains zero entries to export');
        return;
      }
      const headers = ['Submitted at', 'Student', 'Parent', 'Class', 'Phone', 'Email', 'Goals/Details'];
      const rows = records.map(i => [
        new Date(i.submittedAt).toLocaleDateString(),
        \`"\${i.studentName.replace(/"/g, '""')}"\`,
        \`"\${i.parentName.replace(/"/g, '""')}"\`,
        \`"\${i.studentClass}"\`,
        \`"\${i.phone}"\`,
        \`"\${i.email || ''}"\`,
        \`"\${i.message.replace(/"/g, '""').replace(/\\n/g, ' ')}"\`
      ]);

      const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "hemant_classes_inquiries_offline.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Filter Courses grid offline
    function filterCourses(category) {
      // Toggle button active visual states
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-brand-blue', 'text-white', 'shadow-md', 'border-brand-blue');
        btn.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
        btn.style.fontWeight = 'normal';
      });

      const activeBtn = document.getElementById('btn-cat-' + category);
      if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
        activeBtn.classList.add('bg-brand-blue', 'text-white', 'shadow-md', 'border-brand-blue');
        activeBtn.style.fontWeight = 'bold';
      }

      // Hide show cards
      document.querySelectorAll('.course-card').forEach(card => {
        if (category === 'all') {
          card.classList.remove('hidden');
        } else {
          if (card.classList.contains('cat-' + category)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    }

    // Toggle FAQs
    function toggleFaq shadow(labelIdx) {
      const answer = document.getElementById('faq-answer-' + labelIdx);
      const icon = document.getElementById('faq-icon-' + labelIdx);
      
      const isHidden = answer.classList.contains('hidden');
      if (isHidden) {
        answer.classList.remove('hidden');
        icon.classList.add('active');
      } else {
        answer.classList.add('hidden');
        icon.classList.remove('active');
      }
    }
    // Alias to resolve matching name
    window.toggleFaq = toggleFaq shadow;

    // Testimonials slider parameters
    const parentsTestimonials = ${parentTestimonialsJSON};
    const studentsTestimonials = ${studentTestimonialsJSON};
    
    let activeTestTab = 'parents';
    let currentTestIdx = 0;

    const AVATAR_IMAGES = {
      'Rajesh Verma': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      'Meenakshi Sharma': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      'Sardar Gurpreet Singh': 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
      'Aniket Dwivedi': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
      'Priya Gupta': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      'Rohan Malhotra': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
    };

    function changeTestimonialTab(tab) {
      activeTestTab = tab;
      currentTestIdx = 0;

      // Update button colors
      const parentsBtn = document.getElementById('tab-test-parents');
      const studentsBtn = document.getElementById('tab-test-students');

      if (tab === 'parents') {
        parentsBtn.className = "flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition bg-brand-blue text-white font-bold";
        studentsBtn.className = "flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition text-slate-600 hover:text-slate-900";
      } else {
        studentsBtn.className = "flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition bg-brand-blue text-white font-bold";
        parentsBtn.className = "flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition text-slate-600 hover:text-slate-900";
      }

      renderActiveTestimonial();
    }

    function renderActiveTestimonial() {
      const collection = activeTestTab === 'parents' ? parentsTestimonials : studentsTestimonials;
      const current = collection[currentTestIdx];
      const avatar = AVATAR_IMAGES[current.name] || AVATAR_IMAGES['Aniket Dwivedi'];

      const element = document.getElementById('testimonial-card-element');
      element.innerHTML = \`
        <!-- Left Side -->
        <div class="flex-1 flex flex-col sm:flex-row gap-5 items-start pl-2">
          <div class="relative h-18 w-18 sm:h-20 sm:w-20 rounded-full overflow-hidden border-2 border-brand-gold bg-slate-150 flex-shrink-0 shadow-sm">
            <img src="\${avatar}" alt="\${current.name}" class="h-full w-full object-cover" />
          </div>
          <div class="space-y-3.5 max-w-xl text-left">
            <div class="flex items-center gap-0.5">
              <i data-lucide="star" class="h-4 w-4 fill-[#C69214] text-[#C69214]"></i>
              <i data-lucide="star" class="h-4 w-4 fill-[#C69214] text-[#C69214]"></i>
              <i data-lucide="star" class="h-4 w-4 fill-[#C69214] text-[#C69214]"></i>
              <i data-lucide="star" class="h-4 w-4 fill-[#C69214] text-[#C69214]"></i>
              <i data-lucide="star" class="h-4 w-4 fill-[#C69214] text-[#C69214]"></i>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed italic font-medium">
              "\${current.content}"
            </p>
            <div class="pt-1">
              <span class="block font-display font-bold text-brand-blue text-base leading-none">\${current.name}</span>
              <span class="block text-[10px] font-mono text-[#8c670d] font-bold uppercase tracking-widest mt-1.5">
                \${current.role === 'Student' ? 'Distinction Topper Group' : 'Verified Kalyanpur Resident'}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Side Badge -->
        <div class="flex-shrink-0 flex flex-col items-center justify-center border border-slate-200 bg-white rounded-2xl px-5 py-5 w-full md:w-[200px] text-center space-y-1 shadow-xs">
          <span class="text-[10px] text-slate-400 uppercase tracking-widest block font-bold font-mono">Verified Result</span>
          <span class="text-xs sm:text-sm font-bold text-brand-blue leading-snug">\${current.achievement}</span>
          <span class="rounded-full bg-slate-100 border border-slate-200 py-0.5 px-3 text-brand-blue text-[10px] font-mono mt-3 font-bold uppercase">
            \${current.classTag}
          </span>
        </div>
      \`;

      lucide.createIcons();
    }

    function nextTestimonial() {
      const collection = activeTestTab === 'parents' ? parentsTestimonials : studentsTestimonials;
      currentTestIdx = (currentTestIdx + 1) % collection.length;
      renderActiveTestimonial();
    }

    function prevTestimonial() {
      const collection = activeTestTab === 'parents' ? parentsTestimonials : studentsTestimonials;
      currentTestIdx = (currentTestIdx - 1 + collection.length) % collection.length;
      renderActiveTestimonial();
    }

    function dismissWaTooltip() {
      document.getElementById('wa-tooltip').remove();
    }

    // Auto load starting elements
    window.addEventListener('DOMContentLoaded', () => {
      renderActiveTestimonial();
      lucide.createIcons();

      // Simple menu adjustments on scroll
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-navigation');
        if (window.scrollY > 20) {
          nav.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md');
        } else {
          nav.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md');
        }
      });
    });
  </script>
</body>
</html>`;
}
