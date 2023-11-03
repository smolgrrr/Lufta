import React from 'react';
import { Parallax } from 'react-parallax';
import DotAnimation from './DotAnimation';

const Autonomy: React.FC = () => {

    return (
        <div className="z-2 p-16 h-screen text-right">
        {/* <div className="relative w-full h-64 bg-cover bg-center z-1" style={{ backgroundImage: 'url(WAAM.jpg)' }}></div> */}
        <h1 className='font-extrabold font-Inter text-6xl p-4 mb-6'>AUTONOMY</h1>
        <div className="grid grid-cols-2">
        <DotAnimation />
            <div className="">

              <p className="text-xl mb-12 p-4">Autonomous Flight, Autonomous Manufacturing</p>
              <div>
                <p className="">
                    Even without advanced flight control systems, flight with airships is much simpler than other flight vehicles.
                </p>
                <p>
                    Lufta will be the first aviation company to develop a fleets of completely autonomous aircraft.
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
