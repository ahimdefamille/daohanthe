import React from 'react';
import { Phone, Facebook } from 'lucide-react'; // Add Facebook icon
import { SiZalo } from 'react-icons/si'; // Import Zalo icon from react-icons
import ServiceSystem from './ServiceSystem';
import { Button } from "./Button";

const Footer = () => {
  const handlePhoneClick = () => {
    // Open the dialer with the phone number
    window.location.href = 'tel:0985463501';
  };

  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Left section - Contact Information */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Liên hệ ngay</h3>
            <Button
              variant="outline"
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-white hover:border-orange-300 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-xl"
              onClick={handlePhoneClick}
            >
              <Phone className="w-6 h-6" />
              <span>0985 463 501</span>
            </Button>

            {/* Zalo Button */}
            <Button
              variant="outline"
              size="lg"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white border-white hover:border-blue-300 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-xl"
              onClick={() => window.open('https://zalo.me/0985463501', '_blank')}
            >
              <SiZalo className="w-6 h-6" />
              <span>Zalo: 0985 463 501</span>
            </Button>

            {/* Facebook Messenger Button */}
            <Button
              variant="outline"
              size="lg"
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white border-white hover:border-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-xl"
              onClick={() => window.open('https://m.me/61567146083888', '_blank')}
            >
              <Facebook className="w-6 h-6" />
              <span>Đáo rút thẻ tín dụng Hà Nội</span>
            </Button>
          </div>

          {/* Right section - Address (ServiceSystem component) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <ServiceSystem />
          </div>
        </div>

        {/* Bottom section - Payment Methods */}
        <div className="mt-8 flex justify-center">
          <img 
            src="https://mythslegendscollection.com/wp-content/uploads/2020/04/visa-mastercard-american-express-png-6.png" 
            alt="Payment Methods"
            className="w-1/2 md:w-1/3 max-w-full h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
