import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-2.5 rounded-xl text-white shadow-xl group-hover:shadow-emerald-500/20 group-hover:scale-105 transition-all duration-300 border border-slate-700">
                <Hammer size={22} fill="currentColor" className="text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <div className="font-extrabold text-2xl tracking-tighter text-slate-900 leading-none">
                Khan<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Services</span><span className="text-pink-500">.</span>
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 font-bold ml-0.5">Expert Handyman</span>
            </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Reviews', 'Map'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-pink-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => window.open('https://wa.me/923149988398', '_blank')}
            className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-slate-500/20 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Phone size={18} className="fill-white" /> Book Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 p-6 md:hidden flex flex-col gap-4 animate-fade-in origin-top shadow-xl">
          {['Home', 'Services', 'Reviews', 'Map'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-800 font-bold text-lg py-3 border-b border-slate-100 hover:text-pink-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
           <button 
            onClick={() => window.open('https://wa.me/923149988398', '_blank')}
            className="bg-gradient-to-r from-emerald-500 to-pink-500 text-white w-full py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 mt-4 shadow-lg"
          >
            <Phone size={20} fill="currentColor" /> Call / WhatsApp
          </button>
        </div>
      )}
    </header>
  );
};