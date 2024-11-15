import React from 'react';

const Team: React.FC = () => {
    return (
        <div className="text-center py-8 sm:py-12 lg:py-16">
            <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl pb-8">
                Meet the Team
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-x-16 lg:space-y-0 max-w-4xl mx-auto px-6">
                {/* William Hilder */}
                <div className="flex flex-col items-center w-full lg:w-1/2 px-6">
                    <img className="w-40 h-58 rounded-lg mb-6" src="/William.jpg" alt="William Hilder" />
                    <p className="text-lg font-semibold mb-2">William Hilder</p>
                    <p className="text-sm font-semibold mb-2">Co-Founder</p>
                    <div className="text-sm text-centre flex flex-col justify-between h-full">
                        <p className="mb-2">
                            BE (Honours) Aerospace Engineering and BCom Economics 
                        </p>
                    </div>
                </div>

                {/* Jed Wong */}
                <div className="flex flex-col items-center w-full lg:w-1/2 px-6">
                    <img className="w-40 h-58 rounded-lg mb-6" src="/Jed.jpg" alt="Jed Wong" />
                    <p className="text-lg font-semibold mb-2">Jed Wong</p>
                    <p className="text-sm font-semibold mb-2">Co-Founder</p>
                    <div className="text-sm text-centre flex flex-col justify-between h-full">
                        <p className="mb-2">
                            BE (Honours) Mechatronics Engineering (AI Stream) Minor in Smart Manufacturing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
