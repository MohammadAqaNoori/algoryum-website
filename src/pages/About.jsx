import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, Eye, Lightbulb, Handshake, 
  Zap, Shield, Users, ArrowRight, 
  CheckCircle, Star, Rocket
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './About.css';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    desc: 'We build lasting relationships with clients, becoming their trusted technology partner.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    desc: 'We strive for excellence in every line of code, every solution, and every interaction.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    desc: 'We deliver on our promises and maintain transparent communication throughout.',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and challenges.' },
  { step: '02', title: 'Strategy', desc: 'We create a tailored roadmap and technical specification.' },
  { step: '03', title: 'Development', desc: 'We build your solution using agile methodology.' },
  { step: '04', title: 'Testing', desc: 'We ensure quality through rigorous testing and validation.' },
  { step: '05', title: 'Deployment', desc: 'We launch your solution and provide ongoing support.' },
];

const team = [
  { name: 'CEO', role: 'Chief Executive Officer' },
  { name: 'CTO', role: 'Chief Technology Officer' },
  { name: 'Lead Dev', role: 'Lead Developer' },
  { name: 'PM', role: 'Project Manager' },
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

const About = () => {
  return (
    <main className="about">
      {/* Hero */}
      <section className="about-hero">
        <ThreeBackground variant="network" />
        <div className="container">
          <motion.div
            className="about-hero-content"
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
              <Star size={14} /> About Algoryum
            </motion.span>
            <h1>Building the Future of <span className="text-gradient">Intelligent Software</span></h1>
            <p>
              Algoryum is an AI-driven software engineering company that designs, develops, and delivers 
              intelligent digital solutions for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <motion.div
              className="mv-card"
              variants={fadeInUp}
            >
              <div className="mv-icon-wrapper">
                <Target className="mv-icon" size={40} />
              </div>
              <h2>Our Mission</h2>
              <p>
                To empower businesses with intelligent software solutions that drive growth, efficiency, 
                and digital transformation. We combine AI, automation, and modern technology to solve 
                complex business challenges.
              </p>
              <div className="mv-features">
                <span><CheckCircle size={16} /> Growth Focus</span>
                <span><CheckCircle size={16} /> Innovation</span>
                <span><CheckCircle size={16} /> Excellence</span>
              </div>
            </motion.div>
            <motion.div
              className="mv-card"
              variants={fadeInUp}
            >
              <div className="mv-icon-wrapper">
                <Eye className="mv-icon" size={40} />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the leading partner for businesses seeking to leverage AI and technology for 
                transformative growth. We envision a world where every business has access to 
                intelligent solutions that elevate their operations.
              </p>
              <div className="mv-features">
                <span><CheckCircle size={16} /> Market Leader</span>
                <span><CheckCircle size={16} /> Global Impact</span>
                <span><CheckCircle size={16} /> Technology First</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="section values">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Lightbulb size={14} /> Our Values
            </span>
            <h2>What Drives Us</h2>
            <p>Our core values guide every project we undertake</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="value-icon-wrapper">
                  <value.icon className="value-icon" size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="section process">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Rocket size={14} /> Our Process
            </span>
            <h2>How We Work</h2>
            <p>A systematic approach to delivering exceptional results</p>
          </motion.div>

          <div className="process-grid">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="process-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {index < process.length - 1 && (
                  <div className="process-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="section team">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Users size={14} /> Our Team
            </span>
            <h2>Meet the Experts</h2>
            <p>Talented professionals dedicated to your success</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className="team-avatar">
                  <Users size={40} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="team-social">
                  <span>LinkedIn</span>
                  <span>Twitter</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;