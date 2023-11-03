import React from 'react';
import { Parallax } from 'react-parallax';

const BodyPrinting: React.FC = () => {

    return (
        <>
            <Parallax bgImage="/WAAM.jpg" strength={75} className="">
                <div className="text-start text-white z-2 p-16 h-screen">
                    {/* <div className="relative w-full h-64 bg-cover bg-center z-1" style={{ backgroundImage: 'url(WAAM.jpg)' }}></div> */}
                    <h1 className='font-extrabold font-Inter mr-auto text-6xl p-4 mb-6'>3D Printed Airframes</h1>
                    <div className="">
                        <p className="text-xl mb-12 p-4">AIRSHIPS MEET THE FUTURE</p>
                        <div className='w-1/2 p-4'>
                            <p className="">
                                Harnessing breakthroughs in modern engineering and design, our focus is on being the first company to achieve high-volume airship production.
                            </p>
                            <p>
                                Lufta will leverage the capabilties of Wire-Arc-Additive-Manufacturing (WAAM) to simplify and automate the airframe manufacturing process.
                                Applying this innovation at the core of the airship will greatly reduce vehicle complexity, cost, and time to market.
                                WAAM does not have the high fixed-costs or rigidity of fixed tooling, which will be key in scaling Lufta from a start-up to a great aviation company.
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default BodyPrinting;
