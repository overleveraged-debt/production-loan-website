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
          <Link href="/compare-loans" className="hover:text-black">
            Compare Loans
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
        <div className="md:hidden bg-gradient-to-b from-white to-gray-50 shadow-2xl rounded-b-2xl p-6 border-t border-gray-100 animate-slideDown">
          <div className="space-y-1">
            <Link
              href="/"
              className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>

            <Link
              href="/about"
              className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Us
            </Link>

            <Link
              href="/contact-us"
              className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>

            <Link
              href="/emi-calculator"
              className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              EMI Calculator
            </Link>

            <Link
              href="/compare-loans"
              className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Compare Loans
            </Link>

            <div className="border-t border-gray-200 my-2"></div>

            <div className="relative">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Products
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="mt-2 ml-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 shadow-inner">
                  <p className="text-xs font-semibold text-blue-700 mb-3 px-2">Personal Loan Products</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/personal-loan"
                      className="flex items-start py-2.5 px-3 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-blue-600 mr-1.5">•</span>
                      <span>Personal Loan</span>
                    </Link>
                    <Link
                      href="/personal-loan"
                      className="flex items-start py-2.5 px-3 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-blue-600 mr-1.5">•</span>
                      <span>Balance Transfer</span>
                    </Link>
                    <Link
                      href="/personal-loan"
                      className="flex items-start py-2.5 px-3 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-blue-600 mr-1.5">•</span>
                      <span>Emergency Loan</span>
                    </Link>
                    <Link
                      href="/personal-loan"
                      className="flex items-start py-2.5 px-3 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-blue-600 mr-1.5">•</span>
                      <span>Home Renovation</span>
                    </Link>
                    <Link
                      href="/personal-loan"
                      className="flex items-start py-2.5 px-3 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-blue-600 mr-1.5">•</span>
                      <span>Overdraft Loan</span>
                    </Link>
                    <Link
                      href="/personal-loan"
                      className="flex items-start py-2.5 px-3 text-xs font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-blue-600 mr-1.5">•</span>
                      <span>Wedding Loan</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;