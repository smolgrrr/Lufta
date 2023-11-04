import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroBanner from './Header/HeroBanner';
import HeaderBar from './Header/HeaderBar';
import Footer from './Footer/Footer';
import { Parallax } from 'react-parallax';
import BodyPrinting from './Body/3DPrinting';
import DotAnimation from './Body/DotAnimation';
import Autonomy from './Body/Autonomy';
import Mission from './Body/Mission';
import RoadMap from './Body/RoadMap';

function App() {
  return (
    <div className="App flex flex-col bg-[#eee7e3]">
      <HeaderBar />
      <HeroBanner />
      <Mission />
      <BodyPrinting />
      <Autonomy />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
