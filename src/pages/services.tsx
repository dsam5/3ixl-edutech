import Navbar from "../components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrush, FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter"; // ✅ Correct Import

export default function Services() {
    const services = [
        { title: "Bootcamps", icon: <FaLaptopCode />, link: "/courses", btnText: "Explore" },
        { title: "Project Assistance", icon: <FaProjectDiagram />, link: "/contact", btnText: "Contact Us" },
        { title: "Graphic Design", icon: <FaBrush />, link: "/contact", btnText: "Contact Us" },
        { title: "AI Solutions", icon: <FaLightbulb />, link: "/contact", btnText: "Contact Us" },
        { title: "Website and Software Development", icon: <MdOutlineAutoGraph />, link: "/contact", btnText: "Contact Us" },
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            <main className="container text-center mt-5">
                {/* Animated Typewriter Title */}
                <br />
                <br />
                <h1 className="fw-bold">
                    Our <span className="text-success">
                    <Typewriter
                        words={["Services"]}
                        loop={0} // Infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />

                    </span>
                </h1>
                <p className="text-muted">Explore the services we offer to help you achieve your goals.</p>

                <div className="row justify-content-center mt-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="col-12 col-sm-6 col-md-4 mb-4 service-box"
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="service-content">
                                <div className="icon">{service.icon}</div>
                                <h3 className="fw-bold">{service.title}</h3>
                                <motion.div whileTap={{ scale: 0.9 }}>
                                    <Link href={service.link} className="btn btn-outline-success">
                                        {service.btnText}
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

          
            {/* Call-to-Action Section */}
            <section className="cta-section text-center mt-5">
                <h2 className="fw-bold">Ready to Take the Next Step?</h2>
                <p className="text-muted"> Let&apos;s help you achieve your career and business goals.</p>
                <motion.div whileTap={{ scale: 0.9 }}>
                    <Link href="/contact" className="btn btn-success btn-lg">Get in Touch</Link>
                </motion.div>
            </section>
        </div>
    );
}
