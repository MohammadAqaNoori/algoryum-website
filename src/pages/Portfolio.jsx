import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ShoppingCart, GraduationCap, Package, ArrowRight } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Portfolio.css';

const projects = [
  {
    name: 'NEEL Clinic',
    category: 'Healthcare',
    icon: Building2,
    problem: 'Manual appointment booking system causing scheduling conflicts and patient dissatisfaction.',
    solution: 'Built a comprehensive clinic management system with online booking, patient records, and automated reminders.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
    result: '40% reduction in no-shows, 60% time savings on scheduling',
  },
  {
    name: 'Afghan Smile Dental',
    category: 'Healthcare',
    icon: Building2,
    problem: 'No online presence and manual patient management.',
    solution: 'Created a modern website with online appointment booking and patient management system.',
    technologies: ['React', 'Express', 'PostgreSQL', 'WhatsApp Integration'],
    result: 'New patient increase by 150% in first 3 months',
  },
  {
    name: 'QADAM Agency',
    category: 'Business',
    icon: Building2,
    problem: 'Inefficient client management and project tracking.',
    solution: 'Developed a custom agency management platform with CRM and project tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Analytics Dashboard'],
    result: 'Improved project delivery by 35%, better client communication',
  },
  {
    name: 'Anwar Tani Plaza',
    category: 'E-Commerce',
    icon: ShoppingCart,
    problem: 'Limited market reach for agricultural products.',
    solution: 'Built a full-featured e-commerce marketplace for farmers and buyers.',
    technologies: ['React', 'Express', 'MongoDB', 'Payment Gateway'],
    result: 'Expanded customer base to 50+ cities, 200% revenue increase',
  },
  {
    name: 'Aryan Nezhad School',
    category: 'Education',
    icon: GraduationCap,
    problem: 'Manual administrative processes and parent communication.',
    solution: 'Implemented a complete school management system with portal for parents and teachers.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SMS Integration'],
    result: '90% parent satisfaction, 50% less administrative work',
  },
  {
    name: 'Smart Inventory System',
    category: 'Enterprise',
    icon: Package,
    problem: 'Lack of real-time inventory visibility across multiple warehouses.',
    solution: 'Built an AI-powered inventory management system with predictive analytics.',
    technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
    result: '30% reduction in stockouts, 25% lower holding costs',
  },
];

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
            <h1>Our <span className="text-gradient">Work</span></h1>
            <p>
              Real solutions we've built for real clients. Each project represents 
              a unique business challenge we've helped solve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-image">
                  <project.icon size={64} />
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
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Have a Project in Mind?</h2>
            <p>Let's discuss how we can help transform your business with intelligent software solutions.</p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;