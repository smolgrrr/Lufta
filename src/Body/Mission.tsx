import React, { useState } from 'react';

const Mission: React.FC = () => {
    const [hoveredSection, setHoveredSection] = useState<string>('logistics');

    return (
        <div className="relative text-left p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden h-[80vh] flex items-center justify-center">
            {/* Background Video */}
            <video
                key={hoveredSection} // Re-render video on section change
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 filter opacity-100 blur-none"
            >
                <source
                    src={hoveredSection === 'logistics' ? "/LogisticsBackground.mp4" : "/DefenceBkg.mp4"}
                    type="video/mp4"
                />
            </video>

            {/* Darken Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            {/* Overlay Content */}
            <div className="relative z-20 max-w-screen-lg text-white text-left flex flex-col justify-center px-8 space-y-4">
                
                {/* Mission Statement */}
                <section className="space-y-2">
                    <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl ">
                        Enabling Seamless Global Connectivity
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                        Reaching every corner of the Earth, connecting creators to worldwide trade with ease. Lufta transforms logistics and defense through advanced, zero-emission airships bridging the gaps in global connectivity.
                    </p>
                </section>

                {/* Hover Sections */}
                <div className="flex space-x-8">
                    <button
                        className={`font-medium text-lg sm:text-xl lg:text-2xl transition duration-300 ${
                            hoveredSection === 'logistics' ? 'underline' : ''
                        }`}
                        onMouseEnter={() => setHoveredSection('logistics')}
                    >
                        Logistics
                    </button>
                    <button
                        className={`font-medium text-lg sm:text-xl lg:text-2xl transition duration-300 ${
                            hoveredSection === 'defense' ? 'underline' : ''
                        }`}
                        onMouseEnter={() => setHoveredSection('defense')}
                    >
                        Defense
                    </button>
                </div>

                {/* Section Descriptions */}
                <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    {hoveredSection === 'logistics' && (
                        <p>
                            Lufta’s airships bridge the gap between the high costs of air freight and the long lead times of sea freight, offering a sustainable solution that supports global trade without reliance on traditional infrastructure.
                        </p>
                    )}
                    {hoveredSection === 'defense' && (
                        <p>
                            Lufta’s airships provide autonomous, high-altitude platforms for surveillance and communication, adaptable to mission-critical roles with extended endurance and low detectability.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mission;
