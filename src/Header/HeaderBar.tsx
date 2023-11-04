// Header.tsx
import React from 'react';

const HeaderBar: React.FC = () => {
  const handleMenuClick = () => {
    // Logic to open the side-panel goes here.
    console.log("Menu button clicked");
  };

  return (
    <header className="w-full top-0 left-0 absolute z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 mr-2 scale-x-[-1]" src="/airship.png" />
          <h1 className="text-3xl font-bold text-[#eee7e3]">Lufta</h1>
        </div>
        <button onClick={handleMenuClick} className="p-2">
          {/* Simple 3-line menu icon */}
          <div className="bg-[#eee7e3] h-0.5 w-5 mb-1"></div>
          <div className="bg-[#eee7e3] h-0.5 w-5 mb-1"></div>
          <div className="bg-[#eee7e3] h-0.5 w-5"></div>
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
