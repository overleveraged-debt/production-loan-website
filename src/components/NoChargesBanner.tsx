import React from 'react';

const NoChargesBanner = () => {
  return (
    <div className="py-2 md:py-6 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-xl">
          <div className="text-center">
            {/* Main Message */}
            <p className="text-base md:text-2xl lg:text-3xl text-blue-600 font-bold">
              We <span className="text-green-600">DO NOT</span> charge our customers any fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChargesBanner;
