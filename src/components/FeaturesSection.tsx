import React from 'react';

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Loan Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Quick Approval"
            description="Get your loan approved in record time with our streamlined process."
            icon="⚡"
          />
          <FeatureCard
            title="Low Interest Rates"
            description="Benefit from competitive interest rates designed to save you money."
            icon="💰"
          />
          <FeatureCard
            title="Flexible Repayment"
            description="Choose a repayment plan that fits your financial situation."
            icon="🗓️"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
