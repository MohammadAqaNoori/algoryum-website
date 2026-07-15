import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Bot, Globe, Smartphone, MessageCircle, 
  Building2, GraduationCap, ShoppingCart, 
  HomeIcon, Factory, DollarSign, ArrowRight, 
  Users, Clock, Award, Zap, Shield, 
  Handshake, Rocket, CheckCircle,
  ArrowUpRight, Star
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Home.css';

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support' },
];

const services = [
  {
    icon: Bot,
    title: 'AI Solutions',
    desc: 'AI-powered systems, machine learning, NLP, and intelligent automation that transform your business operations.',
    path: '/services/ai',
    features: ['Machine Learning', 'NLP', 'Computer Vision'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Corporate websites, e-commerce platforms, business portals, and custom web applications.',
    path: '/services/web',
    features: ['E-Commerce', 'CMS', 'Custom Web Apps'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications for iOS and Android that engage your customers.',
    path: '/services/mobile',
    features: ['iOS', 'Android', 'Flutter'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business',
    desc: 'Automate customer communication, orders, and support through WhatsApp integration.',
    path: '/services/whatsapp',
    features: ['Automation', 'Chatbots', 'CRM Integration'],
  },
];

const industries = [
  { name: 'Healthcare', icon: Building2 },
  { name: 'Education', icon: GraduationCap },
  { name: 'E-Commerce', icon: ShoppingCart },
  { name: 'Finance', icon: DollarSign },
  { name: 'Real Estate', icon: HomeIcon },
  { name: 'Manufacturing', icon: Factory },
];

const projects = [
  {
    name: 'NEEL Clinic',
    category: 'Healthcare',
    description: 'Appointment booking system with AI voice agent',
    image: '/images/projects/NeelClinic.png',
  },
  {
    name: 'Afghan Smile',
    category: 'Healthcare',
    description: 'Dental clinic database application',
    image: '/images/projects/AfghanSmile.jpeg',
  },
  {
    name: 'QADAM Agency',
    category: 'Business',
    description: 'Digital agency website with MySQL',
    image: '/images/projects/QadamProject.jpeg',
  },
  {
    name: 'Aryan Nezhad School',
    category: 'Education',
    description: 'School management database system',
    image: '/images/projects/AryenNezhadSchool.png',
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Strategic Approach',
    desc: 'We don\'t just build software—we solve business problems with strategic technology solutions.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'Agile development process ensures quick turnaround without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Enterprise Quality',
    desc: 'Scalable, secure, and maintainable code that grows with your business.',
  },
  {
    icon: Handshake,
    title: 'Dedicated Support',
    desc: '24/7 support and maintenance to keep your systems running smoothly.',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Section = ({ children, className, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section 
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      id={id}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <ThreeBackground variant="particles" />
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Zap size={16} /> AI-Driven Software Engineering
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Intelligent Solutions for <span className="text-gradient">Growing Businesses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We build software that helps businesses grow through AI, automation, and custom digital solutions. 
              From startups to enterprises, we transform ideas into scalable technology.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <Section className="section services-overview">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Star size={14} /> Our Services
            </span>
            <h2>Comprehensive Software Solutions</h2>
            <p>End-to-end development services tailored to your business needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="service-icon-wrapper">
                  <service.icon className="service-icon" size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-features">
                  {service.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      <CheckCircle size={12} /> {feature}
                    </span>
                  ))}
                </div>
                <Link to={service.path} className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="section industries">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Building2 size={14} /> Industries We Serve
            </span>
            <h2>Solutions for Every Sector</h2>
            <p>Deep expertise across multiple industries</p>
          </motion.div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="industry-card"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <industry.icon className="industry-icon" size={40} />
                <span className="industry-name">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Recent Projects */}
      <Section className="section projects" id="projects">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Rocket size={14} /> Our Work
            </span>
            <h2>Recent Projects</h2>
            <p>Real solutions we've built for real clients</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <Building2 size={64} />
                  )}
                  <div className="project-overlay">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="projects-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/portfolio" className="btn btn-dark">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            variants={fadeInUp}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <p>Let's discuss how AI and custom software can accelerate your growth.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default Home;

// ArrowDown icon component
const ArrowDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
);