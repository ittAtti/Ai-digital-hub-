import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Resources & Insights
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Learn how to leverage AI for creating digital assets, marketing strategies, and scaling your online business in 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500 transition duration-300 flex flex-col">
            <div className="h-64 overflow-hidden">
               <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-500"/>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center text-sm text-emerald-400 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-emerald-300">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 mb-6 flex-1">
                {post.excerpt}
              </p>
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-block text-emerald-400 font-semibold hover:text-white transition"
              >
                Read Full Article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;