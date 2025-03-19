import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Courses() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <br />
      <br />

      {/* Hero Section */}
      <motion.section 
        className="hero-section text-center py-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="fw-bold">
          Explore Our <span className="text-success">Courses</span>
        </motion.h1>
        <motion.p 
          className="text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Master Data Analytics, Data Science & Cybersecurity in Three(3) Months!
        </motion.p>
      </motion.section>

      {/* Courses Section */}
      <section className="container my-5">
        {/* Data Analytics Section */}
        <motion.div className="text-center mb-4" variants={sectionVariants} initial="hidden" whileInView="visible">
          <h2 className="fw-bold text-success">📊 Data Analytics Fundamentals</h2>
          <p className="text-muted">Master Excel, Power BI, and Tableau to solve real-world problems.</p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <CourseCard 
              image="/images/excel.jpg"
              title="Excel Analytics Mastery"
              description="Master PivotTables, Charts, and essential Excel analytics."
              price="GHS 150"
            />
          </div>
          <div className="col-md-5">
            <CourseCard 
              image="/images/powerbi.jpg"
              title="Data Analysis with Power BI"
              description="Learn to build interactive dashboards and reports."
              price="GHS 180"
            />
          </div>
        </div>

        {/* Data Science Section */}
        <motion.div className="text-center my-5" variants={sectionVariants} initial="hidden" whileInView="visible">
          <h2 className="fw-bold text-success">🤖 Data Science Mastery</h2>
          <p className="text-muted">Learn Python, Machine Learning, and Deep Learning.</p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <CourseCard 
              image="/images/python.jpg"
              title="Python for Data Science"
              description="Learn Python, data structures, and essential statistics."
              price="GHS 200"
            />
          </div>
          <div className="col-md-4">
            <CourseCard 
              image="/images/ml.jpg"
              title="Machine Learning with Python"
              description="Build predictive models and explore real-world applications."
              price="GHS 250"
            />
          </div>
          <div className="col-md-4">
            <CourseCard 
              image="/images/deeplearning.jpg"
              title="Deep Learning"
              description="Master neural networks, TensorFlow, and PyTorch."
              price="GHS 300"
              comingSoon
            />
          </div>
        </div>

        {/* Cybersecurity Section */}
        <motion.div className="text-center my-5" variants={sectionVariants} initial="hidden" whileInView="visible">
          <h2 className="fw-bold text-success">🔐 Cybersecurity</h2>
          <p className="text-muted">Learn to protect systems and become an ethical hacker.</p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <CourseCard 
              image="/images/cybersecurity.jpg"
              title="Cybersecurity (Scratch to Intermediate)"
              description="Learn fundamental to intermediate cybersecurity skills."
              price="GHS 220"
            />
          </div>
          <div className="col-md-5">
            <CourseCard 
              image="/images/ethicalhacking.jpg"
              title="Ethical Hacking"
              description="Coming soon: Learn penetration testing & security analysis."
              price="GHS 280"
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

// Define CourseCard Props
interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  price: string; // Course price
  comingSoon?: boolean;
}

// Course Card Component
function CourseCard({ image, title, description, price, comingSoon = false }: CourseCardProps) {
  const handleEnroll = () => {
    const basePaystackLink = "https://paystack.com/pay/vuhoe2-obl"; // Replace with actual Paystack link
    const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdN8iXp4nD3ldZJz3kaZ-tgTqa1BYDJwL1gnHxC10GJ_jVQ_A/viewform?usp=dialog"; // Replace with actual Google Form link

    // Convert price to number and pass to Paystack
    const amount = parseInt(price.replace("GHS ", "")) * 100; // Convert GHS to pesewas

    // Append price dynamically to Paystack link
    const paystackLink = `${basePaystackLink}?amount=${amount}`;

    // Redirect user to Paystack payment page
    window.location.href = paystackLink;

    // After successful payment, redirect them to the Google Sheet form
    setTimeout(() => {
      window.location.href = googleFormLink;
    }, 5000);
  };

  return (
    <motion.div 
      className="p-4 shadow rounded bg-white text-center"
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div   
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={image} alt={title} width={300} height={200} className="rounded" />
      </motion.div>
      
      <h4 className="fw-bold mt-3">{title}</h4>
      <p className="text-muted">{description}</p>

      {/* Price UI - Just plain text */}
      <p className="fw-bold text-dark mt-2">{price}</p>

      {comingSoon ? (
        <motion.button 
          className="btn btn-warning"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Coming Soon
        </motion.button>
      ) : (
        <motion.button 
          className="btn btn-success"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          onClick={handleEnroll}
        >
          Enroll Now
        </motion.button>
      )}  
    </motion.div>
  );
}
