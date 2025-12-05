import { skills, skillCategories } from '../../data/skills';
import { SkillBadge } from '../ui/SkillBadge';

export const Skills = () => {
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <section id="skills" className="py-24 px-6 lg:px-12 bg-[var(--color-dark)] relative overflow-hidden">
            {/* Dot Grid Pattern - Right Side (Alternating from About's Left) */}
            <div className="dot-grid-pattern" />

            {/* Background Gradient Effects */}
            <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(14,165,233,0.09)_0%,_transparent_70%)] blur-3xl translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(14,165,233,0.07)_0%,_transparent_70%)] blur-3xl -translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
                        Technical Proficiency
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Full-stack development with design expertise. Everything needed to bring your project from concept to launch.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
                        <div
                            key={category}
                            className="bg-[var(--color-dark-lighter)]/50 p-8 rounded-2xl border border-[var(--color-dark-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 animate-in fade-in slide-in-from-bottom"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h3
                                className="text-lg font-semibold uppercase tracking-wider mb-6 flex items-center gap-3"
                                style={{ color: skillCategories[category as keyof typeof skillCategories].color }}
                            >
                                {skillCategories[category as keyof typeof skillCategories].label}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {categorySkills.map((skill) => (
                                    <SkillBadge
                                        key={skill.name}
                                        name={skill.name}
                                        category={skill.category}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
