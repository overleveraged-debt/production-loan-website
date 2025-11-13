"use client";
import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <div>
      {/* Page Content */}
      <div className="max-w-[1294px] mx-auto px-4 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          About <span className="text-blue-550">Easy Personal Loan Services</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">Fast and secure personal loans at low interest rates - Making loans simple, transparent, and accessible to everyone.</p>

        {/* Who We Are Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Who We Are</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Easy Personal Loan Services was established in 2004 and specializes exclusively in personal loans, providing exceptional doorstep service. We believe that customer service is at the pinnacle of everything we do, ensuring that every client receives personalized attention and support throughout their loan journey.
                        </p>
                        <p>
                            Our commitment to excellence and customer satisfaction has made us a trusted name in the financial services industry. We strive to make the loan application process as seamless and convenient as possible, offering tailored solutions that meet our clients' unique financial needs.
                        </p>
                        <p>
                            With years of experience and a dedication to transparency, we continue to serve our community with integrity and professionalism, helping individuals achieve their financial goals through accessible and affordable personal loan options.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Founder</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/3 text-center">
                            <div className="relative">
                                <Image src="/Mr. Raju Founder.png" alt="Mr. H. Raju - Founder" width={192} height={192} className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-2xl" />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-blue-550 mb-4">Mr. H. Raju</h3>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Mr. H. Raju has been in banking for more than 20 years and has worked in multiple companies before starting his own firm. With extensive experience in the financial sector, he brings deep industry knowledge and a passion for helping individuals achieve their financial goals.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Under his leadership, Easy Personal Loan Services has grown to become a trusted name in the personal loan industry, focusing on transparency, customer service excellence, and innovative solutions for our clients' financial needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Gallery</h2>
                <div className="flex justify-center gap-4">
                    <div className="text-center">
                        <Image src="/Mr. Raju Founder.png" alt="Mr. H. Raju - Founder" width={200} height={200} className="w-48 h-48 object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="text-center">
                        <Image src="/Mr. Raju's Team.jpg" alt="Mr. Raju's Team" width={200} height={200} className="w-48 h-48 object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="text-blue-550 text-4xl mb-4">
                            <Image src="/tick-circle.svg" alt="Transparent Lending" width={40} height={40} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Transparent Lending</h3>
                        <p className="text-gray-700">To eliminate confusion and uncertainty from the loan application process by providing clear, honest information every step of the way.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="text-blue-550 text-4xl mb-4">
                            <Image src="/WhoCanApply.png" alt="Accessible Finance" width={40} height={40} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Accessible Finance</h3>
                        <p className="text-gray-700">To make financial services available to everyone, regardless of their location, income level, or credit history, within legal and regulatory frameworks.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                        <div className="text-blue-550 text-4xl mb-4">
                            <Image src="/coin.svg" alt="Best Interest Rate" width={40} height={40} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Best Interest Rate</h3>
                        <p className="text-gray-700">To ensure every customer gets access to the most competitive loan terms by comparing offers from 40+ trusted financial institutions.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-100 mb-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-gray-600 mb-8">Join millions of satisfied customers who have secured their financial future with Easy Personal Loan Services.</p>
                <a href="/contact-us" className="bg-blue-550 text-white font-bold px-10 py-3 rounded-lg shadow-lg hover:shadow-xl text-lg">
                    Contact Us Today
                </a>
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
