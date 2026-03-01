import { motion } from 'framer-motion';

const stats = [
    { value: '10+', label: 'Projects Led' },
    { value: '40%+', label: 'Reduction in UI Bugs' },
    { value: '40%', label: 'Improvement in Student Analytical Skills' },
];

export function Stats() {
    return (
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-light/50 mb-3">
                                {stat.value}
                            </h3>
                            <p className="text-light/80 font-medium text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
