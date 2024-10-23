import React from 'react';

const Header = function() {
  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/GdQWRR0/IMG-20241023-150838.jpg')`,
        }}
      >
        {/* Optional overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
  );
};

export default Header;