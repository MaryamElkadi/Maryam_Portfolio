import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <span className="text-accent text-sm font-medium tracking-wide">Available for new opportunities</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 cursor-default"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Maryam Khamis</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-light/80 font-medium mb-8"
                >
                    Software Engineer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-lg text-light/70 leading-relaxed mb-10"
                >
                    Building scalable, high-performance web applications with React and Node.js.
                    Bridging the gap between beautiful user interfaces and robust architectures.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#projects">
                        <Button variant="primary" size="lg" className="w-full sm:w-auto">
                            View Projects
                        </Button>
                    </a>
                    <a
                        href="https://wa.me/1557460922?text=Hey%20there!%20%F0%9F%91%8B%20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Contact Me
                        </Button>
                    </a>


                </motion.div>
            </div>
        </section>
    );
}
