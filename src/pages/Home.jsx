import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, Globe, Smartphone, MessageCircle, 
  Building2, GraduationCap, ShoppingCart, 
  HomeIcon, Factory, DollarSign, Utensils, 
  Landmark, ArrowRight, Star, Users, 
  Clock, Award, CheckCircle, Zap, Shield, 
  Handshake, Rocket, Quote 
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Home.css';

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: Award },
  { number: '30+', label: 'Happy Clients', icon: Users },
  { number: '5+', label: 'Years Experience', icon: Clock },
  { number: '24/7', icon: Clock, label: 'Support' },
];

const services = [
  {
    icon: Bot,
    title: 'AI Solutions',
    desc: 'AI-powered systems, machine learning, NLP, and intelligent automation that transform your business operations.',
    path: '/services/ai',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Corporate websites, e-commerce platforms, business portals, and custom web applications.',
    path: '/services/web',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications for iOS and Android that engage your customers.',
    path: '/services/mobile',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business',
    desc: 'Automate customer communication, orders, and support through WhatsApp integration.',
    path: '/services/whatsapp',
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
    description: 'Appointment booking system and patient management portal',
    image: '/images/projects/NeelClinic.png',
  },
  {
    name: 'Afghan Smile',
    category: 'Healthcare',
    description: 'Dental clinic website with online booking',
    image: '/images/projects/afghan-smile.jpg',
  },
  {
    name: 'QADAM Agency',
    category: 'Business',
    description: 'Digital agency portfolio and client management system',
    image: '/images/projects/qadam.jpg',
  },
  {
    name: 'Aryan Nezhad School',
    category: 'Education',
    description: 'Complete school management system with parent portal',
    image: '/images/projects/aryan-nezhad.jpg',
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

const testimonials = [
  {
    quote: 'Algoryum transformed our business with their AI solutions. The automation they implemented saved us 40% in operational costs.',
    name: 'Ahmad Reza',
    position: 'CEO, NEEL Clinic',
  },
  {
    quote: 'Professional, responsive, and technically excellent. They delivered our e-commerce platform on time and exceeded expectations.',
    name: 'Sarah Mahmoud',
    position: 'Founder, Afghan Smile',
  },
  {
    quote: 'Their team understands business needs, not just code. They built solutions that actually drive growth for our company.',
    name: 'Mohammad Nasser',
    position: 'Director, QADAM Agency',
  },
];

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <ThreeBackground variant="particles" />
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">AI-Driven Software Engineering</span>
            <h1>
              Intelligent Solutions for <span className="text-gradient">Growing Businesses</span>
            </h1>
            <p>
              We build software that helps businesses grow through AI, automation, and custom digital solutions. 
              From startups to enterprises, we transform ideas into scalable technology.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Services</span>
            <h2>Comprehensive Software Solutions</h2>
            <p>End-to-end development services tailored to your business needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-icon-wrapper">
                  <service.icon className="service-icon" size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.path} className="service-link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section industries">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Industries We Serve</span>
            <h2>Solutions for Every Sector</h2>
            <p>Deep expertise across multiple industries</p>
          </motion.div>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="industry-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <industry.icon className="industry-icon" size={40} />
                <span className="industry-name">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Our Work</span>
            <h2>Recent Projects</h2>
            <p>Real solutions we've built for real clients</p>
          </motion.div>

          <div className="projects-grid">
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
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <Building2 size={64} />
                  )}
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="projects-cta">
            <Link to="/portfolio" className="btn btn-dark">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Algoryum */}
      <section className="section why-choose">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Why Algoryum</span>
            <h2>More Than Just a Development Shop</h2>
            <p>We become your strategic technology partner</p>
          </motion.div>

          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-icon-wrapper">
                  <item.icon className="why-icon" size={32} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses across industries</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Quote className="testimonial-quote-icon" size={48} />
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Users size={24} />
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-position">{testimonial.position}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how AI and custom software can accelerate your growth.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Consultation
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;