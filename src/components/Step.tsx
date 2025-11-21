import React from 'react';
import StepIcon from './StepIcon';

interface StepProps {
  stepNumber: string;
  title: string;
  description: string;
  color: string;
}

const Step: React.FC<StepProps> = ({ stepNumber, title, description, color }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-96 flex-none">
      <div className={`w-24 h-24 flex items-center justify-center mb-4`}>
        <StepIcon stepNumber={stepNumber} color={color} />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color }}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Step;
