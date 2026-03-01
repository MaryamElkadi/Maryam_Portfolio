import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-xl text-primary tracking-wider">
                        MK<span className="text-secondary">.</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-light hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/MaryamElkadi" target="_blank" rel="noreferrer" className="text-light hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/maryam-khamis-1bbb65192/" target="_blank" rel="noreferrer" className="text-light hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-light hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-4 px-3 py-2">
                            <a href="https://github.com/MaryamElkadi" target="_blank" rel="noreferrer" className="text-light hover:text-primary">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/maryam-khamis-1bbb65192/" target="_blank" rel="noreferrer" className="text-light hover:text-primary">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
