import React from 'react';

const DestinationSection = () => {
  const regions = [
    { name: 'Bihar', properties: '781 properties' },
    { name: 'Hawaii', properties: '5,452 properties' },
    { name: 'Cornwall', properties: '5,459 properties' },
    { name: 'Tenerife', properties: '9,735 properties' },
    { name: 'Zanzibar', properties: '882 properties' },
    { name: 'Phuket Province', properties: '5,547 properties' },
    { name: 'Bali', properties: '13,206 properties' },
    { name: 'Uttar Pradesh', properties: '4,463 properties' },
    { name: 'Ras Al Khaimah', properties: '117 properties' },
    { name: 'Lake District', properties: '2,461 properties' },
    { name: 'Texel', properties: '411 properties' },
    { name: 'England', properties: '80,602 properties' },
    { name: 'Jersey', properties: '90 properties' },
    { name: 'Ibiza', properties: '1,642 properties' },
    { name: 'Mykonos', properties: '1,455 properties' },
    { name: 'Santorini', properties: '1,794 properties' },
    { name: 'Isle of Wight', properties: '961 properties' },
    { name: 'Guernsey', properties: '64 properties' },
    { name: 'Bora Bora', properties: '59 properties' },
  ];

  return (
    <div className="container mx-auto p-4 w-[1150px]">
      <h1 className="text-3xl font-semibold mb-6">Destinations we love</h1>
      <div className="flex text-sm mb-6">
        <button className="px-4 py-2 bg-blue-100 text-blue-500 border border-blue-400 rounded-full mr-2">Regions</button>
        <button className="px-4 py-2   mr-2">Cities</button>
        <button className="px-4 py-2 ">Places of interest</button>
      </div>

      <div className="grid text-sm grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region, index) => (
          <div key={index} className="  p-2  hover:shadow-md transition duration-200">
            <h2 className="text-sm font-semibold">{region.name}</h2>
            <p className="text-sm text-gray-500">{region.properties}</p>
          </div>
        ))}
      </div>

      <p></p>
    </div>
  );
};

export default DestinationSection;
