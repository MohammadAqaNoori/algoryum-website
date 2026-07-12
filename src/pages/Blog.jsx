import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Building2, MessageCircle, Smartphone, ShoppingCart, Bot, ArrowRight, Clock, Calendar } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import './Blog.css';

const blogPosts = [
  {
    title: 'Why Every Business Needs a Professional Website',
    excerpt: 'In today\'s digital age, your website is often the first interaction potential customers have with your business. Here\'s why it matters more than ever.',
    category: 'Web Development',
    date: 'December 10, 2025',
    readTime: '5 min read',
    icon: Globe,
  },
  {
    title: 'The Role of AI in Modern Healthcare',
    excerpt: 'Artificial intelligence is revolutionizing healthcare - from predictive diagnostics to personalized treatment plans. Discover how AI is saving lives.',
    category: 'AI & Technology',
    date: 'December 5, 2025',
    readTime: '8 min read',
    icon: Building2,
  },
  {
    title: 'WhatsApp Business: The Game-Changer for SMBs',
    excerpt: 'Learn how to leverage WhatsApp Business automation to improve customer service, increase sales, and streamline communications.',
    category: 'Business Automation',
    date: 'November 28, 2025',
    readTime: '6 min read',
    icon: MessageCircle,
  },
  {
    title: 'Mobile App vs. Responsive Website: What\'s Right for Your Business?',
    excerpt: 'Choosing between a mobile app and a responsive website depends on your business goals. We break down the pros and cons of each.',
    category: 'Mobile Development',
    date: 'November 20, 2025',
    readTime: '7 min read',
    icon: Smartphone,
  },
  {
    title: 'The Future of E-Commerce: Trends to Watch in 2026',
    excerpt: 'From AI-powered personalization to AR shopping experiences, discover the trends shaping the future of online retail.',
    category: 'E-Commerce',
    date: 'November 15, 2025',
    readTime: '6 min read',
    icon: ShoppingCart,
  },
  {
    title: 'How Machine Learning is Transforming Business Operations',
    excerpt: 'Machine learning isn\'t just for tech giants. Learn how small and medium businesses can leverage ML to improve efficiency.',
    category: 'AI & Technology',
    date: 'November 8, 2025',
    readTime: '9 min read',
    icon: Bot,
  },
];

const categories = ['All', 'Web Development', 'AI & Technology', 'Business Automation', 'Mobile Development', 'E-Commerce'];

const Blog = () => {
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
            <h1>Blog & <span className="text-gradient">Insights</span></h1>
            <p>
              Stay updated with the latest trends in technology, software development, 
              and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-categories">
        <div className="container">
          <div className="categories-list">
            {categories.map((category) => (
              <button key={category} className={`category-btn ${category === 'All' ? 'active' : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                    <span className="read-time"><Clock size={14} /> {post.readTime}</span>
                    <Link to="/blog/post" className="read-more">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest insights and updates delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Blog;