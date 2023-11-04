import React from 'react';

const Mission: React.FC = () => {

    return (
        <div className="text-left p-3">
            {/* Mission */}
            <div className='pl-16 pb-16'>
                <span className='font-medium text-2xl'>
                    Our Mission: Elevate access to the skies with autonomous airships
                </span>
            </div>
            {/* Customers */}
            <div className="w-full h-0.5 bg-black"></div>
            <div className="py-16">
                <div className='font-medium text-2xl pl-16 pb-4'>Our Customers:</div>
                <div className="grid grid-cols-2">
                    <div className='text-start px-16 pb-8'>
                        <p className="text-6xl font-semibold mb-16">Freight</p>
                        <p className="">
                            In today's globalised economy, rapid and efficient transport is paramount.
                            Lufta's airships will be crafted to provide an eco-friendly, cost-effective solution to the logistical challenges faced by the freighting industry.
                            With a lower carbon footprint and the ability to access remote or infrastructure-limited areas, we're offering a solution that's both sustainable and universally adaptable.
                        </p>
                    </div>
                    <div className='text-start px-16 pb-8'>
                        <p className="text-6xl font-semibold mb-16">Defence</p>
                        <p className="">
                            Our airships will provide a bird's eye view, offering crucial strategic advantages in surveillance and reconnaissance.
                            With extended flight durations, silent operation, and reduced detectability, they're the next-generation solution for advanced situational awareness.
                            Their ability to carry payloads provides flexibility in mission roles, from delivering vital supplies, deploying assets/munitions, to acting as a communication hub in contested environments.
                        </p>
                    </div>
                </div>
            </div>
            {/* Technology */}
            <div className="w-full h-0.5 bg-black"></div>
            <div className="pt-16">
                <div className='pl-16 pb-4'>
                    <span className='font-medium text-2xl'>
                        Our Technology:
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Mission;
