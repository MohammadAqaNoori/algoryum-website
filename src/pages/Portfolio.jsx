import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Rocket, ArrowUpRight } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Portfolio.css';

const projects = [
  {
    name: 'NEEL Clinic',
    category: 'Healthcare',
    image: '/images/projects/NeelClinic.png',
    type: 'Website with AI',
    problem: 'Manual appointment booking system causing scheduling conflicts and patient dissatisfaction.',
    solution: 'Built a comprehensive clinic management system with online booking, patient records, AI text & voice agents, and automated reminders.',
    technologies: ['React', 'Tailwind CSS', 'MySQL', 'Python Flask'],
    result: '40% reduction in no-shows, 60% time savings on scheduling, High SEO',
  },
  {
    name: 'Afghan Smile Dental',
    category: 'Healthcare',
    image: '/images/projects/AfghanSmile.jpeg',
    type: 'Database',
    problem: 'No online presence and manual patient management.',
    solution: 'Created a modern database application for patient management with appointment booking.',
    technologies: ['Python', 'PySide', 'SQLite'],
    result: 'New patient increase by 150% in first 3 months',
  },
  {
    name: 'QADAM Agency',
    category: 'Business',
    image: '/images/projects/QadamProject.jpeg',
    type: 'Website',
    problem: 'Inefficient client management and project tracking.',
    solution: 'Developed a custom agency management platform with CRM and project tracking.',
    technologies: ['Node.js', 'React', 'Tailwind CSS', 'MySQL'],
    result: 'Improved project delivery by 35%, better client communication',
  },
  {
    name: 'Anwar Tani Plaza',
    category: 'E-Commerce',
    image: '/images/projects/TaniPlaza.png',
    type: 'Database',
    problem: 'Limited market reach for agricultural products.',
    solution: 'Built a database application for managing agricultural products inventory and sales.',
    technologies: ['Python', 'PySide', 'SQLite'],
    result: 'Expanded customer base to 50+ cities, 200% revenue increase',
  },
  {
    name: 'Aryan Nezhad School',
    category: 'Education',
    image: '/images/projects/AryenNezhadSchool.png',
    type: 'Database',
    problem: 'Manual administrative processes and parent communication.',
    solution: 'Implemented a complete school management database system for students, grades, and attendance.',
    technologies: ['Python', 'PySide', 'SQLite'],
    result: '90% parent satisfaction, 50% less administrative work',
  },
  {
    name: 'Smart Inventory System',
    category: 'Enterprise',
    image: '/images/projects/SmartInventorySystem.png',
    type: 'Database',
    problem: 'Lack of real-time inventory visibility across multiple warehouses.',
    solution: 'Built an AI-powered inventory management database with predictive analytics.',
    technologies: ['Python', 'PySide', 'SQLite'],
    result: '30% reduction in stockouts, 25% lower holding costs',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Section = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section 
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  );
};

const Portfolio = () => {
  return (
    <main className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <ThreeBackground variant="particles" />
        <div className="container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Rocket size={14} /> Our Work
            </motion.span>
            <h1>Our <span className="text-gradient">Work</span></h1>
            <p>
              Real solutions we've built for real clients. Each project represents 
              a unique business challenge we've helped solve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section className="section portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                  <div className="project-overlay">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Problem</h4>
                      <p>{project.problem}</p>
                    </div>
                    <div className="detail-section">
                      <h4>Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div className="detail-section">
                      <h4>Technologies</h4>
                      <div className="tech-tags">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="detail-section result">
                      <h4>Result</h4>
                      <p>{project.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            variants={fadeInUp}
          >
            <h2>Have a Project in Mind?</h2>
            <p>Let's discuss how we can help transform your business with intelligent software solutions.</p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default Portfolio;