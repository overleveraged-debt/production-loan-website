import React from 'react';
import Image from 'next/image';

const EasySteps = () => {
  return (
    <div className="max-w-[1280px] mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-16 md:mt-20">
        6 Easy Steps to Apply for Loans
      </h2>
      <div className="hidden md:flex justify-center">
        <Image
          alt="loan step"
          loading="lazy"
          width="1035"
          height="335"
          decoding="async"
          data-nimg="1"
          className="desktop-images"
          style={{ color: 'transparent' }}
          src="/new.svg"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 md:hidden px-4 sm:px-6">
        <div className="flex justify-center">
          <Image
            alt="Step 1"
            loading="lazy"
            width="300"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/img1.svg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            alt="Step 2"
            loading="lazy"
            width="300"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/img2.svg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            alt="Step 3"
            loading="lazy"
            width="300"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/img3.svg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            alt="Step 4"
            loading="lazy"
            width="300"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/img4.svg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            alt="Step 5"
            loading="lazy"
            width="300"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/img5.svg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            alt="Step 6"
            loading="lazy"
            width="300"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/img6.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
