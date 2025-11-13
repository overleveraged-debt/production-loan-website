import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-grees-300 text-white py-4 px-4 md:px-10">
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1240px] rounded-2xl border border-blue-500 bg-black text-white p-2 shadow-lg transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center justify-between text-center md:text-left opacity-100 translate-y-0 z-[9999]">
        <div className="flex items-center space-x-1">
          <Image
            alt="Gold coin icon"
            loading="lazy"
            width="6"
            height="6"
            decoding="async"
            data-nimg="1"
            className="h-[10px] w-[10px] md:h-10 md:w-10"
            style={{ color: 'transparent' }}
            src="/coin.svg"
          />
          <h2 className="text-[9px] md:text-lg font-semibold flex items-center gap-1">
            Quick Apply Loan <span className="text-yellow-400 text-[10px] md:text-lg">✨</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2 text-[8px] md:text-sm mt-1 md:mt-0">
          <span className="flex items-center gap-1">
            <Image
              alt="Checkmark icon"
              loading="lazy"
              width="6"
              height="6"
              decoding="async"
              data-nimg="1"
              className=" h-[px] w-[6px] md:h-4 md:w-4"
              style={{ color: 'transparent' }}
              src="/tick-circle.svg"
            />
            100% Digital Process
          </span>
          <span className="flex items-center gap-1">
            <Image
              alt="Checkmark icon"
              loading="lazy"
              width="6"
              height="6"
              decoding="async"
              data-nimg="1"
              className="h-[6px] w-[6px] md:h-4 md:w-4"
              style={{ color: 'transparent' }}
              src="/tick-circle.svg"
            />
            Loan Upto 50 Lacs
          </span>
          <span className="flex items-center gap-1">
            <Image
              alt="Checkmark icon"
              loading="lazy"
              width="6"
              height="6"
              decoding="async"
              data-nimg="1"
              className="h-[6px] w-[6px] md:h-4 md:w-4"
              style={{ color: 'transparent' }}
              src="/tick-circle.svg"
            />
            Best Deal Guaranteed
          </span>
        </div>
        <Link href="/apply-loan">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1  text-[8px] md:text-sm rounded-xl md:rounded-2xl mt-1 md:mt-0">
            Apply Now
          </button>
        </Link>
      </div>
      <div className="mt-20 mx-auto grid md:grid-cols-12 gap-8 text-sm">
        <div className="md:col-span-3">

          <div className="flex items-center space-x-3 mt-4 mb-2">
            <a target="_blank" rel="nofollow" href="#">
              <Image alt="facebook" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/facebook.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <Image alt="insta" loading="lazy" width="33" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/insta.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="https://maps.app.goo.gl/mxSsWo7mBMcRDQEr6">
              <Image alt="gmb" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent', borderRadius: '3px' }} src="/gmb icon.svg" />
            </a>
          </div>
          <p className="leading-[2]">Address: No 326/3 3rd Floor, Vandana Complex, New Bazar Street, Krishnarajapuram-560036</p>
          <a href="mailto:support@easypersonalloanservices.com"><p className="leading-[2]   cursor-pointer">support@easypersonalloanservices.com</p></a>
          <a href="tel:+918722545666"><p className="leading-[2] cursor-pointer">+91 8722545666</p></a>
        </div>
        <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Easy Personal Loan Services</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Legal</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/terms-and-conditions">Terms & Condition </Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Personal Loan</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/personal-loan">Unsecured Personal Loan</Link></li>
              <li><Link href="/personal-loan"> Instant Personal Loan</Link></li>
              <li><Link href="/personal-loan">Personal Loan for Home Improvement</Link></li>
              <li><Link href="/personal-loan">Personal Loan Balance Transfer</Link></li>
              <li><Link href="/personal-loan">Short Term Personal Loan</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Personal Loan by Location</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/personal-loan">Personal Loan in Delhi</Link></li>
              <li><Link href="/personal-loan">Personal Loan in Mumbai</Link></li>
              <li><Link href="/personal-loan">Personal Loan in Bangalore</Link></li>
              <li><Link href="/personal-loan">Personal Loan in Pune</Link></li>
              <li><Link href="/personal-loan">Personal Loan in Kolkata</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Personal Loan by Amount</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/personal-loan">5 Lakh Personal Loan</Link></li>
              <li><Link href="/personal-loan">10 Lakh Personal Loan</Link></li>
              <li><Link href="/personal-loan">15 Lakh Personal Loan</Link></li>
              <li><Link href="/personal-loan">20 Lakh Personal Loan</Link></li>
              <li><Link href="/personal-loan">25 Lakh Personal Loan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Debt Consolidation Loan</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/personal-loan">Debt Consolidation Loan</Link></li>
              <li><Link href="/personal-loan">Bill-consolidation-loan</Link></li>
              <li><Link href="/personal-loan">Credit Consolidation Loan</Link></li>
              <li><Link href="/personal-loan">Debt Consolidation Loan Delhi</Link></li>
              <li><Link href="/personal-loan">Debt Consolidation Loan Mumbai</Link></li>
              <li><Link href="/personal-loan">Debt Consolidation Loan Bangalore</Link></li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="mt-2">
        <Image
          alt="india"
          loading="lazy"
          width="110"
          height="70"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent' }}
          src="/madInIndia.svg"
        />
      </div>
      <div className="mt-5 text-center text-[#6f6969] border-t border-gray-700 pt-2">
        <p>© 2025 - All Rights Reserved - Easy Personal Loan Services</p>
      </div>
    </footer>
  );
};

export default Footer;