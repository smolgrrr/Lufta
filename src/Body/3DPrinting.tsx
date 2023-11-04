import React from 'react';
import { Parallax } from 'react-parallax';

const BodyPrinting: React.FC = () => {
    const isMobile = window.innerWidth <= 640;
    const imageStyle = isMobile 
    ? { objectFit: 'cover', objectPosition: 'calc(100% + 100px) center' }
    : { objectFit: 'cover', objectPosition: 'right center' };
  
    return (
        <>
            <Parallax bgImage="/WAAM.jpg" strength={75} className="" bgImageStyle={imageStyle}>
                <div className="absolute inset-0 bg-gray-900 opacity-40 z-10"></div>
                <div className='text-start text-[#eee7e3] p-4 sm:p-8 lg:p-16 h-screen z-20 relative'>
                    {/* If you need the commented out div in the future, consider adding responsive classes to it too */}
                    {/* <div className="relative w-full h-64 bg-cover bg-center z-1" style={{ backgroundImage: 'url(WAAM.jpg)' }}></div> */}
                    <h1 className='font-extrabold font-Inter mr-auto text-4xl sm:text-5xl lg:text-6xl p-2 sm:p-4 mb-4 sm:mb-6'>3D Printed Airframes</h1>
                    <div className="">
                        <p className="text-lg sm:text-xl mb-6 p-2 sm:p-4 font-medium">AIRSHIPS MEET THE FUTURE</p>
                        <div className='w-full sm:w-3/4 lg:w-1/2 p-2 sm:p-4 font-medium'>
                            <p className="">
                                Harnessing breakthroughs in modern engineering and design, our focus is on becoming the first company to achieve high-volume airship production.
                            </p>
                            <p className="mt-4">
                                Lufta will leverage the capabilities of Wire-Arc-Additive-Manufacturing (WAAM) to simplify and automate the airframe manufacturing process.
                                Applying this innovation at the core of the airship will greatly reduce vehicle complexity, cost, and time to market.
                                WAAM does not have the high fixed-costs or rigidity of fixed tooling, which will be key in scaling Lufta from a start-up to becoming a great aviation company.
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    );
};

export default BodyPrinting;
