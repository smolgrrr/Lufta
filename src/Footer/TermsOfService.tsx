// TermsOfService.tsx
// TermsOfService.tsx
import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <><div className='h-16 bg-black'></div>
        <div className="text-left p-3 sm:p-5 md:p-8 lg:p-12 bg-[#eee7e3]">
            <div className='p-4 sm:p-6 lg:p-8 px-4 sm:px-8 lg:px-16 '>
                <h1 className='font-medium text-xl sm:text-2xl'>
                    Terms of Service
                </h1>
                <p className='text-2xl sm:text-xl lg:text-4xl font-medium mb-2 sm:mb-4 lg:mb-8'>
                    Last Updated: 4/11/23
                </p>
            </div>

            <div className='px-4 sm:px-8 lg:px-16'>
                {/* Introduction */}
                <h2 className='font-medium text-lg sm:text-xl mb-2'>1. Introduction</h2>
                <p className='mb-4'>
                    Welcome to Lufta. These terms and conditions govern your access to and use of our website and services. 
                    By accessing or using our service, you agree to these terms. 
                    If you disagree with any part of the terms, then you may not access the service.
                </p>

                {/* Restrictions on Use */}
                <h2 className='font-medium text-lg sm:text-xl mb-2'>3. Restrictions on Use</h2>
                <p className='mb-4'>
                You may use our services only as permitted by law, including applicable export and control laws and regulations. 
                We may suspend or terminate your access if you violate any of our policies or terms.
                </p>

                {/* Termination */}
                <h2 className='font-medium text-lg sm:text-xl mb-2'>4. Termination</h2>
                <p className='mb-4'>
                We may terminate your access to our services, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account.
                </p>

                {/* Disclaimer */}
                <h2 className='font-medium text-lg sm:text-xl mb-2'>5. Disclaimer</h2>
                <p className='mb-4'>
                Our services and the information on our site are provided on an 'as is' basis. 
                Lufta makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                 {/* Limitation of Liability */}
                 <h2 className='font-medium text-lg sm:text-xl mb-2'>5. Limitation of Liability</h2>
                <p className='mb-4'>
                In no event shall Lufta be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                 {/* Changes to the Terms */}
                 <h2 className='font-medium text-lg sm:text-xl mb-2'>5. Changes to the Terms</h2>
                <p className='mb-4'>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of changes by updating the "Last Updated" date at the top of this document.
                </p>

                {/* Contact Information */}
                <h2 className='font-medium text-lg sm:text-xl mb-2'>Contact Information</h2>
                <p className='mb-4'>
                    For more information about our terms of service, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at williamhilder@protonmail.com or by mail using the details provided below:
                </p>
                <p>
                Lufta 30A Ambon St, Ashburton, VIC 3147 Australia   
                </p>
            </div>
        </div>
        </>
    );
};

export default TermsOfService;
