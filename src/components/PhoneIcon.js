import React from 'react';

const PhoneIcon = () => {
  return (
    <a
      href="tel:+84968160997" // Replace with your phone number
      className="fixed bottom-8 right-4 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/8748/8748459.png" // Use your phone icon image URL here
        alt="Phone"
        className="w-12 h-12"
      />
    </a>
  );
};

export default PhoneIcon;
