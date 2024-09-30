import React, { useState } from 'react';
import { FaBed, FaCalendarAlt, FaUser } from 'react-icons/fa'; // Import icons for location, calendar, and guests

const SearchBox = () => {
  const [location, setLocation] = useState('Benin City');
  const [dates, setDates] = useState('Sat, Sep 28 — Sun, Sep 29');
  const [guests, setGuests] = useState('2 adults · 0 children · 1 room');

  return (
    <div className=" w-[1150px] ml-[200px] mt-6 absolute flex bottom-[195px] border-2  border-yellow-400 rounded-md bg-white">
      <div className="flex w-[1150px] border-2  border-yellow-400   rounded-md shadow-md">
        {/* Location Input */}
        <div className="flex items-center  px-4 py-2 border-2  border-yellow-400  w-1/3">
          <FaBed className="text-gray-600 mr-2" />
          <input
            type="text"
            className="outline-none w-full text-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
          <button onClick={() => setLocation('')} className="ml-2 text-gray-400 hover:text-black">✖</button>
        </div>

        {/* Date Input */}
        <div className="flex items-center px-4 py-2 border-2  border-yellow-400 w-1/3">
          <FaCalendarAlt className="text-gray-600 mr-2" />
          <input
            type="text"
            className="outline-none w-full text-gray-600"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="Select dates"
          />
        </div>

        {/* Guests Input */}
        <div className="flex items-center border-2  border-yellow-400 px-4 py-2 w-1/3">
          <FaUser className="text-gray-600 mr-2" />
          <input
            type="text"
            className="outline-none w-full text-gray-600"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="Select guests"
          />
        </div>

        {/* Search Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
