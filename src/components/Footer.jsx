import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <motion.footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto text-center space-y-6">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/rajputmayank07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mayank-singh-37b791225/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/rajputmayank07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/rajputmayank07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-2xl transition duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="mailto:mayank2002singh@gmail.com"
                        className="text-gray-400 hover:text-white text-2xl transition duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Navigation Links */}
                <section id="contact">
                <div className="flex justify-center space-x-8 text-sm">
                    <a
                        href="#aboutme"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        Contact
                    </a>
                </div>
                </section>
                {/* Custom Message */}
                <p className="text-gray-400 text-sm">
                    Passionately crafted by <strong>Mayank Singh</strong> ✨
                </p>

                {/* Copyright */}
                <p className="text-gray-500 text-xs">
                    © {new Date().getFullYear()} Mayank Singh. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;