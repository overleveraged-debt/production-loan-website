"use client";
import React, { useState, useEffect, useMemo } from 'react';
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
  const [loanAmount, setLoanAmount] = useState<number | null>(null);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [loanTenure, setLoanTenure] = useState<number | null>(null);


  const [showAmortization, setShowAmortization] = useState(false);

  const monthlyEmi = useMemo(() => {
    if (!loanAmount || !interestRate || !loanTenure || loanAmount <= 0 || interestRate < 0 || loanTenure <= 0) {
      return 0;
    }

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
  }, [loanAmount, interestRate, loanTenure]);

  const totalAmount = useMemo(() => monthlyEmi * (loanTenure || 0) * 12, [monthlyEmi, loanTenure]);
  const totalInterest = useMemo(() => totalAmount - (loanAmount || 0), [totalAmount, loanAmount]);

  useEffect(() => {
    document.title = 'EMI Calculator for Personal Loans | Easy Personal Loan Services';
  }, []);

  const amortizationSchedule = useMemo(() => {
    if (!loanAmount || !interestRate || !loanTenure || loanAmount <= 0 || interestRate < 0 || loanTenure <= 0) {
      return [];
    }

    const principal = loanAmount;
    const annualInterestRate = interestRate;
    const tenureInYears = loanTenure;
    const schedule: AmortizationItem[] = [];
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = tenureInYears * 12;
    let remainingBalance = principal;

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = remainingBalance * monthlyInterestRate;
      const principalPayment = monthlyEmi - interestPayment;

      remainingBalance -= principalPayment;

      if (remainingBalance < 0) {
        remainingBalance = 0;
      }

      schedule.push({
        month: month,
        principalPaid: principalPayment,
        interestPaid: interestPayment,
        totalPayment: monthlyEmi,
        remainingBalance: remainingBalance,
      });
    }
    return schedule;
  }, [loanAmount, interestRate, loanTenure, monthlyEmi]);



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
    doc.text(`Loan Amount: Rs. ${new Intl.NumberFormat('en-IN').format(loanAmount || 0)}`, 20, 75);
    doc.text(`Interest Rate: ${interestRate || 0}% p.a.`, 20, 85);
    doc.text(`Loan Tenure: ${loanTenure || 0} years (${(loanTenure || 0) * 12} months)`, 20, 95);

    // Add payment summary
    autoTable(doc, {
      startY: 115,
      head: [['Payment Summary', 'Amount']],
      body: [
        ['Monthly EMI', `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(monthlyEmi))}`],
        ['Principal Amount', `Rs. ${new Intl.NumberFormat('en-IN').format(loanAmount || 0)}`],
        ['Total Interest', `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(totalInterest))}`],
        ['Total Amount Payable', `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(totalAmount))}`]
      ],
      theme: 'grid',
      headStyles: { fillColor: [37, 99, 235], textColor: [255, 255, 255], fontStyle: 'bold' },
      styles: { cellPadding: 3, fontSize: 10 },
    });

    // Add amortization schedule
    autoTable(doc, {
      startY: (doc as any).lastAutoTable.finalY + 15,
      head: [['Month', 'Principal Paid', 'Interest Paid', 'Total Payment', 'Remaining Balance']],
      body: amortizationSchedule.map(payment => [
        payment.month,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.principalPaid))}`,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.interestPaid))}`,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.totalPayment))}`,
        `Rs. ${new Intl.NumberFormat('en-IN').format(Math.round(payment.remainingBalance))}`
      ]),
      theme: 'grid',
      headStyles: { fillColor: [37, 99, 235], textColor: [255, 255, 255], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [249, 250, 251] },
      styles: { cellPadding: 3, fontSize: 10 },
      margin: { bottom: 40 },
    });

    // Add footer
    const pageCount = (doc as jsPDF & { internal: { getNumberOfPages: () => number } }).internal.getNumberOfPages();
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
                value={loanAmount === null ? '' : loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value) || null)}
                placeholder="e.g., 500000"
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
                value={interestRate === null ? '' : interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value) || null)}
                placeholder="e.g., 9.99"
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
                value={loanTenure === null ? '' : loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value) || null)}
                placeholder="e.g., 5"
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
                  ₹{new Intl.NumberFormat('en-IN').format(loanAmount || 0)}
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
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-blue-250 text-white">
                    <th className="py-4 px-6 border-b text-left font-bold">Month No.</th>
                    <th className="py-4 px-6 border-b text-left font-bold">Principal Paid</th>
                    <th className="py-4 px-6 border-b text-left font-bold">Interest Paid</th>
                    <th className="py-4 px-6 border-b text-left font-bold hidden md:table-cell">Total Payment</th>
                    <th className="py-4 px-6 border-b text-left font-bold">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {amortizationSchedule.map((payment) => (
                    <tr key={payment.month} className="even:bg-gray-50 hover:bg-gray-100">
                      <td className="py-4 px-6 border-b text-xs md:text-sm">{payment.month}</td>
                      <td className="py-4 px-6 border-b text-xs md:text-sm">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.principalPaid))}
                      </td>
                      <td className="py-4 px-6 border-b text-xs md:text-sm">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.interestPaid))}
                      </td>
                      <td className="py-4 px-6 border-b hidden md:table-cell text-xs md:text-sm">
                        ₹{new Intl.NumberFormat('en-IN').format(Math.round(payment.totalPayment))}
                      </td>
                      <td className="py-4 px-6 border-b text-xs md:text-sm">
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