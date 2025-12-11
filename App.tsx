import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import ProductDetails from './pages/ProductDetails';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Cart from './pages/Cart';
import { Product, CartItem } from './types';
import { MOCK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => setCart([]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-gray-100 font-sans flex flex-col">
        <Navbar cart={cart} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/store" element={<Store products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetails products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/admin" element={<Admin onAddProduct={handleAddProduct} products={products} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/cart" element={<Cart cart={cart} onRemove={handleRemoveFromCart} onClear={handleClearCart} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;