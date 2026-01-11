import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { Review } from '../types';

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Mrs. Siddiqui',
    rating: 5,
    date: 'DHA, Lahore',
    comment: 'Very respectable behavior. They fixed the UPS wiring issue that was bothering us for months. Highly recommended for families.',
  },
  {
    id: '2',
    name: 'Bilal Bhai',
    rating: 5,
    date: 'Gulberg',
    comment: 'Best service for AC gas filling. The cooling is perfect now. They came on time and didn\'t create any mess.',
  },
  {
    id: '3',
    name: 'Uncle Majed',
    rating: 5,
    date: 'Bahria Town',
    comment: 'I called them for water tank cleaning and motor repair. Honest work and reasonable rates compared to others in the market.',
  },
  {
    id: '4',
    name: 'Hina Faisal',
    rating: 4,
    date: 'Islamabad',
    comment: 'Got my drawing room painted. The color selection advice was good and the finish is smooth. Very happy with the new look.',
  },
  {
    id: '5',
    name: 'Dr. Usman',
    rating: 5,
    date: 'Johar Town',
    comment: 'Professional carpenter. Fixed the jammed doors and installed new locks very quickly. Good tools and skilled worker.',
  }
];

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviewsData.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => setActiveIndex((current) => (current + 1) % reviewsData.length);
  const prevSlide = () => setActiveIndex((current) => (current - 1 + reviewsData.length) % reviewsData.length);

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[100px] mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[100px] mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
           <span className="text-pink-500 font-bold tracking-widest uppercase text-xs">Happy Neighbors</span>
           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">What People Say</h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto px-4 md:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slide Card */}
          <div className="relative min-h-[400px] flex items-center justify-center">
             {/* Key change triggers reconciliation and animation */}
             <div 
                key={activeIndex}
                className="bg-white border border-slate-100 p-8 md:p-14 rounded-[3rem] shadow-2xl w-full animate-fade-in transition-all duration-500 ease-in-out transform"
             >
                <Quote size={60} className="absolute top-10 right-10 text-pink-100 rotate-12" />

                <div className="flex flex-col items-center text-center">
                  
                  {/* Stars */}
                  <div className="flex text-yellow-400 gap-1 mb-8 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < reviewsData[activeIndex].rating ? "currentColor" : "none"} 
                        className={i < reviewsData[activeIndex].rating ? "" : "text-slate-300"}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 text-xl md:text-3xl mb-10 leading-relaxed font-light">
                    "{reviewsData[activeIndex].comment}"
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white">
                        {reviewsData[activeIndex].name.charAt(0)}
                     </div>
                     <div className="flex items-center gap-2 mt-2">
                         <h4 className="font-bold text-slate-900 text-lg">{reviewsData[activeIndex].name}</h4>
                         <BadgeCheck size={16} className="text-blue-500" fill="currentColor" />
                     </div>
                     <p className="text-sm text-emerald-600 font-medium">{reviewsData[activeIndex].date}</p>
                  </div>

                </div>
             </div>
          </div>

          {/* Navigation Buttons - Enhanced for visibility */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 md:-left-20 transform -translate-y-1/2 bg-white text-slate-900 p-4 md:p-5 rounded-full hover:bg-emerald-500 hover:text-white transition-all border-2 border-slate-100 hover:border-emerald-500 shadow-xl z-20 group"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 md:-right-20 transform -translate-y-1/2 bg-white text-slate-900 p-4 md:p-5 rounded-full hover:bg-emerald-500 hover:text-white transition-all border-2 border-slate-100 hover:border-emerald-500 shadow-xl z-20 group"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-gradient-to-r from-emerald-500 to-pink-500 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};