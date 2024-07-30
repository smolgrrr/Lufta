import React from 'react';
import DotAnimation from './DotAnimation';

const Autonomy: React.FC = () => {
    return (
        <div className="z-2 px-4 sm:px-8 lg:px-16 pb-4 sm:pb-8 lg:pb-16">
                <div className='pl-3 sm:pl-6 lg:pl-12 pb-4 text-left'>
                    <span id="our-technology" className='font-medium text-xl sm:text-2xl'>
                        Our Technology:
                    </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <DotAnimation />
                <div className="text-left">
                    <h1 className='font-extrabold font-Inter text-4xl sm:text-5xl lg:text-6xl p-2 sm:p-4 mb-4 sm:mb-6'>Autonomy</h1>
                    <p className="text-lg sm:text-xl mb-6 p-2 sm:p-4">AUTONOMOUS FLIGHT, AUTONOMOUS MANUFACTURING</p>
                    <div className="px-2 sm:px-4 pb-4">
                        <p className="">
                            Fundamentally, flight with airships is much simpler than other flight vehicles- they should fly autonomously by default.
                        </p>
                        <p>
                            Lufta plans to be the first aviation company to develop fleets of completely autonomous aircraft.
                        </p>
                        <p className="mt-4">
                            As demonstrated with WAAM, Lufta will seek to lead Australian heavy industry to deep automation in manufacturing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Autonomy;
