import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Ensure compatibility
import { SiGoogledocs } from "react-icons/si";
import profile from "../../assets/profile.jpg";
import resume from "../../assets/Resume.pdf";

const Hero = () => {
    return (
        <motion.section className="bg-gray-100 py-16 flex flex-col items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div
                className="bg-white shadow-lg rounded-lg p-8 text-center max-w-sm transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
                <img
                    src={profile}
                    alt="Mayank Singh"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold">Mayank Singh</h1>
                <p className="text-gray-600 mb-4">Full Stack Developer</p>
                <hr className="w-3/4 mx-auto border-gray-300 mb-4" />
                <div className="flex align-center justify-center mt-4">
                    <a
                        href="https://www.linkedin.com/in/mayank-singh-37b791225/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-sky-600 hover:bg-sky-600 rounded-full hover:text-white transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/rajputmayank07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:mayank2002singh@gmail.com"
                        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-rose-500 hover:bg-rose-500 rounded-full hover:text-white transition-colors duration-300"
                    >
                        <FaRegEnvelope />
                    </a>
                    <a
                        href="https://x.com/rajputmayank07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-slate-800 hover:bg-slate-800 rounded-full hover:text-white transition-colors duration-300"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href={resume}
                        download
                        className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-400 hover:bg-blue-400 rounded-full hover:text-white transition-colors duration-300"
                    >
                        <SiGoogledocs />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
