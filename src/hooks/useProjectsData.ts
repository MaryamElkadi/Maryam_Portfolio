import { useState, useEffect } from 'react';

export interface Project {
    id: string;
    title: string;
    tech: string[];
    description: string;
    backend?: string;
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
}

const PROJECTS_DATA: Project[] = [
    {
        id: 'khat-alilan',
        title: 'Khat Alilan',
        tech: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion'],
        description: 'Engineered a full-stack portfolio using Next.js and TypeScript, featuring immersive 3D graphics and smooth animations. Implemented a serverless backend deployed on Vercel.',
        backend: 'Next.js API routes',
        image: '/projects/khat-alilan.jfif',
        demoUrl: 'https://khat-alilan.vercel.app/',
        githubUrl: 'https://github.com/MaryamElkadi/khat-alilan'
    },
    {
        id: 'adline',
        title: 'Adline',
        tech: ['React', 'Web'],
        description: 'A professional advertising and marketing agency platform.',
        image: '/projects/adline.jfif',
        demoUrl: 'https://www.adlineksa.com/',
        githubUrl: 'https://github.com/MaryamElkadi/adline'
    },
    {
        id: 'flight-booking',
        title: 'Flight Booking System',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        description: 'Developed a secure web-based system for flight reservations.',
        backend: 'PHP, SQL',
        image: '/projects/flightbooking.jfif',
        demoUrl: '',
        githubUrl: 'https://github.com/MaryamElkadi/Flight-booking'
    },

    {
        id: 'clinic-reservation',
        title: "Doctor's Appointment Platform",
        tech: ['React', 'Go', 'MongoDB'],
        description: 'Built a platform to streamline doctor appointments and patient data management.',
        backend: 'Go, MongoDB',
        image: '/projects/clinic.jfif',
        demoUrl: '',
        githubUrl: 'https://github.com/amrmoh-02/Clinic-Reservation-System'
    },
    {
        id: 'bookmarker',
        title: 'Book Marker Website',
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'A website to bookmark and validate URLs using Regex rules.',
        image: '/projects/bookmarker.jfif',
        demoUrl: 'https://maryamelkadi.github.io/bookmarker/',
        githubUrl: 'https://github.com/maryamelkadi/bookmarker'
    },
    {
        id: 'weather-app',
        title: 'Weather Website',
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'Get the weather forecast based on country for today, tomorrow, and after tomorrow.',
        image: '/projects/weather.jfif',
        demoUrl: 'https://maryamelkadi.github.io/Weather-App/',
        githubUrl: 'https://github.com/maryamelkadi/Weather-App'
    },
    {
        id: 'yummi',
        title: 'Yummi Website',
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'Display meals from an API and info for each meal based on category, area, and ingredients.',
        image: '/projects/yummi.jfif',
        demoUrl: 'https://maryamelkadi.github.io/yummi/',
        githubUrl: 'https://github.com/maryamelkadi/yummi'
    }
];

export const useProjectsData = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call / data fetch
        const fetchProjects = async () => {
            setLoading(true);
            setTimeout(() => {
                setProjects(PROJECTS_DATA);
                setLoading(false);
            }, 500);
        };

        fetchProjects();
    }, []);

    return { projects, loading };
};
