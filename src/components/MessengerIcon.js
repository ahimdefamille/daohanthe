import React from 'react';

const MessengerIcon = () => {
  return (
    <a
      href="https://m.me/ngtrungson" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png" 
        alt="Messenger"
        className="w-12 h-12"
      />
    </a>
  );
};

export default MessengerIcon;
