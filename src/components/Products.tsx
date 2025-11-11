"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-16 md:mt-20">
          Our <span className="text-blue-250">Products</span>
        </h2>
        <h3 className="text-2xl text-blue-250 mt-2 font-bold flex items-center justify-center gap-2 mt-10">
          <Image
            alt="Line Left"
            loading="lazy"
            width="220"
            height="2"
            decoding="async"
            data-nimg="1"
            src="/LineCommon.svg"
            style={{ color: 'transparent' }}
          />
          Personal Loans
          <Image
            alt="Line Right"
            loading="lazy"
            width="220"
            height="2"
            decoding="async"
            data-nimg="1"
            src="/LineCommon.svg"
            style={{ color: 'transparent' }}
          />
        </h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/personal-loan" className="bg-white  px-4 py-5 rounded-[50px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-blue-500 hover:text-white group flex flex-col h-full cursor-pointer">
            <div className="flex justify-center mb-4">
              <Image
                alt="Personal Loan"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="/Money.svg"
                style={{ color: 'transparent' }}
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Personal Loan</h4>
            <ul className="text-sm space-y-2 flex-grow mb-6">
              <li className="flex items-start font-medium">• Quick Approval</li>
              <li className="flex items-start font-medium">• Competitive Rates</li>
              <li className="flex items-start font-medium">• No Collateral</li>
            </ul>
            <div className="mt-auto text-left ml-5">
              <span className="text-blue-250 font-bold text-lg group-hover:text-white">
                Apply →
              </span>
            </div>
          </Link>
          <Link href="/personal-loan" className="bg-white  px-4 py-5 rounded-[50px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-blue-500 hover:text-white group flex flex-col h-full cursor-pointer">
            <div className="flex justify-center mb-4">
              <Image
                alt="Balance Transfer"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="/Money2.svg"
                style={{ color: 'transparent' }}
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Balance Transfer</h4>
            <ul className="text-sm space-y-2 flex-grow mb-6">
              <li className="flex items-start font-medium">• Lower Interest Rates</li>
              <li className="flex items-start font-medium">• Extended Tenure</li>
              <li className="flex items-start font-medium">• Top-up Available</li>
            </ul>
            <div className="mt-auto text-left ml-5">
              <span className="text-blue-250 font-bold text-lg group-hover:text-white">
                Apply →
              </span>
            </div>
          </Link>
          <Link href="/personal-loan" className="bg-white  px-4 py-5 rounded-[50px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-blue-500 hover:text-white group flex flex-col h-full cursor-pointer">
            <div className="flex justify-center mb-4">
              <Image
                alt="Emergency Loan"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="/Money3.svg"
                style={{ color: 'transparent' }}
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Emergency Loan</h4>
            <ul className="text-sm space-y-2 flex-grow mb-6">
                <li className="flex items-start font-medium">• Medical Emergency</li>
                <li className="flex items-start font-medium">• Home Repairs</li>
                <li className="flex items-start font-medium">• Education Expenses</li>
            </ul>
            <div className="mt-auto text-left ml-5">
              <span className="text-blue-250 font-bold text-lg group-hover:text-white">
                Apply →
              </span>
            </div>
          </Link>
          <Link href="/personal-loan" className="bg-white  px-4 py-5 rounded-[50px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-blue-500 hover:text-white group flex flex-col h-full cursor-pointer">
            <div className="flex justify-center mb-4">
              <Image
                alt="Home Renovation Loan"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="/Money.svg"
                style={{ color: 'transparent' }}
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Home Renovation Loan</h4>
            <ul className="text-sm space-y-2 flex-grow mb-6">
              <li className="flex items-start font-medium">• Dream Home Makeover</li>
              <li className="flex items-start font-medium">• No Down Payment</li>
              <li className="flex items-start font-medium">• Comprehensive Coverage</li>
            </ul>
            <div className="mt-auto text-left ml-5">
              <span className="text-blue-250 font-bold text-lg group-hover:text-white">
                Apply →
              </span>
            </div>
          </Link>
          <Link href="/personal-loan" className="bg-white  px-4 py-5 rounded-[50px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-blue-500 hover:text-white group flex flex-col h-full cursor-pointer">
            <div className="flex justify-center mb-4">
              <Image
                alt="Overdraft Loan"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="/Money2.svg"
                style={{ color: 'transparent' }}
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Overdraft Loan</h4>
            <ul className="text-sm space-y-2 flex-grow mb-6">
              <li className="flex items-start font-medium">• Withdraw as Needed</li>
              <li className="flex items-start font-medium">• Pay Only Interest</li>
              <li className="flex items-start font-medium">• Revolving Credit</li>
            </ul>
            <div className="mt-auto text-left ml-5">
              <span className="text-blue-250 font-bold text-lg group-hover:text-white">
                Apply →
              </span>
            </div>
          </Link>
          <Link href="/personal-loan" className="bg-white  px-4 py-5 rounded-[50px] border border-[rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-blue-500 hover:text-white group flex flex-col h-full cursor-pointer">
            <div className="flex justify-center mb-4">
              <Image
                alt="Wedding Loan"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="/Money3.svg"
                style={{ color: 'transparent' }}
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Wedding Loan</h4>
            <ul className="text-sm space-y-2 flex-grow mb-6">
                <li className="flex items-start font-medium">• Wedding Rings</li>
                <li className="flex items-start font-medium">• Guest Expenses</li>
                <li className="flex items-start font-medium">• Photography & Video</li>
            </ul>
            <div className="mt-auto text-left ml-5">
              <span className="text-blue-250 font-bold text-lg group-hover:text-white">
                Apply →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;