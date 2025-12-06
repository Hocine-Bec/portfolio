export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'business-tools' | 'ecommerce' | 'management' | 'other';
  projectType: 'client' | 'personal' | 'concept';
  caseStudyUrl?: string; // For future detailed case study pages
}

export const projects: Project[] = [
  {
    id: 'solaris-crm',
    title: 'Solaris CRM Platform',
    description: 'End-to-end CRM for managing solar installation workflows, from lead capture to energy monitoring',
    problem: 'Solar companies struggle with fragmented tools for lead management, installation tracking, and customer monitoring, resulting in inefficiencies and slow response times.',
    solution: 'Developed a full-stack CRM platform with role-based dashboards, automated workflows, performance-optimized backend services, and a modular frontend architecture separated into Marketing and Main App environments.',
    impact: 'Improved API responsiveness by 92% with asynchronous email processing, streamlined multi-phase installation workflows, enhanced usability with reusable UI components, and laid the foundation for advanced analytics and customer self-service.',
    image: '/solaris.png',
    tags: ['CRM', 'Performance Optimization', 'Workflow Automation', 'Role-based Dashboards'],
    technologies: ['ASP.NET Core 9', 'React 19', 'TypeScript', 'PostgreSQL', 'Hangfire', 'JWT', 'TailwindCSS 4'],
    githubUrl: 'https://github.com/Hocine-Bec/solaris',
    featured: true,
    category: 'business-tools',
    projectType: 'personal',
    caseStudyUrl: '/case-studies/solaris-crm'
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing System',
    description: 'Mobile-first platform for automated affiliate commission tracking with real-time delivery monitoring',
    problem: 'Manual commission calculations were time-consuming and error-prone, leading to payment disputes and frustrated affiliates.',
    solution: 'Built a full-stack mobile application with automated commission calculations, real-time tracking, and comprehensive admin dashboard.',
    impact: 'Automated commission processing, eliminated calculation errors, and provided real-time visibility into affiliate performance.',
    image: '/affiliate-app.png',
    tags: ['Mobile App', 'Automation', 'Real-time Tracking', 'Admin Dashboard'],
    technologies: ['React Native', 'ASP.NET Core', 'PostgreSQL', 'Clean Architecture'],
    githubUrl: 'https://github.com/Hocine-Bec/Affiliate-Marketing-System',
    featured: true,
    category: 'business-tools',
    projectType: 'client',
    caseStudyUrl: '/case-studies/affiliate-marketing'
  },
  {
    id: 'university-management',
    title: 'Academic Management Platform',
    description: 'Comprehensive system for managing student enrollment, grades, and administrative workflows',
    problem: 'Educational institutions often juggle multiple disconnected systems, leading to inefficiencies and manual data entry.',
    solution: 'Designed and built a centralized platform using Clean Architecture and CQRS patterns, with role-based access control and automated document generation.',
    impact: 'Demonstrated ability to handle complex domain logic, multi-user workflows, and data integrity in enterprise-scale applications.',
    image: '/university.png',
    tags: ['Enterprise', 'Multi-user', 'Document Generation', 'RBAC'],
    technologies: ['ASP.NET Core', 'React', 'PostgreSQL', 'Clean Architecture', 'CQRS'],
    githubUrl: 'https://github.com/Hocine-Bec/university-management-system',
    featured: true,
    category: 'management',
    projectType: 'personal',
    caseStudyUrl: '/case-studies/university-management'
  },
  {
    id: 'license-management',
    title: 'License Management System',
    description: 'Modern application for managing license applications with improved performance and maintainability',
    problem: 'Legacy systems are often slow, difficult to maintain, and impossible to extend with new features.',
    solution: 'Rebuilt using modern architecture patterns, focusing on performance, clean code, and extensibility.',
    impact: 'Demonstrates expertise in legacy modernization, performance optimization, and building maintainable systems.',
    image: '/dvld.png',
    tags: ['Modernization', 'Performance', 'Clean Code', 'Scalability'],
    technologies: ['ASP.NET Core', 'React', 'SQL Server', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/Hocine-Bec/DVLD-Project',
    featured: false,
    category: 'management',
    projectType: 'concept',
    caseStudyUrl: '/case-studies/license-management'
  },
];

export const projectCategories = {
  'business-tools': 'Business Tools',
  'ecommerce': 'E-Commerce',
  'management': 'Management Systems',
  'other': 'Other'
};