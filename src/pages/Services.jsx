import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Globe, Smartphone, Settings, 
  Cloud, Search, ArrowRight, CheckCircle, Star
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Services.css';

const serviceCategories = [
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Solutions',
    shortDesc: 'Intelligent systems that transform your business',
    services: [
      { name: 'AI Agents', desc: 'Autonomous AI agents that handle complex tasks' },
      { name: 'AI Chatbots', desc: 'Smart conversational interfaces for customer support' },
      { name: 'Machine Learning', desc: 'Predictive models and data analysis' },
      { name: 'NLP', desc: 'Natural language processing for text analysis' },
      { name: 'Computer Vision', desc: 'Image recognition and visual AI systems' },
    ],
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    shortDesc: 'Modern websites and web applications',
    services: [
      { name: 'Corporate Websites', desc: 'Professional business web presence' },
      { name: 'Business Portals', desc: 'Internal and external business platforms' },
      { name: 'E-Commerce', desc: 'Online stores with secure payments' },
      { name: 'Landing Pages', desc: 'High-converting promotional pages' },
      { name: 'CMS Development', desc: 'Custom content management systems' },
    ],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Apps',
    shortDesc: 'Native and cross-platform applications',
    services: [
      { name: 'Android Apps', desc: 'Native Android development' },
      { name: 'iOS Apps', desc: 'Native iOS development' },
      { name: 'Flutter Apps', desc: 'Cross-platform with single codebase' },
      { name: 'React Native', desc: 'JavaScript-based mobile apps' },
      { name: 'PWA', desc: 'Progressive web applications' },
    ],
  },
  {
    id: 'automation',
    icon: Settings,
    title: 'Business Automation',
    shortDesc: 'Streamline your operations with automation',
    services: [
      { name: 'WhatsApp Business', desc: 'Customer communication automation' },
      { name: 'Telegram Bots', desc: 'Automated Telegram services' },
      { name: 'Email Automation', desc: 'Automated email campaigns' },
      { name: 'Workflow Automation', desc: 'Streamline business processes' },
      { name: 'CRM Integration', desc: 'Connect and automate CRM workflows' },
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    shortDesc: 'Scalable and secure cloud solutions',
    services: [
      { name: 'Cloud Hosting', desc: 'Reliable hosting solutions' },
      { name: 'VPS', desc: 'Virtual private servers' },
      { name: 'AWS', desc: 'Amazon Web Services' },
      { name: 'Azure', desc: 'Microsoft Azure solutions' },
      { name: 'Deployment', desc: 'CI/CD and DevOps' },
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Digital Marketing',
    shortDesc: 'Boost your online visibility',
    services: [
      { name: 'Technical SEO', desc: 'Site optimization for search engines' },
      { name: 'Local SEO', desc: 'Local business visibility' },
      { name: 'On-Page SEO', desc: 'Content and meta optimization' },
      { name: 'Speed Optimization', desc: 'Fast loading websites' },
      { name: 'SEO Audit', desc: 'Comprehensive SEO analysis' },
    ],
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

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <ThreeBackground variant="codes" />
        <div className="container">
          <motion.div
            className="services-hero-content"
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
              <Star size={14} /> Our Services
            </motion.span>
            <h1>Our <span className="text-gradient">Services</span></h1>
            <p>
              Comprehensive software solutions tailored to your business needs. 
              From AI to web development, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="section services-list">
        <div className="container">
          <div className="services-category-grid">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                className={`category-card ${activeCategory.id === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="category-icon-wrapper">
                  <category.icon className="category-icon" size={24} />
                </div>
                <h3>{category.title}</h3>
                <p>{category.shortDesc}</p>
              </motion.div>
            ))}
          </div>

          {/* Services Detail */}
          <motion.div
            className="services-detail"
            key={activeCategory.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="detail-header">
              <div className="detail-icon-wrapper">
                <activeCategory.icon className="detail-icon" size={48} />
              </div>
              <div>
                <h2>{activeCategory.title}</h2>
                <p>{activeCategory.shortDesc}</p>
              </div>
            </div>

            <div className="detail-services">
              {activeCategory.services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="detail-service"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="detail-service-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4>{service.name}</h4>
                    <p>{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/contact" className="btn btn-primary">
              Get Started with {activeCategory.title}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="section cta">
        <div className="container">
          <motion.div
            className="cta-content"
            variants={fadeInUp}
          >
            <h2>Need a Custom Solution?</h2>
            <p>Let's discuss your specific requirements and build something extraordinary.</p>
            <Link to="/contact" className="btn btn-primary">
              Talk to Our Experts
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default Services;