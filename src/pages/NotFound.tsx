import { Link } from 'react-router-dom';
import { HiHome, HiArrowLeft } from 'react-icons/hi';

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-[var(--color-dark)] flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-[var(--color-primary)] opacity-20">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
                        Page Not Found
                    </h2>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <HiHome size={20} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        <HiArrowLeft size={20} />
                        Go Back
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(14,165,233,0.08)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(14,165,233,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
            </div>
        </div>
    );
};
