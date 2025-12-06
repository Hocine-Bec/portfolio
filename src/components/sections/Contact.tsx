import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email via EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    reply_to: formData.email,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success('Message sent successfully! I\'ll get back to you soon.', {
                duration: 5000,
                icon: '✅'
            });

            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send error:', error);
            console.error('EmailJS Config:', {
                serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
                templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            });
            toast.error('Failed to send message. Please try email directly.', {
                duration: 5000,
                icon: '❌'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: HiMail,
            label: 'Email',
            value: 'Bechebil.Houcin@gmail.com',
            href: 'mailto:Bechebil.Houcin@gmail.com',
            color: '#0EA5E9'
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: '+213 770 993 463',
            href: 'https://wa.me/213770993463',
            color: '#25D366'
        }
    ];

    const socialLinks = [
        {
            icon: FaLinkedin,
            href: 'https://linkedin.com/in/hocine-bechebil',
            label: 'LinkedIn',
            color: '#0A66C2'
        },
        {
            icon: FaGithub,
            href: 'https://github.com/Hocine-Bec',
            label: 'GitHub',
            color: 'var(--color-text-primary)'
        }
    ];

    return (
        <section id="contact" className="py-24 px-6 lg:px-12 bg-[var(--color-dark)] relative overflow-hidden">
            {/* Dot Grid Pattern - Right Side */}
            <div className="dot-grid-pattern" />

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(14,165,233,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
                        Let's Talk About Your Project
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. I typically respond within 24 hours.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-left duration-700 delay-200">
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                                Get In Touch
                            </h3>

                            {contactInfo.map((info) => (
                                <div key={info.label} className="group">
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-dark-lighter)] border border-[var(--color-dark-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div
                                                className="p-3 rounded-lg"
                                                style={{ backgroundColor: `${info.color}20` }}
                                            >
                                                <info.icon size={24} style={{ color: info.color }} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-[var(--color-text-muted)] mb-1">{info.label}</p>
                                                <p className="text-[var(--color-text-secondary)] font-medium group-hover:text-[var(--color-primary)] transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-dark-lighter)] border border-[var(--color-dark-border)]">
                                            <div
                                                className="p-3 rounded-lg"
                                                style={{ backgroundColor: `${info.color}20` }}
                                            >
                                                <info.icon size={24} style={{ color: info.color }} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-[var(--color-text-muted)] mb-1">{info.label}</p>
                                                <p className="text-[var(--color-text-secondary)] font-medium">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                                Connect With Me
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-lg bg-[var(--color-dark-lighter)] border border-[var(--color-dark-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon
                                            size={24}
                                            className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent border border-[var(--color-primary)]/20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                <p className="font-semibold text-[var(--color-text-primary)]">
                                    Accepting New Projects
                                </p>
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)]">
                                Quick response time • Direct communication • Quality-focused work
                            </p>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-3 animate-in fade-in slide-in-from-right duration-700 delay-300">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="p-8 rounded-2xl bg-[var(--color-dark-lighter)] border border-[var(--color-dark-border)]">
                                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                                    Send Me a Message
                                </h3>
                                <p className="text-sm text-[var(--color-text-muted)] mb-6">
                                    ⚡ I typically respond within 24 hours
                                </p>

                                <div className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                                            Your Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-dark)] border border-[var(--color-dark-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                                            placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Let\'s Discuss Your Project'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};