import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = function() {
  return (
    <header className={`bg-orange-900 text-white py-8 z-50 transition-all duration-300 fixed top-0 w-full`}> {/* Increased py from 6 to 8 */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://www.greencountryfcu.com/wp-content/uploads/2021/10/credit-card-shopping-620x330-1-1.jpg')`,
          height: '100%', // Set the height to 100% of the header
          width: '100%', // Set the width to 100% of the header
        }}
      ></div>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <nav className="flex space-x-4 mb-4">
          <Link 
            to="pricingTable" 
            smooth={true} 
            duration={500}
            offset={-160} // Adjust the offset as needed
            className="text-xl font-bold bg-orange-700 px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition"
          >
            Bảng giá
          </Link>
          <Link 
            to="commitment" 
            smooth={true} 
            duration={500}
            offset={-120}
            className="text-xl font-bold bg-orange-700 px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition"
          >
            Dịch vụ
          </Link>
          <Link 
            to="footer" 
            smooth={true} 
            duration={500} 
            className="text-xl font-bold bg-orange-700 px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition"
          >
            Liên hệ
          </Link>
        </nav>

        <div className="flex items-center justify-center bg-yellow-400 text-orange-900 p-3 rounded-full animate-slow-ring shadow-lg">
          <Phone className="w-10 h-10 mr-3 text-orange-900" />
          <a 
            href="tel:0985463501" 
            className="text-3xl font-bold"
          >
            0985 463 501
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
