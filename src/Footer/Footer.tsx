// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#eee7e3] py-8 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mx-auto">
          <a href='/'>
          <img className="h-8 mr-2 scale-x-[-1]" src="/airship.png" />
          <h1 className="text-3xl font-bold">Lufta</h1>
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          <a href="/contact-us" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
