import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Download, Layers } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ products, onAddToCart }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 pt-20 pb-24">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full blur-3xl mix-blend-multiply filter"></div>
           <div className="absolute top-40 -left-20 w-72 h-72 bg-lime-500 rounded-full blur-3xl mix-blend-multiply filter"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300 mb-6 tracking-tight">
            AI Digital Products Hub
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Premium AI-generated PDF products: eBooks, prompt packs, templates & marketing kits. Instantly available to scale your business.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/store" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition transform hover:scale-105 flex items-center gap-2"
            >
              Shop Products <ArrowRight size={20} />
            </Link>
            <Link 
              to="/admin" 
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg border border-gray-700 transition"
            >
              Generate with AI
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Generated</h3>
              <p className="text-gray-400">Fresh digital products created automatically with intelligent agents tailored to trending niches.</p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
               <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Downloads</h3>
              <p className="text-gray-400">Get your assets instantly after purchase. Secure delivery via email and dashboard access.</p>
            </div>
            <div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
               <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High-Quality Content</h3>
              <p className="text-gray-400">Professionally designed guides, prompt libraries, and templates vetted for quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
             <h2 className="text-3xl font-bold text-white">Featured Products</h2>
             <p className="text-gray-400 mt-2">Top trending assets generated this week</p>
          </div>
          <Link to="/store" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

       {/* Testimonials */}
       <section className="bg-gray-800 py-16 px-6 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-center text-emerald-300 mb-12">Customer Feedback</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-900 p-6 rounded-xl border-l-4 border-emerald-500">
            <p className="text-gray-300 italic mb-4">“This marketplace helped grow my business with ready‑to‑use AI guides! The prompt packs saved me hours of work.”</p>
            <footer className="text-white font-bold">- Sarah J., Digital Marketer</footer>
          </blockquote>
          <blockquote className="bg-gray-900 p-6 rounded-xl border-l-4 border-emerald-500">
            <p className="text-gray-300 italic mb-4">“Best digital products I’ve ever downloaded. The quality of the AI-generated eBooks is surprisingly deep.”</p>
            <footer className="text-white font-bold">- Mike T., Agency Owner</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;