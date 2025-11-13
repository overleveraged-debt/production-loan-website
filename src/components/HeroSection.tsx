"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full px-2 sm:px-1 md:px-4 h-[130px] sm:h-[400px] md:h-[461px] max-w-[1320px] mx-auto mt-10">
      <div className="overflow-hidden rounded-lg shadow-lg h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full cursor-pointer flex-shrink-0 relative h-full"
            >
              <Image
                alt="img"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw"
                src={src}
              />
              <div className="absolute inset-0 flex flex-col top-1/2 justify-center items-end text-white p-6">
                <Link href="/apply-loan">
                  <button className="bg-black text-white px-4 py-[5px] rounded-full hover:bg-gray-800 text-[7px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
        onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;