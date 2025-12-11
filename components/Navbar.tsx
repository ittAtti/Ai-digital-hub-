import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Cpu, LayoutGrid, BookOpen, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
}

const Navbar: React.FC<NavbarProps> = ({ cart }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path ? "text-emerald-400" : "text-gray-300 hover:text-white";

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
                <Cpu className="text-emerald-500" />
                AI Digital Hub
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/')}`}>Home</Link>
                <Link to="/store" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/store')}`}>Store</Link>
                <Link to="/blog" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/blog')}`}>Blog</Link>
                <Link to="/admin" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/admin')}`}>Admin Lab</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/cart" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white focus:outline-none relative transition">
                <span className="sr-only">View cart</span>
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/4 -translate-y-1/4 bg-emerald-400 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 pb-3">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/store" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Store</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link to="/admin" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Admin Lab</Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} className="text-emerald-400 font-bold block px-3 py-2 rounded-md text-base">Cart ({cartCount})</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;