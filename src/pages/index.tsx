import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // ✅ Correct Import
import Image from "next/image";

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });

        // Load Dialogflow Messenger Script
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Testimonials Data
    const testimonials = [
        {
            image: "/images/Ama.png",
            text: "3IXL EDUTECH gave me hands-on experience in Data Science!",
            name: "Lerato Brinston",
            role: "Data Science Student",
        },
        {
            image: "/images/student1.webp",
            text: "The cybersecurity bootcamp was a game-changer for me!",
            name: "Ama Serwaa",
            role: "Cybersecurity Enthusiast",
        },
        {
            image: "/images/Kofi.jpg",
            text: "I never thought learning tech could be this engaging and fun!",
            name: "Kojo Mensah",
            role: "Full Stack Developer",
        },
    ];

    // State for Changing Image & Text
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="homepage-bg">
            <Navbar />

            {/* White Background Rectangle */}
            <div className="white-box">
                <main className="container d-flex align-items-center justify-content-center flex-column flex-md-row flex-grow-1 position-relative text-center">
                    {/* Left Side - Text */}
                    <div className="hero-text" data-aos="fade-right">
                        <h1 className="display-4 fw-bold">
                            <br />
                            Unlock{" "}
                            Your <span className="text-success">Potential</span> in{" "}
                            <span className="text-success"><br />
                                <Typewriter
                                    words={["Tech and", "Innovation"]} // ✅ Corrected usage
                                    loop={0} // Infinite loop
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>{" "}
                        </h1>
                        <p className="lead text-dark text-lg">
                            <span className="fs-6">Empowering Tech Excellence Since 2024</span> <br />
                        </p>

                        <div className="mt-4">
                            <motion.div whileTap={{ scale: 0.9 }}>
                                <Link href="/services" className="btn btn-glow btn-lg">
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side - Testimonials Section */}
                    <div className="testimonial-box" data-aos="fade-left">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                width={250}
                                height={250}
                                quality={100} // Ensure max quality
                                className="testimonial-image"
                            />
                            <p className="testimonial-text">&quot;{testimonials[index].text}&quot;</p>
                            <h5 className="testimonial-name">{testimonials[index].name}</h5>
                            <p className="testimonial-role">{testimonials[index].role}</p>
                        </motion.div>
                    </div>
                </main>
            </div>

            {/* ✅ FIX: Chatbot wrapped in `dangerouslySetInnerHTML` */}
            <div>
                <div dangerouslySetInnerHTML={{
                    __html: `<df-messenger
                        intent="WELCOME"
                        chat-title="3IXLEDUTECH"
                        agent-id="ea66b369-03cf-423b-98fb-d880347eb638"
                        language-code="en"
                    ></df-messenger>` 
                }} />
            </div>
        </div>
    );
}
