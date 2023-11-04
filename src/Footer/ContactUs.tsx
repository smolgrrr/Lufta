import React from 'react';
import HeaderBar from '../Header/HeaderBar';

const ContactUs: React.FC = () => {
    return (
        <>
            <div className='h-16 bg-black'></div>
            <div className="text-left p-3 sm:p-5 md:p-8 lg:p-12 bg-[#eee7e3] h-screen">
                <div className='p-4 sm:p-6 lg:p-8 px-4 sm:px-8 lg:px-16 '>
                    <h1 className='font-medium text-xl sm:text-2xl'>
                        Contact Us:
                    </h1>
                    <p className='text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 lg:mb-8'>
                        For inquiries, please feel free to <a href="mailto:williamhilder@protonmail.com" className="underline">send us an email</a>.
                    </p>
                    <div className="flex text-xl font-medium  sm:text-2xl mt-4 gap-4">
                        Founder media: 
                        <a href="https://linkedin.com/in/william-hilder-au99/" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className='h-10' alt="LinkedIn" />
                        </a>
                        <a href="https://twitter.com/smolgrrr" target="_blank" rel="noreferrer">
                            <img src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png" className='h-10' alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
