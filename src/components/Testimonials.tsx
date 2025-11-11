import React from 'react';
import Star from './Star';

const testimonials = [
  {
    name: 'Salman',
    loanType: 'Personal Loan',
    date: '05/20/24',
    text: 'My experience is amazing. The way Easy Personal Loan Services rep Mr. Nasrullah processed my case is fantastic. It was very comfortable to interact with him and he fulfilled all requirements related to Loan amount, tenure, rate of interest, foreclosure charges and processing fee. Easy Personal Loan Services is highly recommended by me. Thanks for wonderful service.',
    initial: 'S',
  },
  {
    name: 'Naresh V',
    loanType: 'Debt Consolidation',
    date: '01/02/25',
    text: "I had a fantastic experience with Easy Personal Loan Services while seeking a debt consolidation loan. Team was incredibly helpful throughout the entire process. They guided step-by-step, from handling the documentation to connecting me with the right loan provider. Their timely responses and regular updates made everything feel smooth and seamless. Even with a few existing obligations, I was surprised by how quickly I was able to get approved for the loan. I'm truly grateful for their support and professionalism. Highly recommend their services!",
    initial: 'N',
  },
  {
    name: 'Sunil',
    loanType: 'Debt Consolidation',
    date: '01/16/25',
    text: 'Seamless Loan Consolidation and Excellent Support".\n\nI had an excellent experience with Easy Personal Loan Services. Team was incredibly helpful in explaining everything clearly, from gathering details of all my outstanding personal loans and credit cards to ensuring the calculations were accurate. With Easy Personal Loan Services, they consolidated all my loans and multiple credit cards into a single EMI, making my finances stress-free and much easier to manage. Now I just need to Pay SIngle EMI as against 8 EMIs earlier with no credit card dues anymore.',
    initial: 'S',
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-6">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 mt-10 sm:mt-16 md:mt-20">
        What our <span className="text-blue-600">customers</span> say about us
      </h2>
      <div className="overflow-hidden w-full relative">
        <div className="flex space-x-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px]  sm:w-[400px] sm:h-[300px]  md:h-[300px] bg-white border border-gray-200 rounded-3xl p-6 shadow-sm snap-center"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-blue-600 text-sm font-semibold">
                    {testimonial.loanType}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
                <span className="text-gray-400 text-sm ml-2 ">
                  {testimonial.date}
                </span>
              </div>
              <p className="text-[#292a2d] text-sm mt-4 font-medium leading-relaxed line-clamp-6">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
