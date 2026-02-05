import React from 'react';
import { CartItem } from '../types';
import { Trash2, Lock, CreditCard, ArrowRight, ExternalLink } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemove, onClear }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.08;
  const finalTotal = total + tax;
  
  // The Stripe Payment Link provided by the user
  const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_4gM28r0k5dxs5JB6lq93y00';

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <CreditCard className="text-emerald-500" /> Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="bg-gray-800 p-16 rounded-2xl text-center border border-gray-700 shadow-xl">
          <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="text-gray-500" size={32} />
          </div>
          <p className="text-gray-300 text-xl mb-6 font-medium">Your cart is currently empty.</p>
          <a href="#/store" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
            Browse Marketplace <ArrowRight size={18} />
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-2 px-2">
              <span className="text-gray-400 text-sm">{cart.length} Items</span>
              <button 
                onClick={onClear}
                className="text-gray-500 hover:text-red-400 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Clear All
              </button>
            </div>
            {cart.map(item => (
              <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-2xl flex items-center justify-between border border-gray-700 hover:border-gray-600 transition shadow-lg animate-fadeIn">
                <div className="flex items-center space-x-5">
                  <div className="relative">
                    <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded-xl shadow-inner" />
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                      AI
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{item.category}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-mono font-bold">${item.price.toFixed(2)}</span>
                      <span className="text-gray-600 text-xs">x{item.quantity}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-full transition"
                  title="Remove from cart"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 h-fit sticky top-24 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Order Details
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Processing Fee</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-gray-700 flex justify-between items-end">
                <div>
                  <span className="text-gray-400 text-sm block">Total Amount</span>
                  <span className="text-3xl font-extrabold text-white tracking-tighter">
                    <span className="text-emerald-500">$</span>{finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* 
              Using an <a> tag with target="_blank" is the most reliable way 
              to ensure Stripe opens in environments that restrict programmatic redirects.
            */}
            <a 
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 mb-4 transition-all shadow-lg shadow-emerald-500/20 transform hover:-translate-y-1 active:scale-95 text-center"
            >
              Checkout with Stripe <ExternalLink size={18} />
            </a>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 py-3 px-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
                <Lock size={16} className="text-gray-500" />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Secure Payment Management</span>
              </div>
              <p className="text-[10px] text-gray-500 text-center leading-relaxed">
                You will be redirected to Stripe's secure portal. Payments are 100% encrypted and processed directly by Stripe.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;