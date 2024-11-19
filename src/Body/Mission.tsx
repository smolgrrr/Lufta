import React, { useState, useRef} from 'react';

const Mission: React.FC = () => {
    const [hoveredSection, setHoveredSection] = useState<string>('logistics');
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative text-left p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden h-[80vh] flex items-center justify-center z-10">
            {/* Background Video */}
            <video
                key={hoveredSection} // Re-render video on section change
                ref={videoRef}
                autoPlay
                playsInline
                muted
                loop
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
            <div className="relative z-20 max-w-screen-lg text-white text-left flex flex-col justify-center px-4 sm:px-6 md:px-8 space-y-4">
                
                {/* Mission Statement */}
                <section className="space-y-2">
                    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                        Unlocking Boundless Reach and Heavy Lift
                    </h1>
                    <p className="font-medium text-sm sm:text-base md:text-lg lg:text-2xl font-light leading-relaxed">
                        Our dual-use autonomous airships will revolutionise global operations with unmatched range, endurance, and heavy payload capacities. For freighting, they will connect makers and builders to global trade with ease. In defence, they will provide critical capabilities for intelligence, surveillance, reconnaissance, and logistical support in challenging environments.
                    </p>
                </section>

                {/* Hover Sections */}
                <div className="flex flex-wrap space-x-4 sm:space-x-8">
                    <button
                        className={`font-semibold text-sm sm:text-base md:text-lg lg:text-2xl transition duration-300 ${
                            hoveredSection === 'logistics' ? 'underline' : ''
                        }`}
                        onMouseEnter={() => setHoveredSection('logistics')}
                    >
                        Logistics
                    </button>
                    <button
                        className={`font-semibold text-sm sm:text-base md:text-lg lg:text-2xl transition duration-300 ${
                            hoveredSection === 'defense' ? 'underline' : ''
                        }`}
                        onMouseEnter={() => setHoveredSection('defense')}
                    >
                        Defense
                    </button>
                </div>

                {/* Section Descriptions */}
                <div className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium leading-relaxed">
                    {hoveredSection === 'logistics' && (
                        <p>
                            Lufta’s airships bridge the gap between the high costs of air freight and the long lead times of sea freight, with zero emissions. Our airships will bypass the need for air & sea port hubs. 
                        </p>
                    )}
                    {hoveredSection === 'defense' && (
                        <p>
                            Lufta’s airships provide long flight endurance and a large payload capacity at an order-of-magnitude lower cost than existing UAVs. They will act as an autonomous, medium-altitude platform for surveillance (ISR) and communication, as well as being able to deliver assets or deploy munitions in contested environments.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Mission;
