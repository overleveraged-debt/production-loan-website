"use client";
import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface AmortizationItem {
  month: number;
  principalPaid: number;
  interestPaid: number;
  totalPayment: number;
  remainingBalance: number;
}

const EmiCalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(9.99);
  const [loanTenure, setLoanTenure] = useState(1);
  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationItem[]>([]);
  const [showAmortization, setShowAmortization] = useState(false);

  const calculateEmi = () => {
    const principal = loanAmount;
    const annualInterestRate = interestRate;
    const tenureInYears = loanTenure;

    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = tenureInYears * 12;

    if (monthlyInterestRate === 0) {
      return principal / numberOfPayments;
    }

    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return emi;
  };

  const generateAmortization = () => {
    const principal = loanAmount;
    const annualInterestRate = interestRate;
    const tenureInYears = loanTenure;
    const schedule = [];
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = tenureInYears * 12;
    let remainingBalance = principal;

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = remainingBalance * monthlyInterestRate;
      const emi = calculateEmi();
      const principalPayment = emi - interestPayment;

      remainingBalance -= principalPayment;

      if (remainingBalance < 0) {
        remainingBalance = 0;
      }

      schedule.push({
        month: month,
        principalPaid: principalPayment,
        interestPaid: interestPayment,
        totalPayment: emi,
        remainingBalance: remainingBalance,
      });
    }
    setAmortizationSchedule(schedule);
  };

  useEffect(() => {
    const emi = calculateEmi();
    setMonthlyEmi(emi);
    const totalAmount = emi * loanTenure * 12;
    setTotalAmount(totalAmount);
    setTotalInterest(totalAmount - loanAmount);
    generateAmortization();
  }, [loanAmount, interestRate, loanTenure]);



  const downloadPdf = () => {
    const doc = new jsPDF();

    // Set font to support special characters
    doc.setFont('helvetica', 'normal');

    // Add title
    doc.setFontSize(20);
    doc.text('EMI Calculator Report', 20, 30);
    doc.text('Easy Personal Loan Services', 20, 40);

    // Add calculation timestamp
    const now = new Date();
    doc.setFontSize(10);
    doc.text(`Generated on: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`, 20, 50);

    // Add loan details
    doc.setFontSize(12);
    doc.text('Loan Details:', 20, 65);
    doc.text(`Loan Amount: Rs. ${new Intl.NumberFormat('en-IN').format(loanAmount)}`, 20, 75);
    doc.text(`Interest Rate: ${interestRate}% p.a.`, 20, 85);
    doc.text(`Loan Tenure: ${loanTenure} years (${loanTenure * 12} months)`, 20, 95);

    // Add payment summary
    autoTable(doc, {
      startY: 115,
      head: [['Payment Summary', 'Amount']],
      body: [
        ['Monthly EMI', `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(monthlyEmi))}`],
        ['Principal Amount', `Rs. ${new Intl.NumberFormat('en-IN').format(loanAmount)}`],
        ['Total Interest', `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(totalInterest))}`],
        ['Total Amount Payable', `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(totalAmount))}`]
      ],
      theme: 'grid',
      headStyles: { fillColor: [0, 82, 212] },
    });

    // Add amortization schedule
    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 15,
      head: [['Month #', 'Principal Paid', 'Interest Paid', 'Total Payment', 'Remaining Balance']],
      body: amortizationSchedule.map(payment => [
        payment.month,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.principalPaid))}`,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.interestPaid))}`,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.totalPayment))}`,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.remainingBalance))}`
      ]),
      theme: 'grid',
      headStyles: { fillColor: [0, 82, 212] },
      margin: { bottom: 40 },
    });

    // Add footer
    const pageCount = (doc as any).internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      const pageHeight = doc.internal.pageSize.height;
      doc.setFontSize(8);
      doc.text('Easy Personal Loan Services - EMI Calculator Report', 20, pageHeight - 20);
      doc.text('www.easypersonalloanservices.com', 20, pageHeight - 15);
    }

    doc.save('easy-personalloan-emi-report.pdf');
  };

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-[1294px] mx-auto px-4 mt-5">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">EMI Calculator</h1>
          <p className="text-lg text-gray-600">Calculate your monthly loan EMI with our easy-to-use calculator</p>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
            {/* Loan Amount */}
            <div className="mb-6">
              <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                id="loan-amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Interest Rate */}
            <div className="mb-6">
              <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (p.a.)
              </label>
              <input
                type="number"
                id="interest-rate"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Loan Tenure */}
            <div className="mb-6">
              <label htmlFor="loan-tenure" className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure (Years)
              </label>
              <input
                type="number"
                id="loan-tenure"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Payment Details</h2>
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="text-sm text-gray-600 mb-1">Monthly EMI</div>
              <div className="text-2xl font-bold text-blue-600">
                ₹{new Intl.NumberFormat('en-IN').format(Math.round(monthlyEmi))}
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Principal Amount:</span>
                <span className="font-medium">
                  ₹{new Intl.NumberFormat('en-IN').format(loanAmount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Interest:</span>
                <span className="font-medium">
                  ₹{new Intl.NumberFormat('en-IN').format(Math.round(totalInterest))}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">
                  ₹{new Intl.NumberFormat('en-IN').format(Math.round(totalAmount))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAmortization(!showAmortization)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {showAmortization ? 'Hide Detailed Plan' : 'Show Detailed Plan'}
          </button>
          <button
            onClick={downloadPdf}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors ml-4"
          >
            Download as PDF
          </button>
        </div>
        {showAmortization && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Amortization Schedule</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm table-fixed">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 font-medium text-gray-700">Month No.</th>
                    <th className="py-2 px-4 font-medium text-gray-700 text-left">Principal Paid</th>
                    <th className="py-2 px-4 font-medium text-gray-700 text-left">Interest Paid</th>
                    <th className="py-2 px-4 font-medium text-gray-700 text-left">Total Payment</th>
                    <th className="py-2 px-4 font-medium text-gray-700 text-left">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {amortizationSchedule.map((payment) => (
                    <tr key={payment.month} className="border-b border-gray-100">
                      <td className="py-2 px-4 text-left">{payment.month}</td>
                      <td className="py-2 px-4 text-left">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.principalPaid))}
                      </td>
                      <td className="py-2 px-4 text-left">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.interestPaid))}
                      </td>
                      <td className="py-2 px-4 text-left">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.totalPayment))}
                      </td>
                      <td className="py-2 px-4 text-left">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.remainingBalance))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculatorPage;
