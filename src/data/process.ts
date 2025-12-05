export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery Call (Free)',
    description: 'We discuss your business needs and goals. No pressure, no commitments',
    icon: 'HiChat',
    color: '#0EA5E9', // Blue
    details: [
      'Tell me about your challenges and what you want to achieve',
      'I ask questions to truly understand your requirements',
      'We discuss timeline and budget expectations openly',
      'You decide if we\'re a good fit. Zero sales pressure'
    ]
  },
  {
    number: 2,
    title: 'Proposal & Planning',
    description: 'Clear scope, deliverables, and timeline before any work begins',
    icon: 'HiDocumentText',
    color: '#8B5CF6', // Purple
    details: [
      'Detailed proposal outlining exactly what you\'ll receive',
      'Transparent pricing with no hidden fees',
      'Realistic timeline with specific milestones',
      'You only proceed when you\'re completely comfortable'
    ]
  },
  {
    number: 3,
    title: 'Design Preview',
    description: 'See and approve the complete design before I write a single line of code',
    icon: 'HiColorSwatch',
    color: '#EC4899', // Pink
    details: [
      'Full Figma mockups showing exactly how it will look and work',
      'Collaborative design process with revisions included in scope',
      'We refine together until the design is perfect',
      'No development starts until you give the green light'
    ]
  },
  {
    number: 4,
    title: 'Development & Updates',
    description: 'Regular progress updates so you always know where things stand',
    icon: 'HiCode',
    color: '#10B981', // Green
    details: [
      'Consistent progress updates throughout development',
      'Direct communication via your preferred channel',
      'You can provide feedback as we build',
      'Complete transparency. No surprises.'
    ]
  },
  {
    number: 5,
    title: 'Testing & Your Review',
    description: 'Thorough testing and your approval before launch',
    icon: 'HiCheckCircle',
    color: '#F59E0B', // Amber
    details: [
      'Comprehensive testing on my end first',
      'Staging environment for you to test and review',
      'Report any issues or needed adjustments',
      'Revisions included to ensure it meets all requirements'
    ]
  },
  {
    number: 6,
    title: 'Launch & Handoff',
    description: 'Smooth deployment and training to get you up and running',
    icon: 'HiRocket',
    color: '#06B6D4', // Cyan
    details: [
      'Deploy to production with all technical details handled',
      'Walkthrough session showing you how everything works',
      'Complete documentation for future reference',
      'Available for support as needed after launch'
    ]
  }
];