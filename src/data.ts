import { Course, Testimonial, FAQItem, FacultyMember } from './types';

export const COURSES_DATA: Course[] = [
  {
    id: 'pg',
    title: 'Playgroup & Nursery',
    subtitle: 'Early Explorers Program',
    description: 'Nurturing curiosity, building motor skills, cognitive development, and basic communication in a warm, physical-oriented atmosphere.',
    features: [
      'Interactive sensory play',
      'Basic letter & number recognition',
      'Social emotional learning',
      'Ultra-small safe batches (1:8 ratio)',
      'Creative arts & storytelling sessions'
    ],
    level: 'Early Childhood',
    targetGroup: 'Toddlers (PG, Nursery, KG)'
  },
  {
    id: 'primary',
    title: 'Class 1 to 5',
    subtitle: 'Primary Academic Foundation',
    description: 'Developing a strong love for learning with absolute clarity in core subjects including Mathematics, English standard grammar, and General Sciences.',
    features: [
      'Focus on reading & arithmetic skills',
      'Visual interactive science modules',
      'Mental math tricks starting early',
      'Weekly interactive quizzes',
      'Daily writing & spelling reviews'
    ],
    level: 'Primary School',
    targetGroup: 'Class 1st - 5th Students'
  },
  {
    id: 'middle',
    title: 'Class 6 to 8',
    subtitle: 'Middle School Excellence Builder',
    description: 'Bridging the gap between basic schooling and systematic subject study. Rigorous conceptual drilling across all core subjects.',
    features: [
      'Dedicated Mathematics & Science coaches',
      'Development of logical & analytical reasoning',
      'English grammar & comprehension proficiency',
      'Comprehensive social science modules',
      'Preparation for basic talent search exams'
    ],
    level: 'Middle School',
    targetGroup: 'Class 6th - 8th Students'
  },
  {
    id: 'secondary',
    title: 'Class 9 & 10',
    subtitle: 'Secondary Board Boardroom preparation',
    description: 'Intense, result-driven coaching designed to ensure outstanding achievements in the crucial Class 10 Board Examinations.',
    features: [
      'Separate faculty for Physics, Chemistry, & Biology',
      'Advanced Mathematics & coordinate geometry focus',
      'Chapter-wise board pattern question banks',
      'Bi-weekly simulated full-length board tests',
      'Personalized mistake-analysis counseling'
    ],
    level: 'High School',
    targetGroup: 'Class 9th & 10th (CBSE / State Boards)'
  },
  {
    id: 'science-11-12',
    title: 'Class 11 & 12 Science',
    subtitle: 'PCM & PCB Advanced Modules',
    description: 'Deep subject analysis catering to Senior Secondary Board Examinations, building absolute mastery in theoretical and numerical fields.',
    features: [
      'Rigorous physics concepts & practical numerical drills',
      'Organic, Inorganic, & Physical Chemistry specializations',
      'Advanced Calculus & Algebra masterclass',
      'Exhaustive Biology diagram-based learning boards',
      'Previous 15 years board papers discussion'
    ],
    level: 'Senior Secondary',
    targetGroup: 'Class 11th & 12th (Science stream)'
  },
  {
    id: 'commerce-11-12',
    title: 'Class 11 & 12 Commerce',
    subtitle: 'Financial Accounting & Enterprise Economics',
    description: 'Comprehensive curriculum focusing on real-world transaction accounting, strategic business theory, and micro/macroeconomic principles.',
    features: [
      'Double Entry Accountancy step-by-step masterclass',
      'Business Studies case study analysis structures',
      'Detailed Micro & Macroeconomics charts',
      'Regular ledger balance & statistical drill-sheets',
      'Simulated board exams with strict performance indexing'
    ],
    level: 'Senior Secondary',
    targetGroup: 'Class 11th & 12th (Commerce stream)'
  }
];

export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 's1',
    name: 'Aniket Dwivedi',
    role: 'Student',
    content: 'Hemant Classes changed my entire perspective toward Mathematics. Under their guidance, complex integration and calculus suddenly felt simple. I secured 98% in CBSE Board Class 12th!',
    achievement: '98% in Class 12th Mathematics',
    classTag: 'Board Graduate'
  },
  {
    id: 's2',
    name: 'Priya Gupta',
    role: 'Student',
    content: 'The small batch size meant Hemant Sir noticed exactly where I was making mistakes in my algebra and physics derivations. The personal doubts session is literally a life saver.',
    achievement: '96.4% in CBSE Class 10th Boards',
    classTag: 'Class 10 topper'
  },
  {
    id: 's3',
    name: 'Rohan Malhotra',
    role: 'Student',
    content: 'The study material and mock tests provided here matched the board exams completely. Regular testing reduced my exam anxiety and let me pace myself perfectly.',
    achievement: '95.2% Science Class 12th',
    classTag: 'Board Graduate'
  }
];

export const PARENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 'p1',
    name: 'Rajesh Verma',
    role: 'Parent',
    content: 'I enrolled my son in Class 9, struggling with foundations. The structured approach, daily homework checking, and consistent progress parent-meets enabled him to achieve outstanding results.',
    achievement: 'Parent of Class 10 Student',
    classTag: 'Kanpur Parent'
  },
  {
    id: 'p2',
    name: 'Meenakshi Sharma',
    role: 'Parent',
    content: 'Truly dedicated teachers. They don’t just teach content, they coach young minds. For pre-primary grades (Classes 3-5), their play-concept logic is exceptional.',
    achievement: 'Parent of Class 4 & 7 Students',
    classTag: 'Kanpur Parent'
  },
  {
    id: 'p3',
    name: 'Sardar Gurpreet Singh',
    role: 'Parent',
    content: 'The absolute transparency here is premium. I receive digital performance insights from tests, attendance SMS, and feedback sessions that are highly modern and professional.',
    achievement: 'Parent of Class 12 Commerce Student',
    classTag: 'Kanpur Parent'
  }
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Hemant Kumar',
    role: 'Founder & Academic Director',
    experience: '12+ Years of Teaching Excellence',
    expertise: 'Mathematics Expert',
    subject: 'Senior Mathematics (Class 9th - 12th)',
    bio: 'An alumnus of Kanpur’s premier collegiate system, Hemant sir is widely recognized for his unique teaching methodology that eliminates the fear of math.'
  },
  {
    id: 'f2',
    name: 'Dr. Priya Shukla',
    role: 'Head of Physical Sciences',
    experience: '8+ Years teaching Senior Secondary',
    expertise: 'Chemistry & Physics Specialist',
    subject: 'Physics & Chemistry (Class 10th - 12th)',
    bio: 'Holds a PhD in Applied Chemistry. She excels at making abstract molecular reactions and electromagnetic wave mechanics easy to visualize.'
  },
  {
    id: 'f3',
    name: 'Prof. S. K. Dwivedi',
    role: 'Commerce Head',
    experience: '15+ Years Board Panel Expert',
    expertise: 'Financial Accounting & Economics',
    subject: 'Accountancy & Economics (Class 11th - 12th)',
    bio: 'Former consultant and board examiner. Renowned for clarifying core debit/credit mechanics and macroeconomic charts through modern case examples.'
  },
  {
    id: 'f4',
    name: 'Mrs. Anjali Mishra',
    role: 'Primary & Pre-School Supervisor',
    experience: '6+ Years Early Years Management',
    expertise: 'Visual & Child Psych Pedagogy',
    subject: 'General Sciences & Foundation Math (PG - Class 5th)',
    bio: 'Specialist in child cognitive training. Uses gamified, visual learning methods to build high numeric literacy starting from pre-kindergarten.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    category: 'General',
    question: 'Where exactly is Hemant Coaching Classes located?',
    answer: 'We are situated in the premium residential and educational hub of Kalyanpur, Kanpur, Uttar Pradesh 208017. Our campus is extremely safe, comfortable, and provides an unmatched academic atmosphere.'
  },
  {
    id: 'faq2',
    category: 'Admissions',
    question: 'How do I book a Free Demo Class?',
    answer: 'You can book your demo class in minutes by filling out the Admission Inquiry form on this webpage, clicking on the "Book Free Demo Class" buttons, calling us directly, or dropping a WhatsApp text.'
  },
  {
    id: 'faq3',
    category: 'Academics',
    question: 'What is the maximum student limit per batch?',
    answer: 'To guarantee highly personalized attention, we maintain highly restricted batch sizes: 8-12 students for pre-primary/primary, and a maximum of 15-20 students for secondary and board prep batches.'
  },
  {
    id: 'faq4',
    category: 'Academics',
    question: 'Do you cover both CBSE and UP State Board syllabi?',
    answer: 'Yes! We run separate, custom batches tailored carefully to the specific frameworks, NCERT books, past question papers, and grading rules of both CBSE and State Boards.'
  },
  {
    id: 'faq5',
    category: 'Reporting',
    question: 'How are parents informed about their child’s growth?',
    answer: 'We believe in a three-way trust chain. We share digital report cards after Every Topic Test, maintain strict automated attendance sms alerts, and organize structured parent-teacher interaction meets.'
  },
  {
    id: 'faq6',
    category: 'General',
    question: 'Are there separate doubt-clearing sessions?',
    answer: 'Absolutely. We host daily 1-on-1 doubt clearing hours outside regular batch timings. Students can sit in our premium air-conditioned study lounge and clear their questions directly with the subject specialist.'
  }
];

export const STATS: { value: string; label: string; description: string }[] = [
  {
    value: '12+',
    label: 'Years of Excellence',
    description: 'Transforming student careers with consistency since 2014 in Kanpur.'
  },
  {
    value: '1800+',
    label: 'Alumni Enrolled',
    description: 'Brilliant scholars placed in premier institutes and high careers.'
  },
  {
    value: '98.2%',
    label: 'Parent Trust Rating',
    description: 'Voted Kanpur’s most dedicated personal attention coaching team.'
  },
  {
    value: '12-15',
    label: 'Class Batch Cap',
    description: 'Limited batches ensure every child gets full personal guidance.'
  }
];
