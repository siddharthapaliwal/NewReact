import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        <li><Link to="/blog/blog1">Blog1</Link></li>
        <li><Link to="/blog/blog2">Blog2</Link></li>
        <li><Link to="/blog/blog3">Blog3</Link></li>
      </ul>
    </div>
  );
}

export default Blog;
