import React from 'react';

const loanData = [
  { bank: 'HDFC Bank', interest: '9.99% - 12.5%', fees: 'Rs. 3,499 - Rs. 6,500' },
  { bank: 'Axis Bank', interest: '9.99% - 17.15%', fees: '1% - 1.5%' },
  { bank: 'ICICI Bank', interest: '11.00% - 13.00%', fees: 'Up to 2%' },
  { bank: 'Kotak Mahindra Bank', interest: '9.98% - 17.20%', fees: '1.1% - 1.5%' },
  { bank: 'IndusInd Bank', interest: '10.35% - 16.5%', fees: '1.3% - 2%' },
  { bank: 'IDFC FIRST Bank', interest: '9.99% p.a onwards', fees: 'Up to 2%' },
  { bank: 'YES Bank', interest: '13.00% - 16.00%', fees: '1.5% - 2.25%' },
  { bank: 'Tata Capital', interest: '11.99% - 13.99%', fees: 'Up to 1.25%' },
  { bank: 'Aditya Birla Finance', interest: '10.99% p.a. onwards', fees: 'Up to 4%' },
  { bank: 'L&T Finance', interest: '11.00% p.a. onwards', fees: 'Up to 3%' },
  { bank: 'Hero Fincorp', interest: '19.75% - 30.00% p.a.', fees: '2.3% - 3%' },
  { bank: 'Piramal Finance', interest: '12.90% p.a. onwards', fees: 'Up to 5%' },
  { bank: 'Poonawalla Fincorp', interest: '18.00% - 36.00% p.a.', fees: 'Up to 3%' },
  { bank: 'Moneyview', interest: '14.00% - 36.00% p.a.', fees: 'Up to 2%' },
  { bank: 'HSBC Bank', interest: '10.15% onwards', fees: 'Up to 2%' },
  { bank: 'Mannapuram Finance', interest: '20.00% onwards', fees: '1% of loan amount' },
  { bank: 'HDB Financial Services', interest: '10.00% - 35.00%', fees: 'Up to 5.90%' },
  { bank: 'Muthoot Finance', interest: '14.00% - 22.00%', fees: 'Varies for each application' },
  { bank: 'Shriram Finance', interest: '11.00% - 42.00%', fees: 'Up to 5%' },
  { bank: 'IIFL Finance', interest: '12.75% - 44.00%', fees: '2% - 9%' },
  { bank: 'Cholamandalam IFC', interest: '10.00% - 28.00%', fees: '4% - 6%' },
  { bank: 'Dhani Loans & Services Ltd.', interest: '13.99% onwards', fees: '3% onwards' },
];

const LoanComparisonTable = () => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-blue-250 text-white">
            <th className="py-4 px-6 border-b text-left font-bold">Bank/NBFC</th>
            <th className="py-4 px-6 border-b text-left font-bold">Interest Rates*</th>
            <th className="py-4 px-6 border-b text-left font-bold">Processing Fees</th>
          </tr>
        </thead>
        <tbody>
          {loanData.map((loan, index) => (
            <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
              <td className="py-4 px-6 border-b">{loan.bank}</td>
              <td className="py-4 px-6 border-b">{loan.interest}</td>
              <td className="py-4 px-6 border-b">{loan.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanComparisonTable;
