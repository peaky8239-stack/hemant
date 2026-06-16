export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  level: string; // e.g. "Primary", "Middle", "High School", "Senior Secondary"
  targetGroup: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // "Student" | "Parent"
  content: string;
  achievement?: string; // e.g. "98.4% in CBSE Class 10" or "Parent of Class 8 Student"
  imageName?: string;
  classTag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Inquiry {
  id: string;
  studentName: string;
  parentName: string;
  studentClass: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Archived';
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  expertise: string;
  subject: string;
  bio: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}
