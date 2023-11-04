// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-auto">
              <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 mr-2 scale-x-[-1]" src="/airship.png" />
          <h1 className="text-3xl font-bold text-white">Lufta</h1>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Lufta Airships</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
