import React from "react";
import { FaBed, FaPlane, FaCar, FaMapMarkerAlt, FaTaxi } from 'react-icons/fa'; // Import icons from react-icons
import Genius from "/src/componets/NavBar/373176332.png"
import SearchBox from "../SearchBox/SearchBox";

const Nav = () => {
    return (
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto w-[1150px] flex justify-between items-center py-4 px-6">
          <div className="text-[25px] font-bold">
            Booking.com
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 font-sans">
              <span className="font-bold">NGN</span>
              <img src="src/assets/USA Flag Circle.png" alt="USA" className="w-9 h-5" />
            </div>
            <button className="text-lg">?</button>
            <a href="#" className="hover:underline">List your property</a>
            <button className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">Register</button>
            <button className="bg-white text-blue-900 px-3 py-1 rounded hover:bg-gray-200">Sign in</button>
          </div>
        </div>
                {/* stays, flights, car rentals section */}

            <div className="flex max-w-7xl  mx-auto w-[1150px] space-x-7">
                 <a href="#" className="flex items-center gap-2 rounded-full p-3 border border-white bg-blue-800">
                <FaBed/> Stays
                </a>
        
                <a href="#" className="flex items-center gap-2 rounded-full p-3">
                    <FaPlane className="mr-2" /> Flights
                </a>
                
                <a href="#" className="flex items-center gap-2 rounded-full p-3">
                    <FaCar className="mr-2" /> Car rentals
                </a>
                <a href="#" className="flex items-center gap-2 rounded-full p-3">
                    <FaMapMarkerAlt className="mr-2" /> Attractions
                </a>
                <a href="#" className="flex items-center gap-2 rounded-full p-3">
                    <FaTaxi className="mr-2" /> Airport taxis
                </a>
            </div>

            {/* sign in, save money section */}
            
                <div className="bg-blue-900 text-white grid grid-cols-2 pt-10 gap-10 w-[1150px] h-[400px] mx-auto">
                    <div 
                     data-aos="zoom-out"
                     data-aos-duration="500"
                     data-aos-once="true"
                    
                    
                    className="max-w-7xl mx-auto  py-12 px-6">
                        <h1 className="text-4xl font-bold mb-4">Sign in, save money</h1>
                        <p className="text-lg mb-6">
                        Save 10% or more at participating properties – just <br /> look for the blue Genius label.
                        </p>
                        <button className="bg-blue-600 px-6 py-3 rounded-2xl text-lg font-medium hover:bg-blue-500">
                        Sign in or register
                        </button>
                    </div>
                    <
                      
                      img src={Genius} alt="Genius" />
                 </div>

                 <SearchBox />
        </div>
      
    );
  };

  export default Nav