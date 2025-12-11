import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, FileQuestion } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <FileQuestion size={64} className="text-gray-600 mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Article Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">We couldn't find the blog post you're looking for.</p>
        <Link 
          to="/blog" 
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          View All Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen animate-fadeIn">
      <Link to="/blog" className="flex items-center text-gray-400 hover:text-emerald-400 mb-8 transition">
        <ArrowLeft size={20} className="mr-2" /> Back to Blog
      </Link>
      
      <article>
        <header className="mb-10 text-center">
          <div className="text-emerald-400 font-medium mb-4 uppercase tracking-wider text-sm">{post.date} • {post.author}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">{post.title}</h1>
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-10 border border-gray-700">
             <img src={post.imageUrl} alt={post.title} className="w-full object-cover" />
          </div>
        </header>

        {/* 
          Using dangerouslySetInnerHTML here because the content is static and trusted 
          from our own constants file. In a real app with user UGC, this must be sanitized.
        */}
        <div 
          className="prose prose-lg prose-invert mx-auto text-gray-300 prose-headings:text-emerald-300 prose-a:text-emerald-400"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <div className="mt-20 pt-10 border-t border-gray-800 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Ready to start selling?</h3>
        <Link to="/admin" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-lg font-bold transition">
          Generate Your First Product
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;