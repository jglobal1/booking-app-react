// App.jsx

import React from 'react';

// Reusable button component for selecting vibes (City, Romance, etc.)
const VibeButton = ({ label, icon, selected }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium ${
        selected
          ? 'bg-blue-100 text-blue-500 border-blue-500'
          : 'text-gray-500 border-gray-300'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

// Reusable card component for each destination
const DestinationCard = ({ imageSrc, cityName, distance }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-32 object-cover"
        src={imageSrc}
        alt={cityName}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[16px] mb-2">{cityName}</div>
        <p className="text-gray-500 text-sm">{distance} from Benin City</p>
      </div>
    </div>
  );
};

const QuickSection = () => {
  // Array for the destination cards
  const destinations = [
    { cityName: 'Lagos', imageSrc: 'src/componets/ExploreSection/pexels-pixabay-277572.jpg', distance: '251 km' },
    { cityName: 'Ikeja', imageSrc: 'src/componets/ExploreSection/pexels-stuffedbox-ng-513424808-16237807.jpg', distance: '255 km' }
  ];

  return (
    <div className="text-left my-8 w-[1150px] mx-auto">
      {/* Header Section */}
      <h1 className="text-2xl ml-[15px] font-bold">Quick and easy trip planner</h1>
      <p className="text-[16px] ml-[15px]">Pick a vibe and explore the top destinations in Nigeria</p>

      {/* Vibe Buttons */}
      <div className="flex  gap-4 mt-4">
        <VibeButton
          label="City"
          icon={<i className="fas fa-city"></i>} // Use an icon library or replace with SVGs
          selected={true} // Example for selected button
        />
        
      </div>

      {/* Destination Cards */}
      <div className="flex flex-wrap mt-6">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            cityName={destination.cityName}
            imageSrc={destination.imageSrc}
            distance={destination.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickSection;
