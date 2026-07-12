import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, User, Code, Globe, Send } from 'lucide-react';
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
            <h1>Let's <span className="text-gradient">Connect</span></h1>
            <p>
              Ready to transform your business with intelligent software solutions? 
              Let's discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p>
                Have a project in mind? We'd love to hear about it. Fill out the form 
                or reach out directly through any of these channels.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <Mail className="method-icon" size={20} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@algoryum.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <Phone className="method-icon" size={20} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+93 123 456 789</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <MapPin className="method-icon" size={20} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Kabul, Afghanistan</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon-wrapper">
                    <MessageCircle className="method-icon" size={20} />
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link"><User size={18} /></a>
                <a href="#" className="social-link"><Code size={18} /></a>
                <a href="#" className="social-link"><Globe size={18} /></a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Start Your Project</h3>
                <p>Tell us about your project and we'll get back to you within 24 hours.</p>

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
                    <option value="25k+">$25,000+</option>
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

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <div className="map-placeholder">
            <MapPin size={48} />
            <p>Kabul, Afghanistan</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;