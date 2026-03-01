import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Software Engineer',
        company: 'Various / Freelance',
        period: '2023 - Present',
        description: 'Leading the development of scalable React and Node.js applications, consistently reducing UI bugs by 40% and delivering projects on time.'
    },
    {
        role: 'Computer and Math Teacher',
        company: 'Education Sector',
        period: '2024 - 2025',
        description: 'Fostered a 40% improvement in student analytical skills. Developed strong communication and mentoring abilities, translating complex technical concepts into accessible lessons.'
    },
    {
        role: 'Public Relations',
        company: 'Various Organizations',
        period: 'Previous Experience',
        description: 'Cultivated diverse soft skills including stakeholder management, effective communication, and cross-functional team collaboration.'
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-white/5 border-y border-white/10 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Experience Timeline</h2>
                    <p className="text-light/70">A journey through tech, education, and communication.</p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:flex items-center justify-between md:space-x-8">
                                {/* Timeline dot */}
                                <div className="absolute left-0 w-3 h-3 bg-accent rounded-full mt-1.5 md:relative md:left-auto md:w-4 md:h-4 shadow-[0_0_10px_#00F5D4]" />

                                {/* Connecting line for mobile */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-[5px] top-6 bottom-[-3rem] w-0.5 bg-white/10 md:hidden" />
                                )}

                                <div className="md:w-1/3 mb-2 md:mb-0 text-left md:text-right">
                                    <span className="text-secondary font-mono text-sm">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                                    <p className="text-light/60">{exp.company}</p>
                                </div>

                                <div className="md:w-2/3 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                                    <p className="text-light/80 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
