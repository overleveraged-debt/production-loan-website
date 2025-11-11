"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactUsPage = () => {
  return (
    <div className="bg-[#e7f0ff]">
      <div className="mx-auto px-4 md:px-8 py-2">
        <div className="lg:px-4 lg:ml-20 text-gray-600 text-sm mb-4 mt-10">
          <nav className="text-sm text-gray-500 py-4  rounded-md px-4">
            <ol className="flex items-center space-x-2">
              <li className="flex items-center space-x-2">
                <Link className="text-black text-[16px]  font-medium hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right w-4 h-4 text-gray-400"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
                <span className="text-gray-500 text-[16px] font-semibold">
                  Contact Us
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <h2 className="text-5xl font-semibold text-center mb-4 mt-8 font-inter">
          Get in Touch with <span className="text-blue-250">Easy Personal Loan Services</span>
        </h2>
        <p className="text-center text-lg max-w-5xl mx-auto mb-8 mt-5 font-inter">
          We're here to help you find the perfect loan solution. Reach out to our expert team for personalized assistance.
        </p>
      </div>
      <div className="relative bg-[#EAF1FF] flex flex-col items-center mb-20 ">
        <div className="relative w-full max-w-[1294px]">
          <div
            className="hidden sm:block w-full h-[400px] bg-no-repeat bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: "url('/contact.svg')" }}
          ></div>
          <div className="relative -mt-24 flex flex-col sm:flex-row gap-6 max-w-[1100px] mx-auto w-full px-4 lg:px-0">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full sm:w-[350px] lg:w-[350px] ">
              <Image
                alt="Call us"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="mx-auto"
                style={{ color: 'transparent' }}
                src="/call.svg"
              />
              <h3 className="font-semibold text-lg mt-3">Call Us</h3>
              <a href="tel:+919873883888" className="text-blue-500 font-medium">
                +91-987 388 3888
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Mon-Fri: 9:00 AM - 7:00 PM IST
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full sm:w-[350px] lg:w-[350px] ">
              <Image
                alt="Email"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="mx-auto"
                style={{ color: 'transparent' }}
                src="/email.svg"
              />
              <h3 className="font-semibold text-lg mt-3">Email Us</h3>
              <a href="mailto:support@easypersonalloanservices.com" className="text-blue-500 font-medium">
                support@easypersonalloanservices.com
              </a>
              <p className="text-gray-600 text-sm mt-2">
                We respond within 24 hours
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full sm:w-[350px] lg:w-[350px]">
              <Image
                alt="Office"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="mx-auto"
                style={{ color: 'transparent' }}
                src="/office.svg"
              />
              <h3 className="font-semibold text-lg mt-3">Visit Us</h3>
              <p className="text-blue-500 font-medium">Corporate Office:</p>
              <p className="text-gray-600 text-sm">
                A 12-13, Sector 16, Noida, Uttar Pradesh 201301
              </p>
              <p className="text-blue-500 font-medium mt-3">
                Write to us at:
              </p>
              <p className="text-gray-600 text-sm">
                5/2/8, Geeta Colony, New Delhi - 110031
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <div className="w-full bg-blue-250 text-white text-center py-12">
          <h1 className="text-5xl font-md">Careers</h1>
          <p className="mt-2 text-md">
            For Queries related to Careers, send your CVs with a cover letter at
          </p>
          <a
            href="mailto:hr@easypersonalloanservices.com"
            className="mt-4 inline-block px-6 py-2 border border-white rounded-lg text-md hover:bg-white hover:text-blue-600 transition"
          >
            hr@easypersonalloanservices.com
          </a>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15402694.003694715!2d59.768704616304284!3d19.52343042563181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd26a2554b7d%3A0x41a584f609cbfeaa!2sLoansJagat.com%20%7C%20India%E2%80%99s%20First%20Debt%20Consolidation%20Marketplace%20for%20Personal%20%26%20Business%20Loans!5e0!3m2!1sen!2sin!4v1718702381079!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
