import React, { useState, useRef } from 'react';
import './RoadMap.css'; // Import the CSS file for custom styling
// Testing comments....
const RoadMap: React.FC = () => {
    const [activeRoadmap, setActiveRoadmap] = useState(1);
    const videoRef = useRef<HTMLVideoElement>(null);

    const roadmapDetails = [
        {
            id: 1,
            title: "MINKE",
            image: "/RoadMap1.png",
            description: "(MVP) 24 hours of flight endurance, autonomous flight, and a 20kg payload capacity. Enables sentry/surveillance operations at low cost for long missions.",
            dimensions: "12x3m",
            payload: "20kg",
            video: "/CloudBkg.mp4"
        },
        {
            id: 2,
            title: "ORCA",
            image: "/RoadMap2.png",
            description: "High-volume production of a larger airship supporting advanced defence missions, as well as being a domestic freight solutions.",
            dimensions: "60x12m",
            payload: "2t",
            video: "/CloudBkg.mp4"
        },
        {
            id: 3,
            title: "BLUE",
            image: "/RoadMap3.png",
            description: "Heavy-lift cargo airship that competes with cargo ships and aircraft. Able to haul directly from remote and infrastructure-limited areas.",
            dimensions: "400x80m",
            payload: "1000t",
            video: "/CloudBkg.mp4"
        }
    ];

    return (
        <div id="our-Roadmap" className="roadmap-container relative text-left p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden h-[80vh] flex items-center justify-center">
            
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 filter opacity-100 blur-none"
            >
                <source src={roadmapDetails.find(item => item.id === activeRoadmap)?.video} type="video/mp4" />
            </video>

            {/* Darken Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            {/* Overlay Content */}
            <div className="relative z-20 max-w-screen-lg text-white text-left flex flex-col justify-center px-4 sm:px-8 space-y-4">
                
                {/* Roadmap Slider Buttons - Centered */}
                <div className="flex justify-center space-x-10 sm:space-x-40 mb-10 sm:mb-20">
                    {roadmapDetails.map((roadmap) => (
                        <button
                            key={roadmap.id}
                            className={`font-medium text-sm sm:text-lg lg:text-2xl transition duration-300 ${
                                activeRoadmap === roadmap.id ? 'underline text-white-800' : 'text-white'
                            }`}
                            onMouseEnter={() => setActiveRoadmap(roadmap.id)}
                        >
                            {roadmap.title}
                        </button>
                    ))}
                </div>

                {/* Roadmap Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-10 w-full">
                    {/* Image - Increased space for larger screen sizes */}
                    <div className="lg:w-3/5 w-full mb-6 lg:mb-0">
                        <img
                            src={roadmapDetails.find(item => item.id === activeRoadmap)?.image}
                            alt={`RoadMap ${activeRoadmap}`}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Description - Increased width for larger screen sizes */}
                    <div className="lg:w-5/5 w-full text-sm sm:text-lg lg:text-2xl leading-relaxed">
                        <h2 className="font-extrabold text-2xl sm:text-3xl mb-4">
                            {roadmapDetails.find(item => item.id === activeRoadmap)?.title}
                        </h2>
                        <p className="text-sm sm:text-lg italic mb-2">
                            Dimensions: {roadmapDetails.find(item => item.id === activeRoadmap)?.dimensions}, Payload: {roadmapDetails.find(item => item.id === activeRoadmap)?.payload}
                        </p>
                        <p className="text-sm sm:text-md">
                            {roadmapDetails.find(item => item.id === activeRoadmap)?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;
