interface SkillBadgeProps {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

const categoryColors = {
  backend: 'hover:border-[var(--color-primary)]',
  frontend: 'hover:border-[#10B981]',
  tools: 'hover:border-[#8B5CF6]',
  design: 'hover:border-[#F59E0B]',
};

export const SkillBadge = ({ name, category }: SkillBadgeProps) => {
  return (
    <span
      className={`
        inline-block px-4 py-2 
        bg-[var(--color-dark-lighter)] 
        text-[var(--color-text-secondary)] 
        rounded-lg text-sm font-medium
        border border-[var(--color-dark-border)]
        transition-all duration-300
        ${categoryColors[category]}
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >
      {name}
    </span>
  );
};