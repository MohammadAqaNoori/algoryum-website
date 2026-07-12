import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, GraduationCap, Construction, 
  ShoppingCart, Home, DollarSign, Utensils, 
  Landmark, ArrowRight 
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Solutions.css';

const solutions = [
  {
    icon: Building2,
    title: 'Healthcare',
    desc: 'Patient management systems, appointment scheduling, telemedicine platforms, and healthcare analytics.',
    features: ['Patient Management', 'Appointment Booking', 'Telemedicine', 'Medical Records'],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'E-learning platforms, student information systems, online courses, and educational management tools.',
    features: ['LMS', 'Online Courses', 'Student Portal', 'Exam System'],
  },
  {
    icon: Construction,
    title: 'Construction',
    desc: 'Project management, resource allocation, budget tracking, and client communication tools.',
    features: ['Project Management', 'Resource Planning', 'Budget Tracking', 'Client Portal'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    desc: 'Online stores, inventory management, POS systems, and customer relationship tools.',
    features: ['E-Commerce Store', 'Inventory Management', 'POS System', 'CRM'],
  },
  {
    icon: Home,
    title: 'Real Estate',
    desc: 'Property listings, lead management, virtual tours, and transaction management systems.',
    features: ['Property Listings', 'Lead Management', 'Virtual Tours', 'Transaction Management'],
  },
  {
    icon: DollarSign,
    title: 'Finance',
    desc: 'Banking solutions, investment platforms, accounting software, and financial analytics.',
    features: ['Banking Solutions', 'Investment Platform', 'Accounting', 'Financial Analytics'],
  },
  {
    icon: Utensils,
    title: 'Restaurants',
    desc: 'Online ordering, table reservation, inventory tracking, and staff management systems.',
    features: ['Online Ordering', 'Table Reservations', 'Inventory', 'Staff Management'],
  },
  {
    icon: Landmark,
    title: 'Government & NGOs',
    desc: 'Citizen portals, document management, case tracking, and public service delivery platforms.',
    features: ['Citizen Portal', 'Document Management', 'Case Tracking', 'Service Delivery'],
  },
];

const Solutions = () => {
  return (
    <main className="solutions-page">
      {/* Hero */}
      <section className="solutions-hero">
        <ThreeBackground variant="network" />
        <div className="container">
          <motion.div
            className="solutions-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Industry <span className="text-gradient">Solutions</span></h1>
            <p>
              We don't just build software—we solve business problems. 
              Tailored solutions for every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="solution-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="solution-icon-wrapper">
                  <solution.icon className="solution-icon" size={36} />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
                <div className="solution-features">
                  {solution.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to="/contact" className="solution-link">
                  Discuss your needs <ArrowRight size={16} />
                </Link>
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
            <h2>Don't See Your Industry?</h2>
            <p>We have experience across many sectors. Let's discuss your unique requirements.</p>
            <Link to="/contact" className="btn btn-primary">
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;