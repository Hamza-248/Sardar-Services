import React from 'react';
import { Phone, ArrowRight, Star, Heart, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-50 text-slate-900 min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Image - Comfy Living Room */}
      <div className="absolute inset-0 z-0">
         <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop" 
          alt="Cozy Modern Living Room" 
          className="w-full h-full object-cover"
        />
        {/* Soft White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
        
        {/* Playful color bleeds - adjusted for light mode */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-300/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-300/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8 animate-fade-in">
             <Star size={16} className="text-yellow-400 fill-yellow-400" />
             <span className="text-emerald-700 font-bold text-sm">Top Rated in Lahore</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
            Make Your Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-pink-500 to-purple-500">
              Feel Like New.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
             From fixing a flickering light to painting your dream room, we handle the hard work so you can relax.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
               onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
               }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-pink-600 hover:from-emerald-600 hover:to-pink-700 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transform hover:-translate-y-1"
            >
              Explore Services <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => window.open('https://wa.me/923149988398', '_blank')}
              className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Phone size={20} className="text-emerald-600" /> Instant Call
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
            <div className="flex flex-col gap-2">
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 shadow-sm"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 shadow-sm"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700 shadow-sm">+2k</div>
               </div>
               <p className="text-sm text-slate-500 font-semibold">Happy Families</p>
            </div>
            
             <div className="flex flex-col gap-1">
               <ShieldCheck className="text-emerald-500" size={28} />
               <p className="font-bold text-slate-800">Verified Pros</p>
            </div>

            <div className="flex flex-col gap-1">
               <Heart className="text-pink-500" size={28} />
               <p className="font-bold text-slate-800">Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};