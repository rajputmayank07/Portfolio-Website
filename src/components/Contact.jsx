import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false); // New state for loading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false); // Stop loading
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                () => {
                    setLoading(false); // Stop loading
                    setStatus("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <motion.section
            id="contact"
            className="bg-gray-100 py-16 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-bold mb-6 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Me
                </motion.h2>

                {/* Inviting Message */}
                <motion.p
                    className="text-gray-600 text-lg mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Let’s build something amazing together! Whether you're looking for a collaborator, developer, or creative mind, I’d love to hear from you.
                </motion.p>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
                        transition={{ duration: 0.3 }}
                        required
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
                        transition={{ duration: 0.3 }}
                        required
                    />
                    <motion.textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        whileHover={{ scale: 1.05 }}
                        whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
                        transition={{ duration: 0.3 }}
                        required
                    />
                    <motion.button
                        type="submit"
                        className={`bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300 ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        whileHover={!loading ? { scale: 1.1 } : {}}
                        whileTap={!loading ? { scale: 0.95 } : {}}
                        transition={{ duration: 0.3 }}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.form>

                {/* Status Message */}
                {status && <p className={`mt-4 ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>{status}</p>}
            </div>
        </motion.section>
    );
};

export default Contact;
