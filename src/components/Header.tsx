
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AnimatedCallButton from '@/components/AnimatedCallButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-30">
      {/* Top Contact Bar */}
      <div className="bg-white text-gray-900 text-xs md:text-sm flex justify-between items-center py-2">
        {/* Phone Number */}
        <div className="flex items-center space-x-2 ml-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm13 7a9 9 0 01-9 9c-1.657 0-3-1.343-3-3v-1a1 1 0 011-1h2a1 1 0 011 1v1c0 .552.448 1 1 1a7 7 0 007-7c0-.552-.448-1-1-1h-1a1 1 0 01-1-1V7a1 1 0 011-1h1c1.657 0 3 1.343 3 3a9 9 0 01-9 9z"/></svg>
          <a href="tel:+254751974764" className="text-blue-600 font-bold text-lg md:text-xl">+254 751 974 764</a>
        </div>
        {/* Cart and Menu */}
        <div className="flex items-center space-x-2 mr-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg text-base hover:scale-105 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L3 9z"/></svg>
          </button>
          <button onClick={toggleMenu} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg text-base hover:scale-105 transition-transform">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
