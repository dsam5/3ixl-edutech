import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer 
            className="bg-122c35 text-white py-4 mt-auto"
            initial={{ opacity: 0, y: 50 }} // Fade-in & slide-up effect
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="row gx-5 mb-3">  
                    {/* Logo & Description with Floating Effect */}
                    <motion.div 
                        className="col-md-4 d-flex align-items-start"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <Image src="/images/logo.png" alt="3IXL EDUTECH Logo" className="me-3" width="80" height="80" />
                        <div>
                            <h5 className="fw-bold fs-4">3IXL EDUTECH</h5>
                            <p className="text-muted fs-5">
                                Top learning experiences that create more talent in the world.
                            </p>
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {["Product", "Company", "Social", "Legal"].map((section, index) => (
                        <motion.div 
                            className="col-md-2"
                            key={section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <h6 className="fw-bold fs-5">{section}</h6>
                            <ul className="list-unstyled fs-5">
                                {section === "Product" && ["Overview", "Features", "Solutions", "Tutorials", "Pricing"].map((item) => (
                                    <li key={item}>
                                        <motion.a href="#" className="text-white text-decoration-none" whileHover={{ scale: 1.1 }}>
                                            {item}
                                        </motion.a>
                                    </li>
                                ))}
                                {section === "Company" && ["About us", "Careers", "Press", "News"].map((item) => (
                                    <li key={item}>
                                        <motion.a href="#" className="text-white text-decoration-none" whileHover={{ scale: 1.1 }}>
                                            {item}
                                        </motion.a>
                                    </li>
                                ))}
                                {section === "Social" && ["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((item) => (
                                    <li key={item}>
                                        <motion.a href="#" className="text-white text-decoration-none" whileHover={{ scale: 1.1 }}>
                                            {item}
                                        </motion.a>
                                    </li>
                                ))}
                                {section === "Legal" && ["Terms", "Privacy", "Cookies", "Contact"].map((item) => (
                                    <li key={item}>
                                        <motion.a href="#" className="text-white text-decoration-none" whileHover={{ scale: 1.1 }}>
                                            {item}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Copyright & Social Icons */}
                <div className="d-flex justify-content-between align-items-center mt-4">
                    {/* Copyright */}
                    <motion.p 
                        className="mb-0 fs-5"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        © {new Date().getFullYear()} 3IXL EDUTECH. All rights reserved.
                    </motion.p>

                    {/* Social Icons with Hover Animation */}
                    <div className="d-flex gap-3">
                        {[
                            { href: "https://twitter.com", icon: "bi-twitter" },
                            { href: "https://linkedin.com", icon: "bi-linkedin" },
                            { href: "https://github.com", icon: "bi-github" },
                            { href: "#", icon: "bi-dribbble" }
                        ].map((social) => (
                            <motion.a 
                                key={social.icon} 
                                href={social.href} 
                                className="text-white fs-4"
                                whileHover={{ scale: 1.3, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <i className={`bi ${social.icon}`}></i>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
