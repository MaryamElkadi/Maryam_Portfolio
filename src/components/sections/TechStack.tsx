import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB',
    'Tailwind CSS', 'Redux', 'Go', 'Flutter', 'Python'
];

export function TechStack() {
    return (
        <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-light/70 max-w-2xl mx-auto">
                        Technologies and tools I use to build scalable and modern applications.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <Badge
                                variant="accent"
                                className="px-4 py-2 text-sm backdrop-blur-sm bg-white/5 border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                            >
                                {skill}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
