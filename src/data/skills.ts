export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export const skills: Skill[] = [
  // Backend
  { name: 'C#', category: 'backend' },
  { name: 'ASP.NET Core', category: 'backend' },
  { name: 'Entity Framework Core', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'SQL Server', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Clean Architecture', category: 'backend' },
  { name: 'CQRS', category: 'backend' },
  
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  
  // Tools & DevOps
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Swagger', category: 'tools' },
  
  // Design
  { name: 'Figma', category: 'design' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Brand Identity', category: 'design' },
];

export const skillCategories = {
  backend: { label: 'Backend & Architecture', color: 'var(--color-primary)' },
  frontend: { label: 'Frontend Development', color: '#10B981' },
  tools: { label: 'Tools & DevOps', color: '#8B5CF6' },
  design: { label: 'Design & UI/UX', color: '#F59E0B' },
};