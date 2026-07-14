import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Clock, Zap } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 2000);
  };

  const contactMethods = [
    { icon: Mail, title: 'Email Us', subtitle: 'hello@algoryum.com', desc: 'We reply within 24 hours' },
    { icon: Phone, title: 'Call Us', subtitle: '+93 123 456 789', desc: 'Available 24/7 for emergencies' },
    { icon: MapPin, title: 'Visit Us', subtitle: 'Kabul, Afghanistan', desc: 'Mon-Fri: 9AM - 6PM AST' },
    { icon: MessageCircle, title: 'WhatsApp', subtitle: 'Quick Chat', desc: 'Get instant responses' },
  ];

  const features = [
    { icon: Zap, title: 'Fast Response', desc: 'Get back within 24 hours' },
    { icon: Clock, title: 'Flexible Timing', desc: 'We work with your schedule' },
    { icon: CheckCircle, title: 'Quality Assurance', desc: 'Premium results guaranteed' },
  ];

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <ThreeBackground variant="particles" />
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Get In Touch</span>
            <h1>Let's <span className="text-gradient">Connect</span></h1>
            <p>
              Have a project in mind? We'd love to hear about it. Let's discuss 
              how we can help transform your business with intelligent software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          {/* Contact Methods */}
          <motion.div
            className="contact-methods-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="contact-method-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="method-card-icon">
                  <method.icon size={24} />
                </div>
                <h4>{method.title}</h4>
                <p className="method-subtitle">{method.subtitle}</p>
                <p className="method-desc">{method.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="contact-main-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="form-success">
                  <CheckCircle size={64} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Start Your Project</h3>
                    <p>Tell us about your project and we'll get back to you within 24 hours.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="ai">AI Solutions</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile Apps</option>
                        <option value="automation">Business Automation</option>
                        <option value="cloud">Cloud & Hosting</option>
                        <option value="seo">SEO</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows="5"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="contact-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sidebar-card">
                <h4>Why Work With Us?</h4>
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">
                        <feature.icon size={20} />
                      </div>
                      <div className="feature-text">
                        <h5>{feature.title}</h5>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card sidebar-cta">
                <h4>Prefer a Call?</h4>
                <p>Book a free 30-minute consultation to discuss your project.</p>
                <button className="btn btn-secondary">Book a Meeting</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <motion.div
            className="map-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="map-placeholder">
              <MapPin size={48} />
              <h3>Kabul, Afghanistan</h3>
              <p>Serving clients worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;