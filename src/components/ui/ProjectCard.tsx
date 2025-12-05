import type { Project } from '../../data/projects';
import { HiExternalLink, HiCode, HiBadgeCheck, HiLightningBolt, HiBeaker } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

const projectTypeConfig = {
  client: {
    label: 'Client Project',
    icon: HiBadgeCheck,
    color: 'bg-green-500/10 text-green-400 border-green-500/30'
  },
  personal: {
    label: 'Personal Project',
    icon: HiLightningBolt,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
  },
  concept: {
    label: 'Case Study',
    icon: HiBeaker,
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
  }
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const typeConfig = projectTypeConfig[project.projectType];
  const TypeIcon = typeConfig.icon;

  return (
    <div className="group relative bg-[var(--color-dark-lighter)] rounded-2xl overflow-hidden border border-[var(--color-dark-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.2)] flex flex-col">
      {/* Image/Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-dark-lighter)] to-[var(--color-dark-border)] overflow-hidden">
        {/* Actual project image if available */}
        {project.image && (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                // Hide image if it fails to load, show placeholder instead
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Dark overlay for better badge visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/20"></div>
          </>
        )}

        {/* Fallback placeholder (shown only if no image or image fails to load) */}
        {!project.image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <HiCode className="text-[var(--color-primary)] text-7xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent blur-2xl"></div>
            </div>
          </div>
        )}

        {/* Decorative grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[var(--color-dark)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:scale-110"
              aria-label="View GitHub repository"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={24} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:scale-110"
              aria-label="View live demo"
              onClick={(e) => e.stopPropagation()}
            >
              <HiExternalLink size={24} />
            </a>
          )}
        </div>

        {/* Project Type Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1.5 ${typeConfig.color} text-xs font-semibold rounded-full border flex items-center gap-1.5 backdrop-blur-sm`}>
          <TypeIcon size={14} />
          {typeConfig.label}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex-1">
          <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs rounded border border-[var(--color-primary)]/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* View Case Study Link */}
        {project.caseStudyUrl && (
          <div className="pt-2 border-t border-[var(--color-dark-border)]">
            <a
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] text-sm font-semibold transition-colors duration-300"
            >
              View Case Study
              <HiExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};