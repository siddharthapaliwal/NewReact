import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
// Import components
import Home from './Home/Home';
import Home1 from './Home/Home1';
import Home2 from './Home/Home2';
import Home3 from './Home/Home3';
import About from './About/About';
import About1 from './About/About1';
import About2 from './About/About2';
import About3 from './About/About3';
import Blog from './Blog/Blog';
import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2';
import Blog3 from './Blog/Blog3';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home/home1" element={<Home1 />} />
          <Route path="/home/home2" element={<Home2 />} />
          <Route path="/home/home3" element={<Home3 />} />

          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/about1" element={<About1 />} />
          <Route path="/about/about2" element={<About2 />} />
          <Route path="/about/about3" element={<About3 />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog1" element={<Blog1 />} />
          <Route path="/blog/blog2" element={<Blog2 />} />
          <Route path="/blog/blog3" element={<Blog3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
