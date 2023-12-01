import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroBanner from './Header/HeroBanner';
import HeaderBar from './Header/HeaderBar';
import Footer from './Footer/Footer';
import BodyPrinting from './Body/3DPrinting';
import Autonomy from './Body/Autonomy';
import Mission from './Body/Mission';
import RoadMap from './Body/RoadMap';

// Import the new components
import PrivacyPolicy from './Footer/PrivacyPolicy';
import TermsOfService from './Footer/TermsOfService';
import ContactUs from './Footer/ContactUs';
import Founder from './Body/Founder';


function App() {
  return (
    <Router>
      <div className="App flex flex-col bg-[#eee7e3]">
        <HeaderBar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroBanner />
              <Mission />
              <BodyPrinting />
              <Autonomy />
              <RoadMap />
              <Founder />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
