"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white mx-auto shadow-[0px_10px_60px_0px_rgba(0,0,0,0.1)] transition-all duration-500 mt-20 rounded-full"
      style={{
        width: '100%',
        maxWidth: '1294px',
        margin: 'auto',
        padding: '0.5% 0',
        position: 'sticky',
        top: '16px',
        left: '0',
        zIndex: 10,
      }}
    >
      <div className="flex items-center justify-between px-6">
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              alt="image"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/menu.svg"
            />
        </button>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            alt="image"
            width="848"
            height="192"
            decoding="async"
            data-nimg="1"
            className="h-[40px] md:h-[50px] w-auto"
            style={{ color: 'transparent' }}
            src="/logo.svg"
          />
        </Link>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/about" className="hover:text-black">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:text-black">
            Contact Us
          </Link>
          <Link href="/emi-calculator" className="hover:text-black">
            EMI Calculator
          </Link>
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button
              className="flex items-center hover:text-black"
            >
              Products
              <Image
                alt="prod"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="ml-1"
                style={{ color: 'transparent' }}
                src="/product_arrow.svg"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white rounded-md shadow-lg z-10 p-6" style={{ minWidth: '400px' }}>
                <h3 className="font-bold text-lg text-blue-250 mb-4">Personal Loan Products</h3>
                <div className="flex">
                  <div className="w-1/2">
                    <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                      Personal Loan
                    </Link>
                    <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                      Balance Transfer
                    </Link>
                    <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                      Emergency Loan
                    </Link>
                  </div>
                  <div className="w-1/2">
                    <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                      Home Renovation Loan
                    </Link>
                    <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                      Overdraft Loan
                    </Link>
                    <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                      Wedding Loan
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link href="/apply-loan">
          <button className="bg-grees-200 text-white px-4 py-2 rounded-full hover:bg-gray-800 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
            Apply Now
          </button>
        </Link>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg p-4">
          <Link href="/" className="block py-2 text-sm text-gray-700 hover:text-blue-250">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-sm text-gray-700 hover:text-blue-250">
            About Us
          </Link>
          <Link href="/contact-us" className="block py-2 text-sm text-gray-700 hover:text-blue-250">
            Contact Us
          </Link>
          <Link href="/emi-calculator" className="block py-2 text-sm text-gray-700 hover:text-blue-250">
            EMI Calculator
          </Link>
          <div className="relative">
            <button
              className="flex items-center w-full text-left py-2 text-sm text-gray-700 hover:text-blue-250"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products
              <Image
                alt="prod"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="ml-1"
                style={{ color: 'transparent' }}
                src="/product_arrow.svg"
              />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                    Personal Loan
                  </Link>
                  <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                    Balance Transfer
                  </Link>
                  <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                    Emergency Loan
                  </Link>
                  <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                    Home Renovation Loan
                  </Link>
                  <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                    Overdraft Loan
                  </Link>
                  <Link href="/personal-loan" className="block py-2 text-sm text-gray-700 hover:text-blue-250 hover:bg-blue-100 rounded-md px-2">
                    Wedding Loan
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;