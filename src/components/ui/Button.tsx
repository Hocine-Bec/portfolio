import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-semibold transition-all duration-300 inline-block text-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  const variantStyles = {
    primary: "bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary-dark)] hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:-translate-y-0.5",
    secondary: "bg-transparent text-[var(--color-primary)] border-2 !border-[var(--color-primary-dark)] hover:bg-[var(--color-primary)]/10 hover:-translate-y-0.5"
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // External link or anchor link
  if (href) {
    // Check if it's an anchor link (starts with #)
    const isAnchor = href.startsWith('#');

    return (
      <a
        href={href}
        className={classes}
        {...(!isAnchor && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  // Internal route
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};