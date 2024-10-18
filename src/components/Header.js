import React from 'react';
import { Phone } from 'lucide-react';

const Header = function() {
  return (
    <header className="relative bg-orange-900 text-white py-12">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('https://www.greencountryfcu.com/wp-content/uploads/2021/10/credit-card-shopping-620x330-1-1.jpg')`,
          opacity: 0.3
        }}
      ></div>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center relative z-10">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 mb-4 sm:mb-0">
          <span className="text-xl font-bold bg-orange-700 px-4 py-2 rounded-full shadow-lg">Rút đáo nhanh 24/7</span>
          <span className="text-xl font-bold bg-orange-700 px-4 py-2 rounded-full shadow-lg">Uy tín - An toàn - Chi phí thấp</span>
        </div>
        <div className="flex items-center animate-pulse">
          <Phone className="w-8 h-8 mr-3 text-yellow-300" />
          <a href="tel:0968160997" className="text-2xl font-bold text-yellow-300">
            0968 160 997
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;