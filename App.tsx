import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;