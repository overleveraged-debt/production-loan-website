import React from 'react';
import Image from 'next/image';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-4">
      <a href="https://wa.me/918722545666" target="_blank" rel="noopener noreferrer">
        <Image src="/whatsapp.svg" alt="WhatsApp" width={56} height={56} />
      </a>
      <a href="tel:+918722545666">
        <Image src="/call.svg" alt="Call" width={56} height={56} />
      </a>
    </div>
  );
};

export default FloatingButtons;
