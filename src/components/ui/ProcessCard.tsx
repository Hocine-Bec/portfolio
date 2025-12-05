import type { ProcessStep } from '../../data/process';
import { HiCheckCircle, HiChat, HiDocumentText, HiColorSwatch, HiCode, HiLightningBolt } from 'react-icons/hi';

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
}

const iconMap = {
  HiChat,
  HiDocumentText,
  HiColorSwatch,
  HiCode,
  HiCheckCircle,
  HiRocket: HiLightningBolt // Using HiLightningBolt for launch/rocket concept
};

export const ProcessCard = ({ step, index }: ProcessCardProps) => {
  const isEven = index % 2 === 0;
  const IconComponent = iconMap[step.icon as keyof typeof iconMap];

  return (
    <div
      className={`
        relative flex flex-col md:flex-row gap-8 items-center
        ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
      `}
    >
      {/* Content Card */}
      <div className="flex-1 group">
        <div className="bg-[var(--color-dark-lighter)] border border-[var(--color-dark-border)] rounded-2xl p-8 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] hover:-translate-y-1">
          {/* Icon & Number */}
          <div className="flex items-center gap-4 mb-4">
            {/* Icon with colored background */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${step.color}15`,
                border: `2px solid ${step.color}30`
              }}
            >
              <IconComponent
                className="text-4xl"
                style={{ color: step.color }}
              />
            </div>

            <div className="flex-1">
              <div
                className="font-bold text-sm uppercase tracking-wider mb-1"
                style={{ color: step.color }}
              >
                Step {step.number}
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {step.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-[var(--color-text-muted)] text-lg mb-6">
            {step.description}
          </p>

          {/* Details List */}
          <ul className="space-y-3">
            {step.details.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[var(--color-text-secondary)] text-sm"
              >
                <HiCheckCircle
                  className="flex-shrink-0 mt-0.5"
                  size={20}
                  style={{ color: step.color }}
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Dot (Desktop only) */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
          style={{
            backgroundColor: '#2A2A2A',
            boxShadow: `0 10px 30px ${step.color}40`
          }}
        >
          {step.number}
        </div>
      </div>

      {/* Spacer for alternate layout */}
      <div className="flex-1 hidden md:block"></div>
    </div>
  );
};