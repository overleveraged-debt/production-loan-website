import React from 'react';
import Step from './Step';

const stepsData = [
  {
    stepNumber: '01',
    title: 'Fill Basic Details',
    description: 'Help us know your name, employment status, type of loan requirement, city, mobile number, etc',
    color: '#a3333d',
  },
  {
    stepNumber: '02',
    title: 'Talk to Our Professionals',
    description: 'Our loan experts will call you to discuss your loan requirements and guide you through the process.',
    color: '#2a80ff',
  },
  {
    stepNumber: '03',
    title: 'Get Your Loan',
    description: 'After successful verification, your loan amount will be disbursed to your bank account',
    color: '#35524a',
  },
];

const EasySteps = () => {
  return (
    <div className="max-w-[1280px] mx-auto text-center py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-12">
        3 Easy Steps to <span className="text-blue-250">Apply for Loans</span>
      </h2>
      <div className="flex flex-col items-center">
        {/* First Row: Steps 1 & 2 */}
        <div className="flex justify-center gap-8 px-4 mb-8">
          <Step key={0} {...stepsData[0]} />
          <Step key={1} {...stepsData[1]} />
        </div>
        {/* Second Row: Step 3 */}
        <div className="flex justify-center px-4">
          <Step key={2} {...stepsData[2]} />
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
