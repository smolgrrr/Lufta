// PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <><div className='h-16 bg-black'></div>
    <div className="text-left p-3 sm:p-5 md:p-8 lg:p-12 bg-[#eee7e3]">
      <div className='p-4 sm:p-6 lg:p-8 px-4 sm:px-8 lg:px-16 '>
        <h1 className='font-medium text-xl sm:text-2xl'>
          Privacy Policy
        </h1>
        <p className='text-2xl sm:text-xl lg:text-4xl font-medium mb-2 sm:mb-4 lg:mb-8'>
          Last Updated: 4/11/23
        </p>
      </div>

      <div className='px-4 sm:px-8 lg:px-16'>
        {/* Introduction */}
        <h2 className='font-medium text-lg sm:text-xl mb-2'>Introduction</h2>
        <p className='mb-4'>
        Welcome to Lufta's Privacy Policy. Your privacy is critically important to us. We have a few fundamental principles:
        </p>
        <p>- We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.</p>
        <p>- We store personal information for only as long as we have a reason to keep it.</p>
        <p>- We aim to make it as simple as possible for you to control what information is shared publicly (or kept private), indexed by search engines, and permanently deleted.</p>

        {/* What Information We Collect */}
        <h2 className='font-medium text-lg sm:text-xl my-2'>What Information We Collect</h2>
        <p className=''>
        We only collect information about you if we have a reason to do so–for example, to provide our Services, to communicate with you, or to make our Services better.
        </p>
        <p>- Communication: If you send us an email or use our contact forms, we may keep a record of that correspondence.</p>
        {/* How We Use Information */}
        <h2 className='font-medium text-lg sm:text-xl my-2'>How We Use Information</h2>
        <p className=''>
        - To provide, maintain, and improve our services.
        </p>
        <p>- To communicate with you about our services, promotions, and updates.</p>

        {/* Sharing Information */}
        <h2 className='font-medium text-lg sm:text-xl my-2'>Sharing Information</h2>
        <p className='mb-4'>
          We do not share, sell, rent, or trade User Personal Information with third parties for their commercial purposes.
        </p>

        {/* ... More sections ... */}

        {/* Contact Information */}
        <h2 className='font-medium text-lg sm:text-xl my-2'>Contact Information</h2>
        <p className='mb-4'>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at williamhilder@protonmail.com or by mail using the details provided below:
        </p>
        <p>
          Lufta 30A Ambon St, Ashburton, VIC 3147 Australia
        </p>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
