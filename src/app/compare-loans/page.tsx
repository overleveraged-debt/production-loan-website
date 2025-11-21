import type { Metadata } from 'next';
import React from 'react';
import LoanComparisonTable from '@/components/LoanComparisonTable';

export const metadata: Metadata = {
  title: 'Compare Personal Loan Interest Rates | Easy Personal Loan Services',
};

const CompareLoansPage = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-black mb-8">
        Compare <span className="text-blue-250">Personal Loan</span> Interest Rates
      </h1>
      <LoanComparisonTable />
      <div className="mt-8 text-gray-600 text-sm">
        <p className="italic">*Interest rates as on 19th November 2025</p>
        <p className="mt-4">
          If you are applying for a personal loan, do note that your eligibility for the loan along with the interest rate offered to you post your application would depend on your credit profile. Consumers with a strong credit history and excellent repayment record are likely to get a lower interest rate. Factors like income, profession and employer also determine your eligibility for a personal loan. Most Banks and large NBFCs usually prefer salaried individuals with a stable employment history and a strong credit profile.
        </p>
        <p className="mt-4">
          Those with a damaged credit profile, which is reflected in their credit report, are likely to get rejected by Banks and NBFCs (especially those with a credit score lower than 700). There are a few NBFCs that may cater to some of these consumers, albeit at higher interest rates and for lower loan amounts.
        </p>
      </div>
    </div>
  );
};

export default CompareLoansPage;
