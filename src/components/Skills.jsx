import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiBootstrap, SiMysql } from "react-icons/si"; // Added Bootstrap and MySQL

const Skills = () => {
    const skills = [
        { name: "React.js", icon: <FaReact className="text-blue-600 text-4xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600 text-4xl" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-500 text-4xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
        { name: "Git/GitHub", icon: <FaGitAlt className="text-red-600 text-4xl" /> },
    ];

    return (
        <motion.section
        id="skills"
        className="bg-gray-50 py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    My Skills
                </motion.h2>
                <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110 hover:text-blue-600"
                        >
                            {skill.icon}
                            <span className="text-gray-800 font-medium">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;
