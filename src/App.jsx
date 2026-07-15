import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* Service detail pages */}
          <Route path="/services/ai" element={<Services />} />
          <Route path="/services/web" element={<Services />} />
          <Route path="/services/mobile" element={<Services />} />
          <Route path="/services/whatsapp" element={<Services />} />
          <Route path="/services/cloud" element={<Services />} />
          <Route path="/services/seo" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;