import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/9fSVX7zcZX3iKGnG8";

  return (
    <section id="map" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-2 shadow-xl border border-slate-200 overflow-hidden">
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group">
            {/* Using a static map image as a placeholder since we can't iframe the short link directly without API/Coords */}
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200&auto=format&fit=crop" 
              alt="Khan Services Location Map" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-100"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors">
               <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl text-center max-w-sm transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={24} fill="currentColor" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Our Office</h3>
                  <p className="text-slate-500 text-sm mb-6">Click below to find us on Google Maps and get directions to Khan Services.</p>
                  
                  <button 
                    onClick={() => window.open(mapUrl, '_blank')}
                    className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <ExternalLink size={18} /> Open Google Maps
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};