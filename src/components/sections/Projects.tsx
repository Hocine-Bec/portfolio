import { useState } from 'react';
import { projects, projectCategories } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { HiFilter } from 'react-icons/hi';

type CategoryFilter = keyof typeof projectCategories | 'all';

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const filters: { value: CategoryFilter; label: string }[] = [
        { value: 'all', label: 'All Projects' },
        ...Object.entries(projectCategories).map(([value, label]) => ({
            value: value as CategoryFilter,
            label
        }))
    ];

    return (
        <section id="projects" className="py-24 px-6 lg:px-12 bg-[var(--color-dark)] relative overflow-hidden">
            {/* Dot Grid Pattern - Right Side */}
            <div className="dot-grid-pattern" />

            {/* Background Gradient Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(14,165,233,0.1)_0%,_transparent_70%)] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_70%)] blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />


            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
                        Project Case Studies
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Real-world solutions showcasing full-stack development and design expertise
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                    <div className="flex items-center gap-2 text-[var(--color-text-muted)] mr-2">
                        <HiFilter size={20} />
                        <span className="text-sm font-medium">Filter:</span>
                    </div>
                    {filters.map(({ value, label }) => (
                        <button
                            key={value}
                            onClick={() => setActiveFilter(value)}
                            className={`
                px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300
                ${activeFilter === value
                                    ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30'
                                    : 'bg-[var(--color-dark-lighter)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] border border-[var(--color-dark-border)] hover:border-[var(--color-primary)]'
                                }
              `}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>                                                                                                                                                                                                      

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[var(--color-text-muted)] text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};