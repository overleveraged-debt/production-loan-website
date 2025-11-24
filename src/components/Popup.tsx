"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem('popupShown');
    if (!hasBeenShown) {
      setIsOpen(true);
      sessionStorage.setItem('popupShown', 'true');
    }

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 9999 }}>
      <div style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        padding: isMobile ? '20px' : '40px',
        borderRadius: '16px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        width: '90%',
        maxWidth: isMobile ? '350px' : '500px',
        border: isMobile ? '3px solid #2563eb' : '4px solid #2563eb'
      }}>

        {/* Close button */}
        <button
          style={{
            position: 'absolute',
            top: isMobile ? '8px' : '12px',
            right: isMobile ? '8px' : '12px',
            backgroundColor: '#f3f4f6',
            borderRadius: '50%',
            padding: isMobile ? '6px' : '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Money/Savings Icon */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '16px' : '24px' }}>
          <div style={{
            background: 'linear-gradient(to bottom right, #4ade80, #16a34a)',
            padding: isMobile ? '12px' : '20px',
            borderRadius: '50%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
          }}>
            <svg style={{ width: isMobile ? '40px' : '64px', height: isMobile ? '40px' : '64px', color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(to right, #facc15, #f97316)',
          color: '#ffffff',
          fontSize: isMobile ? '11px' : '14px',
          fontWeight: 'bold',
          padding: isMobile ? '6px 12px' : '8px 16px',
          borderRadius: '9999px',
          marginBottom: isMobile ? '12px' : '20px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
        }}>
          ⭐ SPECIAL OFFER
        </div>

        <h2 style={{
          fontSize: isMobile ? '22px' : '36px',
          fontWeight: '800',
          marginBottom: isMobile ? '12px' : '20px',
          color: '#1d4ed8',
          lineHeight: '1.2'
        }}>
          Save upto 50% on EMI
        </h2>

        <p style={{
          marginBottom: isMobile ? '20px' : '32px',
          color: '#374151',
          fontSize: isMobile ? '14px' : '20px',
          fontWeight: '500',
          lineHeight: '1.5'
        }}>
          Club multiple loans and Credit card bill Into single EMI
        </p>

        {/* Features with icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '8px' : '16px', marginBottom: isMobile ? '20px' : '32px', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '4px' : '8px',
            backgroundColor: '#dcfce7',
            padding: isMobile ? '6px 10px' : '10px 16px',
            borderRadius: '8px',
            border: '1px solid #86efac'
          }}>
            <svg style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px', color: '#15803d' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: isMobile ? '12px' : '15px' }}>Quick Approval</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '4px' : '8px',
            backgroundColor: '#dbeafe',
            padding: isMobile ? '6px 10px' : '10px 16px',
            borderRadius: '8px',
            border: '1px solid #93c5fd'
          }}>
            <svg style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px', color: '#1d4ed8' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span style={{ fontWeight: 'bold', color: '#1f2937', fontSize: isMobile ? '12px' : '15px' }}>Low Interest</span>
          </div>
        </div>

        <Link href="/apply-loan">
          <button style={{
            background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
            color: '#ffffff',
            padding: isMobile ? '12px 32px' : '16px 48px',
            borderRadius: '9999px',
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
            }}>
            Apply Now →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popup;
