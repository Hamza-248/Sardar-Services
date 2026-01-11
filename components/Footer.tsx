import React from 'react';
import { Phone, MapPin, Hammer, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-500 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
                 <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-2.5 rounded-xl text-white shadow-sm border border-slate-700">
                    <Hammer size={20} fill="currentColor" className="text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <div className="font-extrabold text-2xl tracking-tighter text-slate-900 leading-none">
                    Khan<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Services</span><span className="text-pink-500">.</span>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 font-bold ml-0.5">Expert Handyman</span>
                </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 font-medium">
              Your trusted partner for home maintenance in Pakistan. We bring comfort back to your home with skilled hands and honest work.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-wider mb-6 text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'Services', 'Reviews', 'Map'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="flex items-center gap-2 hover:text-pink-500 transition-colors group text-slate-600">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-pink-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-wider mb-6 text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone size={14} fill="currentColor" /> 
                </div>
                <span className="text-slate-600 group-hover:text-slate-900 cursor-pointer transition-colors font-medium">+92 314 9988398</span>
              </li>
              <li className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-pink-500">
                  <MapPin size={14} /> 
                </div>
                <span className="text-slate-600 font-medium">Lahore, Pakistan</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Khan Services. Built with care.</p>
        </div>
      </div>
    </footer>
  );
};