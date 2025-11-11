"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const LoanApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    workProfile: '',
    loanType: '',
    phone: '',
    loanAmount: '',
    monthlyIncome: '',
    email: '',
    dob: '',
    company: '',
    cibilScore: '',
    salaryType: '',
  });
  const [isWorkProfileOpen, setIsWorkProfileOpen] = useState(false);
  const [isLoanCategoryOpen, setIsLoanCategoryOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-[1294px] mx-auto px-4 mt-5">
        <Image
          alt="Apply Banner"
          width="2188"
          height="440"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent', width: '100%', height: 'auto' }}
          sizes="100vw"
          src="/applyImageBanner.png"
        />
        <div className="mt-[2%]">
          <h2 className="text-lg font-semibold text-gray-800 mb-4"></h2>
          <div className="shadow-[0px_10px_60px_0px_rgba(0,0,0,0.1)] bg-white rounded-[13px] p-0 md:p-6 ">
            <div className="w-full p-3">
              <div className="flex justify-center mb-4">
                <ol className="flex items-center w-full text-sm font-medium text-gray-500 sm:text-base">
                  <li className={`flex-1 cursor-pointer text-center ${step >= 1 ? 'text-blue-600' : ''}`}>
                    <div className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
                      1
                    </div>
                    <span>Basic Details</span>
                  </li>
                  <li className={`flex-1 cursor-pointer text-center ${step >= 2 ? 'text-blue-600' : ''}`}>
                    <div className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
                      2
                    </div>
                    <span>Personal Details</span>
                  </li>
                  <li className={`flex-1 cursor-pointer text-center ${step >= 3 ? 'text-blue-600' : ''}`}>
                    <div className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
                      3
                    </div>
                    <span>Financial Details</span>
                  </li>
                  <li className={`flex-1 cursor-pointer text-center ${step >= 4 ? 'text-blue-600' : ''}`}>
                    <div className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
                      4
                    </div>
                    <span>Get Banks</span>
                  </li>
                </ol>
              </div>
              <div className="px-4 py-2">
                <div className="wrapper">
                  <div className="text-gray-700 text-sm sm:text-base">
                    {step === 1 && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // Add validation logic here
                          setStep(2);
                        }}
                      >
                        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Basic Details</h2>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="work-profile" className="block text-sm font-medium text-gray-700 mb-2">Work Profile</label>
                            <select id="work-profile" name="work-profile" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Work Profile</option>
                                <option value="salaried">Salaried</option>
                                <option value="self-employed">Self-employed</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="loan-type" className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
                            <select id="loan-type" name="loan-type" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Loan Type</option>
                                <option value="personal-loan">Personal Loan</option>
                                <option value="balance-transfer">Balance Transfer</option>
                                <option value="overdraft-loan">Overdraft Personal Loan</option>
                                <option value="home-renovation">Home Renovation Loan</option>
                                <option value="emergency-loan">Emergency Loan</option>
                                <option value="wedding-loan">Wedding Loan</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone No.</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" maxLength={10} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter 10-digit number" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                            <input type="number" id="loan-amount" name="loan-amount" min="10000" max="5000000" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="monthly-income" className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (₹)</label>
                            <input type="number" id="monthly-income" name="monthly-income" min="10000" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-md">Next</button>
                      </form>
                    )}
                    {step === 2 && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // Add validation logic here
                          setStep(3);
                        }}
                      >
                        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Personal Details</h2>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
                            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                            <input type="date" id="dob" name="dob" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                            <input type="text" id="company" name="company" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>

                        <div className="flex gap-4">
                            <button type="button" onClick={() => setStep(1)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-400 transition-colors">Back</button>
                            <button type="submit" className="flex-1 bg-blue-600 text-white py-3 text-lg font-semibold rounded-md">Next</button>
                        </div>
                      </form>
                    )}
                    {step === 3 && (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // Add validation logic here
                          setStep(4);
                        }}
                      >
                        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Financial Details</h2>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">CIBIL Score</label>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="radio" name="cibil-score" value="below-650" required className="mr-3" />
                                    <span>Below 650</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="cibil-score" value="above-650" required className="mr-3" />
                                    <span>Above 650</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="cibil-score" value="dont-know" required className="mr-3" />
                                    <span>Don't Know</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Salary Type</label>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="radio" name="salary-type" value="cash" required className="mr-3" />
                                    <span>Cash</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="salary-type" value="cheque" required className="mr-3" />
                                    <span>Cheque</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="salary-type" value="direct-bank" required className="mr-3" />
                                    <span>Direct Bank</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button type="button" onClick={() => setStep(2)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-400 transition-colors">Back</button>
                            <button type="submit" className="flex-1 bg-blue-600 text-white py-3 text-lg font-semibold rounded-md">Next</button>
                        </div>
                      </form>
                    )}
                    {step === 4 && (
                      <div className="text-center">
                        <div className="text-6xl text-green-500 mb-4">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Thank you for your application!</h2>
                        <p className="text-lg text-gray-600 mb-6">Thank you for your application. We will contact you within 24 working hours.</p>
                        <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-md">Back to Home</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
