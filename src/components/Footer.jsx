import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, User, Code, Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'AI Solutions', path: '/services/ai' },
  { name: 'Web Development', path: '/services/web' },
  { name: 'Mobile Apps', path: '/services/mobile' },
  { name: 'WhatsApp Integration', path: '/services/whatsapp' },
  { name: 'Cloud & Hosting', path: '/services/cloud' },
  { name: 'SEO', path: '/services/seo' },
];

const contactInfo = [
  { icon: Mail, text: 'algoryum.ai@gmail.com' },
  { icon: Phone, text: '+93 70 8824113' },
  { icon: MessageCircle, text: 'WhatsApp: +93 70 8824113' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: User, url: '#' },
  { name: 'GitHub', icon: Code, url: '#' },
  { name: 'Website', icon: Globe, url: '#' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/algoryumLogo.jpeg" alt="Algoryum" />
            </Link>
            <p className="footer-desc">
              Algoryum is an AI-driven software engineering company that designs, develops, and delivers intelligent digital solutions for businesses.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} className="social-link" aria-label={social.name}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <div className="contact-icon-wrapper">
                    <info.icon size={16} />
                  </div>
                  {info.text}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary footer-cta">
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Algoryum. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;