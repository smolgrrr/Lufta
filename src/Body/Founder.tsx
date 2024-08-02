import React from 'react';

const Founder: React.FC = () => {
    return (
        <div className="text-left p-3 sm:p-4 lg:p-6">
            <div className="w-full h-0.5 bg-black my-4"></div>
            <div className='p-4 sm:px-6 lg:px-16'>
                <h1 id="our-founder" className='font-medium text-xl sm:text-2xl pb-8'>
                    Our Team:
                </h1>
                <p className="text-lg font-bold sm:text-xl mb-6 pb-2 lg:pb-4">WILLIAM HILDER</p>
                <div className="flex flex-col lg:flex-row text-sm">
                    <ul className='list-disc list-inside lg:pr-12 pb-4'>
                        <li className='pb-1'>BE (Honours) Aerospace Engineering and BCom Economics at Monash University, Australia</li>
                        <li className='pb-1'>97/99.95 ATAR</li>
                        <li className='pb-1'>Undergraduate research on hybrid rocket injection</li>
                        <li className='pb-1'>
                            Prev: 
                            <div className='flex gap-4 pl-4'>
                                <a href="https://www.boeing.com/">
                                    <img className="h-8 rounded-md" src="/boeing.png" />
                                </a>
                                <a href="https://umbrel.com/">
                                    <img className="h-8 rounded-md" src="/umbrel.jpeg" />
                                </a>
                                <a href="https://www.parishengineering.com.au/">
                                    <img className="h-8 rounded-md" src="/parish.jpg" />
                                </a>
                                <a href="https://ltrac.eng.monash.edu.au/">
                                    <img className="h-8 rounded-md" src="/ltrac.png" />
                                </a>
                            </div>
                        </li>
                        <li className='pb-1'>
                            Open-source developer/contributor:
                            <div className='text-sm px-6 lg:px-12 lg:w-2/3'>
                                <a href="https://www.getwired.app/" className="flex items-center">
                                    <div>
                                    <span className='hover:underline'>Last project: getwired.app</span>
                                    <p className="text-gray-600">Anonymous, decentralised messageboard using Proof-of-Work for spam prevention</p>
                                    </div>
                                    <img className="h-8 rounded-md ml-2" src="https://www.getwired.app/icon.png" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <img className="w-72 rounded-md m-auto" src="/william.png" />
                </div>
            </div>
        </div>
    );
};

export default Founder;
