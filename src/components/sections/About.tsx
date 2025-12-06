import { HiCode, HiColorSwatch, HiLightningBolt } from 'react-icons/hi';
import profileImage from '../../assets/profile.jpg';

export const About = () => {

  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Dot Grid Pattern - Left Side */}
      <div className="dot-grid-pattern-left" />

      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_70%)] blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(14,165,233,0.1)_0%,_transparent_70%)] blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            About Me
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Your Full-Stack Partner from Design to Deployment
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Story & Values */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700 delay-200">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <HiLightningBolt className="text-[var(--color-primary)] text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  Full-Stack Development
                </h3>
              </div>

              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                I bring together <span className="text-[var(--color-text-primary)] font-semibold">design and development skills to deliver complete solutions</span>. This means you work with one person who understands both how your product should look and how it needs to function. Resulting in faster delivery and fewer revisions.
              </p>

              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                My code follows <span className="text-[var(--color-text-primary)] font-semibold">industry best practices and clean architecture principles</span>, ensuring your solution is <span className="text-[var(--color-text-primary)] font-semibold">reliable, secure, and ready to grow with your business</span>.
              </p>
            </div>

            {/* Value Props - Stacked vertically or grid depending on preference, keeping grid for now but tighter */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[var(--color-dark-lighter)]/30 border border-[var(--color-dark-border)]">
                <HiColorSwatch className="text-[var(--color-primary)] text-2xl mb-2" />
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                  Design-First
                </h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Prototypes before code. No surprises.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--color-dark-lighter)]/30 border border-[var(--color-dark-border)]">
                <HiCode className="text-[#F59E0B] text-2xl mb-2" />
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                  Modern Stack
                </h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Scalable, maintainable, clean code.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--color-dark-lighter)]/30 border border-[var(--color-dark-border)] sm:col-span-2">
                <HiLightningBolt className="text-[#10B981] text-2xl mb-2" />
                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                  Responsive & Available
                </h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Direct communication. Full attention.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            {/* Image Container with Decor */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-dark-border)] group">
              {/* Placeholder for Professional Photo - Rectangular */}
              <div className="aspect-[4/5] bg-[var(--color-dark-lighter)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <span className="text-[var(--color-text-muted)] text-lg font-medium z-10">
                  <img src={profileImage} alt="Personal image" />
                </span>
                {/* Abstract shapes/pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </div>
            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[var(--color-primary)]/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[var(--color-dark-lighter)]/30 rounded-2xl -z-10 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};