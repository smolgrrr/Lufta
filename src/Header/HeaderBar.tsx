// Header.tsx
import React from 'react';
import { useState } from 'react';

const HeaderBar: React.FC = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const handleMenuClick = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  const sidePanelClasses = `
    fixed top-0 right-0 bottom-0 z-20 bg-black w-1/2 sm:w-1/2 lg:w-1/4 p-4 overflow-y-auto 
    transition-transform transform duration-300 ease-in-out 
    ${isSidePanelOpen ? 'translate-x-0' : 'translate-x-full'}
  `;
  return (
    <>
      <header className="w-full top-0 left-0 absolute z-20 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <a href='/'>
          <div className="flex items-center">
              <img className="h-8 mr-2 scale-x-[-1]" src="/airship.png" />
              <h1 className="text-3xl font-bold text-[#eee7e3]">Lufta</h1>
          </div>
          </a>
          <button onClick={handleMenuClick} className="p-2">
            {/* Simple 3-line menu icon */}
            <div className="bg-[#eee7e3] h-0.5 w-5 mb-1"></div>
            <div className="bg-[#eee7e3] h-0.5 w-5 mb-1"></div>
            <div className="bg-[#eee7e3] h-0.5 w-5"></div>
          </button>
        </div>
      </header>
      <div className={sidePanelClasses}>
        <button
          className="absolute top-2 right-2 p-2 text-white"
          onClick={() => setSidePanelOpen(false)}
        >
          X
        </button>
        {/* Content for your side panel goes here */}
        <ul className='text-start ml-4 sm:ml-4 lg:ml-12 mt-16 font-semibold'>
          <li className="mb-6"><a href="#our-mission" className="text-white">Our Mission</a></li>
          <li className="mb-6"><a href="#our-technology" className="text-white">Our Technology</a></li>
          <li className="mb-6"><a href="#our-Roadmap" className="text-white">Our Roadmap</a></li>
          <li className="mb-6"><a href="#our-team" className="text-white">Meet The Team</a></li>
          {/* ... */}
        </ul>
      </div>
    </>
  );
};

export default HeaderBar;
