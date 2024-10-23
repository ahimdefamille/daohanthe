import React from 'react';

const Header = function() {
  return (
    <section className="relative h-72 bg-orange-800"> {/* Adjust the height as needed */}
      <div 
        className="relative inset-0 bg-contain bg-no-repeat bg-center opacity-100"
        style={{
          backgroundImage: `url('https://i.ibb.co/GdQWRR0/IMG-20241023-150838.jpg')`,
          height: '100%', // Full height of the section
          width: 'auto',  // Full width of the section
        }}
      ></div>
    </section>
  );
};

export default Header;
