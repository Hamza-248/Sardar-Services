import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

const servicesData = [
  {
    id: '1',
    title: 'Electrical',
    subtitle: 'Lighting & UPS',
    description: 'Warm lighting installation, fan fixing, and safe wiring.',
    iconName: 'Zap',
    // Electrical panel / Professional wiring
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop', 
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    gradient: 'from-emerald-500 to-green-500',
    iconColor: 'text-emerald-600',
    details: {
      scope: ['Switchboard installation & repair', 'UPS & Inverter wiring', 'Ceiling fan & light installation', 'Circuit breaker replacement', 'Short circuit diagnosis'],
      duration: '1 - 4 hours (varies by job)',
      tools: 'Digital Multimeter, Wire Strippers, Insulated Screwdrivers, Drill Machine',
      commonIssues: ['Flickering lights', 'Sparking sockets', 'UPS not charging', 'High electricity bill', 'Tripping breakers'],
      complexity: 'High'
    }
  },
  {
    id: '2',
    title: 'Plumbing',
    subtitle: 'Modern Bathrooms',
    description: 'Leak fixing, motor installation, and sanitary work.',
    iconName: 'Droplet',
    // Plumbing tools and pipes
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop', 
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    gradient: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-600',
    details: {
      scope: ['Water motor installation', 'Tap & mixer replacement', 'Leak detection & repair', 'Drain cleaning', 'Geyser installation'],
      duration: '1 - 3 hours',
      tools: 'Pipe Wrench, Plunger, Thread Seal Tape, Cutter',
      commonIssues: ['Low water pressure', 'Leaking taps', 'Blocked drains', 'Motor overheating', 'Geyser not heating'],
      complexity: 'Medium'
    }
  },
  {
    id: '3',
    title: 'Painting',
    subtitle: 'Fresh Colors',
    description: 'Wall polishing and vibrant color makeovers.',
    iconName: 'PaintBucket',
    // Paint texture
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop', 
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    gradient: 'from-fuchsia-500 to-purple-500',
    iconColor: 'text-fuchsia-600',
    details: {
      scope: ['Interior & Exterior painting', 'Wall putty & sanding', 'Texture design', 'Wood & door polishing', 'Dampness treatment'],
      duration: '1 - 5 Days (per room/house)',
      tools: 'Rollers, High-quality Brushes, Scrapers, Drop Cloths, Ladders',
      commonIssues: ['Peeling paint', 'Seepage/Dampness', 'Faded colors', 'Cracks in wall', 'Uneven texture'],
      complexity: 'Medium'
    }
  },
  {
    id: '4',
    title: 'AC Services',
    subtitle: 'Cool Comfort',
    description: 'AC cleaning, gas filling, and master service.',
    iconName: 'Wind',
    // Fixed: Working Split AC image
    image: 'https://images.unsplash.com/photo-1621250327663-71887e494f6f?q=80&w=800&auto=format&fit=crop', 
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    gradient: 'from-teal-500 to-emerald-500',
    iconColor: 'text-teal-600',
    details: {
      scope: ['General cleaning & service', 'Gas refilling (R22/R410)', 'Capacitor replacement', 'Installation & uninstallation', 'Leakage repair'],
      duration: '1 - 2 hours per unit',
      tools: 'Pressure Washer, Manifold Gauge, Vacuum Pump, Screwdrivers',
      commonIssues: ['AC not cooling', 'Water dripping inside', 'Bad smell from AC', 'High noise level', 'Ice formation'],
      complexity: 'Medium'
    }
  },
  {
    id: '5',
    title: 'Carpentry',
    subtitle: 'Woodwork',
    description: 'Door locks, furniture repair, and polishing.',
    iconName: 'Hammer',
    // Wood texture
    image: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=600&auto=format&fit=crop', 
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    gradient: 'from-orange-500 to-pink-500',
    iconColor: 'text-orange-600',
    details: {
      scope: ['Door lock repair & replacement', 'Furniture assembly', 'Door hinge fixing', 'Drawer repair', 'Kitchen cabinet adjustment'],
      duration: '1 - 6 hours',
      tools: 'Hammer, Chisel, Power Drill, Saw, Measuring Tape',
      commonIssues: ['Stuck doors', 'Broken handles', 'Loose hinges', 'Wobbly chairs', 'Drawer not closing'],
      complexity: 'Medium'
    }
  },
  {
    id: '6',
    title: 'Quick Fixes',
    subtitle: 'Handyman',
    description: 'Curtains, mounting TVs, and odd jobs.',
    iconName: 'Wrench',
    // Tools flatlay
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=600&auto=format&fit=crop', 
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    gradient: 'from-slate-500 to-pink-500',
    iconColor: 'text-pink-500',
    details: {
      scope: ['LED TV Mounting', 'Curtain rod installation', 'Mirror & scenery hanging', 'Furniture shifting', 'General odd jobs'],
      duration: '30 mins - 2 hours',
      tools: 'Spirit Level, Drill Machine, Screwdrivers, Wall Plugs',
      commonIssues: ['Loose fixtures', 'New items to install', 'Minor repairs', 'Hanging decor', 'Assembling shelves'],
      complexity: 'Low'
    }
  },
  {
    id: '7',
    title: 'Solar Services',
    subtitle: 'Green Energy',
    description: 'Panel cleaning and system efficiency check.',
    iconName: 'Sun',
    // Solar Panel
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    gradient: 'from-yellow-400 to-orange-500',
    iconColor: 'text-yellow-600',
    details: {
      scope: ['Solar panel washing', 'Inverter settings adjustment', 'Wiring check', 'Structure tightening'],
      duration: '1 - 3 hours',
      tools: 'Water Pressure Pump, Soft Brush, Multimeter',
      commonIssues: ['Low power generation', 'Dust accumulation', 'Inverter error codes', 'Loose connections'],
      complexity: 'Medium'
    }
  }
];

// Helper to render icon by name
const DynamicIcon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  
  if (!IconComponent) {
    return <LucideIcons.HelpCircle size={size} className={className} />;
  }
  
  return <IconComponent size={size} className={className} />;
};

const getComplexityColor = (level: string) => {
  switch(level) {
    case 'Low': return 'text-emerald-600 bg-emerald-100 border-emerald-200';
    case 'Medium': return 'text-amber-600 bg-amber-100 border-amber-200';
    case 'High': return 'text-rose-600 bg-rose-100 border-rose-200';
    default: return 'text-slate-500 bg-slate-100 border-slate-200';
  }
};

const getComplexityWidth = (level: string) => {
   switch(level) {
    case 'Low': return 'w-1/3 bg-emerald-500';
    case 'Medium': return 'w-2/3 bg-amber-500';
    case 'High': return 'w-full bg-rose-500';
    default: return 'w-0';
  }
}

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  // Destructure common static icons for use in UI (not dynamic)
  const { ArrowUpRight, X, Clock, PenTool, CheckCircle, Info, Phone, AlertTriangle, Activity } = LucideIcons;

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-pink-500 font-bold tracking-wider uppercase text-xs">One Call Solves It All</span>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Services We Offer</h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-right font-medium">
            Professional work that makes your house feel like a home. 
          </p>
        </div>

        {/* Soft Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className={`relative group overflow-hidden bg-white rounded-3xl border border-slate-200 hover:border-pink-300 transition-all duration-500 ${service.colSpan} ${service.rowSpan} shadow-lg hover:shadow-2xl cursor-pointer`}
            >
              {/* Image Background with Light Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                     (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=800'; // Fallback
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl ${service.iconColor} border border-slate-100 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <DynamicIcon name={service.iconName} size={24} />
                </div>
                
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{service.subtitle}</p>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <button 
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-slate-900 font-bold text-xs transition-colors shadow-sm"
                    >
                      <Info size={14} /> Details
                    </button>
                    <button 
                      onClick={(e) => {
                          e.stopPropagation(); // Prevent opening modal when clicking book
                          const url = `https://wa.me/923149988398?text=Hi Khan Services, I am interested in ${service.title}`;
                          window.open(url, '_blank');
                      }}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg text-white font-bold text-xs transition-colors shadow-lg shadow-slate-900/20"
                    >
                      Book <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header Image */}
            <div className="relative h-48 shrink-0">
               <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
               <div className={`absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent`}></div>
               <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full backdrop-blur-md border border-slate-200 transition-colors z-10 shadow-md"
               >
                 <X size={20} />
               </button>
               <div className="absolute bottom-4 left-6 md:left-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm ${selectedService.iconColor} text-xs font-bold uppercase tracking-wider mb-2`}>
                     <DynamicIcon name={selectedService.iconName} size={14} /> {selectedService.subtitle}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">{selectedService.title}</h3>
               </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto">
               <p className="text-slate-600 text-lg mb-8 leading-relaxed border-b border-slate-100 pb-6 font-medium">
                 {selectedService.description}
               </p>

               {/* New Common Issues & Complexity Section */}
               <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                        <h4 className="text-slate-900 font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wide opacity-80">
                           <AlertTriangle size={16} className="text-pink-500" /> Common Issues Fixed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                           {selectedService.details.commonIssues.map((issue, i) => (
                              <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-default shadow-sm">
                                 {issue}
                              </span>
                           ))}
                        </div>
                     </div>
                     <div>
                        <h4 className="text-slate-900 font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wide opacity-80">
                           <Activity size={16} className="text-emerald-500" /> Job Complexity
                        </h4>
                        <div className="flex items-center gap-3 mb-2">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getComplexityColor(selectedService.details.complexity)}`}>
                              {selectedService.details.complexity} Level
                           </span>
                        </div>
                        {/* Visual Progress Bar for Complexity */}
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                           <div className={`h-full ${getComplexityWidth(selectedService.details.complexity)} transition-all duration-500 ease-out`}></div>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-2 font-medium">
                           {selectedService.details.complexity === 'High' ? 'Requires expert safety precautions.' : 
                            selectedService.details.complexity === 'Medium' ? 'Requires specialized tools and skills.' : 
                            'Quick execution with standard tools.'}
                        </p>
                     </div>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-slate-900 font-bold flex items-center gap-2 mb-4">
                      <CheckCircle size={18} className="text-emerald-500" /> Scope of Work
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.details.scope.map((item, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                           <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                     <div>
                        <h4 className="text-slate-900 font-bold flex items-center gap-2 mb-2">
                          <Clock size={18} className="text-pink-500" /> Typical Duration
                        </h4>
                        <p className="text-slate-600 text-sm pl-7 font-medium">{selectedService.details.duration}</p>
                     </div>
                     <div>
                        <h4 className="text-slate-900 font-bold flex items-center gap-2 mb-2">
                          <PenTool size={18} className="text-orange-500" /> Tools Used
                        </h4>
                        <p className="text-slate-600 text-sm pl-7 font-medium">{selectedService.details.tools}</p>
                     </div>
                  </div>
               </div>

               <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                 <h4 className="text-emerald-900 font-bold mb-2">Ready to start?</h4>
                 <p className="text-emerald-700 text-sm mb-4">
                   Contact us now to schedule an appointment for {selectedService.title} services.
                 </p>
                 <button 
                     onClick={() => {
                        const url = `https://wa.me/923149988398?text=Hi Khan Services, I want to book ${selectedService.title}`;
                        window.open(url, '_blank');
                     }}
                     className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-slate-900/25"
                  >
                    <Phone size={18} /> Book Appointment Now
                  </button>
               </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};