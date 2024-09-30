import React from 'react';

const DiscoverSection = () => {
  return (
    <section className="max-w-7xl w-[1150px] mx-auto py-8 px-4 flex justify-between items-center bg-white rounded-lg shadow-lg">
      {/* Left Section - Text and Button */}
      <div className="w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold text-blue-600">
          Find <span className="text-blue-800">homes</span> for your next trip
        </h1>
        <p className="mt-4 text-lg text-gray-600">Discover homes that suit your style and comfort.</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Discover homes
        </button>
      </div>

      {/* Right Section - Image or Illustration */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src="src/componets/NavBar/373176332.png" // Replace this with the correct image path
          alt="Illustration"
          className="w-[150px] h-auto"
        />

      </div>
    </section>
  );
};

export default DiscoverSection;
