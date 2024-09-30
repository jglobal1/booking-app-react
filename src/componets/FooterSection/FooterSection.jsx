import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 w-[1150px]">
        <div className="grid grid-cols-2 text-sm md:grid-cols-5 gap-6 pb-1">
          {/* Support Column */}
          <div>
            <h4 className="font-bold mb-3">Support</h4>
            <ul className=''>
              <li><a href="#" className="text-gray-600 hover:underline">Coronavirus (COVID-19) FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Manage your trips</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Contact Customer Service</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Safety Resource Center</a></li>
            </ul>
          </div>

          {/* Discover Column */}
          <div>
            <h4 className="font-bold mb-3">Discover</h4>
            <ul>
              <li><a href="#" className="text-gray-600 hover:underline">Genius loyalty program</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Seasonal and holiday deals</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Travel articles</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Booking.com for Business</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Traveller Review Awards</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Car rental</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Flight finder</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Restaurant reservations</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Booking.com for Travel Agents</a></li>
            </ul>
          </div>

          {/* Terms and Settings Column */}
          <div>
            <h4 className="font-bold mb-3">Terms and settings</h4>
            <ul>
              <li><a href="#" className="text-gray-600 hover:underline">Privacy & cookies</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Partner dispute</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Modern Slavery Statement</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Human Rights Statement</a></li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h4 className="font-bold mb-3">Partners</h4>
            <ul>
              <li><a href="#" className="text-gray-600 hover:underline">Extranet login</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Partner help</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">List your property</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Become an affiliate</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-bold mb-3">About</h4>
            <ul>
              <li><a href="#" className="text-gray-600 hover:underline">About Booking.com</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">How We Work</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Press center</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Investor relations</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Corporate contact</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t pt-6 text-sm text-center">
          <p className="text-[12px] text-gray-600 mb-1  ">Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
          <p className="text-[12px] text-gray-600">Copyright © 1996–2024 Booking.com™. All rights reserved. </p>
          <div className="flex justify-center space-x-6">
            <p className='text-[18px] pt-1 text-blue-700 font-bold'>Booking.com</p>
            <img src="src/componets/FooterSection/Priceline_Logo_RGB_Blue_2019-1.png" alt="Priceline" className="h-8"/>
            <img src="src/componets/FooterSection/589a4cb35aa6293a4aac48cc.png" alt="Kayak" className="h-8"/>
            <img src="src/componets/FooterSection/pngegg.png" alt="Agoda" className="h-8"/>
            <img src="src/componets/FooterSection/pngwing.com.png" alt="OpenTable" className="h-8"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;