import React from 'react';

const Mission: React.FC = () => {

    return (
        <div className="text-left p-3 sm:p-5 md:p-8 lg:p-12">
            {/* Mission */}
            <div className='p-4 sm:p-6 lg:p-8 px-4 sm:px-8 lg:px-16 '>
                <h1 id="our-mission" className='font-medium text-xl sm:text-2xl'>
                    Our Mission: 
                </h1>
                <p className='text-xl sm:text-xl lg:text-4xl font-normal lg:font-medium mb-2 sm:mb-4 lg:mb-8'>Elevate access to the skies with autonomous airships.</p>
            </div>

            {/* Customers */}
            <div className="w-full h-0.5 bg-black my-4"></div>
            <div className="py-8 sm:py-12 lg:py-16">
                <div id="our-customers" className='font-medium text-xl sm:text-2xl pl-4 sm:pl-8 lg:pl-16 pb-4'>Our Customers:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
                    <div className='text-start px-4 sm:px-8 lg:px-16 pb-8'>
                        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-8 lg:mb-16">Freight</p>
                        <p className="">
                            In today's globalised economy, rapid and efficient transport is paramount.
                            Lufta's airships will be crafted to provide an eco-friendly, cost-effective solution to the logistical challenges faced by the freighting industry.
                            With a lower carbon footprint and the ability to access remote or infrastructure-limited areas, we're offering a solution that's both sustainable and universally adaptable.
                        </p>
                    </div>
                    <div className='text-start px-4 sm:px-8 lg:px-16 pb-8'>
                        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-8 lg:mb-16">Defence</p>
                        <p className="">
                            Our airships will provide a bird's eye view, offering crucial strategic advantages in surveillance and reconnaissance.
                            With extended flight durations, silent operation, and reduced detectability, they're the next-generation solution for advanced situational awareness.
                            Their ability to carry payloads provides flexibility in mission roles, from delivering vital supplies, deploying assets/munitions, to acting as a communication hub in contested environments.
                        </p>
                    </div>
                </div>
            </div>

            {/* Technology */}
            <div className="w-full h-0.5 bg-black my-4"></div>
        </div>
    );
};

export default Mission;
