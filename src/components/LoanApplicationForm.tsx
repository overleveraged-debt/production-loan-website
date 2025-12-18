"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let fieldName = '';
    if (name === 'cibil-score') {
      fieldName = 'cibilScore';
    } else if (name === 'salary-type') {
      fieldName = 'salaryType';
    }
    if (fieldName) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    }
  };

  return (
    <div className="w-full bg-gray-50 py-4">
      <div className="max-w-[1294px] mx-auto px-8 mt-5">
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
        <div className="text-center my-6">
          <p className="text-lg text-gray-700">
            Not sure which loan to choose? Compare interest rates from top banks.
          </p>
          <Link href="/compare-loans" className="text-blue-600 font-semibold hover:underline">
            Compare Personal Loans
          </Link>
        </div>
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
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Basic Details</h2>
                        <div className="flex flex-col md:flex-row">
                          <div className="mb-4 flex-1 md:mr-12">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.name} onChange={handleChange} />
                          </div>

                          <div className="mb-4 flex-1">
                            <label htmlFor="work-profile" className="block text-sm font-medium text-gray-700 mb-2">Work Profile</label>
                            <select id="workProfile" name="workProfile" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.workProfile} onChange={handleChange}>
                              <option value="">Select Work Profile</option>
                              <option value="salaried">Salaried</option>
                              <option value="self-employed">Self-employed</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                          <div className="mb-4 flex-1 md:mr-12">
                            <label htmlFor="loan-type" className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
                            <select id="loanType" name="loanType" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.loanType} onChange={handleChange}>
                              <option value="">Select Loan Type</option>
                              <option value="personal-loan">Personal Loan</option>
                              <option value="balance-transfer">Balance Transfer</option>
                              <option value="overdraft-loan">Overdraft Personal Loan</option>
                              <option value="home-renovation">Home Renovation Loan</option>
                              <option value="emergency-loan">Emergency Loan</option>
                              <option value="wedding-loan">Wedding Loan</option>
                            </select>
                          </div>

                          <div className="mb-4 flex-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone No.</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" maxLength={10} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter 10-digit number" value={formData.phone} onChange={handleChange} />
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                          <div className="mb-4 flex-1 md:mr-12">
                            <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                            <input type="number" id="loanAmount" name="loanAmount" min="10000" max="5000000" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.loanAmount} onChange={handleChange} />
                          </div>

                          <div className="mb-4 flex-1">
                            <label htmlFor="monthly-income" className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (₹)</label>
                            <input type="number" id="monthlyIncome" name="monthlyIncome" min="10000" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.monthlyIncome} onChange={handleChange} />
                          </div>
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
                        <div className="flex flex-col md:flex-row">
                          <div className="mb-4 flex-1 md:mr-12">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
                            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.email} onChange={handleChange} />
                          </div>

                          <div className="mb-4 flex-1">
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                            <input type="date" id="dob" name="dob" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.dob} onChange={handleChange} />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                          <input type="text" id="company" name="company" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.company} onChange={handleChange} />
                        </div>

                        <div className="flex gap-4">
                          <button type="button" onClick={() => setStep(1)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-400 transition-colors">Back</button>
                          <button type="submit" className="flex-1 bg-blue-600 text-white py-3 text-lg font-semibold rounded-md">Next</button>
                        </div>
                      </form>
                    )}
                    {step === 3 && (
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();

                          setSubmissionStatus('submitting');
                          console.log('1. Submission started. Data:', formData);

                          try {
                            console.log('2. Inside try block, about to fetch using FormData...');
                            const fd = new FormData();
                            fd.append('data', JSON.stringify(formData));

                            const response = await fetch('https://script.google.com/macros/s/AKfycbws3qmY6_HiHjn8bWdd7k2G_erhW65jUGOYhQll49VrNUc9ugIYuoLIEXv1zetARmDW/exec', {
                              method: 'POST',
                              body: fd,
                            });
                            console.log('3. Fetch call completed.');

                            const result = await response.json();
                            console.log('4. Response from script:', result);

                            if (result.status === 'success') {
                              setSubmissionStatus('success');
                              setStep(4);
                            } else {
                              throw new Error(result.message || 'Unknown error from script.');
                            }

                          } catch (error) {
                            console.error('5. CATCH BLOCK TRIGGERED. Error submitting form:', error);
                            setSubmissionStatus('error');
                            alert('There was an error submitting your application. Please check the browser console for details.');
                          }
                        }}
                      >
                        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Financial Details</h2>
                        <div className="flex flex-col md:flex-row">
                          <div className="mb-4 flex-1 md:mr-12">
                            <label htmlFor="cibilScore" className="block text-sm font-medium text-gray-700 mb-2">CIBIL Score</label>
                            <select id="cibilScore" name="cibilScore" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.cibilScore} onChange={handleChange}>
                              <option value="">Select CIBIL Score</option>
                              <option value="below-700">Below 700</option>
                              <option value="above-700">Above 700</option>
                              <option value="dont-know">Don't Know</option>
                            </select>
                          </div>

                          <div className="mb-4 flex-1">
                            <label htmlFor="salaryType" className="block text-sm font-medium text-gray-700 mb-2">Salary Type</label>
                            <select id="salaryType" name="salaryType" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={formData.salaryType} onChange={handleChange}>
                              <option value="">Select Salary Type</option>
                              <option value="cash">Cash</option>
                              <option value="cheque">Cheque</option>
                              <option value="direct-bank">Direct Bank</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button type="button" onClick={() => setStep(2)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-400 transition-colors">Back</button>
                          <button type="submit" className="flex-1 bg-blue-600 text-white py-3 text-lg font-semibold rounded-md" disabled={submissionStatus === 'submitting'}>
                            {submissionStatus === 'submitting' ? 'Submitting...' : 'Next'}
                          </button>
                        </div>
                        {submissionStatus === 'submitting' && <p className="text-center text-blue-600 mt-4">Sending your application...</p>}
                      </form>
                    )}
                    {step === 4 && (
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Thank you for your application!</h2>
                        <p className="text-lg text-gray-600 mb-6">Thank you for your application. We will contact you within 24 working hours.</p>
                        <p className="text-lg text-gray-600 mb-6">
                          While you wait, you can <Link href="/compare-loans" className="text-blue-600 font-semibold hover:underline">compare personal loan interest rates</Link> from top banks.
                        </p>
                        <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-md">Back to Home</Link>
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
