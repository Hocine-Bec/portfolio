import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[var(--color-dark)]/90 backdrop-blur-md border-b border-[var(--color-dark-border)] shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="logo-code hover:scale-105 transition-transform duration-300"
          >
            Hocine Bechebil
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-[var(--color-primary)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-dark-lighter)] border-t border-[var(--color-dark-border)] animate-in slide-in-from-top duration-300">
          <ul className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="animate-in fade-in slide-in-from-left duration-300">
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};