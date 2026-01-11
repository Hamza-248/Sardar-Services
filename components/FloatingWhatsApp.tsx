import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "923149988398"; 
  const defaultMessage = "Hi Khan Services, I need help with some home maintenance.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 flex items-center justify-center border-4 border-slate-900"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </button>
  );
};