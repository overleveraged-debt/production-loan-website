import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section className="py-2 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-16 md:mt-20">
          Why Choose <span className="text-blue-250">Easy Personal Loan Services?</span>
        </h2>
        <p className="text-gray-500 mb-10 mx-auto mb-10">
          Easy Personal Loan Services is a digital marketplace that helps in easy loan
          accessibility with the best guaranteed deals.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center text-center">
            <Image
              alt="100% Paperless process"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              className="mb-4"
              style={{ color: 'transparent' }}
              src="/FirsyWhyIcon1.png"
            />
            <p className="text-md">100% Paperless Process</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Compare, Choose & Apply among 40+ Banks"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              className="mb-4"
              style={{ color: 'transparent' }}
              src="/SecondWhyIcon.png"
            />
            <p className="text-md">
              Compare, Choose & Apply among 40+ Banks
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Easy Debt Consolidation Upto 50 Lacs"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              className="mb-4"
              style={{ color: 'transparent' }}
              src="/ThirdWhyIcon.png"
            />
            <p className="text-md">Easy Debt Consolidation Upto 50 Lacs</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Simple & Secure Process"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              className="mb-4"
              style={{ color: 'transparent' }}
              src="/FourthWhyIcon.png"
            />
            <p className="text-md">Simple & Secure Process</p>
          </div>
          <div className="hidden lg:flex flex-col items-center text-center">
            <Image
              alt="Experienced Loan Professionals"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              className="mb-4"
              style={{ color: 'transparent' }}
              src="/FifthWhycIcon.png"
            />
            <p className="text-md">Experienced Loan Professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
