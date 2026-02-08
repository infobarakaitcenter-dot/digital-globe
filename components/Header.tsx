
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            D
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            DIGITAL<span className="text-blue-500">GLOBE</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <a href="#home" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>HOME</a>
          <a href="#services" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>SERVICES</a>
          <a href="#portfolio" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>PORTFOLIO</a>
          <a href="#contact" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95">GET A QUOTE</a>
        </nav>

        <button className="md:hidden text-2xl text-slate-900">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
