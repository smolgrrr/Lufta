
import React from 'react';

const RoadMap: React.FC = () => {
    return (
        <div className="text-left p-3 sm:p-4 lg:p-6">
            <div className="w-full h-0.5 bg-black my-4"></div>
            <div className='p-4 sm:px-6 lg:px-16'>
                <h1 className='font-medium text-xl sm:text-2xl pb-16 lg:pb-4'>
                    Our Roadmap:
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-3'>
                    <div className="mt-auto pb-16 lg:pb-4">
                        <div className="flex">
                        <img src="/person.png" className='h-10 relative mt-auto' />
                        <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg" className='mr-auto mt-auto'>
                            <ellipse cx="75" cy="25" rx="60" ry="20" fill="none" stroke="black" stroke-width="3" />
                            <path d="M 120 11 Q 140 -10 135 25" fill="none" stroke="black" stroke-width="3" />
                            <path d="M 120 37 Q 140 58 135 25" fill="none" stroke="black" stroke-width="3" />
                        </svg>
                        </div>
                        <div className='text-start'>
                            <h1 className='font-extrabold font-Inter text-2xl pt-8 pb-4'>MINKE MK1</h1>
                            <p className="text-md italic">Payload 1kg; Dim 4x1.2m</p>
                        </div>
                    </div>
                    <div className="mt-auto pb-16 lg:pb-4">
                        <div className="flex">
                        <img src="/person.png" className='h-6 relative mt-auto' />
                        <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg" className='mr-auto mt-auto'>
                            <ellipse cx="150" cy="50" rx="120" ry="40" fill="none" stroke="black" stroke-width="3" />
                            <path d="M 240 23 Q 280 -10 270 50" fill="none" stroke="black" stroke-width="3" />
                            <path d="M 240 76 Q 280 110 270 50" fill="none" stroke="black" stroke-width="3" />
                        </svg>
                        </div>
                        <div className='text-start'>
                            <h1 className='font-extrabold font-Inter text-2xl pt-8 pb-4'>ORCA</h1>
                            <p className="text-md italic">Payload 4.5t; Dim 40x12m</p>
                        </div>
                    </div>
                    <div className="mt-auto pb-16 lg:pb-4">
                        <div className="flex">
                        <img src="/person.png" className='h-2 relative mt-auto' />
                        <svg width="450" height="150" xmlns="http://www.w3.org/2000/svg" className='mr-auto mt-auto'>
                            <ellipse cx="210" cy="70" rx="200" ry="60" fill="none" stroke="black" stroke-width="3" />
                            <path d="M 370 35 Q 420 -30 410 70" fill="none" stroke="black" stroke-width="3" />
                            <path d="M 370 105 Q 420 165 410 70" fill="none" stroke="black" stroke-width="3" />
                        </svg>
                        </div>
                        <div className='text-start'>
                            <h1 className='font-extrabold font-Inter text-2xl pt-8 pb-4'>BLUE</h1>
                            <p className="text-md italic">Payload 1600t; Dim 400x80m</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;

