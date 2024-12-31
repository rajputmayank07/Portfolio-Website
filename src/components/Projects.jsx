import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "BudgetBook",
            description: "Take control of your finances like never before! BudgetBook is your personal finance assistant, designed to help you track expenses, split bills effortlessly, and gain valuable insights into your spending habits. Visualize your financial data in real time and receive smart recommendations powered by AI.",
            techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js", "Google Gemini API", "JWT", "jsPDF"],
            demoLink: "https://budgetbook-l30u.onrender.com/dashboard",
            cta: "Try it now!",
        },
        {
            title: "Wanderlust",
            description: "Explore the world with Wanderlust! Whether you’re a traveler seeking a perfect getaway or a host showcasing your rental property, Wanderlust makes the process seamless. Search for personalized travel listings, browse stunning visuals, and book your next adventure in just a few clicks.",
            techStack: ["MongoDB", "Node.js", "Express", "Mapbox", "Cloudinary", "Bootstrap", "Passport.js", "Joi"],
            demoLink: "https://wanderlust-adxp.onrender.com/listings",
            cta: "Start your journey!",
        },
        {
            title: "Mausam",
            description: "Never let the weather ruin your plans again! Mausam is a sleek and responsive weather application that provides real-time updates and forecasts wherever you are. It’s the perfect companion for travelers, outdoor enthusiasts, or anyone who wants to stay prepared.",
            techStack: ["React", "Vite"],
            demoLink: "https://mausam-fawn.vercel.app/",
            cta: "Check the weather now!",
        },
    ];

    return (
        <motion.section
            id="projects"
            className="bg-gray-50 py-16 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start min-h-[410px] transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded shadow"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto bg-blue-600 text-white px-4 py-1 rounded shadow hover:bg-blue-700 transition duration-300 self-center"
                            >
                                {project.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
