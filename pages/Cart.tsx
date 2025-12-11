import React from 'react';
import { CartItem } from '../types';
import { Trash2, Lock, CreditCard } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemove, onClear }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = total * 0.08;
  const finalTotal = total + tax;

  const handleCheckout = () => {
    // Redirect to the provided Stripe Payment Link
    window.location.href = 'https://buy.stripe.com/test_eVq5kCfUW55C0LXduf4ZG00';
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-gray-800 p-10 rounded-xl text-center border border-gray-700">
          <p className="text-gray-400 text-lg mb-6">Your cart is empty.</p>
          <a href="#/store" className="text-emerald-400 hover:text-white font-bold">Start Shopping</a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between border border-gray-700">
                <div className="flex items-center space-x-4">
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.category}</p>
                    <span className="text-emerald-400 font-mono">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-4 border-t border-gray-700">
                <span>Total</span>
                <span className="text-emerald-400">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 mb-3 transition transform hover:scale-[1.02]"
            >
              Checkout with Stripe <Lock size={16} />
            </button>
            <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
              <CreditCard size={12} /> Secure 256-bit SSL Encrypted
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;