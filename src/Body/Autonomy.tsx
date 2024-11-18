import React from 'react';
import DotAnimation from './DotAnimation';

const Autonomy: React.FC = () => {
    return (
        <div className="relative z-2 px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            {/* Section Title */}
            <div className='pl-3 sm:pl-6 lg:pl-12 pb-4 text-left'>
                <span id="our-technology" className='font-medium text-xl sm:text-2xl text-[#000000]'>
                    Our Technology:
                </span>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* DotAnimation */}
                <DotAnimation />

                {/* Autonomy Content */}
                <div className="text-left text-white">
                    <h1 className='font-extrabold font-Inter text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-[#000000]'>
                        Autonomy
                    </h1>
                    <p className="text-lg sm:text-xl font-light mb-6 text-[#000000]">
                        AUTONOMOUS FLIGHT, AUTONOMOUS MANUFACTURING
                    </p>
                    <div className="text-[#000000]">
                        <p className="mb-4">
                            Flight with airships is fundamentally simpler than with other flight vehicles—autonomous flight will be the default.
                        </p>
                        <p className="mb-4">
                            Lufta plans to be the first aviation company to develop fleets of fully autonomous airships.
                        </p>
                        <p className="mt-4">
                            Lufta will also be at the forefront of pushing Australian heavy industry into deep automation for manufacturing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Autonomy;
