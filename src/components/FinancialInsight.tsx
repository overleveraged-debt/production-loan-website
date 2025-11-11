import React from 'react';
import Image from 'next/image';

const insights = [
  {
    title: 'What is NFO in a Mutual Fund? Meaning, Features & Should You Invest?',
    image: '/insight1.png',
    date: '11 Sep 2025',
  },
  {
    title: 'Cheapest Home Loan Offers in June 2025 by various Banks: Check your Savings Post RBI Rate Cut',
    image: '/insight2.png',
    date: '10 Jun 2025',
  },
  {
    title: 'How She Consolidated ₹7 Lakh Credit Card Debt & Saved ₹2 Lakh – Quick Guide 2025',
    image: '/insight3.png',
    date: '21 Feb 2025',
  },
];

const FinancialInsight = () => {
  return (
    <div className="relative max-w-[1300px] mx-auto px-6 pb-12 mt-10">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-16 md:mt-20">
        Financial <span className="text-blue-600">Insight</span>
      </h2>
      <div className="relative mt-8 overflow-hidden">
        <div className="flex gap-6 overflow-x-auto px-8 snap-x scrollbar-hide">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="relative min-w-[300px] md:min-w-[380px] snap-center rounded-xl"
            >
              <div className="relative rounded-lg h-[300px]">
                <Image
                  alt={insight.title}
                  loading="lazy"
                  width="380"
                  height="180"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-[180px] object-cover rounded-xl"
                  style={{ color: 'transparent' }}
                  src={insight.image}
                />
                <div className="relative w-[calc(100%-50px)] mx-auto mt-[-60px] min-h-[178px] px-5 py-5 text-white bg-black/40  shadow-[0_5px_10px_rgba(0,0,0,0.01),0_-5px_10px_rgba(0,0,0,0.01),5px_0_10px_rgba(0,0,0,0.01),-5px_0_10px_rgba(0,0,0,0.01)]  rounded-xl transition-all duration-300 ease-in-out cursor-pointer  hover:bg-[radial-gradient(50.79%_52.48%_at_48.36%_50.79%,rgba(18,104,179,0.86)_0%,rgba(16,141,250,0.95)_100%)]  hover:shadow-[0px_45px_45px_rgba(15,157,245,0.02)]">
                  <h3 className="font-semibold text-md line-clamp-1">
                    {insight.title}
                  </h3>
                  <div className="font-normal text-sm line-clamp-2">
                    <p>
                      <span style={{ fontSize: '14px' }}></span>
                    </p>
                    <p
                      style={{
                        lineHeight: '1.38',
                        marginBottom: '12pt',
                        marginRight: '30pt',
                        marginTop: '12pt',
                      }}
                      dir="ltr"
                    >
                      <span
                        style={{
                          backgroundColor: 'transparent',
                          fontSize: '14px',
                        }}
                      ></span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-semibold">{insight.date}</span>
                    <button className="bg-black text-sm text-white px-4 py-2 rounded-full hover:bg-gray-800">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialInsight;
