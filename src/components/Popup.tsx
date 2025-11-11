"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem('popupShown');
    if (!hasBeenShown) {
      setIsOpen(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}>
      <div className="relative bg-white p-8 rounded-lg shadow-lg text-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Save upto 50% on EMI</h2>
        <p className="mb-6">Club multiple loans and Credit card bill Into single EMI</p>
        <Link href="/apply-loan">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Apply Now
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Popup;
