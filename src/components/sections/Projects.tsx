import { motion } from 'framer-motion';
import { useProjectsData } from '../../hooks/useProjectsData';
import { MotionCard, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
    const { projects, loading } = useProjectsData();

    if (loading) {
        return (
            <section id="projects" className="py-20 min-h-[500px] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Project Showcase</h2>
                    <p className="text-light/70 max-w-2xl mx-auto">
                        A selection of my recent work, demonstrating expertise in frontend architecture and full-stack integration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <MotionCard
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="flex flex-col h-full bg-dark/50 hover:border-primary/50 hover:shadow-[0_0_20px_#7C6CFF30] transition-all group overflow-hidden"
                        >
                            {project.image && (
                                <div className="w-full h-48 overflow-hidden relative border-b border-white/10">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            )}
                            <CardHeader className={project.image ? "pt-6" : ""}>
                                <CardTitle className="group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <div className="flex flex-wrap gap-2 mt-3 pt-2">
                                    {project.tech.map(tech => (
                                        <Badge key={tech} variant="default">{tech}</Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <div>
                                    <p className="text-light/70 mb-4">{project.description}</p>
                                    {project.backend && (
                                        <p className="text-sm text-accent mb-4">Backend: {project.backend}</p>
                                    )}
                                </div>
                                <div className="flex space-x-3 mt-6 pt-4 border-t border-white/10">
                                    {project.githubUrl && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="px-2"
                                            onClick={() => window.open(project.githubUrl, '_blank')}
                                        >
                                            <Github size={18} className="mr-2" /> Code
                                        </Button>
                                    )}
                                    {project.demoUrl && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="px-2"
                                            onClick={() => window.open(project.demoUrl, '_blank')}
                                        >
                                            <ExternalLink size={18} className="mr-2" /> Live Demo
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </MotionCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
