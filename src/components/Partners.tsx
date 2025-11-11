import React from 'react';
import Image from 'next/image';

const partners = [
  { alt: 'Bajaj Finance', src: '/bajaj_finserv.svg' },
  { alt: 'Axis Finance', src: '/axis_finance.svg' },
  { alt: 'Credit', src: '/credit.svg' },
  { alt: 'L&T Finance', src: '/l_&_t.svg' },
  { alt: 'Shri Ram Finance', src: '/shri_ram.svg' },
  { alt: 'Tata Capital', src: '/tata_captial.svg' },
  { alt: 'Yes Bank', src: '/yes_bank.svg' },
  { alt: 'SMFG Finance', src: '/smfga.svg' },
  { alt: 'Ponnawalla Finance', src: '/ponawalla.svg' },
  { alt: 'Aditya Birla Finance', src: '/aditya.svg' },
];

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-10 md:mt-10">
        Our <span className="text-blue-250">Partners</span> from across the
        industry
      </h2>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 place-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-md rounded-xl p-4 flex items-center justify-center border border-gray-200"
          >
            <Image
              alt={partner.alt}
              loading="lazy"
              width="140"
              height="70"
              decoding="async"
              data-nimg="1"
              className="object-contain"
              style={{ color: 'transparent' }}
              src={partner.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
