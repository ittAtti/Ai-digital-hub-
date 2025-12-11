import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-gray-800 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
        <div>
          <h3 className="text-white font-bold mb-4">AI Digital Hub</h3>
          <p className="text-sm">The future of digital commerce, powered by generative AI.</p>
        </div>
        <div>
          <h4 className="text-emerald-500 font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">eBooks</a></li>
            <li><a href="#" className="hover:text-white">Prompts</a></li>
            <li><a href="#" className="hover:text-white">Templates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-emerald-500 font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-emerald-500 font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-gray-600">© 2026 AI Digital Products Hub. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;