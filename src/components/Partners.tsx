import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Partners.css';

const partners = [
  { alt: 'HSBC', src: '/partners/01_HSBC_MASTERBRAND_LOGO_RGB.svg' },
  { alt: 'Aditya Birla', src: '/partners/aditya birla logo.svg' },
  { alt: 'Axis Bank', src: '/partners/Axis_Bank_logo.svg 2.png' },
  { alt: 'Bajaj Finserv', src: '/partners/bajaj-finserv-logo.png' },
  { alt: 'Bank of Baroda', src: '/partners/Bank_of_Baroda_logo 2.png' },
  { alt: 'Cholamandalam', src: '/partners/cholamandalam_logo.svg' },
  { alt: 'Citi Bank', src: '/partners/citi bank logo.svg' },
  { alt: 'DBS', src: '/partners/dbs_logo.svg' },
  { alt: 'HDFC Bank', src: '/partners/HDFC_Bank_Logo.png' },
  { alt: 'ICICI Bank', src: '/partners/icici-header-logo.png' },
  { alt: 'IDFC First Bank', src: '/partners/IDFC-logo-website.svg' },
  { alt: 'IndusInd Bank', src: '/partners/indusind-bank1.webp' },
  { alt: 'Kotak Mahindra Bank', src: '/partners/Kotak_Mahindra_Bank_logo 2.png' },
  { alt: 'L&T Finance', src: '/partners/lt-logo.webp' },
  { alt: 'Tata Capital', src: '/partners/tata capital logo.png' },
  { alt: 'Yes Bank', src: '/partners/Yes-Bank-logo.svg' },
];

const Partners = () => {
  const extendedPartners = [...partners, ...partners];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-10 md:mt-10">
        Our <span className="text-blue-250">Partners</span> from across the
        industry
      </h2>
      <div className="slider">
        <div className="slide-track">
          {extendedPartners.map((partner, index) => (
            <div className="slide" key={index}>
              <Link href="/apply-loan">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
