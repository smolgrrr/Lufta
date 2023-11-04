import React from 'react';
import { Parallax } from 'react-parallax';
import DotAnimation from './DotAnimation';

const Autonomy: React.FC = () => {

    return (
        <div className="z-2 p-16">
        {/* <div className="relative w-full h-64 bg-cover bg-center z-1" style={{ backgroundImage: 'url(WAAM.jpg)' }}></div> */}
        <div className="grid grid-cols-2">
            <DotAnimation />
            <div className="text-left">
              <h1 className='font-extrabold font-Inter text-6xl p-4 mb-6'>Autonomy</h1>
              <p className="text-xl mb-12 p-4">AUTONOMOUS FLIGHT, AUTONOMOUS MANUFACTURING</p>
              <div className="p-4">
                <p className="">
                    Fundamentally, flight with airships is much simpler than other flight vehicles- they should fly autonomously by default.
                </p>
                <p>
                    Lufta plans to be the first aviation company to develop fleets of completely autonomous aircraft.
                </p>
                <p className="">
                    As demonstrated with WAAM, Lufta will seek to lead Australian heavy industry to automation in manufacturing.
                </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Autonomy;
