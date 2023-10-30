import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroBanner from './Header/HeroBanner';
import HeaderBar from './Header/HeaderBar';

function App() {
  return (
    <div className="App relative flex flex-col">
      <HeroBanner />
      <HeaderBar />
      <span className='font-extrabold font-sans mr-auto'>
        Simple, scalable manufacturing of autonomous airships for freighting and defence
      </span>
    </div>
  );
}

export default App;
