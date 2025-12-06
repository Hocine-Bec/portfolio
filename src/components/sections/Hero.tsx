import { Button } from '../ui/Button';
import { HiArrowDown } from 'react-icons/hi';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 relative overflow-hidden">
      {/* Dot Grid Pattern - Techy Background */}
      <div className="dot-grid-pattern" />

      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(14,165,233,0.1)_0%,_transparent_70%)] blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_70%)] blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* Content - Centered */}
      <div className="max-w-5xl w-full z-10">
        <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom duration-700">
          {/* Main Headline */}
          <h1 className="text-4xl mt-10 sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Building Custom Solutions That{' '}
            <span className="text-gradient">
              Solve Real Problems
            </span>
          </h1>

          {/* Subheading - Value Proposition */}
          <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            <span className='text-[var(--color-text-primary)]'>I help small businesses build custom solutions that deliver measurable results. </span>
            From early design to final deployment, I handle the entire process ensuring clarity, consistency, and momentum at every step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button variant="primary" size="lg" href="#contact">
              Start Your Project
            </Button>
            <Button variant="secondary" size="lg" href='#projects'>
              View My Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300 group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <HiArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};