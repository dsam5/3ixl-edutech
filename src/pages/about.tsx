import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section text-center py-5">
                <br />
                <br />
                <motion.h1 
                    className="fw-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About <span className="text-success">3IXL EDUTECH</span>
                </motion.h1>
                <motion.p 
                    className="text-muted fs-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Empowering individuals and businesses through technology.
                </motion.p>
            </section>

            {/* Our Story & Our Vision */}
            <section className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <motion.div 
                            className="p-4 bg-light shadow rounded h-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="fw-bold fs-3">Our Story</h2>
                            <p className="text-muted fs-5">
                                3IXL EDUTECH is a tech-driven company that empowers individuals and businesses through 
                                innovative technology education and consulting. We provide hands-on training, internships, 
                                and enterprise solutions that enhance digital transformation and streamline business processes. 
                            </p>
                        </motion.div>
                    </div>

                    <div className="col-md-6">
                        <motion.div 
                            className="p-4 text-white shadow rounded h-100"
                            style={{ background: "linear-gradient(135deg, #28a745, #1d7d35)" }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="fw-bold fs-3">Our Vision</h2>
                            <p className="fs-5">
                                To be a global leader in technology education and consulting, driving digital transformation 
                                and fostering hands-on learning and enterprise innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="container text-center my-5">
                <motion.h2 
                    className="fw-bold fs-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Meet Our Dedicated Team
                </motion.h2>

                <div className="row justify-content-center mt-4">
                    {/* Team Member */}
                    {[
                        {
                            name: "Nana Amissah Amoah",
                            role: "AI Engineer / Instructor",
                            email: "nanaamoah776@gmail.com",
                            phone: "0505884057 / 0506506443",
                            image: "/images/team1.jpg",
                            linkedin: "https://www.linkedin.com/in/nana-amoah-51279b283/",
                            whatsapp: "https://wa.me/233505884057",
                        },
                        {
                            name: "David Kwesi Sam",
                            role: "Cybersecurity Analyst / Instructor",
                            email: "samkwesidavid456@gmail.com",
                            phone: "0597707737 / 0536000409",
                            image: "/images/team2.jpg",
                            linkedin: "http://linkedin.com/in/david-kwesi-sam",
                            whatsapp: "https://wa.me/233207132997",
                        },
                        {
                            name: "Bernard Zephaniah Addo-Addo",
                            role: "Data & AI Engineer / Instructor",
                            email: "iambenzeph@gmail.com",
                            phone: "0540251498",
                            image: "/images/Ben.jpg",
                            linkedin: "https://www.linkedin.com/in/bernard-zephaniah-addo-addo-6a728b220/",
                            whatsapp: "https://wa.me/233540251498",
                        }
                    ].map((member, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <motion.div 
                                className="p-4 shadow rounded bg-light team-member"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    width={250}  
                                    height={260}  
                                    className="rounded shadow"
                                />
                                <div className="mt-3">
                                    <h5 className="fw-bold fs-4">{member.name}</h5>
                                    <p className="text-muted fs-5">{member.role}</p>
                                    <p className="small text-muted fs-6">
                                        📧 <a href={`mailto:${member.email}`} className="text-dark text-decoration-none">{member.email}</a>
                                    </p>
                                    <p className="small text-muted fs-6">📞 {member.phone}</p>

                                    <div className="d-flex justify-content-center gap-3 mt-2">
                                        <a href="https://facebook.com" target="_blank" className="text-dark social-icon"><FaFacebook size={24} /></a>
                                        <a href="https://twitter.com" target="_blank" className="text-dark social-icon"><FaTwitter size={24} /></a>
                                        <a href={member.linkedin} target="_blank" className="text-dark social-icon"><FaLinkedin size={24} /></a>
                                        <a href={member.whatsapp} target="_blank" className="text-dark social-icon"><FaWhatsapp size={24} /></a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

  

            <style jsx>{`
                .team-member h5 {
                    font-size: 1.5rem; /* Increase name size */
                }
                .team-member p {
                    font-size: 1.2rem; /* Increase text size */
                }
                .social-icon {
                    font-size: 1.5rem !important; /* Increase icon size */
                }
            `}</style>
        </div>
    );
}
