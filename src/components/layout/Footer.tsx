import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: HiOutlineMail, href: 'mailto:Bechebil.Houcin@gmail.com', label: 'Email' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/hocine-bechebil', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Hocine-Bec', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/B-Hocine/', label: 'LeetCode' },
  ];

  return (
    <footer className="border-t border-[var(--color-dark-border)] bg-[var(--color-dark)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-[var(--color-text-muted)] text-sm">
            © {currentYear} <span className="font-bold text-[var(--color-primary)]">Hocine Bechebil</span>. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};