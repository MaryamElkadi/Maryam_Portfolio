import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
                    <p className="text-lg text-light/70 mb-10 max-w-2xl mx-auto">
                        Whether you have a project in mind, looking for a strong frontend architect, or just want to chat about tech—I'm always open to discussing new opportunities.
                    </p>

                    <a
                        href="https://wa.me/1557460922?text=Hey%20there!%20%F0%9F%91%8B%20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="secondary" size="lg" className="mb-16">
                            <Mail className="mr-2 h-5 w-5" /> Say Hello
                        </Button>
                    </a>

                    <div className="flex justify-center space-x-6">
                        {[
                            { icon: Github, href: 'https://github.com/MaryamElkadi' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/maryam-khamis-1bbb65192/' },
                            { icon: MessageCircle, href: 'https://wa.me/1557460922' },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.2, y: -4 }}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-light/80 hover:text-primary hover:border-primary/50 transition-colors"
                            >
                                <social.icon size={22} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <footer className="absolute bottom-0 w-full text-center py-6 text-sm text-light/40 border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} Maryam Khamis. Built with React & Tailwind CSS.</p>
            </footer>
        </section>
    );
}
