import React from 'react';
import Image from 'next/image';

const PanIndia = () => {
  return (
    <section className="max-w-[1280px] mx-auto py-10 px-6 bg-gradient-to-b from-white bg-rose-50 text-center">
      <h2 className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2 mb-8 mt-12">
        <Image
          alt="Decorative-left-icon"
          loading="lazy"
          width="63"
          height="63"
          decoding="async"
          data-nimg="1"
          className=" w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12"
          style={{ color: 'transparent' }}
          src="/serving_pan2.svg"
        />
        <span className="text-xl sm:text-3xl md:text-3xl font-semibold text-black text-center ">
          Serving Pan India Customers
        </span>
        <Image
          alt="Decorative right icon"
          loading="lazy"
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          className="relative -top-1  w-10 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
          style={{ color: 'transparent' }}
          src="/serving_pan.svg"
        />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl md:text-4xl font-semibold text-blue-lightblue">
            1 million +
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 mt-1 text-gray-600">
            <Image
              alt="Application Served"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/ApplicationServed.png"
            />
            <span className="text-xs md:text-lg">Application Served</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl md:text-4xl font-semibold text-blue-lightblue">
            2,000 Cr +
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 mt-1 text-gray-600">
            <Image
              alt="Loans disbursed"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/LoanDisbursed.png"
            />
            <span className="text-xs md:text-lg">Loans disbursed</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl md:text-4xl font-semibold text-blue-lightblue">
            10,000 +
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 mt-1 text-gray-600">
            <Image
              alt="Locations"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/Locations.png"
            />
            <span className="text-xs md:text-lg">Locations</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl md:text-4xl font-semibold text-blue-lightblue">
            40 +
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 mt-1 text-gray-600">
            <Image
              alt="Bank partners"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/BankPartners.png"
            />
            <span className="text-xs md:text-lg">Bank partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanIndia;
