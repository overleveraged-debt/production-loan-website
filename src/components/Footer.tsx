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
          <Image
            alt="logo"
            loading="lazy"
            width="170"
            height="170"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/logo.svg"
          />
          <div className="flex items-center space-x-3 mt-4 mb-2">
            <a target="_blank" rel="nofollow" href="#">
              <Image alt="facebook" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/facebook.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <Image alt="insta" loading="lazy" width="33" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/insta.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <Image alt="twitter" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/Twitter.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="#">
              <Image alt="linkedin" loading="lazy" width="33" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/linkedin-img.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UCVrC-eSezl3AdfFmHbRek2g">
              <Image alt="youtube" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/Youtube.svg" />
            </a>
            <a target="_blank" rel="nofollow" href="https://maps.app.goo.gl/mxSsWo7mBMcRDQEr6">
              <Image alt="gmb" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent', borderRadius: '3px' }} src="/gmb icon.svg" />
            </a>
          </div>
          <p className="leading-[2]">Registered Address - 5/2/8, Geeta Colony, New Delhi - 110031</p>
          <p className="leading-[2]">Corporate Address - A 12-13, Sector 16, Noida, Uttar Pradesh 201301</p>
          <a href="mailto:support@easypersonalloanservices.com"><p className="leading-[2]   cursor-pointer">support@easypersonalloanservices.com</p></a>
          <a href="tel:+919873883888"><p className="leading-[2] cursor-pointer">+91-987 388 3888</p></a>
        </div>
        <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Easy Personal Loan Services</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/learning-center">Learning Center</Link></li>
              <li><Link href="/sitemap">Site Map</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Legal</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/terms-and-conditions">Terms & Condition </Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy">Cookies Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">About Us</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/mission-vision-values">Mission, Vision & Values</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/grievance-redressel">Grievance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Personal Loan</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/unsecured-personal-loan-online-apply">Unsecured Personal Loan</Link></li>
              <li><Link href="/quick-personal-loan"> Instant Personal Loan</Link></li>
              <li><Link href="/personal-loan-for-home-improvement-loans">Personal Loan for Home Improvement</Link></li>
              <li><Link href="/personal-loan-balance-transfer">Personal Loan Balance Transfer</Link></li>
              <li><Link href="/short-term-personal-loan">Short Term Personal Loan</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Personal Loan by Location</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/personal-loan-in-delhi">Personal Loan in Delhi</Link></li>
              <li><Link href="/personal-loan-in-mumbai">Personal Loan in Mumbai</Link></li>
              <li><Link href="/personal-loan-in-bangalore">Personal Loan in Bangalore</Link></li>
              <li><Link href="/personal-loan-in-pune">Personal Loan in Pune</Link></li>
              <li><Link href="/personal-loan-in-kolkata">Personal Loan in Kolkata</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Personal Loan by Amount</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/5-lakh-personal-loan">5 Lakh Personal Loan</Link></li>
              <li><Link href="/10-lakh-personal-loan">10 Lakh Personal Loan</Link></li>
              <li><Link href="/15-lakh-personal-loan">15 Lakh Personal Loan</Link></li>
              <li><Link href="/20-lakh-personal-loan">20 Lakh Personal Loan</Link></li>
              <li><Link href="/25-lakh-personal-loan">25 Lakh Personal Loan</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Business Loan</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/business-loan-for-self-employed">Business Loans for Self Employed</Link></li>
              <li><Link href="/business-loan-for-hotels">Business Loans for Hotels</Link></li>
              <li><Link href="/business-loan-for-retailers">Business Loans for Retailers</Link></li>
              <li><Link href="/business-loan-for-women">Business Loans for Women</Link></li>
              <li><Link href="/business-loan-for-doctors">Business Loans for Doctors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Business Loan by Location</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/business-loan-in-delhi-ncr">Business Loan in Delhi</Link></li>
              <li><Link href="/business-loan-in-mumbai">Business Loan in Mumbai</Link></li>
              <li><Link href="/business-loan-in-bangalore">Business Loan in Bangalore</Link></li>
              <li><Link href="/business-loan-in-pune">Business Loan in Pune</Link></li>
              <li><Link href="/business-loan-in-kolkata">Business Loan in Kolkata</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-blue-250 mb-4">Debt Consolidation Loan</h3>
            <ul className="mt-2 space-y-2 text-[11px] md:text-[13px]">
              <li><Link href="/debt-consolidation-loan">Debt Consolidation Loan</Link></li>
              <li><Link href="/bill-consolidation-loan">Bill-consolidation-loan</Link></li>
              <li><Link href="/credit-card-consolidation-loan">Credit Consolidation Loan</Link></li>
              <li><Link href="/debt-consolidation-loan-in-delhi">Debt Consolidation Loan Delhi</Link></li>
              <li><Link href="/debt-consolidation-loan-in-mumbai">Debt Consolidation Loan Mumbai</Link></li>
              <li><Link href="/debt-consolidation-loan-in-bangalore">Debt Consolidation Loan Bangalore</Link></li>
            </ul>
          </div>
          <div></div>
          <div className="col-span-2">
            <div className="disclaimer-text">
              <span className="disclaimer-heading">Disclaimer : </span>Easy Personal Loan Services is a free service platform that helps users choose the best loan offers from trusted and RBI-regulated banks and NBFCs. We do not sell loans directly, and loan approval is at the sole discretion of the respective financial institution. Backed by a strong tech-based platform and deep financial expertise, we help increase your approval chances and secure the best deals in the industry by matching you with the most suitable lenders. We are on a <strong> vision of providing innovative financial solutions that bring peace to humankind</strong>.<br />
              <span className="important">Important:</span>
              <span className="important_description"> Never pay any upfront fee for loan processing or disbursal. If anyone claims to represent Easy Personal Loan Services and asks for money, please report it immediately at</span>
              <a style={{ marginLeft: '4px', color: '#fff' }} href="mailto:support@easypersonalloanservices.com"><strong>support@easypersonalloanservices.com</strong></a> <a className="read_more" href="/disclaimer" style={{ color: '#2a80ff' }}>Read more...</a>
            </div>
          </div>
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