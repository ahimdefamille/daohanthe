import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = function() {
  return (
    <header className={`bg-orange-900 text-white py-8 z-50 transition-all duration-300 fixed top-0 w-full shadow-md`}> {/* Adjusted padding */}
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
            className="text-lg md:text-xl font-bold bg-orange-700 px-3 py-2 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition" // Adjusted padding and font size
          >
            Bảng giá
          </Link>
          <Link 
            to="commitment" 
            smooth={true} 
            duration={500}
            offset={-120}
            className="text-lg md:text-xl font-bold bg-orange-700 px-3 py-2 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition"
          >
            Dịch vụ
          </Link>
          <Link 
            to="footer" 
            smooth={true} 
            duration={500} 
            className="text-lg md:text-xl font-bold bg-orange-700 px-3 py-2 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition"
          >
            Liên hệ
          </Link>
        </nav>

        <div className="flex items-center justify-center bg-yellow-400 text-orange-900 p-2 rounded-full animate-slow-ring shadow-lg"> {/* Adjusted padding */}
          <Phone className="w-8 h-8 mr-2 text-orange-900" /> {/* Adjusted icon size */}
          <a 
            href="tel:0985463501" 
            className="text-xl md:text-3xl font-bold whitespace-nowrap" // Added whitespace-nowrap to prevent wrapping
          >
            0985 463 501
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
