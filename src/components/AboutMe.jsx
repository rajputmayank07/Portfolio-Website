

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        
        <motion.section id="aboutme"className="bg-white py-16 px-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                 Hi, I'm Mayank Singh, a motivated and detail-oriented software engineer with a 
                 strong foundation in software development, testing, and modern web technologies.
                 Passionate about building impactful, user-centric solutions, I leverage 
                 technical expertise and analytical acumen to deliver high-quality results. 
                 I'm eager to tackle challenges, innovate, and contribute to projects that make a difference.
                </p>
            </div>
        </motion.section>
    );
};

export default AboutMe;
