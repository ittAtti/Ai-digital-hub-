import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-emerald-500/50 transition duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 group flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        {product.aiGenerated && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            AI Generated
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <span className="text-xs font-medium text-emerald-400">{product.category}</span>
           <div className="flex items-center text-yellow-400 text-xs">
             <Star size={12} fill="currentColor" />
             <span className="ml-1">{product.rating}</span>
           </div>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition">{product.title}</h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
          <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-400 transition"
          >
            <ShoppingBag size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;