import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingBag, Star, CheckCircle, ArrowLeft } from 'lucide-react';

interface ProductDetailsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products, onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-10 text-white">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
       <Link to="/store" className="flex items-center text-gray-400 hover:text-emerald-400 mb-8 transition">
        <ArrowLeft size={20} className="mr-2" /> Back to Store
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
          <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {product.category}
            </span>
             {product.aiGenerated && (
               <span className="bg-lime-500/20 text-lime-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                AI Powered
              </span>
             )}
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
          <div className="flex items-center text-yellow-400 mb-6 space-x-1">
             <Star fill="currentColor" size={20}/>
             <Star fill="currentColor" size={20}/>
             <Star fill="currentColor" size={20}/>
             <Star fill="currentColor" size={20}/>
             <Star fill="currentColor" size={20}/>
             <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
          </div>

          <div className="text-3xl font-bold text-white mb-6">${product.price.toFixed(2)}</div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
            <h3 className="text-white font-bold mb-4">What's Included:</h3>
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <CheckCircle className="text-emerald-400 mr-3 shrink-0" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => onAddToCart(product)}
            className="w-full py-4 bg-white hover:bg-gray-200 text-black font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition"
          >
            <ShoppingBag /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;