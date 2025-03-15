import Navbar from "../components/Navbar";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import DOMPurify from "dompurify";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [nameError, setNameError] = useState(""); // Track name field error

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const sanitizedValue = DOMPurify.sanitize(value);

        if (name === "name") {
            // Prevent numbers in the name field
            if (/\d/.test(sanitizedValue)) {
                setNameError("❌ Full Name cannot contain numbers");
                return;
            } else {
                setNameError(""); // Clear error when input is valid
            }
        }

        setFormData({ ...formData, [name]: sanitizedValue });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage("✅ Your message has been sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setResponseMessage("❌ Failed to send your message. Please try again.");
            }
        } catch (error) {
            setResponseMessage("❌ An error occurred. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Navbar />
            <div className="container py-5 mt-5">
                <h2 className="text-center fw-bold text-dark"><span className="text-success">Contact Us</span></h2>
                <p className="text-center text-muted">We&apos;d love to hear from you! Reach out to us anytime.</p>

                <div className="row mt-4 justify-content-center">
                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0 p-4">
                            <h4 className="mb-3 text-center text-dark">Send Us a Message</h4>
                            {responseMessage && <p className="text-success text-center fw-bold">{responseMessage}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control rounded-pill px-3 py-2 shadow-sm" 
                                        required 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                    />
                                    {nameError && <small className="text-danger">{nameError}</small>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control rounded-pill px-3 py-2 shadow-sm" 
                                        required 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Your Message</label>
                                    <textarea 
                                        name="message" 
                                        className="form-control rounded-3 px-3 py-2 shadow-sm" 
                                        rows="4" 
                                        required 
                                        value={formData.message} 
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-success w-100 rounded-pill py-2 fw-bold shadow-sm" 
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        <div className="card shadow-lg border-0 p-4">
                            <h4 className="mb-3 text-center text-dark">Our Contact Information</h4>
                            <p className="d-flex align-items-center gap-2">
                                <FaMapMarkerAlt className="text-success" /> 123 Tech Street, Accra, Ghana
                            </p>
                            <p className="d-flex align-items-center gap-2">
                                <FaPhone className="text-success" /> +233 123 456 789
                            </p>
                            <p className="d-flex align-items-center gap-2">
                                <FaEnvelope className="text-success" /> 
                                <a href="mailto:3ixledutech@gmail.com" className="text-dark text-decoration-none fw-semibold">
                                    3ixledutech@gmail.com
                                </a>
                            </p>

                            <h5 className="mt-4 text-center">Follow Us</h5>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a href="https://facebook.com" target="_blank" className="text-dark">
                                    <FaFacebook size={30} className="hover-scale" />
                                </a>
                                <a href="https://twitter.com" target="_blank" className="text-dark">
                                    <FaTwitter size={30} className="hover-scale" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" className="text-dark">
                                    <FaLinkedin size={30} className="hover-scale" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    );
}
