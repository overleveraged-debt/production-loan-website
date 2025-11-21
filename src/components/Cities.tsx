import React from 'react';
import Image from 'next/image';

const placesInBangalore = [
  'Aavalahalli', 'Akshayanagar', 'Annapurneshwari Nagar', 'Arasinakunte',
  'Ashok Nagar', 'Bagalakunte', 'Bannerghatta Road', 'Basapura',
  'Bellandur', 'BTM Layout', 'Chikka Tirupathi', 'Doddenakundi',
  'Electronic City Phase I', 'Hennur Road', 'Horamavu', 'Hoskote',
  'Hosur', 'HSR Layout', 'Indira Nagar', 'Jayanagar', 'JP Nagar',
  'Kanakapura', 'Kanakapura Road', 'Koramangala', 'K R Puram',
  'Magadi', 'Mahadevapura', 'Marathahalli', 'Nagarbhavi', 'Narayanapura',
  'Nelamangala', 'Padmanabha Nagar', 'R.K. Hegde Nagar', 'Ramanagara',
  'Ramamurthy Nagar', 'Sadduguntepalya', 'Sarjapur', 'Sarjapur Main Road',
  'Sarjapur Road', 'Seshadripuram', 'South Bangalore', 'Thanisandra Main Road',
  'Whitefield', 'Yelahanka', 'Yelahanka New Town', 'Yeshwanthpur',
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
            Available in all over Bangalore
          </h2>
          <p className="hidden md:block text-gray-600 text-xl mt-3">
            We offer loans in all the major localities across Bangalore
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 mt-6 text-left">
          {placesInBangalore.map((place) => (
            <span
              key={place}
              className="text-[10px] sm:text-[10px] md:text-[14px] font-semibold sm:font-bold md:font-semibold"
            >
              • {place}
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
