import React from 'react';
import { Phone } from 'lucide-react';

const PhoneContact = () => {
  return (
    <div className="fixed left-0 bottom-8 bg-yellow-400 text-orange-900 p-2 rounded-full animate-slow-ring shadow-lg z-50 flex items-center justify-center"> {/* Sticky, bottom left */}
      <Phone className="w-8 h-8 mr-2 text-orange-900" /> {/* Icon size */}
      <a 
        href="tel:0985463501" 
        className="text-xl md:text-3xl font-bold whitespace-nowrap"
      >
        0985 463 501
      </a>
    </div>
  );
};

export default PhoneContact;
