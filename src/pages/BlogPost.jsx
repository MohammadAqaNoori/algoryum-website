import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from './Blog';
import ThreeBackground from '../components/ThreeBackground';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <main className="blog-post-page">
        <div className="container">
          <div className="not-found">
            <h1>Blog Post Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const formatContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <main className="blog-post-page">
      {/* Hero */}
      <section className="blog-post-hero">
        <ThreeBackground variant="codes" />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/blog" className="back-link">
              <ArrowLeft size={18} /> Back to Blog
            </Link>
            <span className="post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span><Calendar size={16} /> {post.date}</span>
              <span><Clock size={16} /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="blog-post-content">
        <div className="container">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="post-icon">
              <post.icon size={64} />
            </div>
            <div className="post-body">
              {formatContent(post.fullContent)}
            </div>
          </motion.article>

          {/* Share & Navigation */}
          <motion.div 
            className="post-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/blog" className="btn btn-secondary">
              <ArrowLeft size={18} /> More Articles
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Need Help? Contact Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;