import React from 'react';
import Image from 'next/image';

const cities = [
  'Delhi', 'Mumbai', 'Bengaluru', 'Kolkata', 'Hyderabad', 'Thane', 'Ludhiana',
  'Faridabad', 'Vasai-Virar', 'Dhanbad', 'Gurugram', 'Kanpur', 'Nagpur',
  'Indore', 'Ghaziabad', 'Nashik', 'Aurangabad', 'Prayagraj', 'Jabalpur',
  'Noida', 'Patna', 'Vadodara', 'Agra', 'Rajkot', 'Srinagar', 'Navi Mumbai',
  'Ranchi', 'Vijayawada', 'Chandigarh', 'Bhopal', 'Meerut', 'Varanasi',
  'Amritsar', 'Howrah', 'Gwalior', 'Coimbatore', 'Madurai', 'Jaipur',
  'Guwahati', 'Chennai', 'Visakhapatnam', 'Surat', 'Pune', 'Jodhpur',
];

const Cities = () => {
  return (
    <div
      style={{ backgroundImage: "url('/citybg.svg')" }}
      className="bg-white py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="w-full md:w-3/5 text-center md:text-left">
        <div className="">
          <h2 className="text-xl sm:text-4xl md:text-5xl text-gray-900">
            Available in 100+ cities
          </h2>
          <p className="hidden md:block text-gray-600 text-xl mt-3">
            We offer loans in all the major cities across India
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 mt-6 text-left">
          {cities.map((city) => (
            <span
              key={city}
              className="text-[10px] sm:text-[10px] md:text-[14px] font-semibold sm:font-bold md:font-semibold"
            >
              • {city}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center hidden md:block">
        <Image
          alt="India-Map"
          loading="lazy"
          width="530"
          height="530"
          decoding="async"
          data-nimg="1"
          className="w-full max-w-md"
          style={{ color: 'transparent' }}
          src="/map.svg"
        />
      </div>
    </div>
  );
};

export default Cities;
