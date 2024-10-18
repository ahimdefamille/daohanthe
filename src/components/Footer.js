import React from 'react';
import { MapPin, Phone, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-orange-300" />
                <span className="text-orange-100">Ngõ 120 Yên Lãng</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-300" />
                <span className="text-orange-100">0968 160 997</span>
              </li>
              <li className="flex items-center">
                <Facebook className="w-5 h-5 mr-3 text-orange-300" />
                <a href="https://facebook.com/ngtrungson" className="text-orange-100 hover:text-white transition-colors">facebook.com/ngtrungson</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <h3 className="text-2xl font-bold mb-4">Giờ làm việc</h3>
            <p className="text-orange-100">Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
          </div>
        </div>
        {/* Add the payment image centered with smaller size */}
        <div className="mt-8 flex justify-center">
          <img 
            src="https://mythslegendscollection.com/wp-content/uploads/2020/04/visa-mastercard-american-express-png-6.png" 
            alt="Payment Methods"
            className="w-1/2 md:w-1/3 max-w-full h-auto" // Adjust the width here
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
