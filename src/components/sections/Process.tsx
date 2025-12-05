import { processSteps } from '../../data/process';
import { ProcessCard } from '../ui/ProcessCard';
import { HiLightningBolt, HiChat, HiBadgeCheck } from 'react-icons/hi';

export const Process = () => {
  return (
    <section id="process" className="py-24 px-6 lg:px-12 bg-[var(--color-dark)] relative overflow-hidden">
      {/* Dot Grid Pattern - Left Side */}
      <div className="dot-grid-pattern-left" />

      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(14,165,233,0.1)_0%,_transparent_70%)] blur-3xl -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_70%)] blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full text-[var(--color-primary)] font-semibold text-sm mb-6">
            <HiLightningBolt size={18} />
            <span>My Workflow</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            How We'll Work Together
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
            No confusion. No surprises. Just a clear process from our first call to launch day.
          </p>
        </div>

        {/* Process Steps with Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProcessCard step={step} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-700">
          <div className="inline-block p-8 rounded-2xl bg-[var(--color-dark)] border border-[var(--color-dark-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Ready to start your project?
            </h3>
            <p className="text-[var(--color-text-muted)] mb-6 max-w-md mx-auto">
              Let's discuss your business needs and how I can help you build a solution that works.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-[var(--color-primary)]/30"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-[var(--color-dark)] border border-[var(--color-dark-border)]">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" style={{ backgroundColor: '#F59E0B15', border: '2px solid #F59E0B30' }}>
              <HiLightningBolt className="text-4xl" style={{ color: '#F59E0B' }} />
            </div>
            <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Fast & Responsive</h4>
            <p className="text-sm text-[var(--color-text-muted)]">
              Small client base means quick turnaround times and rapid responses to your questions
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[var(--color-dark)] border border-[var(--color-dark-border)]">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" style={{ backgroundColor: '#0EA5E915', border: '2px solid #0EA5E930' }}>
              <HiChat className="text-4xl" style={{ color: '#0EA5E9' }} />
            </div>
            <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Direct Communication</h4>
            <p className="text-sm text-[var(--color-text-muted)]">
              Work directly with me throughout the entire project—no middlemen, no miscommunication
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[var(--color-dark)] border border-[var(--color-dark-border)]">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4" style={{ backgroundColor: '#10B98115', border: '2px solid #10B98130' }}>
              <HiBadgeCheck className="text-4xl" style={{ color: '#10B981' }} />
            </div>
            <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Quality-Focused</h4>
            <p className="text-sm text-[var(--color-text-muted)]">
              Every project matters when building a reputation—you get my full attention and best work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};