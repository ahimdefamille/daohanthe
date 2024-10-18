import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const locations = [
  {
    name: 'Cơ sở 1: AEON Mall Hà Đông, Dương Nội, Hà Đông, Hà Nội',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6928570330464!2d105.749142!3d20.9897037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7bee9f7757%3A0x4ebf8ccfc24ec4ae!2sAeon%20Mall%20H%C3%A0%20%C4%90%C3%B4ng!5e0!3m2!1sen!2s!4v1697389205100!5m2!1sen!2s'
  },
  {
    name: 'Cơ sở 2: Ngõ 120 Yên Lãng, Đống Đa, Hà Nội',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.401504339206!2d105.8122636!3d21.01043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9d8016fbe7%3A0xb16352b946c1989!2sNg.%20120%20P.%20Y%C3%AAn%20L%C3%A3ng%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1sen!2s!4v1697378919304!5m2!1sen!2s'
  }
];

const ServiceSystem = function() {
  const [openMapIndex, setOpenMapIndex] = useState(null);

  const handleToggleMap = (index) => {
    setOpenMapIndex(index === openMapIndex ? null : index);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-center mb-4">HỆ THỐNG CƠ SỞ DỊCH VỤ</h2>
      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index}>
            <div
              className="border border-gray-300 rounded p-2 flex justify-between items-center cursor-pointer"
              onClick={() => handleToggleMap(index)}
            >
              <span>{location.name}</span>
              <ChevronDown className="w-5 h-5" />
            </div>
            {openMapIndex === index && (
              <div className="mt-4">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  className="border border-gray-300 rounded"
                  title={`Map for ${location.name}`}
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSystem;
