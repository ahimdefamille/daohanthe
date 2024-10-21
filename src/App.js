import React from 'react';
import Header from './components/Header';
import PricingTable from './components/PricingTable';
import Commitment from './components/Commitment';
import CustomerNote from './components/CustomerNote';
import Footer from './components/Footer';
import MessengerIcon from './components/MessengerIcon'; // Import your MessengerIcon component
import PhoneIcon from './components/PhoneIcon'; // Import your PhoneIcon component
import ZaloIcon from './components/ZaloIcon'; // Import your ZaloIcon component

const App = function() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div id="/" />
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-32"> {/* Added mt-20 to create space for the sticky header */}
        <h1 id="pricingTable" className="text-3xl font-bold text-center text-red-600 mb-8">
          BẢNG GIÁ DỊCH VỤ THAM KHẢO
        </h1>
        <div id="pricingTable">
          <PricingTable />
        </div>
        <div id="commitment">
          <Commitment />
        </div>
        <div id="customerNote">
          <CustomerNote />
        </div>
      </main>

      <div id="footer">
        <Footer />
      </div>

      <MessengerIcon /> {/* Include the Messenger icon */}
      <PhoneIcon /> {/* Include the Phone icon */}
      <ZaloIcon /> {/* Include the Zalo icon */}
    </div>
  );
};

export default App;
