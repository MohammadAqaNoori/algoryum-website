import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Building2, MessageCircle, Smartphone, ShoppingCart, Bot, ArrowRight, Clock, Star, Send } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Blog.css';

export const blogPosts = [
  {
    id: 1,
    title: 'Why Every Business Needs a Professional Website',
    excerpt: 'In today\'s digital age, your website is often the first interaction potential customers have with your business. A well-designed website builds credibility, provides 24/7 visibility, and serves as a powerful marketing tool.',
    fullContent: `In today's digital age, your website is often the first interaction potential customers have with your business. A well-designed website builds credibility, provides 24/7 visibility, and serves as a powerful marketing tool.

Studies show that 75% of users judge a company's credibility based on their website design. A professional website establishes trust and makes your business appear established and reliable.

Key benefits of a professional website:
• 24/7 Online Presence: Your business never closes
• Credibility: Build trust with potential customers
• Marketing: Reach more customers through digital channels
• Customer Support: Provide information and answers anytime
• Competitive Edge: Stand out from competitors without websites

At Algoryum, we specialize in creating stunning, functional websites that help businesses grow. Contact us today to discuss your project.`,
    category: 'Web Development',
    date: 'December 10, 2025',
    readTime: '5 min read',
    icon: Globe,
  },
  {
    id: 2,
    title: 'The Role of AI in Modern Healthcare',
    excerpt: 'Artificial intelligence is revolutionizing healthcare - from predictive diagnostics to personalized treatment plans.',
    fullContent: `Artificial intelligence is revolutionizing healthcare - from predictive diagnostics to personalized treatment plans. AI technologies are making healthcare more accurate, efficient, and accessible.

Key AI applications in healthcare:
• Medical Imaging Analysis: AI can detect diseases from X-rays, MRIs, and CT scans with remarkable accuracy
• Predictive Analytics: Identify patients at risk of developing certain conditions
• Drug Discovery: Accelerate the development of new medications
• Personalized Treatment: Tailor treatment plans based on individual patient data
• Virtual Health Assistants: Provide 24/7 patient support and triage

At Algoryum, we develop AI-powered healthcare solutions that improve patient outcomes while reducing costs.`,
    category: 'AI & Technology',
    date: 'December 5, 2025',
    readTime: '8 min read',
    icon: Building2,
  },
  {
    id: 3,
    title: 'WhatsApp Business: The Game-Changer for SMBs',
    excerpt: 'Learn how to leverage WhatsApp Business automation to improve customer service, increase sales.',
    fullContent: `Learn how to leverage WhatsApp Business automation to improve customer service, increase sales. With over 2 billion users, WhatsApp is the perfect platform to connect with customers.

Why WhatsApp Business matters:
• Instant Communication: Reach customers where they already are
• Automation: Chatbots can handle common queries 24/7
• Cost-Effective: Much cheaper than traditional SMS marketing
• Rich Media: Share images, videos, and documents easily
• Analytics: Track engagement and improve strategies

Key features to implement:
• Automated greetings and away messages
• Quick replies for common questions
• Labels for customer segmentation
• Automated appointment reminders
• Order tracking and updates

Algoryum can help you set up and optimize your WhatsApp Business presence.`,
    category: 'Business Automation',
    date: 'November 28, 2025',
    readTime: '6 min read',
    icon: MessageCircle,
  },
  {
    id: 4,
    title: 'Mobile App vs. Responsive Website',
    excerpt: 'Choosing between a mobile app and a responsive website depends on your business goals.',
    fullContent: `Choosing between a mobile app and a responsive website depends on your business goals. Both have their advantages, and sometimes the best solution includes both.

When to choose a Mobile App:
• User engagement is critical
• Need push notifications
• Offline functionality required
• Complex interactions or calculations
• Access to device features (camera, GPS, etc.)

When to choose a Responsive Website:
• Broader reach (no installation needed)
• Lower development cost
• Easier to maintain and update
• Better for content-focused businesses
• SEO advantages

The Hybrid Approach:
Many businesses benefit from both - a responsive website for discovery and a mobile app for deeper engagement. Algoryum can help you choose the right strategy.`,
    category: 'Mobile Development',
    date: 'November 20, 2025',
    readTime: '7 min read',
    icon: Smartphone,
  },
  {
    id: 5,
    title: 'The Future of E-Commerce: Trends to Watch in 2026',
    excerpt: 'From AI-powered personalization to AR shopping experiences, discover the trends shaping online retail.',
    fullContent: `From AI-powered personalization to AR shopping experiences, discover the trends shaping online retail. The e-commerce landscape continues to evolve rapidly.

Top trends for 2026:
• AI-Powered Personalization: Products and recommendations tailored to individual preferences
• AR Shopping: Try before you buy with augmented reality
• Voice Commerce: Shopping via smart speakers and voice assistants
• Social Commerce: Buy directly from social media platforms
• Sustainable E-Commerce: Eco-friendly products and packaging
• Hyper-Fast Delivery: Same-day and even hour-based delivery

How to prepare:
• Invest in AI and machine learning
• Optimize for voice search
• Enhance mobile experience
• Implement sustainable practices
• Build strong social media presence

Algoryum stays ahead of e-commerce trends to deliver cutting-edge solutions.`,
    category: 'E-Commerce',
    date: 'November 15, 2025',
    readTime: '6 min read',
    icon: ShoppingCart,
  },
  {
    id: 6,
    title: 'How Machine Learning is Transforming Business Operations',
    excerpt: 'Machine learning isn\'t just for tech giants. Learn how SMBs can leverage ML to improve efficiency.',
    fullContent: `Machine learning isn't just for tech giants. Learn how SMBs can leverage ML to improve efficiency and competitive advantage.

Accessible ML applications for SMBs:
• Customer Behavior Prediction: Anticipate customer needs and preferences
• Inventory Optimization: Predict demand and reduce waste
• Fraud Detection: Identify suspicious transactions in real-time
• Email Filtering: Automatically categorize and prioritize communications
• Chatbots: Provide instant customer support without human intervention

Getting Started:
• Start with available ML APIs (no need to build from scratch)
• Identify a specific business problem
• Clean and prepare your data
• Start small and scale gradually
• Measure ROI and iterate

ML is no longer exclusive to large enterprises. Algoryum helps businesses of all sizes implement practical ML solutions.`,
    category: 'AI & Technology',
    date: 'November 8, 2025',
    readTime: '9 min read',
    icon: Bot,
  },
];

const categories = ['All', 'Web Development', 'AI & Technology', 'Business Automation', 'Mobile Development', 'E-Commerce'];

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

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <ThreeBackground variant="codes" />
        <div className="container">
          <motion.div
            className="blog-hero-content"
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
              <Star size={14} /> Blog & Insights
            </motion.span>
            <h1>Blog & <span className="text-gradient">Insights</span></h1>
            <p>
              Stay updated with the latest trends in technology, software development, 
              and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <Section className="blog-categories">
        <div className="container">
          <div className="categories-list">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog Grid */}
      <Section className="section blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="blog-card"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="blog-image">
                  <post.icon size={48} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="read-time">
                      <Clock size={14} /> {post.readTime}
                    </span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="section newsletter">
        <div className="container">
          <motion.div
            className="newsletter-content"
            variants={fadeInUp}
          >
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest insights and updates delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">
                Subscribe
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default Blog;