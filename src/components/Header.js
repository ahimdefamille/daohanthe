import React from 'react';

const Header = function() {
  return (
    <div 
      className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/GdQWRR0/IMG-20241023-150838.jpg')`,
        backgroundSize: 'contain' // Change to 'contain' to ensure the image is fully visible
      }}
    />
  );
};

export default Header;
