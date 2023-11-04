import React from 'react';
import DotAnimation from './DotAnimation';

const Autonomy: React.FC = () => {
    return (
        <div className="z-2 p-4 sm:p-8 lg:p-16">
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
